using System;

namespace Spine
{
	public class Skeleton
	{
		internal SkeletonData data;

		internal ExposedList<Bone> bones;

		internal ExposedList<Slot> slots;

		internal ExposedList<Slot> drawOrder;

		internal ExposedList<IkConstraint> ikConstraints;

		internal ExposedList<TransformConstraint> transformConstraints;

		internal ExposedList<PathConstraint> pathConstraints;

		internal ExposedList<IUpdatable> updateCache = new ExposedList<IUpdatable>();

		internal Skin skin;

		internal float r = 1f;

		internal float g = 1f;

		internal float b = 1f;

		internal float a = 1f;

		private float scaleX = 1f;

		private float scaleY = 1f;

		internal float x;

		internal float y;

		public SkeletonData Data => data;

		public ExposedList<Bone> Bones => bones;

		public ExposedList<IUpdatable> UpdateCacheList => updateCache;

		public ExposedList<Slot> Slots => slots;

		public ExposedList<Slot> DrawOrder => drawOrder;

		public ExposedList<IkConstraint> IkConstraints => ikConstraints;

		public ExposedList<PathConstraint> PathConstraints => pathConstraints;

		public ExposedList<TransformConstraint> TransformConstraints => transformConstraints;

		public Skin Skin
		{
			get
			{
				return skin;
			}
			set
			{
				SetSkin(value);
			}
		}

		public float R
		{
			get
			{
				return r;
			}
			set
			{
				r = value;
			}
		}

		public float G
		{
			get
			{
				return g;
			}
			set
			{
				g = value;
			}
		}

		public float B
		{
			get
			{
				return b;
			}
			set
			{
				b = value;
			}
		}

		public float A
		{
			get
			{
				return a;
			}
			set
			{
				a = value;
			}
		}

		public float X
		{
			get
			{
				return x;
			}
			set
			{
				x = value;
			}
		}

		public float Y
		{
			get
			{
				return y;
			}
			set
			{
				y = value;
			}
		}

		public float ScaleX
		{
			get
			{
				return scaleX;
			}
			set
			{
				scaleX = value;
			}
		}

		public float ScaleY
		{
			get
			{
				return scaleY * (float)((!Bone.yDown) ? 1 : (-1));
			}
			set
			{
				scaleY = value;
			}
		}

		[Obsolete("Use ScaleX instead. FlipX is when ScaleX is negative.")]
		public bool FlipX
		{
			get
			{
				return scaleX < 0f;
			}
			set
			{
				scaleX = (value ? (-1f) : 1f);
			}
		}

		[Obsolete("Use ScaleY instead. FlipY is when ScaleY is negative.")]
		public bool FlipY
		{
			get
			{
				return scaleY < 0f;
			}
			set
			{
				scaleY = (value ? (-1f) : 1f);
			}
		}

		public Bone RootBone => (bones.Count == 0) ? null : bones.Items[0];

		public Skeleton(SkeletonData data)
		{
			if (data == null)
			{
				throw new ArgumentNullException("data", "data cannot be null.");
			}
			this.data = data;
			bones = new ExposedList<Bone>(data.bones.Count);
			Bone[] bonesItems = bones.Items;
			foreach (BoneData boneData in data.bones)
			{
				Bone bone2;
				if (boneData.parent == null)
				{
					bone2 = new Bone(boneData, this, null);
				}
				else
				{
					Bone parent = bonesItems[boneData.parent.index];
					bone2 = new Bone(boneData, this, parent);
					parent.children.Add(bone2);
				}
				bones.Add(bone2);
			}
			slots = new ExposedList<Slot>(data.slots.Count);
			drawOrder = new ExposedList<Slot>(data.slots.Count);
			foreach (SlotData slotData in data.slots)
			{
				Bone bone = bonesItems[slotData.boneData.index];
				Slot slot = new Slot(slotData, bone);
				slots.Add(slot);
				drawOrder.Add(slot);
			}
			ikConstraints = new ExposedList<IkConstraint>(data.ikConstraints.Count);
			foreach (IkConstraintData ikConstraintData in data.ikConstraints)
			{
				ikConstraints.Add(new IkConstraint(ikConstraintData, this));
			}
			transformConstraints = new ExposedList<TransformConstraint>(data.transformConstraints.Count);
			foreach (TransformConstraintData transformConstraintData in data.transformConstraints)
			{
				transformConstraints.Add(new TransformConstraint(transformConstraintData, this));
			}
			pathConstraints = new ExposedList<PathConstraint>(data.pathConstraints.Count);
			foreach (PathConstraintData pathConstraintData in data.pathConstraints)
			{
				pathConstraints.Add(new PathConstraint(pathConstraintData, this));
			}
			UpdateCache();
		}

