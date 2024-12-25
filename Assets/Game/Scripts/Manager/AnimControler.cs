using System;
using UnityEngine;
using UnityEngine.PlayerLoop;

public class AnimControler : Singleton<AnimControler>
{
    [SerializeField] private AnimMadMan animMadMan;
    [SerializeField] private AnimDog animDog;
    [SerializeField] private AnimGirl animGirl;

    public AnimDog AnimDog
    {
        get => animDog;
        set => animDog = value;
    }

    public AnimGirl AnimGirl
    {
        get => animGirl;
        set => animGirl = value;
    }

    private void Start()
    {
        animMadMan.OnStart();
        animDog.OnStart();
        animGirl.OnStart();
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            animMadMan.OnAttack();
        }
    }
}
