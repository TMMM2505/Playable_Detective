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
    private bool isCircularMotion;
    private CircleMazeRotateDirection lastDirection;

    internal static event Action<CircleMazeRotateDirection, float, float> rotateCircleMazeEvent;
    internal static event Action stopRotateCircleMazeEvent;
    internal static event Action isFirstClick;

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
        int circularMotionHoldTime = 0;
        bool circularMotionExit = false;
        Vector2 mousePosition;

        void OnCircularMotionExitReset()
        {
            if (circularMotionExit)
            {
                _touchPoints[1] = mousePosition;
            }
        }

        while (true)
        {
            if (_isEnableInput && Input.GetMouseButton(0) && IsPointerOverUIObject() == false)
            {
                mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
                isFirstClick?.Invoke();

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
                    float differenceX = mousePosition.x - _touchPoints[1].x;
                    float differenceY = mousePosition.y - _touchPoints[1].y;
                    float distance = Mathf.Abs(differenceX);

                    if (_isRotating == false)
                    {
                        if (_touchPoints[1].x > _touchPoints[0].x)
                        {
                            rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Right, _touchPoints[1].y, distance);
                            lastDirection = CircleMazeRotateDirection.Right;
                        }
                        else
                        {
                            rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Left, _touchPoints[1].y, distance);
                            lastDirection = CircleMazeRotateDirection.Left;
                        }

                        _isRotating = true;

                        _lastTouchPoint = _touchPoints[1];
                    }
                    else
                    {
                        differenceX = mousePosition.x - _lastTouchPoint.x;
                        differenceY = Mathf.Abs(mousePosition.y - _lastTouchPoint.y);
                        distance = Mathf.Abs(differenceX);

                        if(differenceY <= .15f) //change rotation midway if not circling
                        {
                            if (differenceX > 0 && !isCircularMotion)
                            {
                                OnCircularMotionExitReset();

                                //Debug.Log("Right");
                                rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Right, _touchPoints[1].y, distance);
                                lastDirection = CircleMazeRotateDirection.Right;
                            }
                            else if (differenceX < 0 && !isCircularMotion)
                            {
                                OnCircularMotionExitReset();

                                //Debug.Log("Left");
                                rotateCircleMazeEvent.Invoke(CircleMazeRotateDirection.Left, _touchPoints[1].y, distance);
                                lastDirection = CircleMazeRotateDirection.Left;
                            }
                            else
                            {
                                rotateCircleMazeEvent.Invoke(lastDirection, _touchPoints[1].y, distance);

                                if (differenceX == 0)
                                {
                                    circularMotionHoldTime++;
                                }
                                else circularMotionHoldTime = 0;

                                //Debug.Log("Hold time: " + circularMotionHoldTime);
                                if (circularMotionHoldTime >= 4)
                                {
                                    circularMotionExit = true;
                                    isCircularMotion = false;
                                }
                            }
                        }
                        else
                        {
                            circularMotionExit = false;
                            isCircularMotion = true;
                            rotateCircleMazeEvent.Invoke(lastDirection, _touchPoints[1].y, distance);
                        }
                       
                        _lastTouchPoint = mousePosition;
                    }
                }
            }
            else
            {
                if (_isRotating)
                {
                    circularMotionHoldTime = 0;
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
        isCircularMotion = false;
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
    public void TriggerCTA()
    {
        Debug.Log("triggerCTA");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.detective.mansion.pullpin.puzzle");
        Luna.Unity.LifeCycle.GameEnded();
    }
}
