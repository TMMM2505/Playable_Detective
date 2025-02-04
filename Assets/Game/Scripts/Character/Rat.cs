using UnityEngine;

public class Rat : MonoBehaviour
{
    [SerializeField] private Anim anim;

    private void Start()
    {
        anim.SetAnim(Constant.animMouseIdle, true);
    }
}
