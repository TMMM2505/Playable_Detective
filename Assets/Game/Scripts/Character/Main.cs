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

        GameManager.Instance.onWin += MainWin;
    }

    private IEnumerator RandomHelpIntervalLoop()
    {
        SoundManager.Instance.PlaySoundFXClip(helpMe, 1, false); //initial sound

        while (state != ECharacterState.Invincible && !GameManager.Instance.gameOver)
        {
            yield return new WaitForSeconds(6f);

            SoundManager.Instance.PlaySoundFXClip(helpMe, 1, false);
        }
        StopCoroutine(RandomHelpIntervalLoop());
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
