using DG.Tweening;
using Spine;
using System.Collections;
using UnityEngine;

public class Bodyguard : CharacterSpine
{
    [Header("Bodyguard Audio")]
    [SerializeField] private AudioClip gruntSfx;
    [SerializeField] private AudioClip gruntV2Sfx;
    [SerializeField] private AudioClip v2AttackSfx;
    [SerializeField] AudioClip mainPunchSfx;

    [Header("Bodyguard Components")]
    [SerializeField] CheckVisionComponent checkVision;
    [SerializeField] float speedMove = 5f;
    [SerializeField] GameObject poweredUpBullet;
    [SerializeField] Transform acidFirePos;
    [SerializeField] GameObject transformFx;

    private bool isRight;
    private bool isTransformed = false;

    // Start is called before the first frame update
    void Start()
    {
        transformFx.SetActive(false);
        StartCoroutine(RandomRoarIntervalLoop());   
    }
    private void Update()
    {
        if (GameManager.Instance.gameOver) return;

        if(anim.transform.localScale.x < 0)
        {
            isRight = false;
            CheckForPlayer(checkVision.CheckVisionLeft());
        }
        else
        {
            isRight = true;
            CheckForPlayer(checkVision.CheckVisionRight());
        }
    }
    private void CheckForPlayer(IObjectChecker objectChecker)
    {
        if (state == ECharacterState.Attack || state == ECharacterState.Dead) return;

        if ((objectChecker?.CheckedGameObject.layer != Constant.playerLayer) && 
            (objectChecker?.CheckedGameObject.layer != Constant.invincibleLayer))
        {
            state = ECharacterState.Idle;
            SetAnim(isTransformed ? Constant.bodyguardV2Idle : Constant.animIdle, true);
            return;
        }
        if(state != ECharacterState.Move)
        {
            state = ECharacterState.Move;
            SetAnim(isTransformed ? Constant.bodyguardV2Run : Constant.bodyguardWalk, true);
        }

        var targetRelativePos = objectChecker.Position.x - transform.position.x;

        var distance = Mathf.Abs(targetRelativePos);
        if(distance <= (isTransformed ? 5f : 1f))
        {
            state = ECharacterState.Attack;
            EnemyAttack(objectChecker);
        }
        else
        {
            if (!isRight)
            {
                transform.position = transform.position - this.transform.right * (speedMove * Time.deltaTime);
            }
        }
    }
    private void EnemyAttack(IObjectChecker target)
    {
        if(target.CheckedGameObject.layer == Constant.invincibleLayer)
        {
            SetAnim(Constant.animIdle, true);
            return;
        }
        
        if (isTransformed)
        {
            SoundManager.Instance.PlaySoundFXClip(v2AttackSfx, 1, false);
            SetAnim(Constant.bodyguardV2Attack, false, (TrackEntry trackEntry) => state = ECharacterState.Idle);

            var toxicBullet = Instantiate(poweredUpBullet, acidFirePos.position, Quaternion.identity);
            toxicBullet.transform.DOMove(target.Position, 1f).SetEase(Ease.Linear);
        }
        else
        {
            SetAnim(Constant.animEnemyAttack, false, (TrackEntry trackEntry) => state = ECharacterState.Idle);
        }
    }

    private IEnumerator RandomRoarIntervalLoop()
    {
        yield return new WaitForSeconds(.75f);

        SoundManager.Instance.PlaySoundFXClip(isTransformed ? gruntV2Sfx : gruntSfx, 1, false); //initial sound

        while (!GameManager.Instance.gameOver)
        {
            yield return new WaitForSeconds(6.75f);

            SoundManager.Instance.PlaySoundFXClip(isTransformed ? gruntV2Sfx : gruntSfx, 1, false);
        }
    }
    private void BodyguardV2Transform()
    {
        transformFx.SetActive(true);
        StartCoroutine(Transform(.5f));
        
        IEnumerator Transform(float waitTime)
        {
            yield return new WaitForSeconds(waitTime);

            SetAnim(Constant.bodyguardV2Idle, true);
            isTransformed = true;
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (state == ECharacterState.Dead) return;

        switch (collision.gameObject.layer)
        {
            case Constant.powerUpLayer:
                collision.transform.parent.gameObject.SetActive(false);
                BodyguardV2Transform();
                break;
            case Constant.invincibleLayer:
                state = ECharacterState.Dead;
                SoundManager.Instance.PlaySoundFXClip(mainPunchSfx, 1, false);

                GameManager.Instance.gameOver = true;
                SetAnim(Constant.bodyguardDieBySupermain, false, (TrackEntry trackEntry) => GameManager.Instance.onWin?.Invoke());
                break;
        }
    }
}
