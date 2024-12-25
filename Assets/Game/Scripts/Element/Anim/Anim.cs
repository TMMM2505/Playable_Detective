using System.Collections.Generic;
using UnityEngine;
using Spine;
using Spine.Unity;
public class Anim : MonoBehaviour
{
    [SpineAnimation]
    [SerializeField] protected List<string> tracks;
    [SerializeField] protected SkeletonAnimation anim;

    public virtual void OnStart()
    {
        
    }

    public virtual void NextAnim(TrackEntry trackEntry)
    {
        
    }
    /*
     *  for (int i = 0; i < tracks.Length; i++)
        {
            var animationName = tracks[i];
            anim.AnimationState.SetAnimation(i, animationName, true);
        }
     */
}
