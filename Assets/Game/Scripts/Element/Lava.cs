using UnityEngine;

public class Lava : MonoBehaviour
{
    [SerializeField] AudioClip lavaSfx;
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.layer == Constant.enemyLayer && !GameManager.Instance.gameOver)
        {
            //SoundManager.Instance.PlaySoundFXClip(lavaSfx, transform, 1, false);
        }
    }
}
