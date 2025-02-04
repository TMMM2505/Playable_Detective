using System.Collections;
using DG.Tweening;
using UnityEngine;

public class Pin : MonoBehaviour
{
	[SerializeField]
	private Transform head;

	[SerializeField]
	private Transform end;

	[SerializeField]
	private Transform center;

	public Transform Center => center;

	public void ActivePin()
	{
		Singleton<SoundManager>.Ins.PlaySound("DragPin", false);
		Vector2 direction = end.position - head.position;
		direction.Normalize();
		base.transform.DOMove((Vector2)base.transform.position + direction * 5f, 0.5f).SetEase(Ease.Linear);
		StartCoroutine(DelayDestroy());
	}

	private IEnumerator DelayDestroy()
	{
		yield return new WaitForSeconds(0.5f);
		base.gameObject.SetActive(false);
	}
}
