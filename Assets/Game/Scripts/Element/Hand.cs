using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Hand : MonoBehaviour
{
    [SerializeField] List<Transform> destinations;
    [SerializeField] List<Pin> linkedPins;
    [SerializeField] SpriteOutline linkedOutline;
    [SerializeField] float waitTime;
    [SerializeField] GameObject inputManager;
    private void Awake()
    {
        linkedOutline.onGlowComplete += ActivateHand;

        inputManager.SetActive(false);
        gameObject.SetActive(false);
    }

    private void OnEnable()
    {
        foreach (var pin in linkedPins)
        {
            pin.onClick += DeactivateHand;
        }
    }
    private void OnDisable()
    {
        foreach (var pin in linkedPins)
        {
            pin.onClick -= DeactivateHand;
        }
    }
    private void Start()
    {
        StartCoroutine(MoveToDestinations());
    }
    private IEnumerator MoveToDestinations()
    {
        if (destinations.Count == 0) yield break;

        inputManager.SetActive(true);

        while (true)
        {
            foreach(var destination in destinations)
            {
                yield return new WaitForSeconds(waitTime);

                transform.DOMove(destination.position, 0.5f);
            }
        }
    }

    //private void HandFlip()
    //{
    //    Vector3 handRotation = new Vector3(0, 0, transform.rotation.eulerAngles.z * -1);
    //    transform.rotation = Quaternion.Euler(handRotation);    
    //    GetComponent<SpriteRenderer>().flipX = !GetComponent<SpriteRenderer>().flipX;

    //    if(GetComponent<SpriteRenderer>().flipX)
    //    {
    //        isRight = false; 
    //    }
    //    else
    //    {
    //        isRight = true;    
    //    }
    //    onHandFlip?.Invoke();    
    //}
    private void ActivateHand()
    {
        gameObject.SetActive(true);

        linkedOutline.onGlowComplete -= ActivateHand;
    }
    private void DeactivateHand()
    {
        gameObject.SetActive(false);
    }
}
