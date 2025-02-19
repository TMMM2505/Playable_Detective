using DG.Tweening;
using UnityEngine;

public class Pulse : MonoBehaviour
{
    [SerializeField] float scale = 1.2f;
    [SerializeField] float duration = 0.4f;
    [SerializeField] Ease ease = Ease.Linear;
    [SerializeField] int loopCount = -1;
    [SerializeField] bool from;

    Vector3 originalScale;

    public void OnEnable()
    {
        originalScale = transform.localScale;
        DOTween.Kill(this);
        var tween = transform.DOScale(scale * originalScale, duration);
        if (from)
        {
            tween = tween.From();
        }

        if (loopCount != 0)
        {
            tween = tween.SetLoops(loopCount, LoopType.Yoyo);
        }

        tween.SetEase(ease).SetTarget(this);
        tween.Play();
    }

}