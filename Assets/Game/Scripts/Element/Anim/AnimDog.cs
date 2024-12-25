using Spine;

public class AnimDog : Anim
{
    public override void OnStart()
    {
        anim.AnimationState.Complete += NextAnim;
        
        //Idle
        var animationName = tracks[0];
        anim.AnimationState.SetAnimation(0, animationName, true);
    }

    public void DrinkDrag()
    {
        var animationName = tracks[1];
        anim.AnimationState.SetAnimation(1, animationName, false);
    }
    
    public override void NextAnim(TrackEntry trackEntry)
    {
        int i = (int)trackEntry.TrackIndex;
        if (i != 0)
        {
            i++;
            if (i < tracks.Count)
            {
                var animationName = tracks[i];
                anim.AnimationState.SetAnimation(i, animationName, false);
            }
        }
    }
}
