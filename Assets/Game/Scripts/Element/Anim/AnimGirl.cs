using UnityEngine;

public class AnimGirl : Anim
{
    public override void OnStart()
    {
        anim.AnimationState.Complete += NextAnim;
        
        //Idle
        var animationName = tracks[0];
        anim.AnimationState.SetAnimation(0, animationName, true);
    }
    public void Fall()
    {
        Debug.Log("Fall");
        var animationName = tracks[1];
        anim.AnimationState.SetAnimation(1, animationName, false);
    }
}
