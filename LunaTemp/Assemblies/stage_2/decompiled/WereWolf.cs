using System;
using System.Collections;
using Spine;
using UnityEngine;

public class WereWolf : CharacterSpine
{
	[SerializeField]
	private AudioClip roarSfx;

	private void Start()
	{
		GameManager ins = Singleton<GameManager>.Ins;
		ins.onLose = (Action)Delegate.Combine(ins.onLose, new Action(WolfAttack));
		StartCoroutine(RandomRoarIntervalLoop());
	}

	private IEnumerator RandomRoarIntervalLoop()
	{
		while (!Singleton<GameManager>.Ins.gameOver)
		{
			float waitTime = UnityEngine.Random.Range(7f, 15f);
			yield return new WaitForSeconds(waitTime);
			WolfRoar();
		}
	}

	private void WolfRoar()
	{
		SetAnim("Roar", false);
		anim.AnimationState.Complete += DefaultAnimOnComplete;
		Singleton<SoundManager>.Ins.PlaySoundFXClip(roarSfx, base.transform, 1f, false);
	}

	private void WolfAttack()
	{
		SetAnim("Attack", false);
	}

	private void DefaultAnimOnComplete(TrackEntry trackEntry)
	{
		anim.AnimationState.Complete -= DefaultAnimOnComplete;
		SetAnim("Idle", true);
	}

	private void OnTriggerEnter2D(Collider2D collision)
	{
		if (collision.gameObject.layer == 3 && !Singleton<GameManager>.Ins.gameOver)
		{
			StopAllCoroutines();
			SetAnim("Die_Bomb", false);
			Singleton<GameManager>.Ins.onWin?.Invoke();
		}
	}
}
