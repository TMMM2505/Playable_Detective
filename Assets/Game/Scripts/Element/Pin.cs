using UnityEngine;
using DG.Tweening;
public class Pin : MonoBehaviour
{
    [SerializeField] private Transform head;
    [SerializeField] private Transform end;
    
    public void ActivePin()
    {
        Vector2 direction = head.position - end.position;
        direction *= 3;
        direction += (Vector2) transform.position;
        transform.DOMove(direction, .5f)
            .SetEase(Ease.Linear)
            .OnComplete(() =>
            {
                gameObject.SetActive(false);
            });
    }
}
