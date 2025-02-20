using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Hand : MonoBehaviour
{
	[SerializeField]
	private List<Transform> destinations;

	[SerializeField]
	private float waitTime;

	private void Awake()
	{
		InputManagerLevelCircleMaze.isFirstClick += DeactivateHand;
	}

	private void Start()
	{
		StartCoroutine(MoveToDestinations());
	}

	private IEnumerator MoveToDestinations()
	{
		while (true)
		{
			foreach (Transform destination in destinations)
			{
				yield return new WaitForSeconds(waitTime);
				base.transform.DOMove(destination.position, 0.5f);
			}
		}
	}

	private void DeactivateHand()
	{
		base.gameObject.SetActive(false);
	}
}
