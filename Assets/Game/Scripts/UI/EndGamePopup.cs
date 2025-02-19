using DG.Tweening;
using Spine;
using Spine.Unity;
using System;
using System.Collections;
using TMPro;
using UnityEngine;

public class EndGamePopup : MonoBehaviour
{
    [SerializeField] RectTransform popupTransform;
    [SerializeField] TMP_Text buttonText;
    [SerializeField] SkeletonAnimation victoryText;
    [SerializeField] SkeletonAnimation loseText;

    internal Action showText;
    // Start is called before the first frame update
    void Start()
    {
        victoryText.gameObject.SetActive(false);    
        loseText.gameObject.SetActive(false); 

        popupTransform.DOScale(Vector3.zero, 0); 
    }

    internal IEnumerator Activate(float waitTime)
    {
        yield return new WaitForSeconds(waitTime);

        if (DeviceOrientationDetection.isLandscape)
        {
            popupTransform.DOScale(Vector3.one * 0.25f, .5f).SetEase(Ease.OutElastic).onComplete += OnActivateComplete;
        }
        else
        {
            popupTransform.DOScale(Vector3.one, .5f).SetEase(Ease.OutElastic).onComplete += OnActivateComplete;
        }
    }

    private void OnActivateComplete()
    {
        showText?.Invoke();
    }

    internal void ShowVictoryText()
    {
        victoryText.gameObject.SetActive(true);
        victoryText.AnimationName = Constant.textShowAnim;
        victoryText.AnimationState.Complete += IdleText;

        buttonText.text = "Next";
    }
    internal void ShowLoseText()
    {
        loseText.gameObject.SetActive(true);
        loseText.AnimationName = Constant.textShowAnim;
        loseText.AnimationState.Complete += IdleText;

        buttonText.text = "Again";
    }

    private void IdleText(TrackEntry trackEntry)
    {
        victoryText.AnimationState.Complete -= IdleText;
        victoryText.loop = true;
        victoryText.AnimationName = Constant.textIdleAnim;

        loseText.AnimationState.Complete -= IdleText;
        loseText.loop = true;
        loseText.AnimationName = Constant.textIdleAnim;
    }
}
