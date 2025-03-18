using System.Collections;
using UnityEngine;

public class Main : CharacterSpine
{
    [Header("Main Audio")]
    [SerializeField] AudioClip mainLose;
    [SerializeField] AudioClip helpMe;
    [SerializeField] AudioClip mainWin;

    private void Start()
    {
        StartCoroutine(RandomHelpIntervalLoop());

        linkedOutline.onGlowComplete += MainCallingForHelp;

        GameManager.Instance.onWin += () => MainEndgame(false);
        GameManager.Instance.onWin += () => MainEndgame(true);
    }

    private IEnumerator RandomHelpIntervalLoop()
    {
        while (state != ECharacterState.Invincible && !GameManager.Instance.gameOver)
        {
            yield return new WaitForSeconds(6f);

            MainCallingForHelp();
        }
    }
    public void MainCallingForHelp()
    {
        SoundManager.Instance.PlaySoundFXClip(helpMe, 1, false);
        SetAnim(Constant.mainCallForHelp, false, () => SetAnim(Constant.mainPanic, true));
    }

    private void MainEndgame(bool win)
    {
        StopCoroutine(RandomHelpIntervalLoop());

        SetAnim(Constant.mainEndgame, true);

        if (win)
        {
            SoundManager.Instance.PlaySoundFXClip(mainWin, 1, false);
        }
        else
        {
            SoundManager.Instance.PlaySoundFXClip(mainLose, 1, false);
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (GameManager.Instance.gameOver) return;

        if (collision.gameObject.layer == Constant.playerLayer)
        {
            GameManager.Instance.gameOver = true;
            GameManager.Instance.onWin?.Invoke();
        }
    }
}
