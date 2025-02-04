using System.Collections;
using DG.Tweening;
using UnityEngine;

public class CameraFollower : Singleton<CameraFollower>
{
	[SerializeField]
	private ViewportHandler viewportHandler;

	private void Awake()
	{
		base.transform.position = new Vector3(0f, 0f, -10f);
		viewportHandler.UnitsSize = 10f;
	}

	public IEnumerator OnLose()
	{
		viewportHandler.enabled = false;
		yield return new WaitForSeconds(0.01f);
		Camera.main.orthographicSize = 3.5f;
		Vector3 goal = new Vector3(-1.4f, -1.5f, -10f);
		base.transform.DOMove(goal, 0.5f).SetEase(Ease.Linear);
	}
}
