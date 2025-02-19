using DG.Tweening;
using TMPro;
using UnityEngine;

public class ElementsOrientationScale : MonoBehaviour
{
    [SerializeField] GameObject level;
    [SerializeField] TMP_Text tutorialText;
    [SerializeField] RectTransform iqSlider;
    [SerializeField] RectTransform endgamePopup;
    [SerializeField] RectTransform gameIcon;

    private void Awake()
    {
        DeviceOrientationDetection.onPortraitMode += LevelMapPortraitTransform;
        DeviceOrientationDetection.onLandscapeMode += LevelMapLandscapeTransform;

        DeviceOrientationDetection.onPortraitMode += SliderCanvasPortraitTransform;
        DeviceOrientationDetection.onLandscapeMode += SliderCanvasLandscapeTransform;

        DeviceOrientationDetection.onPortraitMode += EndgamePopupPortraitTransform;
        DeviceOrientationDetection.onLandscapeMode += EndgamePopupLandscapeTransform;
    }   
    private void LevelMapPortraitTransform()
    {
        level.transform.position = new Vector3(0, 1.7f, 0);
        level.transform.localScale = Vector3.one;
    }
    private void LevelMapLandscapeTransform()
    {
        level.transform.position = new Vector3(0, 3.15f, 0);
        level.transform.localScale = Vector3.one * 1.2f;
    }
    private void SliderCanvasPortraitTransform()
    {
        tutorialText.rectTransform.localPosition = new Vector3(0, 713f, 0);
        tutorialText.fontSize = 65;
        tutorialText.enableWordWrapping = false;

        iqSlider.localPosition = new Vector3(0, 899, 0);
        iqSlider.localScale = Vector3.one * 1.25f;
    }
    private void SliderCanvasLandscapeTransform()
    {
        tutorialText.rectTransform.localPosition = new Vector3(-300f, -18.5f, 0);
        tutorialText.fontSize = 44f;
        tutorialText.enableWordWrapping = true;

        iqSlider.localPosition = new Vector3(-300, 160, 0);
        iqSlider.localScale = Vector3.one * 0.6f;
    }
    private void EndgamePopupPortraitTransform()
    {
        if (GameManager.Ins.gameOver)
        {
            endgamePopup.localPosition = Vector3.up * 69;
            endgamePopup.localScale = Vector3.one;

        }
        gameIcon.gameObject.SetActive(false);
    }
    private void EndgamePopupLandscapeTransform()
    {
        if(GameManager.Ins.gameOver)
        {
            endgamePopup.localPosition = Vector3.up * 10;
            endgamePopup.localScale = Vector3.one * 0.25f;
        }
        gameIcon.gameObject.SetActive(true);
    }
}
