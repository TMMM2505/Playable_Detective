using Spine.Unity;
using UnityEngine;

public abstract class CharacterSpine : MonoBehaviour
{
	[SerializeField]
	protected SkeletonAnimation anim;

	public void SetAnim(string animName, bool loop)
	{
		anim.loop = loop;
		anim.AnimationName = animName;
	}
}
