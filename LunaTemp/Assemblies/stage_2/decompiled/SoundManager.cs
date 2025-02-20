using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : Singleton<SoundManager>
{
	[SerializeField]
	private AudioSource sfxObject;

	[SerializeField]
	private AudioClip bgTheme;

	[SerializeField]
	private AudioClip winSfx;

	[SerializeField]
	private AudioClip loseSfx;

	protected List<AudioSource> ongoingSources = new List<AudioSource>();

	private void Awake()
	{
		PlaySoundFXClip(bgTheme, base.transform, 1f, true);
		GameManager ins = Singleton<GameManager>.Ins;
		ins.onLose = (Action)Delegate.Combine(ins.onLose, new Action(OnLoseAudio));
		GameManager ins2 = Singleton<GameManager>.Ins;
		ins2.onWin = (Action)Delegate.Combine(ins2.onWin, new Action(OnWinAudio));
	}

	public void PlaySoundFXClip(AudioClip audioClip, Transform spawnTransform, float volume, bool loop, Action onComplete = null)
	{
		if (ongoingSources?.Find((AudioSource x) => x.name == audioClip.name) != null)
		{
			PlayExistingAudioSourceByName(audioClip.name);
			return;
		}
		AudioSource audioSource = UnityEngine.Object.Instantiate(sfxObject, spawnTransform.position, Quaternion.identity);
		audioSource.transform.SetParent(base.transform);
		audioSource.gameObject.name = audioClip.name;
		audioSource.loop = loop;
		audioSource.clip = audioClip;
		audioSource.volume = volume;
		audioSource.Play();
		float clipLength = audioSource.clip.length;
		StartCoroutine(DelayedAction(onComplete, clipLength));
		ongoingSources.Add(audioSource);
	}

	private IEnumerator DelayedAction(Action action, float waitTime)
	{
		yield return new WaitForSeconds(waitTime);
		action?.Invoke();
	}

	private void PlayExistingAudioSourceByName(string name)
	{
		AudioSource source = ongoingSources.Find((AudioSource x) => x.name == name);
		source.Play();
	}

	public void StopSourceByName(string name)
	{
		ongoingSources.Find((AudioSource x) => x.name == name)?.Stop();
	}

	private void OnWinAudio()
	{
		StopSourceByName(bgTheme.name);
		PlaySoundFXClip(winSfx, base.transform, 1f, false);
	}

	private void OnLoseAudio()
	{
		StopSourceByName(bgTheme.name);
		PlaySoundFXClip(loseSfx, base.transform, 1f, false);
	}
}