		public Skeleton(Skeleton skeleton)
		{
			if (skeleton == null)
			{
				throw new ArgumentNullException("skeleton", "skeleton cannot be null.");
			}
			data = skeleton.data;
			bones = new ExposedList<Bone>(skeleton.bones.Count);
			foreach (Bone bone2 in skeleton.bones)
			{
				Bone newBone;
				if (bone2.parent == null)
				{
					newBone = new Bone(bone2, this, null);
				}
				else
				{
					Bone parent = bones.Items[bone2.parent.data.index];
					newBone = new Bone(bone2, this, parent);
					parent.children.Add(newBone);
				}
				bones.Add(newBone);
			}
			slots = new ExposedList<Slot>(skeleton.slots.Count);
			Bone[] bonesItems = bones.Items;
			foreach (Slot slot2 in skeleton.slots)
			{
				Bone bone = bonesItems[slot2.bone.data.index];
				slots.Add(new Slot(slot2, bone));
			}
			drawOrder = new ExposedList<Slot>(slots.Count);
			Slot[] slotsItems = slots.Items;
			foreach (Slot slot in skeleton.drawOrder)
			{
				drawOrder.Add(slotsItems[slot.data.index]);
			}
			ikConstraints = new ExposedList<IkConstraint>(skeleton.ikConstraints.Count);
			foreach (IkConstraint ikConstraint in skeleton.ikConstraints)
			{
				ikConstraints.Add(new IkConstraint(ikConstraint, this));
			}
			transformConstraints = new ExposedList<TransformConstraint>(skeleton.transformConstraints.Count);
			foreach (TransformConstraint transformConstraint in skeleton.transformConstraints)
			{
				transformConstraints.Add(new TransformConstraint(transformConstraint, this));
			}
			pathConstraints = new ExposedList<PathConstraint>(skeleton.pathConstraints.Count);
			foreach (PathConstraint pathConstraint in skeleton.pathConstraints)
			{
				pathConstraints.Add(new PathConstraint(pathConstraint, this));
			}
			skin = skeleton.skin;
			r = skeleton.r;
			g = skeleton.g;
			b = skeleton.b;
			a = skeleton.a;
			scaleX = skeleton.scaleX;
			scaleY = skeleton.scaleY;
			UpdateCache();
		}

		public void UpdateCache()
		{
			ExposedList<IUpdatable> updateCache = this.updateCache;
			updateCache.Clear();
			int boneCount = this.bones.Count;
			Bone[] bones = this.bones.Items;
			for (int l = 0; l < boneCount; l++)
			{
				Bone bone = bones[l];
				bone.sorted = bone.data.skinRequired;
				bone.active = !bone.sorted;
			}
			if (skin != null)
			{
				BoneData[] skinBones = skin.bones.Items;
				int k = 0;
				for (int m = skin.bones.Count; k < m; k++)
				{
					Bone bone2 = bones[skinBones[k].index];
					do
					{
						bone2.sorted = false;
						bone2.active = true;
						bone2 = bone2.parent;
					}
					while (bone2 != null);
				}
			}
			int ikCount = this.ikConstraints.Count;
			int transformCount = this.transformConstraints.Count;
			int pathCount = this.pathConstraints.Count;
			IkConstraint[] ikConstraints = this.ikConstraints.Items;
			TransformConstraint[] transformConstraints = this.transformConstraints.Items;
			PathConstraint[] pathConstraints = this.pathConstraints.Items;
			int constraintCount = ikCount + transformCount + pathCount;
			for (int j = 0; j < constraintCount; j++)
			{
				int ii3 = 0;
				while (true)
				{
					if (ii3 < ikCount)
					{
						IkConstraint constraint = ikConstraints[ii3];
						if (constraint.data.order == j)
						{
							SortIkConstraint(constraint);
							break;
						}
						ii3++;
						continue;
					}
					int ii2 = 0;
					while (true)
					{
						if (ii2 < transformCount)
						{
							TransformConstraint constraint2 = transformConstraints[ii2];
							if (constraint2.data.order == j)
							{
								SortTransformConstraint(constraint2);
								break;
							}
							ii2++;
							continue;
						}
						for (int ii = 0; ii < pathCount; ii++)
						{
							PathConstraint constraint3 = pathConstraints[ii];
							if (constraint3.data.order == j)
							{
								SortPathConstraint(constraint3);
								break;
							}
						}
						break;
					}
					break;
				}
			}
			for (int i = 0; i < boneCount; i++)
			{
				SortBone(bones[i]);
			}
		}

