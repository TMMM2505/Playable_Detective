using UnityEngine;

public interface IObjectChecker
{
    GameObject CheckedGameObject { get; }
    Vector3 Position { get; }
    bool IsCompleted { set; get; }
    Vector3 CenterPosition { get; }
}
