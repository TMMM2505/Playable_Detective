using UnityEngine;

public class Cat : MonoBehaviour
{
	[SerializeField]
	private Anim anim;

	public Anim Anim => anim;

	private void Start()
	{
		anim.SetAnim("Idle", true);
	}
}
