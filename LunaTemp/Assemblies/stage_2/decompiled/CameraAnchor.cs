using System.Collections;
using UnityEngine;

[ExecuteInEditMode]
public class CameraAnchor : MonoBehaviour
{
	public enum AnchorType
	{
		BottomLeft,
		BottomCenter,
		BottomRight,
		MiddleLeft,
		MiddleCenter,
		MiddleRight,
		TopLeft,
		TopCenter,
		TopRight
	}

	public AnchorType anchorType;

	public Vector3 anchorOffset;

	private IEnumerator updateAnchorRoutine;

	private void Start()
	{
		updateAnchorRoutine = UpdateAnchorAsync();
		StartCoroutine(updateAnchorRoutine);
	}

	private IEnumerator UpdateAnchorAsync()
	{
		uint cameraWaitCycles = 0u;
		while (ViewportHandler.Instance == null)
		{
			uint num = cameraWaitCycles + 1;
			cameraWaitCycles = num;
			yield return new WaitForEndOfFrame();
		}
		if (cameraWaitCycles != 0)
		{
			MonoBehaviour.print($"CameraAnchor found ViewportHandler instance after waiting {cameraWaitCycles} frame(s). You might want to check that ViewportHandler has an earlie execution order.");
		}
		UpdateAnchor();
		updateAnchorRoutine = null;
	}

	private void UpdateAnchor()
	{
		switch (anchorType)
		{
		case AnchorType.BottomLeft:
			SetAnchor(ViewportHandler.Instance.BottomLeft);
			break;
		case AnchorType.BottomCenter:
			SetAnchor(ViewportHandler.Instance.BottomCenter);
			break;
		case AnchorType.BottomRight:
			SetAnchor(ViewportHandler.Instance.BottomRight);
			break;
		case AnchorType.MiddleLeft:
			SetAnchor(ViewportHandler.Instance.MiddleLeft);
			break;
		case AnchorType.MiddleCenter:
			SetAnchor(ViewportHandler.Instance.MiddleCenter);
			break;
		case AnchorType.MiddleRight:
			SetAnchor(ViewportHandler.Instance.MiddleRight);
			break;
		case AnchorType.TopLeft:
			SetAnchor(ViewportHandler.Instance.TopLeft);
			break;
		case AnchorType.TopCenter:
			SetAnchor(ViewportHandler.Instance.TopCenter);
			break;
		case AnchorType.TopRight:
			SetAnchor(ViewportHandler.Instance.TopRight);
			break;
		}
	}

	private void SetAnchor(Vector3 anchor)
	{
		Vector3 newPos = anchor + anchorOffset;
		if (!base.transform.position.Equals(newPos))
		{
			base.transform.position = newPos;
		}
	}
}
