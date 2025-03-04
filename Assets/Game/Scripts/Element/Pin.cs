using System.Collections;
using UnityEngine;
using DG.Tweening;
using System;
public class Pin : MonoBehaviour
{
    [SerializeField] private Transform head;
    [SerializeField] private Transform end;
    [SerializeField] private Transform center;

    [SerializeField] private float speed;

    [SerializeField] private AudioClip dragPin;

    public Transform Center => center;

    internal Action onClick;

    private Vector3 initialPos;
    private bool hasReceivedInput = false;

    private void Awake()
    {
        initialPos = transform.localPosition;
    }
    public void SetToInitialPos() //scale reset position to Vector3.zero for some reason
    {
        transform.localPosition = initialPos;
    }
    public void ActivePin()
    {
        if (hasReceivedInput) return;

        hasReceivedInput = true;
        SoundManager.Instance.PlaySoundFXClip(dragPin, 1f, false);
        Vector2 direction = end.position - head.position;
        direction.Normalize();
        
        onClick?.Invoke();   
        transform.DOMove((Vector2)transform.position + direction * speed, 0.5f, false)
            .SetEase(Ease.Linear);
        StartCoroutine(DelayDestroy());
    }

    IEnumerator DelayDestroy()
    {
        yield return new WaitForSeconds(0.5f);
        gameObject.SetActive(false);
    }
}
