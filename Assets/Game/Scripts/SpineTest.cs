using System;
using System.Collections;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

public class SpineTest : MonoBehaviour
{
    [SpineSkin]
    public string[] combinedSkins;

    [SpineAnimation]
    public string[] tracks;
    
    private Skin combinedSkin;
    private SkeletonAnimation spineObject;
    // Start is called before the first frame update
    void Start()
    {
        spineObject = GetComponent<SkeletonAnimation>();
        combinedSkin = new Skin("combinedSkin");
    }

    private void OnValidate()
    {
        if (spineObject != null && combinedSkin != null)
        {
            for (int i = 0; i < combinedSkins.Length; i++)
            {
                var skinName = combinedSkins[i];
                combinedSkin.AddSkin(spineObject.skeleton.Data.FindSkin(skinName));
            }
            spineObject.skeleton.SetSkin(combinedSkin);
            spineObject.skeleton.SetSlotsToSetupPose();

            for (int i = 0; i < tracks.Length; i++)
            {
                var animationName = tracks[i];
                spineObject.AnimationState.SetAnimation(i, animationName, true);
            }
        }
    }
}
