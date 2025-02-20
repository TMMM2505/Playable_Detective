using System;
using System.Collections;
using UnityEngine;

public class Main : CharacterSpine
{
	[SerializeField]
	private AudioClip mainScared;

	[SerializeField]
	private AudioClip helpMe;

	[SerializeField]
	private AudioClip getHitSfx;

	[SerializeField]
	private AudioClip wereWolfAttackHit;

	[SerializeField]
	private AudioClip mainWin;

	private void Awake()
	{
		GameManager ins = Singleton<GameManager>.Ins;
		ins.onWin = (Action)Delegate.Combine(ins.onWin, new Action(MainWin));
	}

	private void Start()
	{
		Singleton<SoundManager>.Ins.PlaySoundFXClip(mainScared, base.transform, 1f, false, delegate
		{
			Singleton<SoundManager>.Ins.PlaySoundFXClip(helpMe, base.transform, 1f, false);
		});
		StartCoroutine(RandomHelpIntervalLoop());
	}

	private IEnumerator RandomHelpIntervalLoop()
	{
		while (true)
		{
			float waitTime = UnityEngine.Random.Range(7f, 15f);
			yield return new WaitForSeconds(waitTime);
			Singleton<SoundManager>.Ins.PlaySoundFXClip(helpMe, base.transform, 1f, false);
		}
	}

	private void MainDie()
	{
		StopAllCoroutines();
		Singleton<SoundManager>.Ins.PlaySoundFXClip(getHitSfx, base.transform, 1f, false);
		SetAnim("Fall2", false);
	}

	private void MainWin()
	{
		StopAllCoroutines();
		Singleton<SoundManager>.Ins.PlaySoundFXClip(mainWin, base.transform, 1f, false);
		SetAnim("Win3", true);
	}

	private void OnTriggerEnter2D(Collider2D collision)
	{
		if (collision.gameObject.layer == 6)
		{
			Singleton<SoundManager>.Ins.PlaySoundFXClip(wereWolfAttackHit, base.transform, 1f, false);
			MainDie();
		}
	}
}
