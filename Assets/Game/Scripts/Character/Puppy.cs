using System.Collections;
using UnityEngine;

public class Puppy : CharacterSpine
{
    [Header("Puppy Audio")]
    [SerializeField] AudioClip gruntSfx;
    [SerializeField] AudioClip v2AttackSfx;
    [SerializeField] AudioClip dieSfx;

    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(RandomRoarIntervalLoop());   
    }

    private IEnumerator RandomRoarIntervalLoop()
    {
        yield return new WaitForSeconds(.75f);

        SoundManager.Instance.PlaySoundFXClip(gruntSfx, 1, false); //initial sound

        while (!GameManager.Instance.gameOver)
        {
            yield return new WaitForSeconds(6.75f);

            SoundManager.Instance.PlaySoundFXClip(gruntSfx, 1, false);
        }
        StopCoroutine(RandomRoarIntervalLoop());
    }
}
