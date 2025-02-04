using UnityEngine;

namespace Spine.Unity
{
	public class RegionlessAttachmentLoader : AttachmentLoader
	{
		private static AtlasRegion emptyRegion;

		private static AtlasRegion EmptyRegion
		{
			get
			{
				if (emptyRegion == null)
				{
					emptyRegion = new AtlasRegion
					{
						name = "Empty AtlasRegion",
						page = new AtlasPage
						{
							name = "Empty AtlasPage",
							rendererObject = new Material(Shader.Find("Spine/Special/HiddenPass"))
							{
								name = "NoRender Material"
							}
						}
					};
				}
				return emptyRegion;
			}
		}

		public RegionAttachment NewRegionAttachment(Skin skin, string name, string path, Sequence sequence)
		{
			return new RegionAttachment(name)
			{
				Region = EmptyRegion
			};
		}

		public MeshAttachment NewMeshAttachment(Skin skin, string name, string path, Sequence sequence)
		{
			return new MeshAttachment(name)
			{
				Region = EmptyRegion
			};
		}

		public BoundingBoxAttachment NewBoundingBoxAttachment(Skin skin, string name)
		{
			return new BoundingBoxAttachment(name);
		}

		public PathAttachment NewPathAttachment(Skin skin, string name)
		{
			return new PathAttachment(name);
		}

		public PointAttachment NewPointAttachment(Skin skin, string name)
		{
			return new PointAttachment(name);
		}

		public ClippingAttachment NewClippingAttachment(Skin skin, string name)
		{
			return new ClippingAttachment(name);
		}
	}
}
