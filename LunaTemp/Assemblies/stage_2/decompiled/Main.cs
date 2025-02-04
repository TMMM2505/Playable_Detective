using System.Collections;
using UnityEngine;

public class Main : MonoBehaviour
{
	[SerializeField]
	private Anim anim;

	public Anim Anim => anim;

	private void Start()
	{
		anim.SetAnim("BonusAnim/Scared2", true);
	}

	private IEnumerator SetAnimScare()
	{
		yield return new WaitForSeconds(1.5f);
		anim.SetAnim("BonusAnim/Scared2", false);
		StartCoroutine(SetAnimScare());
	}
}
