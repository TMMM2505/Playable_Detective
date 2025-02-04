using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level : MonoBehaviour
{
	[SerializeField]
	private List<Pin> pins = new List<Pin>();

	[SerializeField]
	private List<Pin> pinsEndCard = new List<Pin>();

	[SerializeField]
	private Hand hand;

	[SerializeField]
	private CameraElement cameraElement;

	[SerializeField]
	private Transform winPositionCamera;

	[SerializeField]
	private Main main;

	[SerializeField]
	private Cat cat;

	[SerializeField]
	private Transform frame;

	private Vector3 originalScale;

	private float originalAspect;

	private int maxScore;

	public Main Main => main;

	public int MaxScore => maxScore;

	public Hand Hand => hand;

	private void Start()
	{
		originalScale = frame.localScale;
		originalAspect = (float)Screen.width / (float)Screen.height;
		UpdateScale();
	}

	private void Update()
	{
		if (Mathf.Abs(originalAspect - (float)Screen.width / (float)Screen.height) > 0.01f)
		{
			UpdateScale();
		}
	}

	private void UpdateScale()
	{
		float currentAspect = (float)Screen.width / (float)Screen.height;
		float scaleFactor = currentAspect / originalAspect;
		Vector3 newScale = originalScale * scaleFactor;
		if (newScale.x >= 0.3f && newScale.x <= 0.45f)
		{
			frame.localScale = newScale;
		}
		else if (newScale.x > 0.43f)
		{
			frame.localScale = new Vector3(0.43f, 0.43f, 0.43f);
		}
		else if (newScale.x < 0.35f)
		{
			frame.localScale = new Vector3(0.35f, 0.35f, 0.35f);
		}
		originalAspect = currentAspect;
	}

	public void SetUp()
	{
		SetTutorial();
		StartCoroutine(SetUpSoundCharacter());
		cameraElement.WinPosition = winPositionCamera.position;
	}

	public void SetTutorial()
	{
		if (Singleton<LevelManager>.Ins.IsEndCard)
		{
			StartCoroutine(ECTutorial());
			return;
		}
		foreach (Pin pin in pins)
		{
			if (Singleton<LevelManager>.Ins.IsEndGame)
			{
				break;
			}
			if (pin.gameObject.activeSelf)
			{
				hand.gameObject.SetActive(true);
				hand.SetClick(pin.Center.position, pin.transform);
				break;
			}
		}
	}

	private IEnumerator ECTutorial()
	{
		for (int i = 0; i < pinsEndCard.Count; i++)
		{
			Pin pin = pinsEndCard[i];
			yield return new WaitForSeconds(2.5f);
			hand.SetClick(pin.Center.position, pin.transform);
			if (i == pinsEndCard.Count - 1)
			{
				i = -1;
			}
		}
	}

	public void OnWin()
	{
		Singleton<SoundManager>.Ins.StopAll();
		main.Anim.SetAnim("TakePhoto", false);
		Singleton<SoundManager>.Ins.PlaySound("TakePhoto", false);
		StartCoroutine(Singleton<UIManager>.Ins.TakePhoto());
		cat.Anim.SetAnim("Happy", true);
	}

	public void OnLose()
	{
		StopAllCoroutines();
		Renderer rendererMain = main.Anim.GetComponent<Renderer>();
		Renderer rendererCat = cat.Anim.GetComponent<Renderer>();
		if ((bool)rendererMain && (bool)rendererCat)
		{
			rendererMain.sortingOrder = 6000;
			rendererCat.sortingOrder = 6500;
		}
		main.Anim.SetAnim("Lose", true);
		cat.Anim.SetAnim("Sad", true);
	}

	public IEnumerator SetUpSoundCharacter()
	{
		for (int i = 5; i < 7; i++)
		{
			if (Singleton<LevelManager>.Ins.IsEndGame)
			{
				break;
			}
			yield return new WaitForSeconds(1f);
			Singleton<SoundManager>.Ins.PlaySound("Rat", false);
			yield return new WaitForSeconds(i);
			if (i == 5 && !Singleton<LevelManager>.Ins.IsEndGame)
			{
				Singleton<SoundManager>.Ins.PlaySound("MainScared", false);
			}
			else if (!Singleton<LevelManager>.Ins.IsEndGame)
			{
				Singleton<SoundManager>.Ins.PlaySound("NeedHelp", false);
				i = 4;
			}
		}
	}
}
