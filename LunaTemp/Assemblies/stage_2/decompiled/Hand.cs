using System.Collections;
using DG.Tweening;
using UnityEngine;

public class Hand : MonoBehaviour
{
	[SerializeField]
	private Animator anim;

	private void Start()
	{
		StartCoroutine(LoopClick());
	}

	public void SetClick(Vector2 position, Transform parent)
	{
		base.transform.SetParent(parent);
		if (Singleton<LevelManager>.Ins.IsEndCard)
		{
			base.transform.DOMove(position, 0.2f).SetEase(Ease.Linear).OnComplete(delegate
			{
				StopAllCoroutines();
				StartCoroutine(LoopClick());
			});
		}
		else
		{
			base.transform.position = position;
		}
	}

	private void RunAnim()
	{
		Singleton<SoundManager>.Ins.PlaySound("Click", false);
		anim.ResetTrigger("click");
		anim.SetTrigger("click");
	}

	private IEnumerator LoopClick()
	{
		RunAnim();
		yield return new WaitForSeconds(1f);
		StartCoroutine(LoopClick());
	}
}
