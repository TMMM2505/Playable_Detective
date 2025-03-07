using System.Collections;
using UnityEngine;

public class Main : CharacterSpine
{
    [SerializeField] AudioClip mainScared;
    [SerializeField] AudioClip helpMe;
    [SerializeField] AudioClip getHitSfx;
    [SerializeField] AudioClip enemyAttackHit;
    [SerializeField] AudioClip mainWin;

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
    private void MainGetPunched()
    {
        StopAllCoroutines();

        SoundManager.Instance.PlaySoundFXClip(getHitSfx, 1, false);
        SetAnim(Constant.mainFall2, false);

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
        ChangeSkin(Constant.supermainSkin);
        SetAnim(Constant.supermainIdle, true);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (GameManager.Instance.gameOver) return;

        switch(collision.gameObject.layer)
        {
            case Constant.enemyLayer:
                SoundManager.Instance.PlaySoundFXClip(enemyAttackHit, 1, false);
                MainGetPunched();
                break;
            case Constant.powerUpLayer:
                collision.transform.parent.gameObject.SetActive(false);
                SupermainTransform();
                break;
            case Constant.acidBulletLayer:
                AcidBullet bullet = collision.GetComponentInParent<AcidBullet>();
                bullet.ActivateExplosionVfx();
                MainGetPunched();
                break;
        }
    }
}
