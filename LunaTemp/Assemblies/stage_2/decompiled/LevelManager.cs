using System.Collections;
using UnityEngine;

public class LevelManager : Singleton<LevelManager>
{
	[SerializeField]
	private Level levelPrefab;

	[SerializeField]
	private bool isEndCard;

	private bool isEndGame = false;

	private Level currentLevel;

	private int loseCount;

	public bool IsEndGame => isEndGame;

	public bool IsEndCard => isEndCard;

	public Level CurrentLevel => currentLevel;

	private void Start()
	{
		loseCount = 0;
		CreateLevel();
	}

	private void CreateLevel()
	{
		if ((bool)currentLevel && (bool)currentLevel.gameObject)
		{
			Object.DestroyImmediate(currentLevel.gameObject);
		}
		currentLevel = Object.Instantiate(levelPrefab);
		currentLevel.SetUp();
		Singleton<SoundManager>.Ins.StopAll();
		Singleton<SoundManager>.Ins.PlaySound("Background", true);
		Singleton<SoundManager>.Ins.InLava = false;
	}

	public void OnWin()
	{
		currentLevel.OnWin();
		isEndGame = true;
		StartCoroutine(DelayShowWin());
	}

	private IEnumerator DelayShowWin()
	{
		yield return new WaitForSeconds(2f);
		Singleton<UIManager>.Ins.ShowWin();
	}

	public void OnLose()
	{
		isEndGame = true;
		currentLevel.OnLose();
		StartCoroutine(DelayLose());
		Singleton<SoundManager>.Ins.StopAll();
		Singleton<SoundManager>.Ins.PlaySound("Lose", false);
	}

	private IEnumerator DelayReplay()
	{
		yield return new WaitForSeconds(1f);
		CreateLevel();
	}

	private IEnumerator DelayLose()
	{
		StartCoroutine(Singleton<CameraFollower>.Ins.OnLose());
		yield return new WaitForSeconds(1f);
		Singleton<UIManager>.Ins.ShowLose();
	}
}
