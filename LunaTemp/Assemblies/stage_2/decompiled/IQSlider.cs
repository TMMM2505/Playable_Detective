using System;
using System.Collections;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class IQSlider : MonoBehaviour
{
	[SerializeField]
	private Slider slider;

	[SerializeField]
	private float sliderTimer;

	[SerializeField]
	private TMP_Text numberText;

	[SerializeField]
	private Image brain;

	[SerializeField]
	private AudioClip emergencySfx;

	[SerializeField]
	private Color emergencyColor;

	private float currentValue;

	private Action onEmergency;

	private void Awake()
	{
		onEmergency = (Action)Delegate.Combine(onEmergency, new Action(EmergencyTriger));
		GameManager ins = Singleton<GameManager>.Ins;
		ins.onWin = (Action)Delegate.Combine(ins.onWin, new Action(StopSlider));
		GameManager ins2 = Singleton<GameManager>.Ins;
		ins2.onLose = (Action)Delegate.Combine(ins2.onLose, new Action(StopSlider));
	}

	private void Start()
	{
		currentValue = slider.maxValue;
		StartCoroutine(BarMoveDown());
	}

	private IEnumerator BarMoveDown()
	{
		float timeElapsed = 0f;
		while (timeElapsed < sliderTimer)
		{
			if (timeElapsed >= 20f)
			{
				onEmergency?.Invoke();
				onEmergency = null;
			}
			float t = timeElapsed / sliderTimer;
			currentValue = Mathf.Lerp(100f, 0f, t);
			slider.value = currentValue;
			numberText.text = Mathf.Ceil(currentValue).ToString();
			timeElapsed += Time.deltaTime;
			yield return null;
		}
		slider.value = 0f;
		numberText.text = "0";
		Singleton<GameManager>.Ins.onLose?.Invoke();
	}

	private void EmergencyTriger()
	{
		Singleton<SoundManager>.Ins.PlaySoundFXClip(emergencySfx, base.transform, 0.5f, true);
		brain.DOColor(emergencyColor, 0.5f).SetLoops(-1, LoopType.Yoyo);
		numberText.DOColor(emergencyColor, 0.5f).SetLoops(-1, LoopType.Yoyo);
	}

	private void StopSlider()
	{
		Singleton<SoundManager>.Ins.StopSourceByName(emergencySfx.name);
		StopAllCoroutines();
	}
}
