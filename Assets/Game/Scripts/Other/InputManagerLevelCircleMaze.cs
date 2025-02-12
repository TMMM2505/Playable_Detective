using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class InputManagerLevelCircleMaze : MonoBehaviour
{

    [Header("CUSTOMIZE")]
    [SerializeField] private float newInputThreshold;

    [Header("MANAGEMENT")]
    private bool _isEnableInput = true;
    private List<Vector2> _touchPoints;
    private Vector2 _lastTouchPoint;
    private bool _isRotating;

    public static event Action<CircleMazeRotateDirection, float, float> rotateCircleMazeEvent;
    public static event Action stopRotateCircleMazeEvent;

    private void Awake()
    {
        _touchPoints = new List<Vector2>();

        //winLevelEvent.OnRaised += DisableInput;
        //loseLevelEvent.OnRaised += DisableInput;

        StartCoroutine(DetectInput());
    }

    //private void OnDestroy()
    //{
    //    winLevelEvent.OnRaised -= DisableInput;
    //    loseLevelEvent.OnRaised -= DisableInput;
    //}

    private IEnumerator DetectInput()
    {
        WaitForSeconds waitForSometimes = new WaitForSeconds(0.02f);

        while (true)
        {
            if (_isEnableInput && Input.GetMouseButton(0) && IsPointerOverUIObject() == false)
            {
                Vector2 mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);

                if (_touchPoints.Count < 2)
                {
                    if (_touchPoints.Count == 0)
                    {
                        _touchPoints.Add(mousePosition);
                    }
                    else
                    {
                        float distance = Mathf.Abs(mousePosition.x - _touchPoints[0].x);

                        if (distance > newInputThreshold)
                        {
                            _touchPoints.Add(mousePosition);
                        }
                    }
                }
                else
                {
                    float difference = mousePosition.x - _touchPoints[1].x;
                    float distance = Mathf.Abs(difference);

                    if (_isRotating == false)
                    {
                        if (_touchPoints[1].x > _touchPoints[0].x)
                        {
                            rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Right, _touchPoints[1].y, 1);
                        }
                        else
                        {
                            rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Left, _touchPoints[1].y, 1);
                        }

                        _isRotating = true;

                        _lastTouchPoint = _touchPoints[1];
                    }
                    else
                    {
                        difference = mousePosition.x - _lastTouchPoint.x;
                        distance = Mathf.Abs(difference);

                        // if (difference > 0)
                        // {
                        //     rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Right, _touchPoints[1].y, distance);
                        // }
                        // else
                        // {
                        //     rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Left, _touchPoints[1].y, distance);
                        // }

                        if (distance > newInputThreshold)
                        {
                            if (difference > 0)
                            {
                                rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Right, _touchPoints[1].y, 1);
                            }
                            else
                            {
                                rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Left, _touchPoints[1].y, 1);
                            }
                        }
                        else
                        {
                            stopRotateCircleMazeEvent.Invoke();
                        }

                        _lastTouchPoint = mousePosition;
                    }
                }
            }
            else
            {
                if (_isRotating)
                {
                    StopRotate();
                }
            }

            yield return waitForSometimes;
        }
    }

    private void PauseRotate()
    {
        stopRotateCircleMazeEvent.Invoke();
    }

    private void StopRotate()
    {
        stopRotateCircleMazeEvent.Invoke();

        _touchPoints.Clear();

        _isRotating = false;
    }

    private void DisableInput()
    {
        _isEnableInput = false;
    }

    private bool IsPointerOverUIObject()
    {
        PointerEventData eventDataCurrentPosition = new PointerEventData(EventSystem.current)
        {
            position = new Vector2(Input.mousePosition.x, Input.mousePosition.y)
        };

        List<RaycastResult> results = new List<RaycastResult>();

        EventSystem.current.RaycastAll(eventDataCurrentPosition, results);

        return results.Count > 0;
    }
}

//public void TriggerCTA()
//{
//    Debug.Log("triggerCTA");
//    Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.detective.mansion.pullpin.puzzle");
//    Luna.Unity.LifeCycle.GameEnded();
//}
