using UnityEngine;
using Spine.Unity;
using System;
using Spine;
using System.Collections;

public abstract class CharacterSpine : MonoBehaviour
{
    [SerializeField] protected SkeletonAnimation anim;
    [SerializeField] protected SpriteOutline linkedOutline; //this could be anything, mainly use for event after glow complete

    internal ECharacterState state;

    private void Start()
    {
        state = ECharacterState.Idle;
        SetAnim(Constant.animIdle, true);
    }
    public void SetAnim(string animName, bool loop, Action onComplete = null)
    {
        if (anim.name == animName) return;

        anim.loop = loop;
        anim.AnimationName = animName;

        var currentAnimationData = anim.Skeleton.Data.FindAnimation(animName);
        StartCoroutine(InvokeActionAfterComplete(currentAnimationData.Duration));

        IEnumerator InvokeActionAfterComplete(float waitTime)
        {
            yield return new WaitForSeconds(waitTime);  

            onComplete?.Invoke();
        }
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