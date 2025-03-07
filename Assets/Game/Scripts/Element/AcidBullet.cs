using System.Collections;
using UnityEngine;

public class AcidBullet : MonoBehaviour
{
    [SerializeField] ParticleSystem explosionVfx;
    [SerializeField] float impactDuration = 0.5f;

    internal void ActivateExplosionVfx()
    {
        explosionVfx.gameObject.SetActive(true);

        Invoke("DeactivateBullet", impactDuration);
    }
    private void DeactivateBullet()
    {
        gameObject.SetActive(false);
    }
}
