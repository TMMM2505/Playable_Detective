namespace Spine
{
	public class ShearXTimeline : CurveTimeline1, IBoneTimeline
	{
		private readonly int boneIndex;

		public int BoneIndex => boneIndex;

		public ShearXTimeline(int frameCount, int bezierCount, int boneIndex)
			: base(frameCount, bezierCount, 5 + "|" + boneIndex)
		{
			this.boneIndex = boneIndex;
		}

		public override void Apply(Skeleton skeleton, float lastTime, float time, ExposedList<Event> firedEvents, float alpha, MixBlend blend, MixDirection direction)
		{
			Bone bone = skeleton.bones.Items[boneIndex];
			if (!bone.active)
			{
				return;
			}
			float[] frames = base.frames;
			if (time < frames[0])
			{
				switch (blend)
				{
				case MixBlend.Setup:
					bone.shearX = bone.data.shearX;
					break;
				case MixBlend.First:
					bone.shearX += (bone.data.shearX - bone.shearX) * alpha;
					break;
				}
				return;
			}
			float x = GetCurveValue(time);
			switch (blend)
			{
			case MixBlend.Setup:
				bone.shearX = bone.data.shearX + x * alpha;
				break;
			case MixBlend.First:
			case MixBlend.Replace:
				bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
				break;
			case MixBlend.Add:
				bone.shearX += x * alpha;
				break;
			}
		}
	}
}
