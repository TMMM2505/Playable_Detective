using System.Collections.Generic;
using UnityEngine;

public class WaterTriggerHandler : MonoBehaviour
{
    [SerializeField] List<AudioClip> waterSplashSfx;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.layer == Constant.boulderLayer)
        {
            int randomIndex = Random.Range(0, waterSplashSfx.Count);

            SoundManager.Instance.PlaySoundFXClip(waterSplashSfx[randomIndex], 1, false);
        }
    }
}
