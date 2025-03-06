using Spine;
using System;
using System.Collections;
using UnityEditor;
using UnityEngine;

public class Bodyguard : CharacterSpine
{
    [SerializeField] private AudioClip gruntSfx;
    [SerializeField] CheckVisionComponent checkVision;
    [SerializeField] float speedMove = 5f;

    private bool isRight;
    private bool isAttacking;

    [Header("Current Form")]
    private string currentIdle = Constant.animIdle;
    private string currentWalk = Constant.bodyguardWalk;
    private string currentAttack = Constant.animEnemyAttack;
    private float currentAttackRange = 1f;

    // Start is called before the first frame update
    void Start()
    {
        GameManager.Instance.onLose += EnemyAttack;

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
            SetAnim(currentIdle, true);
            return;
        }
        SetAnim(currentWalk, true);

        var targetRelativePos = objectChecker.Position.x - transform.position.x;

        var distance = Mathf.Abs(targetRelativePos);
        if(distance <= currentAttackRange)
        {
            isAttacking = true;
            EnemyAttack();
        }
        else
        {
            if (!isRight)
            {
                transform.position = transform.position - this.transform.right * (speedMove * Time.deltaTime);
            }
        }
    }
    private void EnemyAttack()
    {
        SetAnim(currentAttack, false, (TrackEntry trackEntry) => isAttacking = false);
    }

    private IEnumerator RandomRoarIntervalLoop()
    {
        yield return new WaitForSeconds(.75f);

        SoundManager.Instance.PlaySoundFXClip(gruntSfx, 1, false); //initial sound

        while (true)
        {
            yield return new WaitForSeconds(6.75f);

            SoundManager.Instance.PlaySoundFXClip(gruntSfx, 1, false);
        }
    }
    private void BodyguardV2Transform()
    {
        SetAnim(Constant.bodyguardV2Idle, true);

        currentIdle = Constant.bodyguardV2Idle;
        currentWalk = Constant.bodyguardV2Run;
        currentAttack = Constant.bodyguardV2Attack;
        currentAttackRange = 5f;
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
