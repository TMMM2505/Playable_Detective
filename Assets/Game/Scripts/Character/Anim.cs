using Spine.Unity;
using System.Collections.Generic;
using UnityEngine;

public class Anim : MonoBehaviour
{
    [SpineAnimation]
    [SerializeField] protected List<string> tracks;
    [SerializeField] protected SkeletonAnimation anim;
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
