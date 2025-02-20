namespace Spine
{
	public class ShearYTimeline : CurveTimeline1, IBoneTimeline
	{
		private readonly int boneIndex;

		public int BoneIndex => boneIndex;

		public ShearYTimeline(int frameCount, int bezierCount, int boneIndex)
			: base(frameCount, bezierCount, 6 + "|" + boneIndex)
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
					bone.shearY = bone.data.shearY;
					break;
				case MixBlend.First:
					bone.shearY += (bone.data.shearY - bone.shearY) * alpha;
					break;
				}
				return;
			}
			float y = GetCurveValue(time);
			switch (blend)
			{
			case MixBlend.Setup:
				bone.shearY = bone.data.shearY + y * alpha;
				break;
			case MixBlend.First:
			case MixBlend.Replace:
				bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
				break;
			case MixBlend.Add:
				bone.shearY += y * alpha;
				break;
			}
		}
	}
}
