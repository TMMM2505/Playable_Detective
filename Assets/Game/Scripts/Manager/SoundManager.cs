using System;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : Singleton<SoundManager>
{
    public Sound[] Sounds;
    public List<AudioSource> audioSources = new List<AudioSource>();

    private bool inLava = false;

    public bool InLava
    {
        get => inLava;
        set => inLava = value;
    }


    public void PlaySound(string name, bool loop)
    {
        Sound s = Array.Find(Sounds, x => x.name == name);
        if (s == null)
        {
            return;
        }
        else
        {
            AudioSource source = GetAvailableAudioSource();
            source.clip = s.clip;
            source.Play();
            source.loop = loop;
        }
    }

    private AudioSource GetAvailableAudioSource()
    {
        AudioSource availableSource = audioSources.Find(source => !source.isPlaying);
        if (availableSource == null)
        {
            availableSource = gameObject.AddComponent<AudioSource>();
            audioSources.Add(availableSource);
        }
        return availableSource;
    }

    public void StopAll()
    {
        foreach (AudioSource source in audioSources)
        {
            source.Stop();
            source.clip = null;
        }
    }

    public void SoundInLava()
    {
        if (!inLava)
        {
            for (int i = 0; i < 5; i++)
            {
                PlaySound(Constant.soundInLava, false);
            }
            inLava = true;
        }
    }
}

