using System;
using System.Collections;
using UnityEngine;
using DG.Tweening;
public class CameraElement : MonoBehaviour
{
    [SerializeField] private SpriteRenderer renderer;
    [SerializeField] private ParticleSystem vfxSteam;
    [SerializeField] private ParticleSystem vfxBlink;

    private Vector2 winPosition;
    bool onWin = false;
    public Vector2 WinPosition
    {
        get => winPosition;
        set => winPosition = value;
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.CompareTag(Constant.tagRing))
        {
            if (!onWin)
            {
                OnWin();
                onWin = true;
            }
        }
        if (other.gameObject.CompareTag(Constant.tagDeathZone))
        {
            if (!onWin)
            {
                Debug.Log("Lose");
                LevelManager.Ins.OnLose();
                onWin = true;
            }
        }
        if (other.gameObject.CompareTag(Constant.tagLava))
        {
            if (renderer.enabled)
            {
                renderer.enabled = false;
                vfxBlink.gameObject.SetActive(false);
                vfxSteam.Play();
                SoundManager.Ins.PlaySound(Constant.soundInLava, false);
                StartCoroutine(DelayDestroy(false));
            }
        }
    }
    IEnumerator DelayDestroy(bool win)
    {
        yield return new WaitForSeconds(1f);
        if (win)
        {
            LevelManager.Ins.OnWin();
        }
        else
        {
            LevelManager.Ins.OnLose();
        }
        gameObject.SetActive(false);
    }

    public void OnWin()
    {
        float time = 1f;
        transform.DORotate(new Vector3(0,0,360f), time, RotateMode.WorldAxisAdd)
            .SetEase(Ease.Linear);
        transform.DOMove(winPosition, time)
            .SetEase(Ease.Linear);
        transform.DOScale(new Vector3(0.1f, 0.1f, 0.1f), time)
            .SetEase(Ease.Linear);
        StartCoroutine(DelayDestroy(true));
    }
}
