using DG.Tweening;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class CountdownController : MonoBehaviour
{
    [SerializeField] int countdownTime;
    [SerializeField] TMP_Text countdownDisplay;
    [SerializeField] private Image uiFill;

    void Awake()
    {
        transform.localScale = Vector3.zero;

        GameManager.Instance.onWin += () => StartCoroutine(CountdownToStore(2));
    }
    private IEnumerator CountdownToStore(float timeWait)
    {
        yield return new WaitForSeconds(timeWait); //wait for popup to appear

        transform.DOScale(Vector3.one, .25f);

        while(countdownTime > 0)
        {
            countdownDisplay.text = countdownTime.ToString();
            StartCoroutine(RingFill(1f));
            yield return new WaitForSeconds(1f);
            countdownTime--;
        }
        countdownDisplay.text = countdownTime.ToString(); //set text to 0

        //GameManager.Instance.TriggerCTA();
    }
    private IEnumerator RingFill(float duration)
    {
        float timeElapsed = 0;
        while (timeElapsed < duration)
        {
            float t = timeElapsed / duration;

            uiFill.fillAmount = t;
            timeElapsed += Time.deltaTime;

            yield return null;
        }
        
    }
}
