using UnityEngine;

public class Singleton<T> : MonoBehaviour where T : MonoBehaviour
{
	private static T m_Ins;

	public static T Ins
	{
		get
		{
			if ((Object)m_Ins == (Object)null)
			{
				m_Ins = Object.FindObjectOfType<T>();
				if ((Object)m_Ins == (Object)null)
				{
					GameObject singletonObject = new GameObject();
					m_Ins = singletonObject.AddComponent<T>();
					singletonObject.name = typeof(T).ToString() + " (Singleton)";
				}
			}
			return m_Ins;
		}
	}
}
