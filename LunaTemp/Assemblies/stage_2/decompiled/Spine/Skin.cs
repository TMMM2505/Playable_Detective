using System;
using System.Collections.Generic;

namespace Spine
{
	public class Skin
	{
		public struct SkinEntry
		{
			internal readonly int slotIndex;

			internal readonly string name;

			internal readonly Attachment attachment;

			public int SlotIndex => slotIndex;

			public string Name => name;

			public Attachment Attachment => attachment;

			public SkinEntry(int slotIndex, string name, Attachment attachment)
			{
				this.slotIndex = slotIndex;
				this.name = name;
				this.attachment = attachment;
			}
		}

		private struct SkinKey
		{
			internal readonly int slotIndex;

			internal readonly string name;

			internal readonly int hashCode;

			public SkinKey(int slotIndex, string name)
			{
				if (slotIndex < 0)
				{
					throw new ArgumentException("slotIndex must be >= 0.");
				}
				if (name == null)
				{
					throw new ArgumentNullException("name", "name cannot be null");
				}
				this.slotIndex = slotIndex;
				this.name = name;
				hashCode = name.GetHashCode() + slotIndex * 37;
			}
		}

		private class SkinKeyComparer : IEqualityComparer<SkinKey>
		{
			internal static readonly SkinKeyComparer Instance = new SkinKeyComparer();

			bool IEqualityComparer<SkinKey>.Equals(SkinKey e1, SkinKey e2)
			{
				return e1.slotIndex == e2.slotIndex && string.Equals(e1.name, e2.name, StringComparison.Ordinal);
			}

			int IEqualityComparer<SkinKey>.GetHashCode(SkinKey e)
			{
				return e.hashCode;
			}
		}

		internal string name;

		private Dictionary<SkinKey, SkinEntry> attachments = new Dictionary<SkinKey, SkinEntry>(SkinKeyComparer.Instance);

		internal readonly ExposedList<BoneData> bones = new ExposedList<BoneData>();

		internal readonly ExposedList<ConstraintData> constraints = new ExposedList<ConstraintData>();

		public string Name => name;

		public ICollection<SkinEntry> Attachments => attachments.Values;

		public ExposedList<BoneData> Bones => bones;

		public ExposedList<ConstraintData> Constraints => constraints;

		public Skin(string name)
		{
			if (name == null)
			{
				throw new ArgumentNullException("name", "name cannot be null.");
			}
			this.name = name;
		}

		public void SetAttachment(int slotIndex, string name, Attachment attachment)
		{
			if (attachment == null)
			{
				throw new ArgumentNullException("attachment", "attachment cannot be null.");
			}
			attachments[new SkinKey(slotIndex, name)] = new SkinEntry(slotIndex, name, attachment);
		}

		public void AddSkin(Skin skin)
		{
			foreach (BoneData data2 in skin.bones)
			{
				if (!bones.Contains(data2))
				{
					bones.Add(data2);
				}
			}
			foreach (ConstraintData data in skin.constraints)
			{
				if (!constraints.Contains(data))
				{
					constraints.Add(data);
				}
			}
			foreach (KeyValuePair<SkinKey, SkinEntry> attachment in skin.attachments)
			{
				SkinEntry entry = attachment.Value;
				SetAttachment(entry.slotIndex, entry.name, entry.attachment);
			}
		}

		public void CopySkin(Skin skin)
		{
			foreach (BoneData data in skin.bones)
			{
				if (!bones.Contains(data))
				{
					bones.Add(data);
				}
			}
			foreach (ConstraintData data2 in skin.constraints)
			{
				if (!constraints.Contains(data2))
				{
					constraints.Add(data2);
				}
			}
			foreach (KeyValuePair<SkinKey, SkinEntry> attachment in skin.attachments)
			{
				SkinEntry entry = attachment.Value;
				if (entry.attachment is MeshAttachment)
				{
					SetAttachment(entry.slotIndex, entry.name, (entry.attachment != null) ? ((MeshAttachment)entry.attachment).NewLinkedMesh() : null);
				}
				else
				{
					SetAttachment(entry.slotIndex, entry.name, (entry.attachment != null) ? entry.attachment.Copy() : null);
				}
			}
		}

		public Attachment GetAttachment(int slotIndex, string name)
		{
			SkinEntry entry;
			return attachments.TryGetValue(new SkinKey(slotIndex, name), out entry) ? entry.attachment : null;
		}

		public void RemoveAttachment(int slotIndex, string name)
		{
			attachments.Remove(new SkinKey(slotIndex, name));
		}

		public void GetAttachments(int slotIndex, List<SkinEntry> attachments)
		{
			if (slotIndex < 0)
			{
				throw new ArgumentException("slotIndex must be >= 0.");
			}
			if (attachments == null)
			{
				throw new ArgumentNullException("attachments", "attachments cannot be null.");
			}
			foreach (KeyValuePair<SkinKey, SkinEntry> attachment in this.attachments)
			{
				SkinEntry entry = attachment.Value;
				if (entry.slotIndex == slotIndex)
				{
					attachments.Add(entry);
				}
			}
		}

		public void Clear()
		{
			attachments.Clear();
			bones.Clear();
			constraints.Clear();
		}

		public override string ToString()
		{
			return name;
		}

		internal void AttachAll(Skeleton skeleton, Skin oldSkin)
		{
			Slot[] slots = skeleton.slots.Items;
			foreach (KeyValuePair<SkinKey, SkinEntry> attachment2 in oldSkin.attachments)
			{
				SkinEntry entry = attachment2.Value;
				int slotIndex = entry.slotIndex;
				Slot slot = slots[slotIndex];
				if (slot.Attachment == entry.attachment)
				{
					Attachment attachment = GetAttachment(slotIndex, entry.name);
					if (attachment != null)
					{
						slot.Attachment = attachment;
					}
				}
			}
		}
	}
}
