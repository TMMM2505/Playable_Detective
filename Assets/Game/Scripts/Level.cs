using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level : MonoBehaviour
{
    [SerializeField] private List<Pin> pins = new();
    [SerializeField] private List<Pin> pinsEndCard = new();
    [SerializeField] private Hand hand;
    [SerializeField] private CameraElement cameraElement;
    [SerializeField] private Transform winPositionCamera;
    [SerializeField] private Main main;
    [SerializeField] private Cat cat;
    [SerializeField] private Transform frame;
    
    private Vector3 originalScale;
    private float originalAspect;

    void Start()
    {
        originalScale = frame.localScale;
        originalAspect = (float)Screen.width / Screen.height;

        UpdateScale();
    }

    void Update()
    {
        if (Mathf.Abs(originalAspect - (float)Screen.width / Screen.height) > 0.01f)
        {
            UpdateScale();
        }
    }

    void UpdateScale()
    {
        float currentAspect = (float)Screen.width / Screen.height;

        float scaleFactor = currentAspect / originalAspect;

        Vector3 newScale = originalScale * scaleFactor;
        if (newScale.x >= 0.3f && newScale.x <= 0.45f)
        {
            frame.localScale = newScale;
        }
        else
        {
            if (newScale.x > 0.43f)
            {
                frame.localScale = new Vector3(0.43f, 0.43f, 0.43f);
            }
            else if (newScale.x < 0.35f)
            {
                frame.localScale = new Vector3(0.35f, 0.35f, 0.35f);
            }
        }
        originalAspect = currentAspect;
    }
    
    public Main Main => main;
    private int maxScore;
    public int MaxScore => maxScore;

    public Hand Hand => hand;

    public void SetUp()
    {
        SetTutorial();
        StartCoroutine(SetUpSoundCharacter());
        cameraElement.WinPosition = winPositionCamera.position;
    }

    public void SetTutorial()
    {
        if (LevelManager.Ins.IsEndCard)
        {
            StartCoroutine(ECTutorial());
        }
        else
        {
            foreach (Pin pin in pins)
            {
                if (LevelManager.Ins.IsEndGame)
                {
                    return;
                }
                if (pin.gameObject.activeSelf)
                {
                    hand.gameObject.SetActive(true);
                    hand.SetClick(pin.Center.position, pin.transform);
                    return;
                }
            }
        }
    }

    IEnumerator ECTutorial()
    {
        for(int i = 0; i < pinsEndCard.Count; i++)
        {
            Pin pin = pinsEndCard[i];
            yield return new WaitForSeconds(2.5f);
            hand.SetClick(pin.Center.position, pin.transform);
            if (i == pinsEndCard.Count - 1)
            {
                i = -1;
            }
        }
    }
    public void OnWin()
    {
        SoundManager.Ins.StopAll();
        main.Anim.SetAnim(Constant.animTakePhoto, false);
        SoundManager.Ins.PlaySound(Constant.soundTakePhoto, false);
        StartCoroutine(UIManager.Ins.TakePhoto());
        cat.Anim.SetAnim(Constant.animCatHappy, true);
    }
    public void OnLose()
    {
        StopAllCoroutines();
        Renderer rendererMain = main.Anim.GetComponent<Renderer>();
        Renderer rendererCat = cat.Anim.GetComponent<Renderer>();
        if (rendererMain&& rendererCat)
        {
            rendererMain.sortingOrder = 6000;
            rendererCat.sortingOrder = 6500;
        }
        main.Anim.SetAnim(Constant.animLose, true);
        cat.Anim.SetAnim(Constant.animCatSad, true);
    }

    public IEnumerator SetUpSoundCharacter()
    {
        for (int i = 5; i < 7; i++)
        {
            if (!LevelManager.Ins.IsEndGame)
            {
                yield return new WaitForSeconds(1f);
                SoundManager.Ins.PlaySound(Constant.soundRat, false);
                yield return new WaitForSeconds(i);
                if (i == 5 && !LevelManager.Ins.IsEndGame)
                {
                    SoundManager.Ins.PlaySound(Constant.soundMainScared, false);
                }
                else if (!LevelManager.Ins.IsEndGame)
                {
                    SoundManager.Ins.PlaySound(Constant.soundNeedHelp, false);
                    i = 4;
                }
            }
            else
            {
                yield break;
            }
        }
    }
}
