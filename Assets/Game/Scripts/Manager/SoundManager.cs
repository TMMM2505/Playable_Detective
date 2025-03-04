using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : Singleton<SoundManager>
{
    [SerializeField] AudioSource audioSourceMusic;
    [SerializeField] AudioSource audioSourceSound;

    [SerializeField] AudioClip bgTheme;
    [SerializeField] AudioClip winSfx;
    [SerializeField] AudioClip loseSfx;

    void Start()
    {
        PlaySoundFXClip(bgTheme, 1, true);

        //GameManager.Instance.onEndGame += () => OnEndGame(GameManager.Instance.gameLose);
    }

    public void PlaySoundFXClip(AudioClip audioClip, float volume, bool loop, Action onComplete = null)
    {
        if (loop)
        {
            audioSourceMusic.clip = audioClip;
            audioSourceMusic.volume = volume;
            audioSourceMusic.Play();
        }
        else
        {
            audioSourceSound.PlayOneShot(audioClip, volume);

            //get length of sfx clip
            float clipLength = audioClip.length;
            StartCoroutine(DelayedAction(onComplete, clipLength));
        }
    }

    void OnEndGame(bool isLose)
    {
        audioSourceMusic.Stop();
        audioSourceSound.PlayOneShot(isLose ? loseSfx : winSfx);
    }
    private IEnumerator DelayedAction(Action action, float waitTime)
    {
        yield return new WaitForSeconds(waitTime);

        action?.Invoke();
    }
}