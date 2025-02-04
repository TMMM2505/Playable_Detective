using DG.Tweening;
using System.Collections;
using UnityEngine;

public class Hand : MonoBehaviour
{
    [SerializeField] private Animator anim;

    private void Start()
    {
        StartCoroutine(LoopClick());
    }

    public void SetClick(Vector2 position, Transform parent)
    {
        transform.SetParent(parent);
        if (LevelManager.Ins.IsEndCard)
        {
            transform.DOMove(position, 0.2f)
                .SetEase(Ease.Linear)
                .OnComplete(() =>
                {
                    StopAllCoroutines();
                    StartCoroutine(LoopClick());
                });
        }
        else
        {
            transform.position = position;
        }
    }

    void RunAnim()
    {
        SoundManager.Ins.PlaySound(Constant.soundClick, false);
        anim.ResetTrigger("click");
        anim.SetTrigger("click");
    }
    IEnumerator LoopClick()
    {
        RunAnim();
        yield return new WaitForSeconds(1f);
        StartCoroutine(LoopClick());
    }
}
