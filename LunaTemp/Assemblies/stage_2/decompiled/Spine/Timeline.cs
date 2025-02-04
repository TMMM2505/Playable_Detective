using System;

namespace Spine
{
	public abstract class Timeline
	{
		private readonly string[] propertyIds;

		internal readonly float[] frames;

		public string[] PropertyIds => propertyIds;

		public float[] Frames => frames;

		public virtual int FrameEntries => 1;

		public int FrameCount => frames.Length / FrameEntries;

		public float Duration => frames[frames.Length - FrameEntries];

		public Timeline(int frameCount, params string[] propertyIds)
		{
			if (propertyIds == null)
			{
				throw new ArgumentNullException("propertyIds", "propertyIds cannot be null.");
			}
			this.propertyIds = propertyIds;
			frames = new float[frameCount * FrameEntries];
		}

		public abstract void Apply(Skeleton skeleton, float lastTime, float time, ExposedList<Event> events, float alpha, MixBlend blend, MixDirection direction);

		internal static int Search(float[] frames, float time)
		{
			int j = frames.Length;
			for (int i = 1; i < j; i++)
			{
				if (frames[i] > time)
				{
					return i - 1;
				}
			}
			return j - 1;
		}

		internal static int Search(float[] frames, float time, int step)
		{
			int j = frames.Length;
			for (int i = step; i < j; i += step)
			{
				if (frames[i] > time)
				{
					return i - step;
				}
			}
			return j - step;
		}
	}
}
