namespace Spine
{
	public abstract class CurveTimeline1 : CurveTimeline
	{
		public const int ENTRIES = 2;

		internal const int VALUE = 1;

		public override int FrameEntries => 2;

		public CurveTimeline1(int frameCount, int bezierCount, string propertyId)
			: base(frameCount, bezierCount, propertyId)
		{
		}

		public void SetFrame(int frame, float time, float value)
		{
			frame <<= 1;
			frames[frame] = time;
			frames[frame + 1] = value;
		}

		public float GetCurveValue(float time)
		{
			float[] frames = base.frames;
			int i = frames.Length - 2;
			for (int ii = 2; ii <= i; ii += 2)
			{
				if (frames[ii] > time)
				{
					i = ii - 2;
					break;
				}
			}
			int curveType = (int)curves[i >> 1];
			switch (curveType)
			{
			case 0:
			{
				float before = frames[i];
				float value = frames[i + 1];
				return value + (time - before) / (frames[i + 2] - before) * (frames[i + 2 + 1] - value);
			}
			case 1:
				return frames[i + 1];
			default:
				return GetBezierValue(time, i, 1, curveType - 2);
			}
		}
	}
}
