using System;
using Luna.Unity;
using UnityEngine;

public class GameManager : Singleton<GameManager>
{
	internal bool gameOver = false;

	internal Action onLose;

	internal Action onWin;

	private void Start()
	{
		onLose = (Action)Delegate.Combine(onLose, new Action(OnLose));
		onWin = (Action)Delegate.Combine(onWin, new Action(OnWin));
	}

	private void OnLose()
	{
		gameOver = true;
	}

	private void OnWin()
	{
		gameOver = true;
	}

	public void TriggerCTA()
	{
		Debug.Log("triggerCTA");
		Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.detective.mansion.pullpin.puzzle");
		LifeCycle.GameEnded();
	}
}
