using System;

namespace Spine
{
	public class ScaleYTimeline : CurveTimeline1, IBoneTimeline
	{
		private readonly int boneIndex;

		public int BoneIndex => boneIndex;

		public ScaleYTimeline(int frameCount, int bezierCount, int boneIndex)
			: base(frameCount, bezierCount, 4 + "|" + boneIndex)
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
					bone.scaleY = bone.data.scaleY;
					break;
				case MixBlend.First:
					bone.scaleY += (bone.data.scaleY - bone.scaleY) * alpha;
					break;
				}
				return;
			}
			float y = GetCurveValue(time) * bone.data.scaleY;
			if (alpha == 1f)
			{
				if (blend == MixBlend.Add)
				{
					bone.scaleY += y - bone.data.scaleY;
				}
				else
				{
					bone.scaleY = y;
				}
			}
			else if (direction == MixDirection.Out)
			{
				switch (blend)
				{
				case MixBlend.Setup:
				{
					float by = bone.data.scaleY;
					bone.scaleY = by + (Math.Abs(y) * (float)Math.Sign(by) - by) * alpha;
					break;
				}
				case MixBlend.First:
				case MixBlend.Replace:
				{
					float by = bone.scaleY;
					bone.scaleY = by + (Math.Abs(y) * (float)Math.Sign(by) - by) * alpha;
					break;
				}
				case MixBlend.Add:
					bone.scaleY += (y - bone.data.scaleY) * alpha;
					break;
				}
			}
			else
			{
				switch (blend)
				{
				case MixBlend.Setup:
				{
					float by = Math.Abs(bone.data.scaleY) * (float)Math.Sign(y);
					bone.scaleY = by + (y - by) * alpha;
					break;
				}
				case MixBlend.First:
				case MixBlend.Replace:
				{
					float by = Math.Abs(bone.scaleY) * (float)Math.Sign(y);
					bone.scaleY = by + (y - by) * alpha;
					break;
				}
				case MixBlend.Add:
					bone.scaleY += (y - bone.data.scaleY) * alpha;
					break;
				}
			}
		}
	}
}
