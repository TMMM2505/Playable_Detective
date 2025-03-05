using System;
using System.Collections.Generic;
using UnityEngine;

public abstract class Ball : MonoBehaviour
{
    [SerializeField] List<Sprite> sprites = new List<Sprite>();
    [SerializeField] SpriteRenderer model;
    [SerializeField] internal EBallType Type;

    internal Action ActionBallOut;

    internal void UpdateModel()
    {
        int randomIndex = UnityEngine.Random.Range(0, sprites.Count);

        model.sprite = sprites[randomIndex];
    }
}

public enum EBallType
{
    Coin,
    Lava,
    Water
}