using DG.Tweening;
using Luna.Unity;
using UnityEngine;

public class UICLose : MonoBehaviour
{
	[SerializeField]
	private Transform text;

	public void TriggerCTA()
	{
		Debug.Log("triggerCTA");
		Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.detective.mansion.pullpin.puzzle");
		LifeCycle.GameEnded();
	}

	public void OnShowed()
	{
		Vector3 scale = text.localScale - new Vector3(0.1f, 0.1f, 0.1f);
		text.DOScale(scale, 0.4f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
	}
}