		private void SortIkConstraint(IkConstraint constraint)
		{
			constraint.active = constraint.target.active && (!constraint.data.skinRequired || (skin != null && skin.constraints.Contains(constraint.data)));
			if (constraint.active)
			{
				Bone target = constraint.target;
				SortBone(target);
				ExposedList<Bone> constrained = constraint.bones;
				Bone parent = constrained.Items[0];
				SortBone(parent);
				if (constrained.Count == 1)
				{
					updateCache.Add(constraint);
					SortReset(parent.children);
					return;
				}
				Bone child = constrained.Items[constrained.Count - 1];
				SortBone(child);
				updateCache.Add(constraint);
				SortReset(parent.children);
				child.sorted = true;
			}
		}

		private void SortTransformConstraint(TransformConstraint constraint)
		{
			constraint.active = constraint.target.active && (!constraint.data.skinRequired || (skin != null && skin.constraints.Contains(constraint.data)));
			if (!constraint.active)
			{
				return;
			}
			SortBone(constraint.target);
			Bone[] constrained = constraint.bones.Items;
			int boneCount = constraint.bones.Count;
			if (constraint.data.local)
			{
				for (int l = 0; l < boneCount; l++)
				{
					Bone child = constrained[l];
					SortBone(child.parent);
					SortBone(child);
				}
			}
			else
			{
				for (int k = 0; k < boneCount; k++)
				{
					SortBone(constrained[k]);
				}
			}
			updateCache.Add(constraint);
			for (int j = 0; j < boneCount; j++)
			{
				SortReset(constrained[j].children);
			}
			for (int i = 0; i < boneCount; i++)
			{
				constrained[i].sorted = true;
			}
		}

		private void SortPathConstraint(PathConstraint constraint)
		{
			constraint.active = constraint.target.bone.active && (!constraint.data.skinRequired || (skin != null && skin.constraints.Contains(constraint.data)));
			if (constraint.active)
			{
				Slot slot = constraint.target;
				int slotIndex = slot.data.index;
				Bone slotBone = slot.bone;
				if (skin != null)
				{
					SortPathConstraintAttachment(skin, slotIndex, slotBone);
				}
				if (data.defaultSkin != null && data.defaultSkin != skin)
				{
					SortPathConstraintAttachment(data.defaultSkin, slotIndex, slotBone);
				}
				Attachment attachment = slot.attachment;
				if (attachment is PathAttachment)
				{
					SortPathConstraintAttachment(attachment, slotBone);
				}
				Bone[] constrained = constraint.bones.Items;
				int boneCount = constraint.bones.Count;
				for (int k = 0; k < boneCount; k++)
				{
					SortBone(constrained[k]);
				}
				updateCache.Add(constraint);
				for (int j = 0; j < boneCount; j++)
				{
					SortReset(constrained[j].children);
				}
				for (int i = 0; i < boneCount; i++)
				{
					constrained[i].sorted = true;
				}
			}
		}

		private void SortPathConstraintAttachment(Skin skin, int slotIndex, Bone slotBone)
		{
			foreach (Skin.SkinEntry entry in skin.Attachments)
			{
				if (entry.SlotIndex == slotIndex)
				{
					SortPathConstraintAttachment(entry.Attachment, slotBone);
				}
			}
		}

