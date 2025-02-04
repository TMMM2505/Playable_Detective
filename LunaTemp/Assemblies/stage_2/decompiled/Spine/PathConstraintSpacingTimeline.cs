namespace Spine
{
	public class PathConstraintSpacingTimeline : CurveTimeline1
	{
		private readonly int pathConstraintIndex;

		public int PathConstraintIndex => pathConstraintIndex;

		public PathConstraintSpacingTimeline(int frameCount, int bezierCount, int pathConstraintIndex)
			: base(frameCount, bezierCount, 17 + "|" + pathConstraintIndex)
		{
			this.pathConstraintIndex = pathConstraintIndex;
		}

		public override void Apply(Skeleton skeleton, float lastTime, float time, ExposedList<Event> events, float alpha, MixBlend blend, MixDirection direction)
		{
			PathConstraint constraint = skeleton.pathConstraints.Items[pathConstraintIndex];
			if (!constraint.active)
			{
				return;
			}
			float[] frames = base.frames;
			if (time < frames[0])
			{
				switch (blend)
				{
				case MixBlend.Setup:
					constraint.spacing = constraint.data.spacing;
					break;
				case MixBlend.First:
					constraint.spacing += (constraint.data.spacing - constraint.spacing) * alpha;
					break;
				}
			}
			else
			{
				float spacing = GetCurveValue(time);
				if (blend == MixBlend.Setup)
				{
					constraint.spacing = constraint.data.spacing + (spacing - constraint.data.spacing) * alpha;
				}
				else
				{
					constraint.spacing += (spacing - constraint.spacing) * alpha;
				}
			}
		}
	}
}
