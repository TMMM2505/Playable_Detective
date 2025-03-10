using UnityEngine;
using TMPro;
using Spine.Unity;
using Spine;
using System;
using System.Collections;
public class UIManager : Singleton<UIManager>
{
    [SerializeField] private TMP_Text tutorialText;
    [SerializeField] private GameObject FadeBG;
    [SerializeField] private EndGamePopup endGamePopUp;
    [SerializeField] SkeletonAnimation rewardBox; //only appear when win
    private new void Awake()
    {
        GameManager.Instance.onLose += ShowLose;
        GameManager.Instance.onWin += ShowWin;
    }
    private void Start()
    {
        rewardBox.gameObject.SetActive(false);  
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

        StartCoroutine(RewardBoxActivate(2f));
    }
    private IEnumerator RewardBoxActivate(float timeWait)
    {
        yield return new WaitForSeconds(timeWait);

        rewardBox.gameObject.SetActive(true);
        rewardBox.loop = false; 
        rewardBox.AnimationName = "Open";
        rewardBox.AnimationState.Complete += RewardBoxLOpenIdle;

        void RewardBoxLOpenIdle(TrackEntry trackEntry)
        {
            rewardBox.loop = true;
            rewardBox.AnimationName = "Idle";
        }
    }
}
