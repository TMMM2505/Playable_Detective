using System.Collections;
using UnityEngine;

public class WereWolf : CharacterSpine
{
    [SerializeField] private AudioClip roarSfx;

    // Start is called before the first frame update
    void Start()
    {
        GameManager.Ins.onLose += WolfAttack;

        StartCoroutine(RandomRoarIntervalLoop());   
    }

    private IEnumerator RandomRoarIntervalLoop()
    {
        while (!GameManager.Ins.gameOver)
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
    private void WolfAttack()
    {
        SetAnim(Constant.animWolfAttack, false);
    }

    private void DefaultAnimOnComplete(Spine.TrackEntry trackEntry)
    {
        anim.AnimationState.Complete -= DefaultAnimOnComplete;
        SetAnim(Constant.animIdle, true);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.layer == Constant.ballLayer && !GameManager.Ins.gameOver)
        {
            StopAllCoroutines();

            SetAnim(Constant.animWolfDieBomb, false);
            GameManager.Ins.onWin?.Invoke();
        }
    }
}
