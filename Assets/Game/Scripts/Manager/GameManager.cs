using System;
using UnityEngine;

public class GameManager : Singleton<GameManager>   
{
    internal bool gameOver = false;
    internal Action onLose;
    internal Action onWin;
    public void TriggerCTA()
    {
        Debug.Log("triggerCTA");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.detective.mansion.pullpin.puzzle");
        Luna.Unity.LifeCycle.GameEnded();
    }
}
