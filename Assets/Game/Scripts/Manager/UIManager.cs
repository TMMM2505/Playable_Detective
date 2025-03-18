using UnityEngine;
using TMPro;
using System.Collections;
public class UIManager : Singleton<UIManager>
{
    [SerializeField] private TMP_Text tutorialText;
    [SerializeField] private GameObject FadeBG;
    [SerializeField] private EndGamePopup endGamePopUp;
    //[SerializeField] private GameObject timerCountdown; //only appear when win
    private new void Awake()
    {
        GameManager.Instance.onLose += ShowLose;
        GameManager.Instance.onWin += ShowWin;
    }
    private void Start()
    {
        FadeBG.SetActive(false);
    }
    public void ShowLose()
    {
        tutorialText.gameObject.SetActive(false);
        FadeBG.SetActive(true);
        endGamePopUp.buttonText.text = "Replay";

        endGamePopUp.showText += endGamePopUp.ShowLoseText;
        StartCoroutine(endGamePopUp.Activate(2f));
    }

    public void ShowWin()
    {
        tutorialText.gameObject.SetActive(false);
        FadeBG.SetActive(true);
        endGamePopUp.buttonText.text = "Continue";

        endGamePopUp.showText += endGamePopUp.ShowVictoryText;
        StartCoroutine(endGamePopUp.Activate(2f));
    }
}
