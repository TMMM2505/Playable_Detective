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
    [SerializeField] Color emergencyColor;

    private float currentValue;
    private Action onEmergency;

    private void Awake()
    {
        onEmergency += EmergencyTriger;
        GameManager.Ins.onWin += StopSlider;
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
        brain.DOColor(emergencyColor, .5f).SetLoops(-1, LoopType.Yoyo);
    }
    private void StopSlider()
    {
        StopAllCoroutines();
    }
}
