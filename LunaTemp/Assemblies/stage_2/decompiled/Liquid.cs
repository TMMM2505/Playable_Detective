using UnityEngine;

public class Liquid : MonoBehaviour
{
	[SerializeField]
	private GameObject liquid;

	[SerializeField]
	private GameObject rock;

	[SerializeField]
	private ParticleSystem steamVFX;

	private new string tag;

	private void OnEnable()
	{
		tag = base.gameObject.tag;
		liquid.SetActive(true);
		rock.SetActive(false);
	}

	private void OnCollisionStay2D(Collision2D other)
	{
		if (!base.gameObject.CompareTag("Rock") && ((other.gameObject.CompareTag("Lava") && tag == "Water") || other.gameObject.CompareTag("Rock")))
		{
			Liquid liquid = other.gameObject.GetComponent<Liquid>();
			liquid.TransferToRock();
			TransferToRock();
		}
	}

	public void TransferToRock()
	{
		base.gameObject.tag = "Rock";
		liquid.SetActive(false);
		rock.SetActive(true);
		Singleton<SoundManager>.Ins.SoundInLava();
		if ((bool)steamVFX)
		{
			steamVFX.Play();
		}
	}
}
