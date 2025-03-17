using UnityEngine;

public class Floater : MonoBehaviour
{
    [SerializeField] Rigidbody2D rb;
    [SerializeField][Range(0, 1)] float bounceLimit = 0.1f;

    private InteractableWater currentWater;

    void FixedUpdate()
    {
        if(transform.position.y < currentWater?.waterSurfacePos)
        {
            float submergeLength = transform.position.y - currentWater.waterSurfacePos;   
            if(submergeLength < -.5f)
            {
                currentWater.UpdateDimensions(0, submergeLength / 50);
            }

            float displacementHeight = currentWater.waterSurfacePos - transform.position.y;
            float displacementVolume = 3.14f * Mathf.Abs(
                Mathf.Pow(currentWater.GetComponent<MeshRenderer>().bounds.center.x, 2) * displacementHeight);

            //applying buoyancy force equation
            rb.AddForce(new Vector2(0f, currentWater.waterDensity * displacementVolume * 9.8f), ForceMode2D.Force);
        } 
        else if (transform.position.y >= currentWater?.waterSurfacePos + bounceLimit)
        {
            rb.velocity = Vector2.zero;

            if(transform.position.y > currentWater?.waterSurfacePos + 1) currentWater = null;
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.layer == Constant.waterLayer)
        {
            currentWater = collision.gameObject.GetComponent<InteractableWater>();  
        }
    }
}
