using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WereWolf : CharacterSpine
{
    [SerializeField] private AudioClip roarSfx;
    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(RandomRoarIntervalLoop());   
    }

    private IEnumerator RandomRoarIntervalLoop()
    {
        while (true)
        {
            float waitTime = Random.Range(7f, 15f);

            yield return new WaitForSeconds(waitTime);

            WolfRoar();
        }
    }
    private void WolfRoar()
    {
        SetAnim(Constant.animWolfRoar, false);
        anim.AnimationState.Complete += DefaultAnimOnComplete;

        SoundManager.Ins.PlaySoundFXClip(roarSfx, transform, 1, false);
    }

    private void DefaultAnimOnComplete(Spine.TrackEntry trackEntry)
    {
        SetAnim(Constant.animIdle, false);
    }
}
