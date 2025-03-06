using System;
using System.Collections;
using UnityEngine;

public class Main : CharacterSpine
{
    [SerializeField] AudioClip mainScared;
    [SerializeField] AudioClip helpMe;
    [SerializeField] AudioClip getHitSfx;
    [SerializeField] AudioClip enemyAttackHit;
    [SerializeField] AudioClip mainWin;

    private void Awake()
    {
        //GameManager.Ins.onWin += MainWin;
    }
    private void Start()
    {
        StartCoroutine(RandomHelpIntervalLoop());
    }
    private IEnumerator RandomHelpIntervalLoop()
    {
        SoundManager.Instance.PlaySoundFXClip(helpMe, 1, false); //initial sound

        while (true)
        {
            yield return new WaitForSeconds(6f);

            SoundManager.Instance.PlaySoundFXClip(helpMe, 1, false);
        }
    }
    private void MainDie()
    {
        StopAllCoroutines();

        //SoundManager.Ins.PlaySoundFXClip(getHitSfx, transform, 1, false);
        SetAnim(Constant.mainFall2, false);
    }
    private void MainWin()
    {
        StopAllCoroutines();    

        //SoundManager.Ins.PlaySoundFXClip(mainWin, transform, 1, false);
        SetAnim(Constant.mainWin3, true);
    }
    private void SupermainTransform()
    {
        ChangeSkin(Constant.supermainSkin);
        SetAnim(Constant.supermainIdle, true);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        switch(collision.gameObject.layer)
        {
            case Constant.enemyLayer:
                //SoundManager.Ins.PlaySoundFXClip(wereWolfAttackHit, transform, 1, false);

                MainDie();
                GameManager.Instance.onLose?.Invoke();
                break;
            case Constant.powerUpLayer:
                collision.transform.parent.gameObject.SetActive(false);
                SupermainTransform();
                break;
        }
    }
}
