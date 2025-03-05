using System.Collections;
using UnityEngine;

public class Bodyguard : CharacterSpine
{
    [SerializeField] private AudioClip roarSfx;

    // Start is called before the first frame update
    void Start()
    {
        GameManager.Instance.onLose += WolfAttack;

        StartCoroutine(RandomRoarIntervalLoop());   
    }

    private IEnumerator RandomRoarIntervalLoop()
    {
        while (!GameManager.Instance.gameOver)
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

        //SoundManager.Instance.PlaySoundFXClip(roarSfx, transform, 1, false);
    }
    private void WolfAttack()
    {
        SetAnim(Constant.animWolfAttack, false);
    }

    private void DefaultAnimOnComplete(Spine.TrackEntry trackEntry)
    {
        SetAnim(Constant.animIdle, true);
        anim.AnimationState.Complete -= DefaultAnimOnComplete;
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.layer == Constant.ballLayer && !GameManager.Instance.gameOver)
        {
            StopAllCoroutines();

            SetAnim(Constant.animWolfDieBomb, false);
            GameManager.Instance.onWin?.Invoke();
        }
    }
}
