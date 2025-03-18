using DG.Tweening;
using System.Collections;
using UnityEngine;

public class LevelManager : Singleton<LevelManager>
{
    [SerializeField] GameObject level1;
    [SerializeField] GameObject level2;

    private void Start()
    {
        level2.transform.localScale = Vector3.one;
        level2.SetActive(false);

        GameManager.Instance.nextLevel += () => StartCoroutine(TransitNextLevel(.3f));
    }

    private IEnumerator TransitNextLevel(float waitTime)
    {
        level1.SetActive(false);

        yield return new WaitForSeconds(waitTime);  

        level2.SetActive(true);
        level2.transform.DOScale(Vector3.one, .25f).SetEase(Ease.OutElastic);
    }
}
