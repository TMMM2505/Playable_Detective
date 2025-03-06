using System;
using System.Collections;
using UnityEditor;
using UnityEngine;

public class Bodyguard : CharacterSpine
{
    [SerializeField] private AudioClip gruntSfx;
    [SerializeField] CheckVisionComponent checkVision;

    // Start is called before the first frame update
    void Start()
    {
        GameManager.Instance.onLose += EnemyAttack;

        StartCoroutine(RandomRoarIntervalLoop());   
    }
    private void Update()
    {
        checkVision.CheckVisionLeft();
        checkVision.CheckVisionRight();
    }
    private void CheckPlayer()
    {

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
    private void BodyguardGroan()
    {
        //SetAnim(Constant.animWolfRoar, false);
        //anim.AnimationState.Complete += DefaultAnimOnComplete;

        //SoundManager.Instance.PlaySoundFXClip(roarSfx, transform, 1, false);
    }
    private void EnemyAttack()
    {
        SetAnim(Constant.animEnemyAttack, false);
    }

    private void DefaultAnimOnComplete(Spine.TrackEntry trackEntry)
    {
        SetAnim(Constant.animIdle, true);
        anim.AnimationState.Complete -= DefaultAnimOnComplete;
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        switch (collision.gameObject.layer)
        {
            case Constant.powerUpLayer:
                collision.transform.parent.gameObject.SetActive(false);
                SetAnim(Constant.bodyguardV2Idle, true);
                break;
        }
    }
}
