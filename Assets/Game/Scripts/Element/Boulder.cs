using UnityEngine;

public class Boulder : MonoBehaviour
{
    [SerializeField] float portraitMass;
    [SerializeField] float landscapeMass;

    private Rigidbody2D rb;

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();

        DeviceOrientationDetection.onLandscapeMode += () => rb.mass = landscapeMass;
        DeviceOrientationDetection.onPortraitMode += () => rb.mass = portraitMass;
    }
}
