using System.Collections;
using UnityEngine;

public class Main : CharacterSpine
{
    [Header("Main Audio")]
    [SerializeField] AudioClip mainScared;
    [SerializeField] AudioClip helpMe;
    [SerializeField] AudioClip mainWin;

    private void Start()
    {
        StartCoroutine(RandomHelpIntervalLoop());

        linkedOutline.onGlowComplete += MainCallingForHelp;
        GameManager.Instance.onWin += MainWin;
    }

    private IEnumerator RandomHelpIntervalLoop()
    {
        while (state != ECharacterState.Invincible && !GameManager.Instance.gameOver)
        {
            yield return new WaitForSeconds(6f);

            MainCallingForHelp();
        }
        StopCoroutine(RandomHelpIntervalLoop());
    }
    public void MainCallingForHelp()
    {
        SoundManager.Instance.PlaySoundFXClip(helpMe, 1, false);
        SetAnim(Constant.mainCallForHelp, false, () => SetAnim(Constant.mainPanic, true));
    }

    private void MainWin()
    {
        //SetAnim(Constant.supermainWin, true);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (state == ECharacterState.Attack || state == ECharacterState.Invincible | state == ECharacterState.Dead) return;
    }
}
