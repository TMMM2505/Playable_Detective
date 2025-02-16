using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Hand : MonoBehaviour
{
    [SerializeField] List<Transform> destinations;
    [SerializeField] float waitTime;

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
            foreach(var destination in destinations)
            {
                yield return new WaitForSeconds(waitTime);

                transform.DOMove(destination.position, 0.5f);
            }
        }
    }
    private void DeactivateHand()
    {
        gameObject.SetActive(false);
    }
}
