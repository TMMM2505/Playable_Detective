using UnityEngine;

public class LoseTriggerArea : MonoBehaviour
{
    [SerializeField] int boulderLimit;

    private int boulderFellOffNum = 0;
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.layer == Constant.boulderLayer)
        {
            boulderFellOffNum++;

            if(boulderFellOffNum >= boulderLimit)
            {
                GameManager.Instance.onLose?.Invoke();
            }
        }
    }
}
