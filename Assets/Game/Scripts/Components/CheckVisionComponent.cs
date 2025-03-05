using UnityEngine;

public class CheckVisionComponent : MonoBehaviour
{
    [SerializeField] float distane = 10f;
    [SerializeField] LayerMask layerMark;
    [SerializeField, Range(0, 5)] float offsetBottom = 0.15f;
    [SerializeField, Range(0, 5)] float offsetTop = 1;

    public IObjectChecker CheckVisionRight()
    {
        return CheckVision(true);
    }

    public IObjectChecker CheckVisionLeft()
    {
        return CheckVision(false);
    }

    /// <summary>
    /// check target is visible in vision
    /// </summary>
    /// <param name="isRight"> true is right direction, false is left direction</param>
    /// <returns></returns>
    /// 
    private IObjectChecker CheckVision(bool isRight)
    {
        RaycastHit2D hit;
        Vector2 direction = isRight ? Vector2.right : Vector2.left;

        hit = Physics2D.Raycast(this.transform.position + this.transform.up * offsetBottom, direction, distane, layerMark.value);
#if UNITY_EDITOR
        Debug.DrawRay(transform.position + this.transform.up * offsetBottom, direction * distane, Color.green);
#endif

        if (hit.collider != null)
        {
            IObjectChecker target = hit.collider.GetComponent<IObjectChecker>();
            if (target != null && !target.IsCompleted) return target;
        }

        hit = Physics2D.Raycast(this.transform.position + this.transform.up * offsetTop, direction, distane, layerMark.value);
#if UNITY_EDITOR
        Debug.DrawRay(transform.position + this.transform.up * offsetTop, direction * distane, Color.green);
#endif

        print("Object hit: " + hit.transform?.gameObject.name);
        if (hit.collider != null)
        {
            IObjectChecker target = hit.collider.GetComponent<IObjectChecker>();
            if (target != null && !target.IsCompleted) return target;
        }

        return null;
    }

    public GameObject CheckVision(float dis, string tag = null)
    {
        RaycastHit2D hit;
        var direction = this.transform.right;

        hit = Physics2D.Raycast(this.transform.position + this.transform.up * offsetBottom, direction, dis, layerMark.value);
        Debug.DrawRay(transform.position + this.transform.up * offsetBottom, direction * distane, Color.green);

        if (hit.collider != null)
        {
            if (hit.collider.CompareTag(tag)) return hit.collider.gameObject;
        }

        return null;

    }
    public void Stop() { }

    private void OnDrawGizmos()
    {
        CheckVisionLeft();
    }
}