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
    [SerializeField] private float spinSpeed;
    [SerializeField] private float angularDrag;

    private void Awake()
    {
        InputManagerLevelCircleMaze.rotateCircleMazeEvent += StartRotate;
        InputManagerLevelCircleMaze.stopRotateCircleMazeEvent += StopRotate;
    }

    private void OnDestroy()
    {
        InputManagerLevelCircleMaze.rotateCircleMazeEvent -= StartRotate;
        InputManagerLevelCircleMaze.stopRotateCircleMazeEvent -= StopRotate;
    }

    private void StartRotate(CircleMazeRotateDirection circleMazeRotateDirection, float mousePositionY, float distanceBetweenTouches)
    {
        int direction = mousePositionY <= circleMazeParts[0].transform.position.y ? 1 : -1;

        foreach (var item in circleMazeParts)
        {
            if (circleMazeRotateDirection == CircleMazeRotateDirection.Right)
            {
                transform.Rotate(0, 0, (spinSpeed + distanceBetweenTouches) * direction);
            }
            else
            {
                transform.Rotate(0, 0, -(spinSpeed + distanceBetweenTouches) * direction);
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
