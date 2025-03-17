using UnityEngine;

public class Floater : MonoBehaviour
{
    [SerializeField] Rigidbody2D rb;
    [SerializeField] float displacementConstant = 1.5f;
    [SerializeField] float depthBeforeSubmerged = 3;
    [SerializeField] InteractableWater currentWater;
 
    private bool inContactWithWater;

    void FixedUpdate()
    {
        rb.AddForce(new Vector2(0, -(rb.mass * 9.8f)), ForceMode2D.Force);

        if(transform.position.y < currentWater?.waterSurfacePos)
        {
            float submergeLength = transform.position.y - currentWater.waterSurfacePos;   
            if(submergeLength < -.5f)
            {
                currentWater.UpdateDimensions(0, submergeLength / 50);
            }

            float displacementMultiplier = Mathf.Clamp01((currentWater.waterSurfacePos - transform.position.y) / depthBeforeSubmerged);
            float displacementMass = displacementConstant + displacementMultiplier;  
            rb.AddForce(new Vector2(0f, displacementMass * 9.8f), ForceMode2D.Force);
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.layer == Constant.waterLayer)
        {
            currentWater = collision.gameObject.GetComponent<InteractableWater>();  
        }
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        if (transform.position.y > currentWater.waterSurfacePos)
        {
            rb.velocity = Vector2.zero;
        }
    }
}
