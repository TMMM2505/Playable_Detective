using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class IQSlider : MonoBehaviour
{
    [SerializeField] Slider slider;
    [SerializeField] float sliderTimer;
    [SerializeField] TMP_Text numberText;

    private float currentValue;
    private float currentTimer;
    // Start is called before the first frame update
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
}