		private void SortPathConstraintAttachment(Attachment attachment, Bone slotBone)
		{
			if (!(attachment is PathAttachment))
			{
				return;
			}
			int[] pathBones = ((PathAttachment)attachment).bones;
			if (pathBones == null)
			{
				SortBone(slotBone);
				return;
			}
			Bone[] bones = this.bones.Items;
			int i = 0;
			int j = pathBones.Length;
			while (i < j)
			{
				int nn = pathBones[i++];
				nn += i;
				while (i < nn)
				{
					SortBone(bones[pathBones[i++]]);
				}
			}
		}

		private void SortBone(Bone bone)
		{
			if (!bone.sorted)
			{
				Bone parent = bone.parent;
				if (parent != null)
				{
					SortBone(parent);
				}
				bone.sorted = true;
				updateCache.Add(bone);
			}
		}

		private static void SortReset(ExposedList<Bone> bones)
		{
			Bone[] bonesItems = bones.Items;
			int i = 0;
			for (int j = bones.Count; i < j; i++)
			{
				Bone bone = bonesItems[i];
				if (bone.active)
				{
					if (bone.sorted)
					{
						SortReset(bone.children);
					}
					bone.sorted = false;
				}
			}
		}

		public void UpdateWorldTransform()
		{
			Bone[] bones = this.bones.Items;
			int j = 0;
			for (int l = this.bones.Count; j < l; j++)
			{
				Bone bone = bones[j];
				bone.ax = bone.x;
				bone.ay = bone.y;
				bone.arotation = bone.rotation;
				bone.ascaleX = bone.scaleX;
				bone.ascaleY = bone.scaleY;
				bone.ashearX = bone.shearX;
				bone.ashearY = bone.shearY;
			}
			IUpdatable[] updateCache = this.updateCache.Items;
			int i = 0;
			for (int k = this.updateCache.Count; i < k; i++)
			{
				updateCache[i].Update();
			}
		}

		public void UpdateWorldTransform(Bone parent)
		{
			if (parent == null)
			{
				throw new ArgumentNullException("parent", "parent cannot be null.");
			}
			Bone rootBone = RootBone;
			float pa = parent.a;
			float pb = parent.b;
			float pc = parent.c;
			float pd = parent.d;
			rootBone.worldX = pa * x + pb * y + parent.worldX;
			rootBone.worldY = pc * x + pd * y + parent.worldY;
			float rotationY = rootBone.rotation + 90f + rootBone.shearY;
			float la = MathUtils.CosDeg(rootBone.rotation + rootBone.shearX) * rootBone.scaleX;
			float lb = MathUtils.CosDeg(rotationY) * rootBone.scaleY;
			float lc = MathUtils.SinDeg(rootBone.rotation + rootBone.shearX) * rootBone.scaleX;
			float ld = MathUtils.SinDeg(rotationY) * rootBone.scaleY;
			rootBone.a = (pa * la + pb * lc) * scaleX;
			rootBone.b = (pa * lb + pb * ld) * scaleX;
			rootBone.c = (pc * la + pd * lc) * scaleY;
			rootBone.d = (pc * lb + pd * ld) * scaleY;
			IUpdatable[] updateCache = this.updateCache.Items;
			int i = 0;
			for (int j = this.updateCache.Count; i < j; i++)
			{
				IUpdatable updatable = updateCache[i];
				if (updatable != rootBone)
				{
					updatable.Update();
				}
			}
		}

		public void SetToSetupPose()
		{
			SetBonesToSetupPose();
			SetSlotsToSetupPose();
		}

