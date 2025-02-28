using System;
using System.Collections.Generic;
using UnityEngine;

namespace Spine.Unity
{
	[ExecuteAlways]
	[HelpURL("http://esotericsoftware.com/spine-unity#SkeletonRendererCustomMaterials")]
	public class SkeletonRendererCustomMaterials : MonoBehaviour
	{
		[Serializable]
		public struct SlotMaterialOverride : IEquatable<SlotMaterialOverride>
		{
			public bool overrideDisabled;

			[SpineSlot("", "", false, true, false)]
			public string slotName;

			public Material material;

			public bool Equals(SlotMaterialOverride other)
			{
				return overrideDisabled == other.overrideDisabled && slotName == other.slotName && material == other.material;
			}
		}

		[Serializable]
		public struct AtlasMaterialOverride : IEquatable<AtlasMaterialOverride>
		{
			public bool overrideDisabled;

			public Material originalMaterial;

			public Material replacementMaterial;

			public bool Equals(AtlasMaterialOverride other)
			{
				return overrideDisabled == other.overrideDisabled && originalMaterial == other.originalMaterial && replacementMaterial == other.replacementMaterial;
			}
		}

		public SkeletonRenderer skeletonRenderer;

		[SerializeField]
		protected List<SlotMaterialOverride> customSlotMaterials = new List<SlotMaterialOverride>();

		[SerializeField]
		protected List<AtlasMaterialOverride> customMaterialOverrides = new List<AtlasMaterialOverride>();

		private void SetCustomSlotMaterials()
		{
			if (skeletonRenderer == null)
			{
				Debug.LogError("skeletonRenderer == null");
				return;
			}
			for (int i = 0; i < customSlotMaterials.Count; i++)
			{
				SlotMaterialOverride slotMaterialOverride = customSlotMaterials[i];
				if (!slotMaterialOverride.overrideDisabled && !string.IsNullOrEmpty(slotMaterialOverride.slotName))
				{
					Slot slotObject = skeletonRenderer.skeleton.FindSlot(slotMaterialOverride.slotName);
					if (slotObject != null)
					{
						skeletonRenderer.CustomSlotMaterials[slotObject] = slotMaterialOverride.material;
					}
				}
			}
		}

		private void RemoveCustomSlotMaterials()
		{
			if (skeletonRenderer == null)
			{
				Debug.LogError("skeletonRenderer == null");
				return;
			}
			for (int i = 0; i < customSlotMaterials.Count; i++)
			{
				SlotMaterialOverride slotMaterialOverride = customSlotMaterials[i];
				if (!string.IsNullOrEmpty(slotMaterialOverride.slotName))
				{
					Slot slotObject = skeletonRenderer.skeleton.FindSlot(slotMaterialOverride.slotName);
					if (slotObject != null && skeletonRenderer.CustomSlotMaterials.TryGetValue(slotObject, out var currentMaterial) && !(currentMaterial != slotMaterialOverride.material))
					{
						skeletonRenderer.CustomSlotMaterials.Remove(slotObject);
					}
				}
			}
		}

		private void SetCustomMaterialOverrides()
		{
			if (skeletonRenderer == null)
			{
				Debug.LogError("skeletonRenderer == null");
				return;
			}
			for (int i = 0; i < customMaterialOverrides.Count; i++)
			{
				AtlasMaterialOverride atlasMaterialOverride = customMaterialOverrides[i];
				if (!atlasMaterialOverride.overrideDisabled)
				{
					skeletonRenderer.CustomMaterialOverride[atlasMaterialOverride.originalMaterial] = atlasMaterialOverride.replacementMaterial;
				}
			}
		}

		private void RemoveCustomMaterialOverrides()
		{
			if (skeletonRenderer == null)
			{
				Debug.LogError("skeletonRenderer == null");
				return;
			}
			for (int i = 0; i < customMaterialOverrides.Count; i++)
			{
				AtlasMaterialOverride atlasMaterialOverride = customMaterialOverrides[i];
				if (skeletonRenderer.CustomMaterialOverride.TryGetValue(atlasMaterialOverride.originalMaterial, out var currentMaterial) && !(currentMaterial != atlasMaterialOverride.replacementMaterial))
				{
					skeletonRenderer.CustomMaterialOverride.Remove(atlasMaterialOverride.originalMaterial);
				}
			}
		}

		private void OnEnable()
		{
			if (skeletonRenderer == null)
			{
				skeletonRenderer = GetComponent<SkeletonRenderer>();
			}
			if (skeletonRenderer == null)
			{
				Debug.LogError("skeletonRenderer == null");
				return;
			}
			skeletonRenderer.Initialize(false);
			SetCustomMaterialOverrides();
			SetCustomSlotMaterials();
		}

		private void OnDisable()
		{
			if (skeletonRenderer == null)
			{
				Debug.LogError("skeletonRenderer == null");
				return;
			}
			RemoveCustomMaterialOverrides();
			RemoveCustomSlotMaterials();
		}
	}
}
