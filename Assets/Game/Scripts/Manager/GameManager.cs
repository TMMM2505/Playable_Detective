using System;
using UnityEngine;

public class GameManager : Singleton<GameManager>   
{
    internal bool gameOver = false;
    internal Action onLose;
    internal Action onWin;
    // Start is called before the first frame update
    void Start()
    {
        onLose += OnLose;
        onWin += OnWin;
    }

    private void OnLose()
    {
        gameOver = true;
    }
    private void OnWin()
    {
        gameOver = true;
    }
}
