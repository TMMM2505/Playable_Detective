using System.Collections;
using UnityEngine;
using DG.Tweening;
public class UIManager : Singleton<UIManager>
{
    [SerializeField] private UICLose uicLose;
    [SerializeField] private UICWin uicWin;
    [SerializeField] private Animator animTakePhoto;
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
        
        //SoundManager.Ins.PlaySound(Constant.soundGirlSay, false);
    }

    public IEnumerator TakePhoto()
    {
        yield return new WaitForSeconds(1f);
        animTakePhoto.gameObject.SetActive(true);
    }
}