		public void SetBonesToSetupPose()
		{
			Bone[] bones = this.bones.Items;
			int l = 0;
			for (int n3 = this.bones.Count; l < n3; l++)
			{
				bones[l].SetToSetupPose();
			}
			IkConstraint[] ikConstraints = this.ikConstraints.Items;
			int k = 0;
			for (int n2 = this.ikConstraints.Count; k < n2; k++)
			{
				IkConstraint constraint = ikConstraints[k];
				IkConstraintData data = constraint.data;
				constraint.mix = data.mix;
				constraint.softness = data.softness;
				constraint.bendDirection = data.bendDirection;
				constraint.compress = data.compress;
				constraint.stretch = data.stretch;
			}
			TransformConstraint[] transformConstraints = this.transformConstraints.Items;
			int j = 0;
			for (int n = this.transformConstraints.Count; j < n; j++)
			{
				TransformConstraint constraint2 = transformConstraints[j];
				TransformConstraintData data2 = constraint2.data;
				constraint2.mixRotate = data2.mixRotate;
				constraint2.mixX = data2.mixX;
				constraint2.mixY = data2.mixY;
				constraint2.mixScaleX = data2.mixScaleX;
				constraint2.mixScaleY = data2.mixScaleY;
				constraint2.mixShearY = data2.mixShearY;
			}
			PathConstraint[] pathConstraints = this.pathConstraints.Items;
			int i = 0;
			for (int m = this.pathConstraints.Count; i < m; i++)
			{
				PathConstraint constraint3 = pathConstraints[i];
				PathConstraintData data3 = constraint3.data;
				constraint3.position = data3.position;
				constraint3.spacing = data3.spacing;
				constraint3.mixRotate = data3.mixRotate;
				constraint3.mixX = data3.mixX;
				constraint3.mixY = data3.mixY;
			}
		}

		public void SetSlotsToSetupPose()
		{
			Slot[] slots = this.slots.Items;
			int j = this.slots.Count;
			Array.Copy(slots, 0, drawOrder.Items, 0, j);
			for (int i = 0; i < j; i++)
			{
				slots[i].SetToSetupPose();
			}
		}

		public Bone FindBone(string boneName)
		{
			if (boneName == null)
			{
				throw new ArgumentNullException("boneName", "boneName cannot be null.");
			}
			Bone[] bones = this.bones.Items;
			int i = 0;
			for (int j = this.bones.Count; i < j; i++)
			{
				Bone bone = bones[i];
				if (bone.data.name == boneName)
				{
					return bone;
				}
			}
			return null;
		}

		public Slot FindSlot(string slotName)
		{
			if (slotName == null)
			{
				throw new ArgumentNullException("slotName", "slotName cannot be null.");
			}
			Slot[] slots = this.slots.Items;
			int i = 0;
			for (int j = this.slots.Count; i < j; i++)
			{
				Slot slot = slots[i];
				if (slot.data.name == slotName)
				{
					return slot;
				}
			}
			return null;
		}

		public void SetSkin(string skinName)
		{
			Skin foundSkin = data.FindSkin(skinName);
			if (foundSkin == null)
			{
				throw new ArgumentException("Skin not found: " + skinName, "skinName");
			}
			SetSkin(foundSkin);
		}

		public void SetSkin(Skin newSkin)
		{
			if (newSkin == skin)
			{
				return;
			}
			if (newSkin != null)
			{
				if (skin != null)
				{
					newSkin.AttachAll(this, skin);
				}
				else
				{
					Slot[] slots = this.slots.Items;
					int i = 0;
					for (int j = this.slots.Count; i < j; i++)
					{
						Slot slot = slots[i];
						string name = slot.data.attachmentName;
						if (name != null)
						{
							Attachment attachment = newSkin.GetAttachment(i, name);
							if (attachment != null)
							{
								slot.Attachment = attachment;
							}
						}
					}
				}
			}
			skin = newSkin;
			UpdateCache();
		}

		public Attachment GetAttachment(string slotName, string attachmentName)
		{
			return GetAttachment(data.FindSlot(slotName).index, attachmentName);
		}

		public Attachment GetAttachment(int slotIndex, string attachmentName)
		{
			if (attachmentName == null)
			{
				throw new ArgumentNullException("attachmentName", "attachmentName cannot be null.");
			}
			if (skin != null)
			{
				Attachment attachment = skin.GetAttachment(slotIndex, attachmentName);
				if (attachment != null)
				{
					return attachment;
				}
			}
			return (data.defaultSkin != null) ? data.defaultSkin.GetAttachment(slotIndex, attachmentName) : null;
		}

