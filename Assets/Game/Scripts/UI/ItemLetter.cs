using DG.Tweening;
using UnityEngine;

public class ItemLetter : MonoBehaviour
{
    public float duration;       // Thời gian rung
    public float strength;        // Độ mạnh của rung lắc
    public int vibrato;           // Số lần rung

    void Start()
    {
        //transform.DOShakeRotation(duration, new Vector3(0, 0, strength), vibrato, 0).SetLoops(-1, LoopType.Yoyo);
        transform.DOShakeScale(duration, strength, vibrato, 0).SetLoops(-1, LoopType.Yoyo);
    }
}
