namespace Spine
{
	public class TranslateYTimeline : CurveTimeline1, IBoneTimeline
	{
		private readonly int boneIndex;

		public int BoneIndex => boneIndex;

		public TranslateYTimeline(int frameCount, int bezierCount, int boneIndex)
			: base(frameCount, bezierCount, 2 + "|" + boneIndex)
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
					bone.y = bone.data.y;
					break;
				case MixBlend.First:
					bone.y += (bone.data.y - bone.y) * alpha;
					break;
				}
				return;
			}
			float y = GetCurveValue(time);
			switch (blend)
			{
			case MixBlend.Setup:
				bone.y = bone.data.y + y * alpha;
				break;
			case MixBlend.First:
			case MixBlend.Replace:
				bone.y += (bone.data.y + y - bone.y) * alpha;
				break;
			case MixBlend.Add:
				bone.y += y * alpha;
				break;
			}
		}
	}
}