		public void SetAttachment(string slotName, string attachmentName)
		{
			if (slotName == null)
			{
				throw new ArgumentNullException("slotName", "slotName cannot be null.");
			}
			Slot[] slots = this.slots.Items;
			int i = 0;
			for (int j = this.slots.Count; i < j; i++)
			{
				Slot slot = slots[i];
				if (!(slot.data.name == slotName))
				{
					continue;
				}
				Attachment attachment = null;
				if (attachmentName != null)
				{
					attachment = GetAttachment(i, attachmentName);
					if (attachment == null)
					{
						throw new Exception("Attachment not found: " + attachmentName + ", for slot: " + slotName);
					}
				}
				slot.Attachment = attachment;
				return;
			}
			throw new Exception("Slot not found: " + slotName);
		}

		public IkConstraint FindIkConstraint(string constraintName)
		{
			if (constraintName == null)
			{
				throw new ArgumentNullException("constraintName", "constraintName cannot be null.");
			}
			IkConstraint[] ikConstraints = this.ikConstraints.Items;
			int i = 0;
			for (int j = this.ikConstraints.Count; i < j; i++)
			{
				IkConstraint ikConstraint = ikConstraints[i];
				if (ikConstraint.data.name == constraintName)
				{
					return ikConstraint;
				}
			}
			return null;
		}

		public TransformConstraint FindTransformConstraint(string constraintName)
		{
			if (constraintName == null)
			{
				throw new ArgumentNullException("constraintName", "constraintName cannot be null.");
			}
			TransformConstraint[] transformConstraints = this.transformConstraints.Items;
			int i = 0;
			for (int j = this.transformConstraints.Count; i < j; i++)
			{
				TransformConstraint transformConstraint = transformConstraints[i];
				if (transformConstraint.data.Name == constraintName)
				{
					return transformConstraint;
				}
			}
			return null;
		}

		public PathConstraint FindPathConstraint(string constraintName)
		{
			if (constraintName == null)
			{
				throw new ArgumentNullException("constraintName", "constraintName cannot be null.");
			}
			PathConstraint[] pathConstraints = this.pathConstraints.Items;
			int i = 0;
			for (int j = this.pathConstraints.Count; i < j; i++)
			{
				PathConstraint constraint = pathConstraints[i];
				if (constraint.data.Name.Equals(constraintName))
				{
					return constraint;
				}
			}
			return null;
		}

		public void GetBounds(out float x, out float y, out float width, out float height, ref float[] vertexBuffer)
		{
			float[] temp = vertexBuffer;
			temp = temp ?? new float[8];
			Slot[] drawOrder = this.drawOrder.Items;
			float minX = 2.1474836E+09f;
			float minY = 2.1474836E+09f;
			float maxX = -2.1474836E+09f;
			float maxY = -2.1474836E+09f;
			int i = 0;
			for (int j = this.drawOrder.Count; i < j; i++)
			{
				Slot slot = drawOrder[i];
				if (!slot.bone.active)
				{
					continue;
				}
				int verticesLength = 0;
				float[] vertices = null;
				Attachment attachment = slot.attachment;
				if (attachment is RegionAttachment region)
				{
					verticesLength = 8;
					vertices = temp;
					if (vertices.Length < 8)
					{
						vertices = (temp = new float[8]);
					}
					region.ComputeWorldVertices(slot, temp, 0);
				}
				else if (attachment is MeshAttachment mesh)
				{
					verticesLength = mesh.WorldVerticesLength;
					vertices = temp;
					if (vertices.Length < verticesLength)
					{
						vertices = (temp = new float[verticesLength]);
					}
					mesh.ComputeWorldVertices(slot, 0, verticesLength, temp, 0);
				}
				if (vertices != null)
				{
					for (int ii = 0; ii < verticesLength; ii += 2)
					{
						float vx = vertices[ii];
						float vy = vertices[ii + 1];
						minX = Math.Min(minX, vx);
						minY = Math.Min(minY, vy);
						maxX = Math.Max(maxX, vx);
						maxY = Math.Max(maxY, vy);
					}
				}
			}
			x = minX;
			y = minY;
			width = maxX - minX;
			height = maxY - minY;
			vertexBuffer = temp;
		}
	}
}
