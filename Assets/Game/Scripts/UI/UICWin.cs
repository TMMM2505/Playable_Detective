using UnityEngine;
using DG.Tweening;
public class UICWin : MonoBehaviour
{
    [SerializeField] private Transform[] items;
    public void TriggerCTA()
    {
        Debug.Log("triggerCTA");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.detective.mansion.pullpin.puzzle");
        Luna.Unity.LifeCycle.GameEnded();
    }
    public void OnShowed()
    {
        Vector3 defaultScale = new Vector3(1, 1, 1);
        foreach (Transform item in items)
        {
            item.localScale -= new Vector3(0.8f, 0.8f, 0.8f);
            item.DOScale(defaultScale, 0.1f)
                .SetEase(Ease.Linear);
        }
    }
}
