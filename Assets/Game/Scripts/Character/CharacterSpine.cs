using UnityEngine;
using Spine.Unity;
using System;
using Spine;

public abstract class CharacterSpine : MonoBehaviour, IObjectChecker
{
    [SerializeField] protected SkeletonAnimation anim;

    internal ECharacterState state;

    public GameObject CheckedGameObject => gameObject;

    public Vector3 Position => transform.position;

    public bool IsCompleted { get; set; }

    public Vector3 CenterPosition => throw new NotImplementedException();

    private void Start()
    {
        state = ECharacterState.Idle;
        SetAnim(Constant.animIdle, true);
    }
    public void SetAnim(string animName, bool loop, Spine.AnimationState.TrackEntryDelegate onComplete = null)
    {
        anim.loop = loop;
        anim.AnimationName = animName;
        anim.AnimationState.Complete += onComplete;
    }

    public void ChangeSkin(string skinName)
    {
        var skin = new Skin("temp");
        skin.AddSkin(anim.skeleton.Data.FindSkin(skinName));
        anim.initialSkinName = "temp";
        anim.skeleton.SetSkin(skin);
        anim.skeleton.SetSlotsToSetupPose();
        anim.LateUpdate();
        anim.AnimationState.Apply(anim.skeleton);
    }
}
public enum ECharacterState
{
    Idle,
    Move,
    Attack,
    Dead,
    Invincible
}