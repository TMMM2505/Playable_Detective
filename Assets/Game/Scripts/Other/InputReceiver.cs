using UnityEngine;

public class InputReceiver : MonoBehaviour
{
    private void Start()
    {
        GameManager.Instance.nextLevel += TurnOffInput;
    }
    void Update()
    {
        if (Input.GetMouseButton(0))
        {
            HandleTarget();
        }
    }

    void HandleTarget()
    {
        Vector3 mousePos = Input.mousePosition;
        mousePos = Camera.main.ScreenToWorldPoint(new Vector3(mousePos.x, mousePos.y, -10));

        Vector3 direction = mousePos - Camera.main.transform.position;

        RaycastHit2D hit = Physics2D.Raycast(mousePos, direction, Mathf.Infinity);
        RaycastHit2D[] hits = Physics2D.RaycastAll(hit.point, Vector2.zero, Mathf.Infinity);
        for (int i = 0; i < hits.Length; i++)
        {
            if (hits[i].collider && hits[i].collider.GetComponent<Pin>())
            {
                Pin pin = hits[i].collider.gameObject.GetComponent<Pin>();
                if (pin)
                {
                    pin.ActivePin();
                }
            }
        }
    }
    private void TurnOffInput()
    {
        gameObject.SetActive(false);    
    }
}
