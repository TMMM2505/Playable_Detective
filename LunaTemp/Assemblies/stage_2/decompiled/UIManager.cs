using System;
using TMPro;
using UnityEngine;

public class UIManager : Singleton<UIManager>
{
	[SerializeField]
	private TMP_Text tutorialText;

	[SerializeField]
	private GameObject FadeBG;

	[SerializeField]
	private EndGamePopup endGamePopUp;

	private void Awake()
	{
		GameManager ins = Singleton<GameManager>.Ins;
		ins.onLose = (Action)Delegate.Combine(ins.onLose, new Action(ShowLose));
		GameManager ins2 = Singleton<GameManager>.Ins;
		ins2.onWin = (Action)Delegate.Combine(ins2.onWin, new Action(ShowWin));
	}

	private void Start()
	{
		FadeBG.SetActive(false);
	}

	public void ShowLose()
	{
		tutorialText.gameObject.SetActive(false);
		FadeBG.SetActive(true);
		EndGamePopup endGamePopup = endGamePopUp;
		endGamePopup.showText = (Action)Delegate.Combine(endGamePopup.showText, new Action(endGamePopUp.ShowLoseText));
		StartCoroutine(endGamePopUp.Activate(2f));
	}

	public void ShowWin()
	{
		tutorialText.gameObject.SetActive(false);
		FadeBG.SetActive(true);
		EndGamePopup endGamePopup = endGamePopUp;
		endGamePopup.showText = (Action)Delegate.Combine(endGamePopup.showText, new Action(endGamePopUp.ShowVictoryText));
		StartCoroutine(endGamePopUp.Activate(2f));
	}
}
