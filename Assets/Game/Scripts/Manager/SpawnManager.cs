using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

public class SpawnManager : MonoBehaviour
{
    [SerializeField] float percentToLose = 50f;
    [SerializeField] List<Ball> balls;
    [SerializeField] EBallType type;
    [SerializeField] int count;

    public int Count => count;
    public EBallType BallType => type;

    int _ballCount, _ballLose;

    Ball GetBallSpawn()
    {
        foreach (var ball in balls)
        {
            if (ball.Type == type)
            {
                return ball;
            }
        }

        return balls[0];
    }

    private void Awake()
    {
        gameObject.SetActive(false);
    }

    public void Start()
    {
        foreach (var coin in this.GetComponentsInChildren<Ball>())
        {
            if (coin.Type == EBallType.Coin)
            {
                coin.ActionBallOut -= CheckBallOut;
                coin.ActionBallOut += CheckBallOut;
                _ballCount++;
            }
        }
    }

    private void CheckBallOut()
    {
        _ballLose++;
        if (_ballLose >= _ballCount * (percentToLose / 100))
        {
            //lose
        }
    }

#if UNITY_EDITOR
    public void Init()
    {
        var ballSpawn = GetBallSpawn();
        for (int i = 0; i < count; i++)
        {
            var ballObject = PrefabUtility.InstantiatePrefab(ballSpawn.gameObject, transform);
            if (ballObject is GameObject ball)
            {
                ball.transform.localPosition = Random.insideUnitSphere;
                ball.GetComponent<Ball>().UpdateModel();
            }
        }
    }

    public void ClearEditor()
    {
        for (int i = transform.childCount - 1; i >= 0; i--)
        {
            if (transform.GetChild(i).gameObject.activeInHierarchy)
                DestroyImmediate(transform.GetChild(i).gameObject);
        }
    }
#endif
}
#if UNITY_EDITOR
[CustomEditor(typeof(SpawnManager))]
[CanEditMultipleObjects]
public class SpawnManagerEditor : Editor
{
    SpawnManager spawnManager;
    //LevelComponent levelMap;

    void OnEnable()
    {
        spawnManager = target as SpawnManager;
        //levelMap = spawnManager.GetComponentInParent<LevelComponent>();
    }

    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();
        serializedObject.Update();
        if (GUILayout.Button("Update", GUILayout.MinHeight(40), GUILayout.MinWidth(100)))
        {
            spawnManager.Init();
            //if (levelMap != null) EditorUtility.SetDirty(levelMap.gameObject);
        }

        if (GUILayout.Button("Clear", GUILayout.MinHeight(40), GUILayout.MinWidth(100)))
        {
            spawnManager.ClearEditor();
            //if (levelMap != null) EditorUtility.SetDirty(levelMap.gameObject);
        }

        serializedObject.ApplyModifiedProperties();
    }
}
#endif