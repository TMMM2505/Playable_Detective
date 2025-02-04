using DG.Tweening;
using Luna.Unity;
using UnityEngine;

public class UICWin : MonoBehaviour
{
	[SerializeField]
	private Transform[] items;

	public void TriggerCTA()
	{
		Debug.Log("triggerCTA");
		Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.detective.mansion.pullpin.puzzle");
		LifeCycle.GameEnded();
	}

	public void OnShowed()
	{
		Vector3 defaultScale = new Vector3(1f, 1f, 1f);
		Transform[] array = items;
		foreach (Transform item in array)
		{
			item.localScale -= new Vector3(0.8f, 0.8f, 0.8f);
			item.DOScale(defaultScale, 0.1f).SetEase(Ease.Linear);
		}
	}
}
