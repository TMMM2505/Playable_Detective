using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class InputManagerLevelCircleMaze : MonoBehaviour
{
	[Header("CUSTOMIZE")]
	[SerializeField]
	private float newInputThreshold;

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
		StartCoroutine(DetectInput());
	}

	private IEnumerator DetectInput()
	{
		WaitForSeconds waitForSometimes = new WaitForSeconds(0.02f);
		int circularMotionHoldTime = 0;
		bool circularMotionExit = false;
		Vector2 mousePosition;
		while (true)
		{
			if (_isEnableInput && Input.GetMouseButton(0) && !IsPointerOverUIObject())
			{
				mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
				InputManagerLevelCircleMaze.isFirstClick?.Invoke();
				if (_touchPoints.Count < 2)
				{
					if (_touchPoints.Count == 0)
					{
						_touchPoints.Add(mousePosition);
					}
					else
					{
						float distance3 = Mathf.Abs(mousePosition.x - _touchPoints[0].x);
						if (distance3 > newInputThreshold)
						{
							_touchPoints.Add(mousePosition);
						}
					}
				}
				else
				{
					float differenceX2 = mousePosition.x - _touchPoints[1].x;
					_ = mousePosition.y - _touchPoints[1].y;
					float distance2 = Mathf.Abs(differenceX2);
					if (!_isRotating)
					{
						if (_touchPoints[1].x > _touchPoints[0].x)
						{
							InputManagerLevelCircleMaze.rotateCircleMazeEvent(CircleMazeRotateDirection.Right, _touchPoints[1].y, distance2);
							lastDirection = CircleMazeRotateDirection.Right;
						}
						else
						{
							InputManagerLevelCircleMaze.rotateCircleMazeEvent(CircleMazeRotateDirection.Left, _touchPoints[1].y, distance2);
							lastDirection = CircleMazeRotateDirection.Left;
						}
						_isRotating = true;
						_lastTouchPoint = _touchPoints[1];
					}
					else
					{
						differenceX2 = mousePosition.x - _lastTouchPoint.x;
						float differenceY = Mathf.Abs(mousePosition.y - _lastTouchPoint.y);
						distance2 = Mathf.Abs(differenceX2);
						if (differenceY <= 0.15f)
						{
							if (differenceX2 > 0f && !isCircularMotion)
							{
								OnCircularMotionExitReset();
								InputManagerLevelCircleMaze.rotateCircleMazeEvent(CircleMazeRotateDirection.Right, _touchPoints[1].y, distance2);
								lastDirection = CircleMazeRotateDirection.Right;
							}
							else if (differenceX2 < 0f && !isCircularMotion)
							{
								OnCircularMotionExitReset();
								InputManagerLevelCircleMaze.rotateCircleMazeEvent(CircleMazeRotateDirection.Left, _touchPoints[1].y, distance2);
								lastDirection = CircleMazeRotateDirection.Left;
							}
							else
							{
								InputManagerLevelCircleMaze.rotateCircleMazeEvent(lastDirection, _touchPoints[1].y, distance2);
								circularMotionHoldTime = ((differenceX2 == 0f) ? (circularMotionHoldTime + 1) : 0);
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
							InputManagerLevelCircleMaze.rotateCircleMazeEvent(lastDirection, _touchPoints[1].y, distance2);
						}
						_lastTouchPoint = mousePosition;
					}
				}
			}
			else if (_isRotating)
			{
				circularMotionHoldTime = 0;
				StopRotate();
			}
			yield return waitForSometimes;
		}
		void OnCircularMotionExitReset()
		{
			if (circularMotionExit)
			{
				_touchPoints[1] = mousePosition;
			}
		}
	}

	private void PauseRotate()
	{
		InputManagerLevelCircleMaze.stopRotateCircleMazeEvent();
	}

	private void StopRotate()
	{
		InputManagerLevelCircleMaze.stopRotateCircleMazeEvent();
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
}
