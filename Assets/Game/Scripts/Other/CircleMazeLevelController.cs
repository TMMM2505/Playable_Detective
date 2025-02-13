using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public enum CircleMazeRotateDirection
{
    Left,
    Right
}

public class CircleMazeLevelController : MonoBehaviour
{
    public Rigidbody2D[] circleMazeParts;

    [Header("CUSTOMIZE")]
    [SerializeField] private float torqueStrength;
    [SerializeField] private float angularDrag;

    [Header("MANAGEMENT")]
    private List<Tween> _tweens;
    private Coroutine _rotatingCoroutine;
    private bool _isRotating;

    private void Awake()
    {
        _tweens = new List<Tween>();

        InputManagerLevelCircleMaze.rotateCircleMazeEvent += StartRotate;
        InputManagerLevelCircleMaze.stopRotateCircleMazeEvent += StopRotate;

        // foreach (var item in collider2Ds)
        // {
        //     item.forceReceiveLayers = 0;
        // }
    }

    private void OnDestroy()
    {
        //CommonUtil.StopAllTweens(_tweens);

        InputManagerLevelCircleMaze.rotateCircleMazeEvent -= StartRotate;
        InputManagerLevelCircleMaze.stopRotateCircleMazeEvent -= StopRotate;
    }

    private void StartRotate(CircleMazeRotateDirection circleMazeRotateDirection, float mousePositionY, float distanceBetweenTouches)
    {
        // _rotatingCoroutine = StartCoroutine(Rotating(circleMazeRotateDirection));

        // isTopHalf
        int direction = mousePositionY <= circleMazeParts[0].transform.position.y ? 1 : -1;

        foreach (var item in circleMazeParts)
        {
            if (circleMazeRotateDirection == CircleMazeRotateDirection.Right)
            {
                // Tween.Custom(0, -direction * distanceBetweenTouches * torqueStrength, duration: 0.5f, onValueChange: newVal => item.angularVelocity = newVal, ease: Ease.Linear);
                // item.angularVelocity = new Vector3(0, 0, -direction * distanceBetweenTouches * torqueStrength);
                //item.angularVelocity = -direction * distanceBetweenTouches * torqueStrength;
                // item.AddTorque(-direction * torqueStrength);

                transform.Rotate(0, 0, (torqueStrength + distanceBetweenTouches) * direction);
            }
            else
            {
                // Tween.Custom(0, direction * distanceBetweenTouches * torqueStrength, duration: 0.5f, onValueChange: newVal => item.angularVelocity = newVal, ease: Ease.Linear);
                // item.angularVelocity = new Vector3(0, 0, direction * distanceBetweenTouches * torqueStrength);
                //item.angularVelocity = direction * distanceBetweenTouches * torqueStrength;
                // item.AddTorque(direction * torqueStrength);

                transform.Rotate(0, 0, -(torqueStrength + distanceBetweenTouches) * direction);
            }

            item.angularDrag = 0;
        }
    }

    private void StopRotate()
    {
        // if (_rotatingCoroutine != null)
        // {
        //     StopCoroutine(_rotatingCoroutine);
        // }

        foreach (var item in circleMazeParts)
        {
            item.angularDrag = angularDrag;
            // item.angularVelocity = 0;
        }
    }
}
