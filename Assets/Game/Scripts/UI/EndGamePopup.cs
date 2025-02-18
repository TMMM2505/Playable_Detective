using DG.Tweening;
using Spine;
using Spine.Unity;
using System;
using TMPro;
using UnityEngine;

public class EndGamePopup : MonoBehaviour
{
    [SerializeField] RectTransform popupTransform;
    [SerializeField] TMP_Text buttonText;
    [SerializeField] SkeletonAnimation victoryText;
    [SerializeField] SkeletonAnimation loseText;

    internal Action showText;

    private Vector3 originalScale;
    // Start is called before the first frame update
    void Start()
    {
        victoryText.gameObject.SetActive(false);    
        loseText.gameObject.SetActive(false);
        originalScale = popupTransform.localScale;   
        popupTransform.DOScale(Vector3.zero, 0);
    }

    internal void Activate()
    {
        popupTransform.DOScale(originalScale, 1f).SetEase(Ease.OutElastic).onComplete += OnActivateComplete;
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
        victoryText.loop = true;
        victoryText.AnimationName = Constant.textIdleAnim;

        loseText.loop = true;
        loseText.AnimationName = Constant.textIdleAnim;
    }
}
