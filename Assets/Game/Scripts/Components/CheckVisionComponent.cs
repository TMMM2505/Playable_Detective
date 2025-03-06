using UnityEngine;

public class CheckVisionComponent : MonoBehaviour
{
    [SerializeField] float distane = 10f;
    [SerializeField] LayerMask layerMark;
    [SerializeField, Range(-5, 5)] float offsetBottom = 0.15f;
    [SerializeField, Range(0, 5)] float offsetTop = 1;

    public IObjectChecker CheckVisionRight()
    {
        return CheckVision(true);
    }

    public IObjectChecker CheckVisionLeft()
    {
        return CheckVision(false);
    }

    public float Distance
    {
        get => distane;
        set => distane = value;
    }

    /// <summary>
    /// check target is visible in vision
    /// </summary>
    /// <param name="isRight"> true is right derection, false is left derection</param>
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

        if (hit.collider != null) //offset bottom check
        { 
            IObjectChecker target = hit.collider.GetComponentInParent<IObjectChecker>();
            if (target != null)
            {
                if (target.CheckedGameObject != this.gameObject && !target.IsCompleted)
                {
                    Debug.Log("object hit: " + target.CheckedGameObject.name);
                    return target;
                }
                else
                {
                    var hits = Physics2D.RaycastAll(this.transform.position + this.transform.up * offsetBottom, direction, distane, layerMark.value);
                    foreach (var h in hits)
                    {
                        //Debug.Log("object hit: " + h.collider.gameObject.name);
                        IObjectChecker htarget = h.collider.GetComponentInParent<IObjectChecker>();

                        if (htarget == null) break;

                        else if (htarget.CheckedGameObject == this.gameObject || htarget.IsCompleted)
                        {
                            continue;
                        }
                        else
                        {
                            return htarget;
                        }
                    }
                }
            }
        }

        hit = Physics2D.Raycast(this.transform.position + this.transform.up * offsetTop, direction, distane, layerMark.value);
#if UNITY_EDITOR
        Debug.DrawRay(transform.position + this.transform.up * offsetTop, direction * distane, Color.green);
#endif

        if (hit.collider != null) //offset top check
        {
            //Debug.Log("Object hit: " + hit.collider.gameObject.name);
            IObjectChecker target = hit.collider.GetComponentInParent<IObjectChecker>();
            if (target != null)
            {
                if (target.CheckedGameObject != this.gameObject && !target.IsCompleted)
                    return target;
                else
                {
                    var hits = Physics2D.RaycastAll(this.transform.position + this.transform.up * offsetTop, direction, distane, layerMark.value);
                    foreach (var h in hits)
                    {
                        IObjectChecker htarget = h.collider.GetComponentInParent<IObjectChecker>();
                        if (htarget == null) break;
                        else if (htarget.CheckedGameObject == this.gameObject || htarget.IsCompleted) continue;
                        else return htarget;
                    }
                }
            }
        }

        return null;
    }

    public GameObject CheckVision(float dis, string tag = null)
    {
        RaycastHit2D hit;
        var direction = this.transform.right;

        hit = Physics2D.Raycast(this.transform.position + this.transform.up * offsetBottom, direction, dis, layerMark.value);
        // Debug.DrawRay(transform.position + this.transform.up * offsetBottom, direction * distane, Color.green);

        if (hit.collider != null)
        {
            if (hit.collider.CompareTag(tag)) return hit.collider.gameObject;
        }

        return null;
    }
}