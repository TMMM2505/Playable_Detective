using System;
using System.Collections.Generic;
using UnityEngine;

namespace Spine.Unity
{
	[Serializable]
	public class BlendModeMaterials
	{
		[Serializable]
		public class ReplacementMaterial
		{
			public string pageName;

			public Material material;
		}

		[SerializeField]
		[HideInInspector]
		protected bool requiresBlendModeMaterials = false;

		public bool applyAdditiveMaterial = false;

		public List<ReplacementMaterial> additiveMaterials = new List<ReplacementMaterial>();

		public List<ReplacementMaterial> multiplyMaterials = new List<ReplacementMaterial>();

		public List<ReplacementMaterial> screenMaterials = new List<ReplacementMaterial>();

		public bool RequiresBlendModeMaterials
		{
			get
			{
				return requiresBlendModeMaterials;
			}
			set
			{
				requiresBlendModeMaterials = value;
			}
		}

		public BlendMode BlendModeForMaterial(Material material)
		{
			foreach (ReplacementMaterial pair3 in multiplyMaterials)
			{
				if (pair3.material == material)
				{
					return BlendMode.Multiply;
				}
			}
			foreach (ReplacementMaterial pair2 in additiveMaterials)
			{
				if (pair2.material == material)
				{
					return BlendMode.Additive;
				}
			}
			foreach (ReplacementMaterial pair in screenMaterials)
			{
				if (pair.material == material)
				{
					return BlendMode.Screen;
				}
			}
			return BlendMode.Normal;
		}

		public void ApplyMaterials(SkeletonData skeletonData)
		{
			if (skeletonData == null)
			{
				throw new ArgumentNullException("skeletonData");
			}
			if (!requiresBlendModeMaterials)
			{
				return;
			}
			List<Skin.SkinEntry> skinEntries = new List<Skin.SkinEntry>();
			SlotData[] slotsItems = skeletonData.Slots.Items;
			int slotIndex = 0;
			for (int slotCount = skeletonData.Slots.Count; slotIndex < slotCount; slotIndex++)
			{
				SlotData slot = slotsItems[slotIndex];
				if (slot.BlendMode == BlendMode.Normal || (!applyAdditiveMaterial && slot.BlendMode == BlendMode.Additive))
				{
					continue;
				}
				List<ReplacementMaterial> replacementMaterials = null;
				switch (slot.BlendMode)
				{
				case BlendMode.Multiply:
					replacementMaterials = multiplyMaterials;
					break;
				case BlendMode.Screen:
					replacementMaterials = screenMaterials;
					break;
				case BlendMode.Additive:
					replacementMaterials = additiveMaterials;
					break;
				}
				if (replacementMaterials == null)
				{
					continue;
				}
				skinEntries.Clear();
				foreach (Skin skin in skeletonData.Skins)
				{
					skin.GetAttachments(slotIndex, skinEntries);
				}
				foreach (Skin.SkinEntry item in skinEntries)
				{
					if (!(item.Attachment is IHasTextureRegion renderableAttachment))
					{
						continue;
					}
					if (renderableAttachment.Region != null)
					{
						renderableAttachment.Region = CloneAtlasRegionWithMaterial((AtlasRegion)renderableAttachment.Region, replacementMaterials);
					}
					else if (renderableAttachment.Sequence != null)
					{
						TextureRegion[] regions = renderableAttachment.Sequence.Regions;
						for (int i = 0; i < regions.Length; i++)
						{
							regions[i] = CloneAtlasRegionWithMaterial((AtlasRegion)regions[i], replacementMaterials);
						}
					}
				}
			}
		}

		protected AtlasRegion CloneAtlasRegionWithMaterial(AtlasRegion originalRegion, List<ReplacementMaterial> replacementMaterials)
		{
			AtlasRegion newRegion = originalRegion.Clone();
			Material material = null;
			foreach (ReplacementMaterial replacement in replacementMaterials)
			{
				if (replacement.pageName == originalRegion.page.name)
				{
					material = replacement.material;
					break;
				}
			}
			AtlasPage originalPage = originalRegion.page;
			AtlasPage newPage = originalPage.Clone();
			newPage.rendererObject = material;
			newRegion.page = newPage;
			return newRegion;
		}
	}
}
