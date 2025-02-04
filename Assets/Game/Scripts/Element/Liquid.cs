using System;
using UnityEngine;

public class Liquid : MonoBehaviour
{
    [SerializeField] private GameObject liquid;
    [SerializeField] private GameObject rock;
    [SerializeField] private ParticleSystem steamVFX;
    private string tag;

    private void OnEnable()
    {
        tag = gameObject.tag;
        liquid.SetActive(true);
        rock.SetActive(false);
    }

    private void OnCollisionStay2D(Collision2D other)
    {
        if (!gameObject.CompareTag(Constant.tagRock))
        {
            if ((other.gameObject.CompareTag(Constant.tagLava) && tag == Constant.tagWater) || other.gameObject.CompareTag(Constant.tagRock))
            {
                Liquid liquid = other.gameObject.GetComponent<Liquid>();
                liquid.TransferToRock();
                TransferToRock();
            }
        }
    }

    public void TransferToRock()
    {
        gameObject.tag = Constant.tagRock;
        liquid.SetActive(false);
        rock.SetActive(true);
        SoundManager.Ins.SoundInLava();
        if (steamVFX)
        {
            steamVFX.Play();
        }
    }
}
