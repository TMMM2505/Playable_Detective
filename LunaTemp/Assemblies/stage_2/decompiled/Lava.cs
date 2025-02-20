using UnityEngine;

public class Lava : MonoBehaviour
{
	[SerializeField]
	private AudioClip lavaSfx;

	private void OnTriggerEnter2D(Collider2D collision)
	{
		if (collision.gameObject.layer == 6 && !Singleton<GameManager>.Ins.gameOver)
		{
			Singleton<SoundManager>.Ins.PlaySoundFXClip(lavaSfx, base.transform, 1f, false);
		}
	}
}
