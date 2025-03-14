using System.Collections;
using UnityEngine;

public class Puppy : CharacterSpine
{
    [Header("Puppy Audio")]
    [SerializeField] AudioClip callingForHelpSfx;
    [SerializeField] AudioClip dieSfx;

    // Start is called before the first frame update
    void Start()
    {
        linkedOutline.onGlowComplete += PuppyCallingForHelp;

        StartCoroutine(RandomRoarIntervalLoop());   
    }

    private IEnumerator RandomRoarIntervalLoop()
    {
        while (!GameManager.Instance.gameOver)
        {
            yield return new WaitForSeconds(6.75f);

            PuppyCallingForHelp();
        }
        StopCoroutine(RandomRoarIntervalLoop());
    }
    public void PuppyCallingForHelp()
    {
        SoundManager.Instance.PlaySoundFXClip(callingForHelpSfx, 1, false);
        SetAnim(Constant.puppyJumpingForHelp, false, () => SetAnim(Constant.puppyIdle, true));
    }
}
