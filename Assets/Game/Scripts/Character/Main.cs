using System.Collections;
using UnityEngine;

public class Main : CharacterSpine
{
    [SerializeField] AudioClip mainScared;
    [SerializeField] AudioClip helpMe;
    [SerializeField] AudioClip getHitSfx;
    [SerializeField] AudioClip wereWolfAttackHit;
    [SerializeField] AudioClip mainWin;

    private void Awake()
    {
        GameManager.Ins.onWin += MainWin;
    }
    private void Start()
    {
        SoundManager.Ins.PlaySoundFXClip(mainScared, transform, 1, false, 
            () => SoundManager.Ins.PlaySoundFXClip(helpMe, transform, 1, false));

        StartCoroutine(RandomHelpIntervalLoop());
    }
    private IEnumerator RandomHelpIntervalLoop()
    {
        while (true)
        {
            float waitTime = Random.Range(7f, 15f);

            yield return new WaitForSeconds(waitTime);

            SoundManager.Ins.PlaySoundFXClip(helpMe, transform, 1, false);
        }
    }
    private void MainDie()
    {
        StopAllCoroutines();

        SoundManager.Ins.PlaySoundFXClip(getHitSfx, transform, 1, false);
        SetAnim(Constant.mainFall2, false);
    }
    private void MainWin()
    {
        StopAllCoroutines();    

        SoundManager.Ins.PlaySoundFXClip(mainWin, transform, 1, false);
        SetAnim(Constant.mainWin3, true);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.layer == Constant.enemyLayer)
        {
            SoundManager.Ins.PlaySoundFXClip(wereWolfAttackHit, transform, 1, false);

            MainDie();  
        }
    }
}
