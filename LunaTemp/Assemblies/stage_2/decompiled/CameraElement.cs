using System.Collections;
using DG.Tweening;
using UnityEngine;

public class CameraElement : MonoBehaviour
{
	[SerializeField]
	private new SpriteRenderer renderer;

	[SerializeField]
	private ParticleSystem vfxSteam;

	[SerializeField]
	private ParticleSystem vfxBlink;

	private Vector2 winPosition;

	private bool onWin = false;

	public Vector2 WinPosition
	{
		get
		{
			return winPosition;
		}
		set
		{
			winPosition = value;
		}
	}

	private void OnTriggerEnter2D(Collider2D other)
	{
		if (other.gameObject.CompareTag("Ring") && !onWin)
		{
			OnWin();
			onWin = true;
		}
		if (other.gameObject.CompareTag("DeathZone") && !onWin)
		{
			Debug.Log("Lose");
			Singleton<LevelManager>.Ins.OnLose();
			onWin = true;
		}
		if (other.gameObject.CompareTag("Lava") && renderer.enabled)
		{
			renderer.enabled = false;
			vfxBlink.gameObject.SetActive(false);
			vfxSteam.Play();
			Singleton<SoundManager>.Ins.PlaySound("InLava", false);
			StartCoroutine(DelayDestroy(false));
		}
	}

	private IEnumerator DelayDestroy(bool win)
	{
		yield return new WaitForSeconds(1f);
		if (win)
		{
			Singleton<LevelManager>.Ins.OnWin();
		}
		else
		{
			Singleton<LevelManager>.Ins.OnLose();
		}
		base.gameObject.SetActive(false);
	}

	public void OnWin()
	{
		float time = 1f;
		base.transform.DORotate(new Vector3(0f, 0f, 360f), time, RotateMode.WorldAxisAdd).SetEase(Ease.Linear);
		base.transform.DOMove(winPosition, time).SetEase(Ease.Linear);
		base.transform.DOScale(new Vector3(0.1f, 0.1f, 0.1f), time).SetEase(Ease.Linear);
		StartCoroutine(DelayDestroy(true));
	}
}
