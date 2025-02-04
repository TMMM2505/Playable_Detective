using System;

namespace Spine.Unity
{
	public static class SkeletonDataCompatibility
	{
		public enum SourceType
		{
			Json,
			Binary
		}

		[Serializable]
		public class VersionInfo
		{
			public string rawVersion = null;

			public int[] version = null;

			public SourceType sourceType;
		}

		[Serializable]
		public class CompatibilityProblemInfo
		{
			public VersionInfo actualVersion;

			public int[][] compatibleVersions;

			public string explicitProblemDescription = null;

			public string DescriptionString()
			{
				if (!string.IsNullOrEmpty(explicitProblemDescription))
				{
					return explicitProblemDescription;
				}
				string compatibleVersionString = "";
				string optionalOr = null;
				int[][] array = compatibleVersions;
				foreach (int[] version in array)
				{
					compatibleVersionString += $"{optionalOr}{version[0]}.{version[1]}";
					optionalOr = " or ";
				}
				return string.Format("Skeleton data could not be loaded. Data version: {0}. Required version: {1}.\nPlease re-export skeleton data with Spine {1} or change runtime to version {2}.{3}.", actualVersion.rawVersion, compatibleVersionString, actualVersion.version[0], actualVersion.version[1]);
			}
		}
	}
}
