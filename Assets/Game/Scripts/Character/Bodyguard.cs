using DG.Tweening;
using Spine;
using System.Collections;
using UnityEngine;

public class Bodyguard : CharacterSpine
{
    [SerializeField] private AudioClip gruntSfx;
    [SerializeField] private AudioClip gruntV2Sfx;
    [SerializeField] private AudioClip v2AttackSfx;

    [SerializeField] CheckVisionComponent checkVision;
    [SerializeField] float speedMove = 5f;
    [SerializeField] GameObject poweredUpBullet;
    [SerializeField] Transform acidFirePos;

    private bool isRight;
    private bool isAttacking;
    private bool isTransformed = false;

    // Start is called before the first frame update
    void Start()
    {
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
        if (isAttacking) return;

        if (objectChecker?.CheckedGameObject.layer != Constant.playerLayer)
        {
            SetAnim(isTransformed ? Constant.bodyguardV2Idle : Constant.animIdle, true);
            return;
        }
        SetAnim(isTransformed ? Constant.bodyguardV2Run : Constant.bodyguardWalk, true);

        var targetRelativePos = objectChecker.Position.x - transform.position.x;

        var distance = Mathf.Abs(targetRelativePos);
        if(distance <= (isTransformed ? 5f : 1f))
        {
            isAttacking = true;
            EnemyAttack(objectChecker.Position);
        }
        else
        {
            if (!isRight)
            {
                transform.position = transform.position - this.transform.right * (speedMove * Time.deltaTime);
            }
        }
    }
    private void EnemyAttack(Vector3 targetCurrentPos)
    {
        if (isTransformed)
        {
            SoundManager.Instance.PlaySoundFXClip(v2AttackSfx, 1, false);
            SetAnim(Constant.bodyguardV2Attack, false, (TrackEntry trackEntry) => isAttacking = false);

            var toxicBullet = Instantiate(poweredUpBullet, acidFirePos.position, Quaternion.identity);
            toxicBullet.transform.DOMove(targetCurrentPos, 1f).SetEase(Ease.Linear);
        }
        else
        {
            SetAnim(Constant.animEnemyAttack, false, (TrackEntry trackEntry) => isAttacking = false);
        }
    }

    private IEnumerator RandomRoarIntervalLoop()
    {
        yield return new WaitForSeconds(.75f);

        SoundManager.Instance.PlaySoundFXClip(isTransformed ? gruntV2Sfx : gruntSfx, 1, false); //initial sound

        while (true)
        {
            yield return new WaitForSeconds(6.75f);

            SoundManager.Instance.PlaySoundFXClip(isTransformed ? gruntV2Sfx : gruntSfx, 1, false);
        }
    }
    private void BodyguardV2Transform()
    {
        SetAnim(Constant.bodyguardV2Idle, true);
        isTransformed = true;
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        switch (collision.gameObject.layer)
        {
            case Constant.powerUpLayer:
                collision.transform.parent.gameObject.SetActive(false);
                BodyguardV2Transform();
                break;
        }
    }
}
