using UnityEngine;
using Spine.Unity;
using System;

public abstract class CharacterSpine : MonoBehaviour, IObjectChecker
{
    [SerializeField] protected SkeletonAnimation anim;

    public abstract bool CanMove { get; }
    public abstract Vector3 Position { get; }
    public abstract bool IsCompleted { get; set; }
    public abstract Action ActionCompleted { get; set; }

    private void Start()
    {
        SetAnim(Constant.animIdle, true);
    }
    public void SetAnim(string animName, bool loop)
    {
        anim.loop = loop;
        anim.AnimationName = animName;
    }
}