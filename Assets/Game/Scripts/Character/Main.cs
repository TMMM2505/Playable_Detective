using Spine;
using System.Collections;
using UnityEngine;

public class Main : CharacterSpine
{
    [SerializeField] AudioClip mainScared;
    [SerializeField] AudioClip helpMe;
    [SerializeField] AudioClip getHitSfx;
    [SerializeField] AudioClip enemyAttackHit;
    [SerializeField] AudioClip mainWin;
    [SerializeField] CheckVisionComponent checkVision;

    private bool isRight;

    private void Start()
    {
        StartCoroutine(RandomHelpIntervalLoop());
    }
    private void Update()
    {
        if (GameManager.Instance.gameOver || state != ECharacterState.Invincible) return;

        if (anim.transform.localScale.x < 0)
        {
            isRight = false;
            CheckForEnemy(checkVision.CheckVisionLeft());
        }
        else
        {
            isRight = true;
            CheckForEnemy(checkVision.CheckVisionRight());
        }
    }
    private void CheckForEnemy(IObjectChecker objectChecker)
    {
        if (state == ECharacterState.Attack || state == ECharacterState.Dead ||
            objectChecker?.CheckedGameObject.layer != Constant.enemyLayer) return;

        var targetRelativePos = objectChecker.Position.x - transform.position.x;

        var distance = Mathf.Abs(targetRelativePos);
        if (distance <= 1f)
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
    }
    private void MainPunchedLose()
    {
        state = ECharacterState.Dead;
        StopAllCoroutines();

        SoundManager.Instance.PlaySoundFXClip(getHitSfx, 1, false);
        SetAnim(Constant.mainFall2, false);

        GameManager.Instance.onLose?.Invoke();
    }
    private void MainPoisonedLose()
    {
        state = ECharacterState.Dead;
        StopAllCoroutines();

        SoundManager.Instance.PlaySoundFXClip(getHitSfx, 1, false);
        SetAnim(Constant.mainPoison2, false);

        GameManager.Instance.onLose?.Invoke();
    }
    private void MainWin()
    {
        StopAllCoroutines();    

        //SoundManager.Ins.PlaySoundFXClip(mainWin, transform, 1, false);
        SetAnim(Constant.mainWin3, true);
    }
    private void SupermainTransform()
    {
        state = ECharacterState.Invincible;
        ChangeSkin(Constant.supermainSkin);
        SetAnim(Constant.supermainIdle, true);

        gameObject.layer = Constant.invincibleLayer;
        checkVision.gameObject.SetActive(true);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (state == ECharacterState.Attack || state == ECharacterState.Invincible) return;

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
