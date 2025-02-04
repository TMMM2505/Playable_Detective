using System.Collections;
using UnityEngine;
using DG.Tweening;
public class UIManager : Singleton<UIManager>
{
    [SerializeField] private UICLose uicLose;
    [SerializeField] private UICWin uicWin;
    [SerializeField] private Animator animTakePhoto;
    public void TriggerCTA()
    {
        // Debug.Log("triggerCTA");
        // Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.detective.mansion.pullpin.puzzle");
        // Luna.Unity.LifeCycle.GameEnded();
    }
    public void ShowGamePlay()
    {
        uicLose.gameObject.SetActive(false);
        uicWin.gameObject.SetActive(false);
    }
    public void ShowLose()
    {
        uicLose.gameObject.SetActive(true);
        uicLose.OnShowed();
    }

    public void ShowWin()
    {
        uicWin.gameObject.SetActive(true);
        uicWin.OnShowed();
        
        SoundManager.Ins.PlaySound(Constant.soundGirlSay, false);
    }

    public IEnumerator TakePhoto()
    {
        yield return new WaitForSeconds(1f);
        animTakePhoto.gameObject.SetActive(true);
    }
}
