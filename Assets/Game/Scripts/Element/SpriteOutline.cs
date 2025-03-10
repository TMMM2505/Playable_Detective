using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;
using UnityEngine;

public class SpriteOutline : MonoBehaviour
{
    [SerializeField] Hand hand;
    [SerializeField] bool rightSide;

    private TweenerCore<Color, Color, ColorOptions> ongoingColorTween;
    private SpriteRenderer outline;
    private Color originalColor;
    private Color faintColor;

    private void Awake()
    {
        hand.onHandFlip += ActivateGlow;
        InputReceiver.onFirstClick += DeactivateGlow;
    }
    private void Start()
    {
        outline = GetComponent<SpriteRenderer>();

        originalColor = outline.color;
        faintColor = new Color(originalColor.r, originalColor.g, originalColor.b, 0);

        outline.color = faintColor; // set alpha to zero at the start of the game 
    }
    private void ActivateGlow()
    {
        if(hand.isRight != rightSide)
        {
            ongoingColorTween?.Kill();
            outline.color = faintColor;
        }
        else
        {
            ongoingColorTween = outline.DOColor(originalColor, .5f).SetLoops(-1, LoopType.Yoyo);
        }
    }
    private void DeactivateGlow()
    {
        gameObject.SetActive(false);
        InputReceiver.onFirstClick -= DeactivateGlow;
    }
}