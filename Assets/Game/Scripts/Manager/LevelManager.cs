using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelManager : Singleton<LevelManager>
{
    [SerializeField] private Level levelPrefab;
    [SerializeField] private bool isEndCard;
    private bool isEndGame = false;

    public bool IsEndGame => isEndGame;

    public bool IsEndCard => isEndCard;

    private Level currentLevel;
    public Level CurrentLevel => currentLevel;

    private int loseCount;

    private void Start()
    {
        // UIManager.Ins.ShowGamePlay();
        loseCount = 0;
        CreateLevel();
    }

    void CreateLevel()
    {
        if (currentLevel && currentLevel.gameObject)
        {
            DestroyImmediate(currentLevel.gameObject);
        }
        currentLevel = Instantiate(levelPrefab);
        currentLevel.SetUp();
        SoundManager.Ins.StopAll();
        SoundManager.Ins.PlaySound(Constant.soundBg, true);
        SoundManager.Ins.InLava = false;
    }

    public void OnWin()
    {
        currentLevel.OnWin();
        isEndGame = true;
        StartCoroutine(DelayShowWin());
    }

    IEnumerator DelayShowWin()
    {
        yield return new WaitForSeconds(2f);
        UIManager.Ins.ShowWin();
    }
    public void OnLose()
    {
        // if (loseCount < 1)
        // {
        //     loseCount++;
        //     StartCoroutine(DelayReplay());
        // }
        // else
        {
            isEndGame = true;
            currentLevel.OnLose();
            StartCoroutine(DelayLose());
            SoundManager.Ins.StopAll();
            SoundManager.Ins.PlaySound(Constant.soundLose,false);
        }
    }
    IEnumerator DelayReplay()
    {
        yield return new WaitForSeconds(1f);
        CreateLevel();
    }
    IEnumerator DelayLose()
    {
        StartCoroutine(CameraFollower.Ins.OnLose());
        yield return new WaitForSeconds(1f);
        UIManager.Ins.ShowLose();
    }
}
