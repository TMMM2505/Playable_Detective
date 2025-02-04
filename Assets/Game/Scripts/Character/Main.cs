using System;
using System.Collections;
using UnityEngine;

public class Main : MonoBehaviour
{
    [SerializeField] private Anim anim;

    public Anim Anim => anim;

    private void Start()
    {
        anim.SetAnim(Constant.animScare, true);
    }

    IEnumerator SetAnimScare()
    {
        yield return new WaitForSeconds(1.5f);
        anim.SetAnim(Constant.animScare, false);
        StartCoroutine(SetAnimScare());
    }
}
