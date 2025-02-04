using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

public class Anim : MonoBehaviour
{
	[SpineAnimation("", "", true, false)]
	[SerializeField]
	protected List<string> tracks;

	[SerializeField]
	protected SkeletonAnimation anim;

	private void Awake()
	{
		anim = GetComponent<SkeletonAnimation>();
	}

	public void SetAnim(string name, bool loop)
	{
		anim.AnimationState.ClearTracks();
		int index = tracks.IndexOf(name);
		anim.AnimationState.SetAnimation(index, name, loop);
	}
}
