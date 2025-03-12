using System;
using System.Collections;
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

        GameManager.Instance.onLose += () => OnEndGame(true);
        GameManager.Instance.onWin += () => OnEndGame(false);
    }

    public void PlaySoundFXClip(AudioClip audioClip, float volume, bool loop, bool loopOneShot = false, Action onComplete = null)
    {
        if (loop)
        {
            audioSourceMusic.clip = audioClip;
            audioSourceMusic.volume = volume;
            audioSourceMusic.Play();
        }
        else if(!loopOneShot)
        {
            audioSourceSound.PlayOneShot(audioClip, volume);

            //get length of sfx clip
            float clipLength = audioClip.length;
            StartCoroutine(DelayedAction(onComplete, clipLength));
        }
        else
        {
            StartCoroutine(LoopOneShot());
        }

        IEnumerator LoopOneShot()
        {
            while (!GameManager.Instance.gameOver)
            {
                audioSourceSound.PlayOneShot(audioClip, volume);

                yield return new WaitForSeconds(audioClip.length);
            }
        }
        IEnumerator DelayedAction(Action action, float waitTime)
        {
            yield return new WaitForSeconds(waitTime);

            action?.Invoke();
        }
    }
    void OnEndGame(bool isLose)
    {
        audioSourceMusic.Stop();
        audioSourceSound.Stop();
        audioSourceSound.PlayOneShot(isLose ? loseSfx : winSfx);
    }
}