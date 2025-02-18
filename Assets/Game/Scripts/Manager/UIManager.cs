using UnityEngine;
using TMPro;
public class UIManager : Singleton<UIManager>
{
    [SerializeField] private TMP_Text tutorialText;
    [SerializeField] private GameObject FadeBG;
    [SerializeField] private EndGamePopup endGamePopUp;
    private void Awake()
    {
        GameManager.Ins.onLose += ShowLose;
        GameManager.Ins.onWin += ShowWin;
    }
    private void Start()
    {
        FadeBG.SetActive(false);
    }
    public void ShowLose()
    {
        tutorialText.gameObject.SetActive(false);
        FadeBG.SetActive(true);

        endGamePopUp.showText += endGamePopUp.ShowLoseText;
        endGamePopUp.Activate();
    }

    public void ShowWin()
    {
        tutorialText.gameObject.SetActive(false);
        FadeBG.SetActive(true);

        endGamePopUp.showText += endGamePopUp.ShowVictoryText;
        endGamePopUp.Activate();
    }
}
