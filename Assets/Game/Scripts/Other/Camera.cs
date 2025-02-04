using System.Collections;
using UnityEngine;
using DG.Tweening;
public class CameraFollower : Singleton<CameraFollower>
{
    [SerializeField] private ViewportHandler viewportHandler;

    private void Awake()
    {
        transform.position = new Vector3(0, 0, -10);
        viewportHandler.UnitsSize = 10;
    }

    public IEnumerator OnLose()
    {
        // for (int i = 10; i >= 6; i--)
        // {
        //     // viewportHandler.UnitsSize = i;
        //     yield return new WaitForSeconds(0.01f);
        // }
        viewportHandler.enabled = false;
        yield return new WaitForSeconds(0.01f);
        
        Camera.main.orthographicSize = 3.5f;
        Vector3 goal = new Vector3(-1.4f, -1.5f, -10);
        transform.DOMove(goal, 0.5f)
            .SetEase(Ease.Linear);
    }
}
