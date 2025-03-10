using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Hand : MonoBehaviour
{
    [SerializeField] List<Transform> destinations;
    [SerializeField] float waitTime;

    internal Action onHandFlip;
    internal bool isRight;

    private void Awake()
    {
        InputReceiver.onFirstClick += DeactivateHand;
    }
    private void Start()
    {
        StartCoroutine(MoveToDestinations());
    }
    private IEnumerator MoveToDestinations()
    {
        onHandFlip?.Invoke(); //initial position invoke

        while (true)
        {
            foreach(var destination in destinations)
            {
                yield return new WaitForSeconds(waitTime);

                transform.DOMove(destination.position, 0.5f).onComplete += HandFlip;
            }
        }
    }

    private void HandFlip()
    {
        Vector3 handRotation = new Vector3(0, 0, transform.rotation.eulerAngles.z * -1);
        transform.rotation = Quaternion.Euler(handRotation);    
        GetComponent<SpriteRenderer>().flipX = !GetComponent<SpriteRenderer>().flipX;

        if(GetComponent<SpriteRenderer>().flipX)
        {
            isRight = false; 
        }
        else
        {
            isRight = true;    
        }
        onHandFlip?.Invoke();    
    }

    private void DeactivateHand()
    {
        gameObject.SetActive(false);
        InputReceiver.onFirstClick -= DeactivateHand;
    }
}
