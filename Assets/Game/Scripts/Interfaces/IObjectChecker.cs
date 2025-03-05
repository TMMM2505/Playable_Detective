using UnityEngine;

public interface IObjectChecker
{
    bool CanMove { get; }
    Vector3 Position { get; }
    bool IsCompleted { set; get; }
    System.Action ActionCompleted { set; get; }
}
