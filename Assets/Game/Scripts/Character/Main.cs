using Spine;
using System.Collections;
using UnityEngine;

public class Main : CharacterSpine
{
    [Header("Main Audio")]
    [SerializeField] AudioClip mainScared;
    [SerializeField] AudioClip helpMe;
    [SerializeField] AudioClip getHitSfx;
    [SerializeField] AudioClip enemyAttackHit;
    [SerializeField] AudioClip mainWin;
    [SerializeField] AudioClip supermainTransform;
    [SerializeField] AudioClip supermainBgTheme;

    [Header("Main Components")]
    [SerializeField] CheckVisionComponent checkVision;
    [SerializeField] BoxCollider2D handPunch;
    [SerializeField] GameObject transformFx;

    private void Start()
    {
        handPunch.enabled = false;
        StartCoroutine(RandomHelpIntervalLoop());

        GameManager.Instance.onWin += MainWin;
    }
    private void Update()
    {
        if (GameManager.Instance.gameOver || state != ECharacterState.Invincible) return;

        if (anim.transform.localScale.x < 0)
        {
            //isRight = false;
            CheckForEnemy(checkVision.CheckVisionLeft());
        }
        else
        {
            //isRight = true;
            CheckForEnemy(checkVision.CheckVisionRight());
        }
    }
    private void CheckForEnemy(IObjectChecker objectChecker)
    {
        if (state == ECharacterState.Attack || state == ECharacterState.Dead ||
            objectChecker?.CheckedGameObject.layer != Constant.enemyLayer) return;

        var targetRelativePos = objectChecker.Position.x - transform.position.x;

        var distance = Mathf.Abs(targetRelativePos);
        if (distance <= 1f * transform.parent.localScale.x)
        {
            state = ECharacterState.Attack;
            SupermainAttack(objectChecker);
        }
    }
    private void SupermainAttack(IObjectChecker objectChecker)
    {
        SetAnim(Constant.supermainAttack, false, (TrackEntry trackEntry) => state = ECharacterState.Invincible);
    }

    private IEnumerator RandomHelpIntervalLoop()
    {
        SoundManager.Instance.PlaySoundFXClip(helpMe, 1, false); //initial sound

        while (state != ECharacterState.Invincible && !GameManager.Instance.gameOver)
        {
            yield return new WaitForSeconds(6f);

            SoundManager.Instance.PlaySoundFXClip(helpMe, 1, false);
        }
        StopCoroutine(RandomHelpIntervalLoop());
    }
    private void MainPunchedLose()
    {
        state = ECharacterState.Dead;
        StopAllCoroutines();

        SoundManager.Instance.PlaySoundFXClip(getHitSfx, 1, false);

        GameManager.Instance.gameOver = true;
        SetAnim(Constant.mainFall2, false, (TrackEntry trackEntry) => GameManager.Instance.onLose?.Invoke());
    }
    private void MainPoisonedLose()
    {
        state = ECharacterState.Dead;
        StopAllCoroutines();

        SoundManager.Instance.PlaySoundFXClip(getHitSfx, 1, false);

        GameManager.Instance.gameOver = true;
        SetAnim(Constant.mainPoison2, false, (TrackEntry trackEntry) => GameManager.Instance.onLose?.Invoke());
    }
    private void MainWin()
    {
        SetAnim(Constant.supermainWin, true);
    }
    private void SupermainTransform()
    {
        transformFx.SetActive(true);

        SoundManager.Instance.PlaySoundFXClip(supermainTransform, 1, true);
        SoundManager.Instance.PlaySoundFXClip(supermainBgTheme, 1, false);

        state = ECharacterState.Invincible;
        StartCoroutine(SupermainSkinActivate(1.5f));

        gameObject.layer = Constant.invincibleLayer;
        handPunch.enabled = true;
        checkVision.gameObject.SetActive(true);

        IEnumerator SupermainSkinActivate(float waitTime)
        {
            yield return new WaitForSeconds(waitTime);

            ChangeSkin(Constant.supermainSkin);
            SetAnim(Constant.supermainIdle, true);
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (state == ECharacterState.Attack || state == ECharacterState.Invincible | state == ECharacterState.Dead) return;

        switch(collision.gameObject.layer)
        {
            case Constant.enemyLayer:
                SoundManager.Instance.PlaySoundFXClip(enemyAttackHit, 1, false);
                MainPunchedLose();
                break;
            case Constant.powerUpLayer:
                collision.transform.parent.gameObject.SetActive(false);
                SupermainTransform();
                break;
            case Constant.acidBulletLayer:
                AcidBullet bullet = collision.GetComponentInParent<AcidBullet>();
                bullet.ActivateExplosionVfx();
                MainPoisonedLose();
                break;
        }
    }
}
