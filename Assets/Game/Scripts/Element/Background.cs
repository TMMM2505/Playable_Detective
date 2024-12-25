using UnityEngine;

public class Background : MonoBehaviour
{
    void Start()
    {
        ScaleBackground();
    }

    void ScaleBackground()
    {
        SpriteRenderer sr = GetComponent<SpriteRenderer>();
        if (sr == null) return;

        transform.localScale = Vector3.one;

        float width = sr.sprite.bounds.size.x;
        float height = sr.sprite.bounds.size.y;

        float worldScreenHeight = Camera.main.orthographicSize * 2f;
        float worldScreenWidth = worldScreenHeight / Screen.height * Screen.width;

        Vector3 scale = transform.localScale;
        scale.x = worldScreenWidth / width;
        scale.y = worldScreenHeight / height;
        transform.localScale = scale;
    }
}
