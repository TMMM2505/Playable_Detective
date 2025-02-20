using TMPro;
using UnityEngine;

public class ElementsOrientationScale : MonoBehaviour
{
	[SerializeField]
	private GameObject level;

	[SerializeField]
	private TMP_Text tutorialText;

	[SerializeField]
	private RectTransform iqSlider;

	[SerializeField]
	private RectTransform endgamePopup;

	[SerializeField]
	private RectTransform gameIcon;

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
		level.transform.position = new Vector3(0f, 1.7f, 0f);
		level.transform.localScale = Vector3.one;
	}

	private void LevelMapLandscapeTransform()
	{
		level.transform.position = new Vector3(0f, 3.15f, 0f);
		level.transform.localScale = Vector3.one * 1.2f;
	}

	private void SliderCanvasPortraitTransform()
	{
		tutorialText.rectTransform.localPosition = new Vector3(0f, 713f, 0f);
		tutorialText.fontSize = 65f;
		tutorialText.enableWordWrapping = false;
		iqSlider.localPosition = new Vector3(0f, 899f, 0f);
		iqSlider.localScale = Vector3.one * 1.25f;
	}

	private void SliderCanvasLandscapeTransform()
	{
		tutorialText.rectTransform.localPosition = new Vector3(-300f, -18.5f, 0f);
		tutorialText.fontSize = 44f;
		tutorialText.enableWordWrapping = true;
		iqSlider.localPosition = new Vector3(-300f, 160f, 0f);
		iqSlider.localScale = Vector3.one * 0.6f;
	}

	private void EndgamePopupPortraitTransform()
	{
		if (Singleton<GameManager>.Ins.gameOver)
		{
			endgamePopup.localPosition = Vector3.up * 69f;
			endgamePopup.localScale = Vector3.one;
		}
		gameIcon.gameObject.SetActive(false);
	}

	private void EndgamePopupLandscapeTransform()
	{
		if (Singleton<GameManager>.Ins.gameOver)
		{
			endgamePopup.localPosition = Vector3.up * 10f;
			endgamePopup.localScale = Vector3.one * 0.25f;
		}
		gameIcon.gameObject.SetActive(true);
	}
}
