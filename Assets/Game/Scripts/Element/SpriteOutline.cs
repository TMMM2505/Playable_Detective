using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;
using System;
using System.Collections.Generic;
using UnityEngine;

public class SpriteOutline : MonoBehaviour
{
    //[SerializeField] List<Pin> linkedPins;
    [SerializeField] List<SpriteOutline> glowBatonPass;
    [SerializeField] bool isFirstGlow;
    //[SerializeField] Hand hand;
    //[SerializeField] bool rightSide;

    internal Action onGlowComplete;

    private TweenerCore<Color, Color, ColorOptions> ongoingColorTween;
    private SpriteRenderer outline;
    private Color originalColor;
    private Color faintColor;

    private void Awake()
    {
        if (isFirstGlow) return;

        gameObject.SetActive(false);
    }
    private void OnEnable()
    {
        if(glowBatonPass.Count > 0)
        {
            foreach(SpriteOutline glow in glowBatonPass)
            {
                onGlowComplete += () => glow.gameObject.SetActive(true);
            }
        }
    }
    private void OnDisable()
    {
        if (glowBatonPass.Count > 0)
        {
            foreach (SpriteOutline glow in glowBatonPass)
            {
                onGlowComplete -= () => glow.gameObject.SetActive(true);
            }
        }
    }
    private void Start()
    {
        outline = GetComponent<SpriteRenderer>();

        originalColor = outline.color;
        faintColor = new Color(originalColor.r, originalColor.g, originalColor.b, 0);

        outline.color = faintColor; // set alpha to zero at the start of the game 

        ActivateGlowOneShot(4);
    }
    //private void ActivateGlow()
    //{
    //    if(hand.isRight != rightSide)
    //    {
    //        ongoingColorTween?.Kill();
    //        outline.color = faintColor;
    //    }
    //    else
    //    {
    //        ongoingColorTween = outline.DOColor(originalColor, .5f).SetLoops(-1, LoopType.Yoyo);
    //    }
    //}
    private void ActivateGlowOneShot(int loopTime)
    {
        outline.DOColor(originalColor, .5f).SetLoops(loopTime, LoopType.Yoyo).onComplete += OnGlowComplete;
    }

    private void OnGlowComplete()
    {
        onGlowComplete?.Invoke();
        DeactivateGlow();   
    }

    private void DeactivateGlow()
    {
        gameObject.SetActive(false);
    }
}