using System;
using System.Collections;
using System.Collections.Generic;
using Spine;
using UnityEngine;
using UnityEngine.PlayerLoop;

public class AnimMadMan : Anim
{
    public Action DragDog;
    public Action AttackGirl;

    private void Start()
    {
        ConnectToGirl();
        ConnectToDog();
    }

    public override void OnStart()
    {
        anim.AnimationState.Complete += NextAnim;
        
        //Idle
        var animationName = tracks[0];
        anim.AnimationState.SetAnimation(0, animationName, true);
    }

    public void OnAttack()
    {
        var animationName = tracks[1];
        anim.AnimationState.SetAnimation(1, animationName, false);
        StartCoroutine(DelayAttack());
    }
    
    public override void NextAnim(TrackEntry trackEntry)
    {
        int i = (int)trackEntry.TrackIndex;
        if (i != 0)
        {
            if (i == 2)
            {
                DragDog?.Invoke();  
            }
            i++;
            if (i < tracks.Count)
            {
                var animationName = tracks[i];
                anim.AnimationState.SetAnimation(i, animationName, false);
            }
        }
    }

    void ConnectToDog()
    {
        DragDog = AnimControler.Ins.AnimDog.DrinkDrag;
    }
    void ConnectToGirl()
    {
        Debug.Log("connect to girl");
        AttackGirl = AnimControler.Ins.AnimGirl.Fall;
    }


    IEnumerator DelayAttack()
    {
        yield return new WaitForSeconds(0.5f);
        AttackGirl?.Invoke();
    }
}
