using System.Collections;
using UnityEngine;
using DG.Tweening;
public class Pin : MonoBehaviour
{
    [SerializeField] private Transform head;
    [SerializeField] private Transform end;
    [SerializeField] private Transform center;

    public Transform Center => center;

    public void ActivePin()
    {
        SoundManager.Ins.PlaySound(Constant.soundDragPin, false);
        Vector2 direction = end.position - head.position;
        direction.Normalize();
        
        transform.DOMove((Vector2)transform.position + direction * 5f, 0.5f, false)
            .SetEase(Ease.Linear);
        StartCoroutine(DelayDestroy());
    }

    IEnumerator DelayDestroy()
    {
        yield return new WaitForSeconds(0.5f);
        gameObject.SetActive(false);
    }
}
