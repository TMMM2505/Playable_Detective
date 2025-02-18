using System;
using UnityEngine;

public class DeviceOrientationDetection : MonoBehaviour
{
    internal static event Action onPortraitMode;
    internal static event Action onLandscapeMode;

    private bool isLandscape; // Track the last known orientation

    void Start()
    {
        isLandscape = Screen.width > Screen.height;
        TriggerEvent(); // Initial event trigger
    }

    void Update()
    {
        bool newIsLandscape = Screen.width > Screen.height;
        if (newIsLandscape != isLandscape) // Only trigger if orientation actually changes
        {
            isLandscape = newIsLandscape;
            TriggerEvent();
        }
    }

    private void TriggerEvent()
    {
        if (isLandscape)
            onLandscapeMode?.Invoke();
        else
            onPortraitMode?.Invoke();
    }
}