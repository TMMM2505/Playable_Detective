using UnityEngine;
using Spine.Unity;
using System;
using Spine;
using System.Collections;

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