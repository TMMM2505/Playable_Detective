using System;
using UnityEngine;

public class DeviceOrientationDetection : MonoBehaviour
{
	internal static bool isLandscape;

	internal static event Action onPortraitMode;

	internal static event Action onLandscapeMode;

	private void Start()
	{
		isLandscape = Screen.width > Screen.height;
		TriggerEvent();
	}

	private void Update()
	{
		bool newIsLandscape = Screen.width > Screen.height;
		if (newIsLandscape != isLandscape)
		{
			isLandscape = newIsLandscape;
			TriggerEvent();
		}
	}

	private void TriggerEvent()
	{
		if (isLandscape)
		{
			DeviceOrientationDetection.onLandscapeMode?.Invoke();
		}
		else
		{
			DeviceOrientationDetection.onPortraitMode?.Invoke();
		}
	}
}
