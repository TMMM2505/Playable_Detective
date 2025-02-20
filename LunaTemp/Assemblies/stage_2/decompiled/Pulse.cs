using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;
using UnityEngine;

public class Pulse : MonoBehaviour
{
	[SerializeField]
	private float scale = 1.2f;

	[SerializeField]
	private float duration = 0.4f;

	[SerializeField]
	private Ease ease = Ease.Linear;

	[SerializeField]
	private int loopCount = -1;

	[SerializeField]
	private bool from;

	private Vector3 originalScale;

	public void OnEnable()
	{
		originalScale = base.transform.localScale;
		DOTween.Kill(this);
		TweenerCore<Vector3, Vector3, VectorOptions> tween = base.transform.DOScale(scale * originalScale, duration);
		if (from)
		{
			tween = tween.From();
		}
		if (loopCount != 0)
		{
			tween = tween.SetLoops(loopCount, LoopType.Yoyo);
		}
		tween.SetEase(ease).SetTarget(this);
		tween.Play();
	}
}
