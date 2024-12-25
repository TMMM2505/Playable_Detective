using UnityEngine;

public class InputReceiver : MonoBehaviour
{
    [SerializeField] private LayerMask pinMask;
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            HandleTarget();
        }
    }

    void HandleTarget()
    {
        Vector3 mousePos = Input.mousePosition;
        mousePos = Camera.main.ScreenToWorldPoint(new Vector3(mousePos.x, mousePos.y, -10));

        Vector3 direction = mousePos - Camera.main.transform.position;

        RaycastHit2D hit = Physics2D.Raycast(mousePos, direction, Mathf.Infinity, pinMask);

        if (hit.collider)
        {
            Pin pin = hit.collider.gameObject.GetComponent<Pin>();
            if (pin)
            {
                pin.ActivePin();
            }
        }
    }
}
