namespace Spine
{
	public class PathConstraintPositionTimeline : CurveTimeline1
	{
		private readonly int pathConstraintIndex;

		public int PathConstraintIndex => pathConstraintIndex;

		public PathConstraintPositionTimeline(int frameCount, int bezierCount, int pathConstraintIndex)
			: base(frameCount, bezierCount, 16 + "|" + pathConstraintIndex)
		{
			this.pathConstraintIndex = pathConstraintIndex;
		}

		public override void Apply(Skeleton skeleton, float lastTime, float time, ExposedList<Event> firedEvents, float alpha, MixBlend blend, MixDirection direction)
		{
			PathConstraint constraint = skeleton.pathConstraints.Items[pathConstraintIndex];
			if (!constraint.active)
			{
				return;
			}
			if (time < frames[0])
			{
				switch (blend)
				{
				case MixBlend.Setup:
					constraint.position = constraint.data.position;
					break;
				case MixBlend.First:
					constraint.position += (constraint.data.position - constraint.position) * alpha;
					break;
				}
			}
			else
			{
				float position = GetCurveValue(time);
				if (blend == MixBlend.Setup)
				{
					constraint.position = constraint.data.position + (position - constraint.data.position) * alpha;
				}
				else
				{
					constraint.position += (position - constraint.position) * alpha;
				}
			}
		}
	}
}
