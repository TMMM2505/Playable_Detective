using System;

namespace Spine
{
	public class ScaleXTimeline : CurveTimeline1, IBoneTimeline
	{
		private readonly int boneIndex;

		public int BoneIndex => boneIndex;

		public ScaleXTimeline(int frameCount, int bezierCount, int boneIndex)
			: base(frameCount, bezierCount, 3 + "|" + boneIndex)
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
					bone.scaleX = bone.data.scaleX;
					break;
				case MixBlend.First:
					bone.scaleX += (bone.data.scaleX - bone.scaleX) * alpha;
					break;
				}
				return;
			}
			float x = GetCurveValue(time) * bone.data.scaleX;
			if (alpha == 1f)
			{
				if (blend == MixBlend.Add)
				{
					bone.scaleX += x - bone.data.scaleX;
				}
				else
				{
					bone.scaleX = x;
				}
			}
			else if (direction == MixDirection.Out)
			{
				switch (blend)
				{
				case MixBlend.Setup:
				{
					float bx = bone.data.scaleX;
					bone.scaleX = bx + (Math.Abs(x) * (float)Math.Sign(bx) - bx) * alpha;
					break;
				}
				case MixBlend.First:
				case MixBlend.Replace:
				{
					float bx = bone.scaleX;
					bone.scaleX = bx + (Math.Abs(x) * (float)Math.Sign(bx) - bx) * alpha;
					break;
				}
				case MixBlend.Add:
					bone.scaleX += (x - bone.data.scaleX) * alpha;
					break;
				}
			}
			else
			{
				switch (blend)
				{
				case MixBlend.Setup:
				{
					float bx = Math.Abs(bone.data.scaleX) * (float)Math.Sign(x);
					bone.scaleX = bx + (x - bx) * alpha;
					break;
				}
				case MixBlend.First:
				case MixBlend.Replace:
				{
					float bx = Math.Abs(bone.scaleX) * (float)Math.Sign(x);
					bone.scaleX = bx + (x - bx) * alpha;
					break;
				}
				case MixBlend.Add:
					bone.scaleX += (x - bone.data.scaleX) * alpha;
					break;
				}
			}
		}
	}
}
