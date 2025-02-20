using System;
using System.Collections;
using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;
using Spine;
using Spine.Unity;
using TMPro;
using UnityEngine;

public class EndGamePopup : MonoBehaviour
{
	[SerializeField]
	private RectTransform popupTransform;

	[SerializeField]
	private TMP_Text buttonText;

	[SerializeField]
	private SkeletonAnimation victoryText;

	[SerializeField]
	private SkeletonAnimation loseText;

	internal Action showText;

	private void Start()
	{
		victoryText.gameObject.SetActive(false);
		loseText.gameObject.SetActive(false);
		popupTransform.DOScale(Vector3.zero, 0f);
	}

	internal IEnumerator Activate(float waitTime)
	{
		yield return new WaitForSeconds(waitTime);
		if (DeviceOrientationDetection.isLandscape)
		{
			TweenerCore<Vector3, Vector3, VectorOptions> tweenerCore = popupTransform.DOScale(Vector3.one * 0.25f, 0.5f).SetEase(Ease.OutElastic);
			tweenerCore.onComplete = (TweenCallback)Delegate.Combine(tweenerCore.onComplete, new TweenCallback(OnActivateComplete));
		}
		else
		{
			TweenerCore<Vector3, Vector3, VectorOptions> tweenerCore2 = popupTransform.DOScale(Vector3.one, 0.5f).SetEase(Ease.OutElastic);
			tweenerCore2.onComplete = (TweenCallback)Delegate.Combine(tweenerCore2.onComplete, new TweenCallback(OnActivateComplete));
		}
	}

	private void OnActivateComplete()
	{
		showText?.Invoke();
	}

	internal void ShowVictoryText()
	{
		victoryText.gameObject.SetActive(true);
		victoryText.AnimationName = "show";
		victoryText.AnimationState.Complete += IdleText;
		buttonText.text = "Next";
	}

	internal void ShowLoseText()
	{
		loseText.gameObject.SetActive(true);
		loseText.AnimationName = "show";
		loseText.AnimationState.Complete += IdleText;
		buttonText.text = "Again";
	}

	private void IdleText(TrackEntry trackEntry)
	{
		victoryText.AnimationState.Complete -= IdleText;
		victoryText.loop = true;
		victoryText.AnimationName = "idle";
		loseText.AnimationState.Complete -= IdleText;
		loseText.loop = true;
		loseText.AnimationName = "idle";
	}
}
