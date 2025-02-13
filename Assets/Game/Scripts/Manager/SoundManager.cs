using DG.Tweening.Core.Easing;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : Singleton<SoundManager>
{
    [SerializeField] private AudioSource sfxObject;

    [SerializeField] private AudioClip bgTheme;
    [SerializeField] private AudioClip winSfx;
    [SerializeField] private AudioClip loseSfx;

    protected List<AudioSource> ongoingSources = new List<AudioSource>();

    private void Awake()
    {
        PlaySoundFXClip(bgTheme, transform, 1, true);

        //GameManager.Instance.onLose += OnLoseAudio;
        //GameManager.Instance.onWin += OnWinAudio;
    }
    public void PlaySoundFXClip(AudioClip audioClip, Transform spawnTransform, float volume, bool loop)
    {
        //check if clip is already exist or not
        if (ongoingSources?.Find(x => x.name == audioClip.name) != null)
        {
            PlayExistingAudioSourceByName(audioClip.name);
        }
        else
        {
            //spawn in gameObject
            AudioSource audioSource = Instantiate(sfxObject, spawnTransform.position, Quaternion.identity);
            audioSource.transform.SetParent(transform);
            audioSource.gameObject.name = audioClip.name;

            //set loop
            audioSource.loop = loop;

            //assign the audioClip
            audioSource.clip = audioClip;

            //assign volume
            audioSource.volume = volume;

            //play sound
            audioSource.Play();

            //get length of sfx clip
            float clipLength = audioSource.clip.length;

            //add clip to the ongoing sources
            ongoingSources.Add(audioSource);
        }
    }

    private void PlayExistingAudioSourceByName(string name)
    {
        AudioSource source = ongoingSources.Find(x => x.name == name);
        source.Play();
    }

    public void StopSourceByName(string name)
    {
        AudioSource source = ongoingSources.Find(x => x.name == name);
        source.Stop();
    }
    private void OnWinAudio()
    {
        StopSourceByName(bgTheme.name);
        PlaySoundFXClip(winSfx, transform, 1, false);
    }
    private void OnLoseAudio()
    {
        StopSourceByName(bgTheme.name);
        PlaySoundFXClip(loseSfx, transform, 1, false);
    }
}