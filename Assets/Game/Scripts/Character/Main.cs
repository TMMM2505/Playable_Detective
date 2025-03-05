using System;
using System.Collections;
using UnityEngine;

public class Main : CharacterSpine
{
    [SerializeField] AudioClip mainScared;
    [SerializeField] AudioClip helpMe;
    [SerializeField] AudioClip getHitSfx;
    [SerializeField] AudioClip wereWolfAttackHit;
    [SerializeField] AudioClip mainWin;

    public override bool CanMove => throw new NotImplementedException();
    public override Vector3 Position => throw new NotImplementedException();
    public override bool IsCompleted { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    public override Action ActionCompleted { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

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
        anim.initialSkinName = Constant.supermainSkin;
        SetAnim(Constant.supermainIdle, true);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        switch(collision.gameObject.layer)
        {
            case Constant.enemyLayer:
                //SoundManager.Ins.PlaySoundFXClip(wereWolfAttackHit, transform, 1, false);

                MainDie();
                break;
            case Constant.powerUpLayer:
                collision.transform.parent.gameObject.SetActive(false);
                SupermainTransform();
                break;
        }
    }
}
