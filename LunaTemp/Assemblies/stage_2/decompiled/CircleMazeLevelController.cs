using UnityEngine;

public class CircleMazeLevelController : MonoBehaviour
{
	public Rigidbody2D[] circleMazeParts;

	[Header("CUSTOMIZE")]
	[SerializeField]
	private float spinSpeed;

	[SerializeField]
	private float angularDrag;

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
		int direction = ((mousePositionY <= circleMazeParts[0].transform.position.y) ? 1 : (-1));
		Rigidbody2D[] array = circleMazeParts;
		foreach (Rigidbody2D item in array)
		{
			if (circleMazeRotateDirection == CircleMazeRotateDirection.Right)
			{
				base.transform.Rotate(0f, 0f, (spinSpeed + distanceBetweenTouches) * (float)direction);
			}
			else
			{
				base.transform.Rotate(0f, 0f, (0f - (spinSpeed + distanceBetweenTouches)) * (float)direction);
			}
			item.angularDrag = 0f;
		}
	}

	private void StopRotate()
	{
		Rigidbody2D[] array = circleMazeParts;
		foreach (Rigidbody2D item in array)
		{
			item.angularDrag = angularDrag;
		}
	}
}
