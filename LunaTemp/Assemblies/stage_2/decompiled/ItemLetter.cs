using DG.Tweening;
using UnityEngine;

public class ItemLetter : MonoBehaviour
{
	public float duration;

	public float strength;

	public int vibrato;

	private void Start()
	{
		base.transform.DOShakeScale(duration, strength, vibrato, 0f).SetLoops(-1, LoopType.Yoyo);
	}
}
