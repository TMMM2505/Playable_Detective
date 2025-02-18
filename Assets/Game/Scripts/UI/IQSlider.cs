using DG.Tweening;
using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class IQSlider : MonoBehaviour
{
    [SerializeField] Slider slider;
    [SerializeField] float sliderTimer;
    [SerializeField] TMP_Text numberText;
    [SerializeField] Image brain;
    [SerializeField] AudioClip emergencySfx;
    [SerializeField] Color emergencyColor;

    private float currentValue;
    private Action onEmergency;

    private void Awake()
    {
        onEmergency += EmergencyTriger;
        GameManager.Ins.onWin += StopSlider;
        GameManager.Ins.onLose += StopSlider;
    }
    void Start()
    {
        currentValue = slider.maxValue;

        StartCoroutine(BarMoveDown());
    }

    private IEnumerator BarMoveDown()
    {
        float timeElapsed = 0;

        while(timeElapsed < sliderTimer)
        {
            if(timeElapsed >= 20f)
            {
                //trigger slider flash
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
        slider.value = 0;
        numberText.text = "0";

        GameManager.Ins.onLose?.Invoke(); 
    }
    private void EmergencyTriger()
    {
        SoundManager.Ins.PlaySoundFXClip(emergencySfx, transform, .5f, true);
        brain.DOColor(emergencyColor, .5f).SetLoops(-1, LoopType.Yoyo);
        numberText.DOColor(emergencyColor, .5f).SetLoops(-1, LoopType.Yoyo);
    }
    private void StopSlider()
    {
        SoundManager.Ins.StopSourceByName(emergencySfx.name);
        StopAllCoroutines();
    }
}
