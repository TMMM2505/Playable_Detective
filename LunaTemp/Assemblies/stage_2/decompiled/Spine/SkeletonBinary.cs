using System;
using System.IO;
using System.Runtime.Serialization;
using System.Text;

namespace Spine
{
	public class SkeletonBinary : SkeletonLoader
	{
		internal class Vertices
		{
			public int[] bones;

			public float[] vertices;
		}

		internal class SkeletonInput
		{
			private byte[] chars = new byte[32];

			private byte[] bytesBigEndian = new byte[8];

			internal string[] strings;

			private Stream input;

			public SkeletonInput(Stream input)
			{
				this.input = input;
			}

			public int Read()
			{
				return input.ReadByte();
			}

			public byte ReadByte()
			{
				return (byte)input.ReadByte();
			}

			public sbyte ReadSByte()
			{
				int value = input.ReadByte();
				if (value == -1)
				{
					throw new EndOfStreamException();
				}
				return (sbyte)value;
			}

			public bool ReadBoolean()
			{
				return input.ReadByte() != 0;
			}

			public float ReadFloat()
			{
				input.Read(bytesBigEndian, 0, 4);
				chars[3] = bytesBigEndian[0];
				chars[2] = bytesBigEndian[1];
				chars[1] = bytesBigEndian[2];
				chars[0] = bytesBigEndian[3];
				return BitConverter.ToSingle(chars, 0);
			}

			public int ReadInt()
			{
				input.Read(bytesBigEndian, 0, 4);
				return (bytesBigEndian[0] << 24) + (bytesBigEndian[1] << 16) + (bytesBigEndian[2] << 8) + bytesBigEndian[3];
			}

			public long ReadLong()
			{
				input.Read(bytesBigEndian, 0, 8);
				return (long)(((ulong)bytesBigEndian[0] << 56) + ((ulong)bytesBigEndian[1] << 48) + ((ulong)bytesBigEndian[2] << 40) + ((ulong)bytesBigEndian[3] << 32) + ((ulong)bytesBigEndian[4] << 24) + ((ulong)bytesBigEndian[5] << 16) + ((ulong)bytesBigEndian[6] << 8) + bytesBigEndian[7]);
			}

			public int ReadInt(bool optimizePositive)
			{
				int b = input.ReadByte();
				int result = b & 0x7F;
				if (((uint)b & 0x80u) != 0)
				{
					b = input.ReadByte();
					result |= (b & 0x7F) << 7;
					if (((uint)b & 0x80u) != 0)
					{
						b = input.ReadByte();
						result |= (b & 0x7F) << 14;
						if (((uint)b & 0x80u) != 0)
						{
							b = input.ReadByte();
							result |= (b & 0x7F) << 21;
							if (((uint)b & 0x80u) != 0)
							{
								result |= (input.ReadByte() & 0x7F) << 28;
							}
						}
					}
				}
				return optimizePositive ? result : ((result >> 1) ^ -(result & 1));
			}

			public string ReadString()
			{
				int byteCount = ReadInt(true);
				switch (byteCount)
				{
				case 0:
					return null;
				case 1:
					return "";
				default:
				{
					byteCount--;
					byte[] buffer = chars;
					if (buffer.Length < byteCount)
					{
						buffer = new byte[byteCount];
					}
					ReadFully(buffer, 0, byteCount);
					return Encoding.UTF8.GetString(buffer, 0, byteCount);
				}
				}
			}

			public string ReadStringRef()
			{
				int index = ReadInt(true);
				return (index == 0) ? null : strings[index - 1];
			}

			public void ReadFully(byte[] buffer, int offset, int length)
			{
				while (length > 0)
				{
					int count = input.Read(buffer, offset, length);
					if (count <= 0)
					{
						throw new EndOfStreamException();
					}
					offset += count;
					length -= count;
				}
			}

			public string GetVersionString()
			{
				try
				{
					long initialPosition = input.Position;
					ReadLong();
					long stringPosition = input.Position;
					int stringByteCount = ReadInt(true);
					input.Position = stringPosition;
					if (stringByteCount <= 13)
					{
						string version = ReadString();
						if (char.IsDigit(version[0]))
						{
							return version;
						}
					}
					input.Position = initialPosition;
					return GetVersionStringOld3X();
				}
				catch (Exception ex)
				{
					throw new ArgumentException("Stream does not contain valid binary Skeleton Data.\n" + ex, "input");
				}
			}

			public string GetVersionStringOld3X()
			{
				int byteCount = ReadInt(true);
				if (byteCount > 1)
				{
					input.Position += byteCount - 1;
				}
				byteCount = ReadInt(true);
				if (byteCount > 1 && byteCount <= 13)
				{
					byteCount--;
					byte[] buffer = new byte[byteCount];
					ReadFully(buffer, 0, byteCount);
					return Encoding.UTF8.GetString(buffer, 0, byteCount);
				}
				throw new ArgumentException("Stream does not contain valid binary Skeleton Data.");
			}
		}

		public const int BONE_ROTATE = 0;

		public const int BONE_TRANSLATE = 1;

		public const int BONE_TRANSLATEX = 2;

		public const int BONE_TRANSLATEY = 3;

		public const int BONE_SCALE = 4;

		public const int BONE_SCALEX = 5;

		public const int BONE_SCALEY = 6;

		public const int BONE_SHEAR = 7;

		public const int BONE_SHEARX = 8;

		public const int BONE_SHEARY = 9;

		public const int SLOT_ATTACHMENT = 0;

		public const int SLOT_RGBA = 1;

		public const int SLOT_RGB = 2;

		public const int SLOT_RGBA2 = 3;

		public const int SLOT_RGB2 = 4;

		public const int SLOT_ALPHA = 5;

		public const int ATTACHMENT_DEFORM = 0;

		public const int ATTACHMENT_SEQUENCE = 1;

		public const int PATH_POSITION = 0;

		public const int PATH_SPACING = 1;

		public const int PATH_MIX = 2;

		public const int CURVE_LINEAR = 0;

		public const int CURVE_STEPPED = 1;

		public const int CURVE_BEZIER = 2;

		public static readonly TransformMode[] TransformModeValues = new TransformMode[5]
		{
			TransformMode.Normal,
			TransformMode.OnlyTranslation,
			TransformMode.NoRotationOrReflection,
			TransformMode.NoScale,
			TransformMode.NoScaleOrReflection
		};

		public SkeletonBinary(AttachmentLoader attachmentLoader)
			: base(attachmentLoader)
		{
		}

		public SkeletonBinary(params Atlas[] atlasArray)
			: base(atlasArray)
		{
		}

		public override SkeletonData ReadSkeletonData(string path)
		{
			using (FileStream input = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.Read))
			{
				SkeletonData skeletonData = ReadSkeletonData(input);
				skeletonData.name = Path.GetFileNameWithoutExtension(path);
				return skeletonData;
			}
		}

		public static string GetVersionString(Stream file)
		{
			if (file == null)
			{
				throw new ArgumentNullException("file");
			}
			SkeletonInput input = new SkeletonInput(file);
			return input.GetVersionString();
		}

		public SkeletonData ReadSkeletonData(Stream file)
		{
			if (file == null)
			{
				throw new ArgumentNullException("file");
			}
			float scale = base.scale;
			SkeletonData skeletonData = new SkeletonData();
			SkeletonInput input = new SkeletonInput(file);
			long hash = input.ReadLong();
			skeletonData.hash = ((hash == 0L) ? null : hash.ToString());
			skeletonData.version = input.ReadString();
			if (skeletonData.version.Length == 0)
			{
				skeletonData.version = null;
			}
			if (skeletonData.version.Length > 13)
			{
				return null;
			}
			skeletonData.x = input.ReadFloat();
			skeletonData.y = input.ReadFloat();
			skeletonData.width = input.ReadFloat();
			skeletonData.height = input.ReadFloat();
			bool nonessential = input.ReadBoolean();
			if (nonessential)
			{
				skeletonData.fps = input.ReadFloat();
				skeletonData.imagesPath = input.ReadString();
				if (string.IsNullOrEmpty(skeletonData.imagesPath))
				{
					skeletonData.imagesPath = null;
				}
				skeletonData.audioPath = input.ReadString();
				if (string.IsNullOrEmpty(skeletonData.audioPath))
				{
					skeletonData.audioPath = null;
				}
			}
			int n2;
			object[] o = (input.strings = new string[n2 = input.ReadInt(true)]);
			for (int i5 = 0; i5 < n2; i5++)
			{
				o[i5] = input.ReadString();
			}
			BoneData[] bones = skeletonData.bones.Resize(n2 = input.ReadInt(true)).Items;
			for (int i4 = 0; i4 < n2; i4++)
			{
				string name = input.ReadString();
				BoneData parent = ((i4 == 0) ? null : bones[input.ReadInt(true)]);
				BoneData data = new BoneData(i4, name, parent);
				data.rotation = input.ReadFloat();
				data.x = input.ReadFloat() * scale;
				data.y = input.ReadFloat() * scale;
				data.scaleX = input.ReadFloat();
				data.scaleY = input.ReadFloat();
				data.shearX = input.ReadFloat();
				data.shearY = input.ReadFloat();
				data.Length = input.ReadFloat() * scale;
				data.transformMode = TransformModeValues[input.ReadInt(true)];
				data.skinRequired = input.ReadBoolean();
				if (nonessential)
				{
					input.ReadInt();
				}
				bones[i4] = data;
			}
			SlotData[] slots = skeletonData.slots.Resize(n2 = input.ReadInt(true)).Items;
			for (int i3 = 0; i3 < n2; i3++)
			{
				string slotName = input.ReadString();
				BoneData boneData = bones[input.ReadInt(true)];
				SlotData slotData = new SlotData(i3, slotName, boneData);
				int color = input.ReadInt();
				slotData.r = (float)((color & 0xFF000000u) >> 24) / 255f;
				slotData.g = (float)((color & 0xFF0000) >> 16) / 255f;
				slotData.b = (float)((color & 0xFF00) >> 8) / 255f;
				slotData.a = (float)(color & 0xFF) / 255f;
				int darkColor = input.ReadInt();
				if (darkColor != -1)
				{
					slotData.hasSecondColor = true;
					slotData.r2 = (float)((darkColor & 0xFF0000) >> 16) / 255f;
					slotData.g2 = (float)((darkColor & 0xFF00) >> 8) / 255f;
					slotData.b2 = (float)(darkColor & 0xFF) / 255f;
				}
				slotData.attachmentName = input.ReadStringRef();
				slotData.blendMode = (BlendMode)input.ReadInt(true);
				slots[i3] = slotData;
			}
			object[] items = skeletonData.ikConstraints.Resize(n2 = input.ReadInt(true)).Items;
			o = items;
			for (int i2 = 0; i2 < n2; i2++)
			{
				IkConstraintData data2 = new IkConstraintData(input.ReadString());
				data2.order = input.ReadInt(true);
				data2.skinRequired = input.ReadBoolean();
				int nn;
				BoneData[] constraintBones = data2.bones.Resize(nn = input.ReadInt(true)).Items;
				for (int ii = 0; ii < nn; ii++)
				{
					constraintBones[ii] = bones[input.ReadInt(true)];
				}
				data2.target = bones[input.ReadInt(true)];
				data2.mix = input.ReadFloat();
				data2.softness = input.ReadFloat() * scale;
				data2.bendDirection = input.ReadSByte();
				data2.compress = input.ReadBoolean();
				data2.stretch = input.ReadBoolean();
				data2.uniform = input.ReadBoolean();
				o[i2] = data2;
			}
			items = skeletonData.transformConstraints.Resize(n2 = input.ReadInt(true)).Items;
			o = items;
			for (int n = 0; n < n2; n++)
			{
				TransformConstraintData data3 = new TransformConstraintData(input.ReadString());
				data3.order = input.ReadInt(true);
				data3.skinRequired = input.ReadBoolean();
				int nn2;
				BoneData[] constraintBones2 = data3.bones.Resize(nn2 = input.ReadInt(true)).Items;
				for (int ii2 = 0; ii2 < nn2; ii2++)
				{
					constraintBones2[ii2] = bones[input.ReadInt(true)];
				}
				data3.target = bones[input.ReadInt(true)];
				data3.local = input.ReadBoolean();
				data3.relative = input.ReadBoolean();
				data3.offsetRotation = input.ReadFloat();
				data3.offsetX = input.ReadFloat() * scale;
				data3.offsetY = input.ReadFloat() * scale;
				data3.offsetScaleX = input.ReadFloat();
				data3.offsetScaleY = input.ReadFloat();
				data3.offsetShearY = input.ReadFloat();
				data3.mixRotate = input.ReadFloat();
				data3.mixX = input.ReadFloat();
				data3.mixY = input.ReadFloat();
				data3.mixScaleX = input.ReadFloat();
				data3.mixScaleY = input.ReadFloat();
				data3.mixShearY = input.ReadFloat();
				o[n] = data3;
			}
			items = skeletonData.pathConstraints.Resize(n2 = input.ReadInt(true)).Items;
			o = items;
			for (int m = 0; m < n2; m++)
			{
				PathConstraintData data4 = new PathConstraintData(input.ReadString());
				data4.order = input.ReadInt(true);
				data4.skinRequired = input.ReadBoolean();
				int nn3;
				items = data4.bones.Resize(nn3 = input.ReadInt(true)).Items;
				object[] constraintBones3 = items;
				for (int ii3 = 0; ii3 < nn3; ii3++)
				{
					constraintBones3[ii3] = bones[input.ReadInt(true)];
				}
				data4.target = slots[input.ReadInt(true)];
				data4.positionMode = (PositionMode)Enum.GetValues(typeof(PositionMode)).GetValue(input.ReadInt(true));
				data4.spacingMode = (SpacingMode)Enum.GetValues(typeof(SpacingMode)).GetValue(input.ReadInt(true));
				data4.rotateMode = (RotateMode)Enum.GetValues(typeof(RotateMode)).GetValue(input.ReadInt(true));
				data4.offsetRotation = input.ReadFloat();
				data4.position = input.ReadFloat();
				if (data4.positionMode == PositionMode.Fixed)
				{
					data4.position *= scale;
				}
				data4.spacing = input.ReadFloat();
				if (data4.spacingMode == SpacingMode.Length || data4.spacingMode == SpacingMode.Fixed)
				{
					data4.spacing *= scale;
				}
				data4.mixRotate = input.ReadFloat();
				data4.mixX = input.ReadFloat();
				data4.mixY = input.ReadFloat();
				o[m] = data4;
			}
			Skin defaultSkin = ReadSkin(input, skeletonData, true, nonessential);
			if (defaultSkin != null)
			{
				skeletonData.defaultSkin = defaultSkin;
				skeletonData.skins.Add(defaultSkin);
			}
			int l = skeletonData.skins.Count;
			items = skeletonData.skins.Resize(n2 = l + input.ReadInt(true)).Items;
			o = items;
			for (; l < n2; l++)
			{
				o[l] = ReadSkin(input, skeletonData, false, nonessential);
			}
			n2 = linkedMeshes.Count;
			for (int k = 0; k < n2; k++)
			{
				LinkedMesh linkedMesh = linkedMeshes[k];
				Skin skin = ((linkedMesh.skin == null) ? skeletonData.DefaultSkin : skeletonData.FindSkin(linkedMesh.skin));
				if (skin == null)
				{
					throw new Exception("Skin not found: " + linkedMesh.skin);
				}
				Attachment parent2 = skin.GetAttachment(linkedMesh.slotIndex, linkedMesh.parent);
				if (parent2 == null)
				{
					throw new Exception("Parent mesh not found: " + linkedMesh.parent);
				}
				linkedMesh.mesh.TimelineAttachment = (linkedMesh.inheritTimelines ? ((VertexAttachment)parent2) : linkedMesh.mesh);
				linkedMesh.mesh.ParentMesh = (MeshAttachment)parent2;
				if (linkedMesh.mesh.Sequence == null)
				{
					linkedMesh.mesh.UpdateRegion();
				}
			}
			linkedMeshes.Clear();
			items = skeletonData.events.Resize(n2 = input.ReadInt(true)).Items;
			o = items;
			for (int j = 0; j < n2; j++)
			{
				EventData data5 = new EventData(input.ReadStringRef());
				data5.Int = input.ReadInt(false);
				data5.Float = input.ReadFloat();
				data5.String = input.ReadString();
				data5.AudioPath = input.ReadString();
				if (data5.AudioPath != null)
				{
					data5.Volume = input.ReadFloat();
					data5.Balance = input.ReadFloat();
				}
				o[j] = data5;
			}
			items = skeletonData.animations.Resize(n2 = input.ReadInt(true)).Items;
			o = items;
			for (int i = 0; i < n2; i++)
			{
				o[i] = ReadAnimation(input.ReadString(), input, skeletonData);
			}
			return skeletonData;
		}

		private Skin ReadSkin(SkeletonInput input, SkeletonData skeletonData, bool defaultSkin, bool nonessential)
		{
			int slotCount;
			Skin skin;
			if (defaultSkin)
			{
				slotCount = input.ReadInt(true);
				if (slotCount == 0)
				{
					return null;
				}
				skin = new Skin("default");
			}
			else
			{
				skin = new Skin(input.ReadStringRef());
				object[] items = skin.bones.Resize(input.ReadInt(true)).Items;
				object[] bones = items;
				BoneData[] bonesItems = skeletonData.bones.Items;
				int m = 0;
				for (int n4 = skin.bones.Count; m < n4; m++)
				{
					bones[m] = bonesItems[input.ReadInt(true)];
				}
				IkConstraintData[] ikConstraintsItems = skeletonData.ikConstraints.Items;
				int l = 0;
				for (int n3 = input.ReadInt(true); l < n3; l++)
				{
					skin.constraints.Add(ikConstraintsItems[input.ReadInt(true)]);
				}
				TransformConstraintData[] transformConstraintsItems = skeletonData.transformConstraints.Items;
				int k = 0;
				for (int n2 = input.ReadInt(true); k < n2; k++)
				{
					skin.constraints.Add(transformConstraintsItems[input.ReadInt(true)]);
				}
				PathConstraintData[] pathConstraintsItems = skeletonData.pathConstraints.Items;
				int j = 0;
				for (int n = input.ReadInt(true); j < n; j++)
				{
					skin.constraints.Add(pathConstraintsItems[input.ReadInt(true)]);
				}
				skin.constraints.TrimExcess();
				slotCount = input.ReadInt(true);
			}
			for (int i = 0; i < slotCount; i++)
			{
				int slotIndex = input.ReadInt(true);
				int ii = 0;
				for (int nn = input.ReadInt(true); ii < nn; ii++)
				{
					string name = input.ReadStringRef();
					Attachment attachment = ReadAttachment(input, skeletonData, skin, slotIndex, name, nonessential);
					if (attachment != null)
					{
						skin.SetAttachment(slotIndex, name, attachment);
					}
				}
			}
			return skin;
		}

		private Attachment ReadAttachment(SkeletonInput input, SkeletonData skeletonData, Skin skin, int slotIndex, string attachmentName, bool nonessential)
		{
			float scale = base.scale;
			string name = input.ReadStringRef();
			if (name == null)
			{
				name = attachmentName;
			}
			switch (input.ReadByte())
			{
			case 0:
			{
				string path = input.ReadStringRef();
				float rotation = input.ReadFloat();
				float x = input.ReadFloat();
				float y = input.ReadFloat();
				float scaleX = input.ReadFloat();
				float scaleY = input.ReadFloat();
				float width = input.ReadFloat();
				float height = input.ReadFloat();
				int color = input.ReadInt();
				Sequence sequence = ReadSequence(input);
				if (path == null)
				{
					path = name;
				}
				RegionAttachment region = attachmentLoader.NewRegionAttachment(skin, name, path, sequence);
				if (region == null)
				{
					return null;
				}
				region.Path = path;
				region.x = x * scale;
				region.y = y * scale;
				region.scaleX = scaleX;
				region.scaleY = scaleY;
				region.rotation = rotation;
				region.width = width * scale;
				region.height = height * scale;
				region.r = (float)((color & 0xFF000000u) >> 24) / 255f;
				region.g = (float)((color & 0xFF0000) >> 16) / 255f;
				region.b = (float)((color & 0xFF00) >> 8) / 255f;
				region.a = (float)(color & 0xFF) / 255f;
				region.sequence = sequence;
				if (sequence == null)
				{
					region.UpdateRegion();
				}
				return region;
			}
			case 1:
			{
				int vertexCount2 = input.ReadInt(true);
				Vertices vertices = ReadVertices(input, vertexCount2);
				if (nonessential)
				{
					input.ReadInt();
				}
				BoundingBoxAttachment box = attachmentLoader.NewBoundingBoxAttachment(skin, name);
				if (box == null)
				{
					return null;
				}
				box.worldVerticesLength = vertexCount2 << 1;
				box.vertices = vertices.vertices;
				box.bones = vertices.bones;
				return box;
			}
			case 2:
			{
				string path2 = input.ReadStringRef();
				int color2 = input.ReadInt();
				int vertexCount3 = input.ReadInt(true);
				float[] uvs = ReadFloatArray(input, vertexCount3 << 1, 1f);
				int[] triangles = ReadShortArray(input);
				Vertices vertices3 = ReadVertices(input, vertexCount3);
				int hullLength = input.ReadInt(true);
				Sequence sequence2 = ReadSequence(input);
				int[] edges = null;
				float width2 = 0f;
				float height2 = 0f;
				if (nonessential)
				{
					edges = ReadShortArray(input);
					width2 = input.ReadFloat();
					height2 = input.ReadFloat();
				}
				if (path2 == null)
				{
					path2 = name;
				}
				MeshAttachment mesh = attachmentLoader.NewMeshAttachment(skin, name, path2, sequence2);
				if (mesh == null)
				{
					return null;
				}
				mesh.Path = path2;
				mesh.r = (float)((color2 & 0xFF000000u) >> 24) / 255f;
				mesh.g = (float)((color2 & 0xFF0000) >> 16) / 255f;
				mesh.b = (float)((color2 & 0xFF00) >> 8) / 255f;
				mesh.a = (float)(color2 & 0xFF) / 255f;
				mesh.bones = vertices3.bones;
				mesh.vertices = vertices3.vertices;
				mesh.WorldVerticesLength = vertexCount3 << 1;
				mesh.triangles = triangles;
				mesh.regionUVs = uvs;
				if (sequence2 == null)
				{
					mesh.UpdateRegion();
				}
				mesh.HullLength = hullLength << 1;
				mesh.Sequence = sequence2;
				if (nonessential)
				{
					mesh.Edges = edges;
					mesh.Width = width2 * scale;
					mesh.Height = height2 * scale;
				}
				return mesh;
			}
			case 3:
			{
				string path3 = input.ReadStringRef();
				int color3 = input.ReadInt();
				string skinName = input.ReadStringRef();
				string parent = input.ReadStringRef();
				bool inheritTimelines = input.ReadBoolean();
				Sequence sequence3 = ReadSequence(input);
				float width3 = 0f;
				float height3 = 0f;
				if (nonessential)
				{
					width3 = input.ReadFloat();
					height3 = input.ReadFloat();
				}
				if (path3 == null)
				{
					path3 = name;
				}
				MeshAttachment mesh2 = attachmentLoader.NewMeshAttachment(skin, name, path3, sequence3);
				if (mesh2 == null)
				{
					return null;
				}
				mesh2.Path = path3;
				mesh2.r = (float)((color3 & 0xFF000000u) >> 24) / 255f;
				mesh2.g = (float)((color3 & 0xFF0000) >> 16) / 255f;
				mesh2.b = (float)((color3 & 0xFF00) >> 8) / 255f;
				mesh2.a = (float)(color3 & 0xFF) / 255f;
				mesh2.Sequence = sequence3;
				if (nonessential)
				{
					mesh2.Width = width3 * scale;
					mesh2.Height = height3 * scale;
				}
				linkedMeshes.Add(new LinkedMesh(mesh2, skinName, slotIndex, parent, inheritTimelines));
				return mesh2;
			}
			case 4:
			{
				bool closed = input.ReadBoolean();
				bool constantSpeed = input.ReadBoolean();
				int vertexCount4 = input.ReadInt(true);
				Vertices vertices4 = ReadVertices(input, vertexCount4);
				float[] lengths = new float[vertexCount4 / 3];
				int i = 0;
				for (int j = lengths.Length; i < j; i++)
				{
					lengths[i] = input.ReadFloat() * scale;
				}
				if (nonessential)
				{
					input.ReadInt();
				}
				PathAttachment path4 = attachmentLoader.NewPathAttachment(skin, name);
				if (path4 == null)
				{
					return null;
				}
				path4.closed = closed;
				path4.constantSpeed = constantSpeed;
				path4.worldVerticesLength = vertexCount4 << 1;
				path4.vertices = vertices4.vertices;
				path4.bones = vertices4.bones;
				path4.lengths = lengths;
				return path4;
			}
			case 5:
			{
				float rotation2 = input.ReadFloat();
				float x2 = input.ReadFloat();
				float y2 = input.ReadFloat();
				if (nonessential)
				{
					input.ReadInt();
				}
				PointAttachment point = attachmentLoader.NewPointAttachment(skin, name);
				if (point == null)
				{
					return null;
				}
				point.x = x2 * scale;
				point.y = y2 * scale;
				point.rotation = rotation2;
				return point;
			}
			case 6:
			{
				int endSlotIndex = input.ReadInt(true);
				int vertexCount = input.ReadInt(true);
				Vertices vertices2 = ReadVertices(input, vertexCount);
				if (nonessential)
				{
					input.ReadInt();
				}
				ClippingAttachment clip = attachmentLoader.NewClippingAttachment(skin, name);
				if (clip == null)
				{
					return null;
				}
				clip.EndSlot = skeletonData.slots.Items[endSlotIndex];
				clip.worldVerticesLength = vertexCount << 1;
				clip.vertices = vertices2.vertices;
				clip.bones = vertices2.bones;
				return clip;
			}
			default:
				return null;
			}
		}

		private Sequence ReadSequence(SkeletonInput input)
		{
			if (!input.ReadBoolean())
			{
				return null;
			}
			Sequence sequence = new Sequence(input.ReadInt(true));
			sequence.Start = input.ReadInt(true);
			sequence.Digits = input.ReadInt(true);
			sequence.SetupIndex = input.ReadInt(true);
			return sequence;
		}

		private Vertices ReadVertices(SkeletonInput input, int vertexCount)
		{
			float scale = base.scale;
			int verticesLength = vertexCount << 1;
			Vertices vertices = new Vertices();
			if (!input.ReadBoolean())
			{
				vertices.vertices = ReadFloatArray(input, verticesLength, scale);
				return vertices;
			}
			ExposedList<float> weights = new ExposedList<float>(verticesLength * 3 * 3);
			ExposedList<int> bonesArray = new ExposedList<int>(verticesLength * 3);
			for (int i = 0; i < vertexCount; i++)
			{
				int boneCount = input.ReadInt(true);
				bonesArray.Add(boneCount);
				for (int ii = 0; ii < boneCount; ii++)
				{
					bonesArray.Add(input.ReadInt(true));
					weights.Add(input.ReadFloat() * scale);
					weights.Add(input.ReadFloat() * scale);
					weights.Add(input.ReadFloat());
				}
			}
			vertices.vertices = weights.ToArray();
			vertices.bones = bonesArray.ToArray();
			return vertices;
		}

		private float[] ReadFloatArray(SkeletonInput input, int n, float scale)
		{
			float[] array = new float[n];
			if (scale == 1f)
			{
				for (int j = 0; j < n; j++)
				{
					array[j] = input.ReadFloat();
				}
			}
			else
			{
				for (int i = 0; i < n; i++)
				{
					array[i] = input.ReadFloat() * scale;
				}
			}
			return array;
		}

		private int[] ReadShortArray(SkeletonInput input)
		{
			int j = input.ReadInt(true);
			int[] array = new int[j];
			for (int i = 0; i < j; i++)
			{
				array[i] = (input.ReadByte() << 8) | input.ReadByte();
			}
			return array;
		}

		private Animation ReadAnimation(string name, SkeletonInput input, SkeletonData skeletonData)
		{
			ExposedList<Timeline> timelines = new ExposedList<Timeline>(input.ReadInt(true));
			float scale = base.scale;
			int i = 0;
			for (int n2 = input.ReadInt(true); i < n2; i++)
			{
				int slotIndex = input.ReadInt(true);
				int ii3 = 0;
				for (int nn = input.ReadInt(true); ii3 < nn; ii3++)
				{
					int timelineType = input.ReadByte();
					int frameCount = input.ReadInt(true);
					int frameLast = frameCount - 1;
					switch (timelineType)
					{
					case 0:
					{
						AttachmentTimeline timeline = new AttachmentTimeline(frameCount, slotIndex);
						for (int frame = 0; frame < frameCount; frame++)
						{
							timeline.SetFrame(frame, input.ReadFloat(), input.ReadStringRef());
						}
						timelines.Add(timeline);
						break;
					}
					case 1:
					{
						RGBATimeline timeline2 = new RGBATimeline(frameCount, input.ReadInt(true), slotIndex);
						float time = input.ReadFloat();
						float r = (float)input.Read() / 255f;
						float g = (float)input.Read() / 255f;
						float b = (float)input.Read() / 255f;
						float a = (float)input.Read() / 255f;
						int frame2 = 0;
						int bezier = 0;
						while (true)
						{
							timeline2.SetFrame(frame2, time, r, g, b, a);
							if (frame2 == frameLast)
							{
								break;
							}
							float time13 = input.ReadFloat();
							float r5 = (float)input.Read() / 255f;
							float g5 = (float)input.Read() / 255f;
							float b5 = (float)input.Read() / 255f;
							float a4 = (float)input.Read() / 255f;
							switch (input.ReadByte())
							{
							case 1:
								timeline2.SetStepped(frame2);
								break;
							case 2:
								SetBezier(input, timeline2, bezier++, frame2, 0, time, time13, r, r5, 1f);
								SetBezier(input, timeline2, bezier++, frame2, 1, time, time13, g, g5, 1f);
								SetBezier(input, timeline2, bezier++, frame2, 2, time, time13, b, b5, 1f);
								SetBezier(input, timeline2, bezier++, frame2, 3, time, time13, a, a4, 1f);
								break;
							}
							time = time13;
							r = r5;
							g = g5;
							b = b5;
							a = a4;
							frame2++;
						}
						timelines.Add(timeline2);
						break;
					}
					case 2:
					{
						RGBTimeline timeline3 = new RGBTimeline(frameCount, input.ReadInt(true), slotIndex);
						float time2 = input.ReadFloat();
						float r2 = (float)input.Read() / 255f;
						float g2 = (float)input.Read() / 255f;
						float b2 = (float)input.Read() / 255f;
						int frame3 = 0;
						int bezier2 = 0;
						while (true)
						{
							timeline3.SetFrame(frame3, time2, r2, g2, b2);
							if (frame3 == frameLast)
							{
								break;
							}
							float time14 = input.ReadFloat();
							float r6 = (float)input.Read() / 255f;
							float g6 = (float)input.Read() / 255f;
							float b6 = (float)input.Read() / 255f;
							switch (input.ReadByte())
							{
							case 1:
								timeline3.SetStepped(frame3);
								break;
							case 2:
								SetBezier(input, timeline3, bezier2++, frame3, 0, time2, time14, r2, r6, 1f);
								SetBezier(input, timeline3, bezier2++, frame3, 1, time2, time14, g2, g6, 1f);
								SetBezier(input, timeline3, bezier2++, frame3, 2, time2, time14, b2, b6, 1f);
								break;
							}
							time2 = time14;
							r2 = r6;
							g2 = g6;
							b2 = b6;
							frame3++;
						}
						timelines.Add(timeline3);
						break;
					}
					case 3:
					{
						RGBA2Timeline timeline5 = new RGBA2Timeline(frameCount, input.ReadInt(true), slotIndex);
						float time3 = input.ReadFloat();
						float r3 = (float)input.Read() / 255f;
						float g3 = (float)input.Read() / 255f;
						float b3 = (float)input.Read() / 255f;
						float a2 = (float)input.Read() / 255f;
						float r7 = (float)input.Read() / 255f;
						float g7 = (float)input.Read() / 255f;
						float b7 = (float)input.Read() / 255f;
						int frame4 = 0;
						int bezier3 = 0;
						while (true)
						{
							timeline5.SetFrame(frame4, time3, r3, g3, b3, a2, r7, g7, b7);
							if (frame4 == frameLast)
							{
								break;
							}
							float time15 = input.ReadFloat();
							float nr = (float)input.Read() / 255f;
							float ng = (float)input.Read() / 255f;
							float nb = (float)input.Read() / 255f;
							float na = (float)input.Read() / 255f;
							float nr3 = (float)input.Read() / 255f;
							float ng3 = (float)input.Read() / 255f;
							float nb3 = (float)input.Read() / 255f;
							switch (input.ReadByte())
							{
							case 1:
								timeline5.SetStepped(frame4);
								break;
							case 2:
								SetBezier(input, timeline5, bezier3++, frame4, 0, time3, time15, r3, nr, 1f);
								SetBezier(input, timeline5, bezier3++, frame4, 1, time3, time15, g3, ng, 1f);
								SetBezier(input, timeline5, bezier3++, frame4, 2, time3, time15, b3, nb, 1f);
								SetBezier(input, timeline5, bezier3++, frame4, 3, time3, time15, a2, na, 1f);
								SetBezier(input, timeline5, bezier3++, frame4, 4, time3, time15, r7, nr3, 1f);
								SetBezier(input, timeline5, bezier3++, frame4, 5, time3, time15, g7, ng3, 1f);
								SetBezier(input, timeline5, bezier3++, frame4, 6, time3, time15, b7, nb3, 1f);
								break;
							}
							time3 = time15;
							r3 = nr;
							g3 = ng;
							b3 = nb;
							a2 = na;
							r7 = nr3;
							g7 = ng3;
							b7 = nb3;
							frame4++;
						}
						timelines.Add(timeline5);
						break;
					}
					case 4:
					{
						RGB2Timeline timeline6 = new RGB2Timeline(frameCount, input.ReadInt(true), slotIndex);
						float time5 = input.ReadFloat();
						float r4 = (float)input.Read() / 255f;
						float g4 = (float)input.Read() / 255f;
						float b4 = (float)input.Read() / 255f;
						float r8 = (float)input.Read() / 255f;
						float g8 = (float)input.Read() / 255f;
						float b8 = (float)input.Read() / 255f;
						int frame5 = 0;
						int bezier4 = 0;
						while (true)
						{
							timeline6.SetFrame(frame5, time5, r4, g4, b4, r8, g8, b8);
							if (frame5 == frameLast)
							{
								break;
							}
							float time16 = input.ReadFloat();
							float nr2 = (float)input.Read() / 255f;
							float ng2 = (float)input.Read() / 255f;
							float nb2 = (float)input.Read() / 255f;
							float nr4 = (float)input.Read() / 255f;
							float ng4 = (float)input.Read() / 255f;
							float nb4 = (float)input.Read() / 255f;
							switch (input.ReadByte())
							{
							case 1:
								timeline6.SetStepped(frame5);
								break;
							case 2:
								SetBezier(input, timeline6, bezier4++, frame5, 0, time5, time16, r4, nr2, 1f);
								SetBezier(input, timeline6, bezier4++, frame5, 1, time5, time16, g4, ng2, 1f);
								SetBezier(input, timeline6, bezier4++, frame5, 2, time5, time16, b4, nb2, 1f);
								SetBezier(input, timeline6, bezier4++, frame5, 3, time5, time16, r8, nr4, 1f);
								SetBezier(input, timeline6, bezier4++, frame5, 4, time5, time16, g8, ng4, 1f);
								SetBezier(input, timeline6, bezier4++, frame5, 5, time5, time16, b8, nb4, 1f);
								break;
							}
							time5 = time16;
							r4 = nr2;
							g4 = ng2;
							b4 = nb2;
							r8 = nr4;
							g8 = ng4;
							b8 = nb4;
							frame5++;
						}
						timelines.Add(timeline6);
						break;
					}
					case 5:
					{
						AlphaTimeline timeline7 = new AlphaTimeline(frameCount, input.ReadInt(true), slotIndex);
						float time6 = input.ReadFloat();
						float a3 = (float)input.Read() / 255f;
						int frame6 = 0;
						int bezier5 = 0;
						while (true)
						{
							timeline7.SetFrame(frame6, time6, a3);
							if (frame6 == frameLast)
							{
								break;
							}
							float time17 = input.ReadFloat();
							float a5 = (float)input.Read() / 255f;
							switch (input.ReadByte())
							{
							case 1:
								timeline7.SetStepped(frame6);
								break;
							case 2:
								SetBezier(input, timeline7, bezier5++, frame6, 0, time6, time17, a3, a5, 1f);
								break;
							}
							time6 = time17;
							a3 = a5;
							frame6++;
						}
						timelines.Add(timeline7);
						break;
					}
					}
				}
			}
			int j = 0;
			for (int n3 = input.ReadInt(true); j < n3; j++)
			{
				int boneIndex = input.ReadInt(true);
				int ii4 = 0;
				for (int nn2 = input.ReadInt(true); ii4 < nn2; ii4++)
				{
					int type = input.ReadByte();
					int frameCount2 = input.ReadInt(true);
					int bezierCount = input.ReadInt(true);
					switch (type)
					{
					case 0:
						timelines.Add(ReadTimeline(input, new RotateTimeline(frameCount2, bezierCount, boneIndex), 1f));
						break;
					case 1:
						timelines.Add(ReadTimeline(input, new TranslateTimeline(frameCount2, bezierCount, boneIndex), scale));
						break;
					case 2:
						timelines.Add(ReadTimeline(input, new TranslateXTimeline(frameCount2, bezierCount, boneIndex), scale));
						break;
					case 3:
						timelines.Add(ReadTimeline(input, new TranslateYTimeline(frameCount2, bezierCount, boneIndex), scale));
						break;
					case 4:
						timelines.Add(ReadTimeline(input, new ScaleTimeline(frameCount2, bezierCount, boneIndex), 1f));
						break;
					case 5:
						timelines.Add(ReadTimeline(input, new ScaleXTimeline(frameCount2, bezierCount, boneIndex), 1f));
						break;
					case 6:
						timelines.Add(ReadTimeline(input, new ScaleYTimeline(frameCount2, bezierCount, boneIndex), 1f));
						break;
					case 7:
						timelines.Add(ReadTimeline(input, new ShearTimeline(frameCount2, bezierCount, boneIndex), 1f));
						break;
					case 8:
						timelines.Add(ReadTimeline(input, new ShearXTimeline(frameCount2, bezierCount, boneIndex), 1f));
						break;
					case 9:
						timelines.Add(ReadTimeline(input, new ShearYTimeline(frameCount2, bezierCount, boneIndex), 1f));
						break;
					}
				}
			}
			int k = 0;
			for (int n4 = input.ReadInt(true); k < n4; k++)
			{
				int index = input.ReadInt(true);
				int frameCount3 = input.ReadInt(true);
				int frameLast2 = frameCount3 - 1;
				IkConstraintTimeline timeline8 = new IkConstraintTimeline(frameCount3, input.ReadInt(true), index);
				float time7 = input.ReadFloat();
				float mix = input.ReadFloat();
				float softness = input.ReadFloat() * scale;
				int frame7 = 0;
				int bezier6 = 0;
				while (true)
				{
					timeline8.SetFrame(frame7, time7, mix, softness, input.ReadSByte(), input.ReadBoolean(), input.ReadBoolean());
					if (frame7 == frameLast2)
					{
						break;
					}
					float time18 = input.ReadFloat();
					float mix2 = input.ReadFloat();
					float softness2 = input.ReadFloat() * scale;
					switch (input.ReadByte())
					{
					case 1:
						timeline8.SetStepped(frame7);
						break;
					case 2:
						SetBezier(input, timeline8, bezier6++, frame7, 0, time7, time18, mix, mix2, 1f);
						SetBezier(input, timeline8, bezier6++, frame7, 1, time7, time18, softness, softness2, scale);
						break;
					}
					time7 = time18;
					mix = mix2;
					softness = softness2;
					frame7++;
				}
				timelines.Add(timeline8);
			}
			int l = 0;
			for (int n5 = input.ReadInt(true); l < n5; l++)
			{
				int index2 = input.ReadInt(true);
				int frameCount4 = input.ReadInt(true);
				int frameLast3 = frameCount4 - 1;
				TransformConstraintTimeline timeline10 = new TransformConstraintTimeline(frameCount4, input.ReadInt(true), index2);
				float time9 = input.ReadFloat();
				float mixRotate = input.ReadFloat();
				float mixX = input.ReadFloat();
				float mixY = input.ReadFloat();
				float mixScaleX = input.ReadFloat();
				float mixScaleY = input.ReadFloat();
				float mixShearY = input.ReadFloat();
				int frame8 = 0;
				int bezier7 = 0;
				while (true)
				{
					timeline10.SetFrame(frame8, time9, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY);
					if (frame8 == frameLast3)
					{
						break;
					}
					float time19 = input.ReadFloat();
					float mixRotate3 = input.ReadFloat();
					float mixX3 = input.ReadFloat();
					float mixY3 = input.ReadFloat();
					float mixScaleX2 = input.ReadFloat();
					float mixScaleY2 = input.ReadFloat();
					float mixShearY2 = input.ReadFloat();
					switch (input.ReadByte())
					{
					case 1:
						timeline10.SetStepped(frame8);
						break;
					case 2:
						SetBezier(input, timeline10, bezier7++, frame8, 0, time9, time19, mixRotate, mixRotate3, 1f);
						SetBezier(input, timeline10, bezier7++, frame8, 1, time9, time19, mixX, mixX3, 1f);
						SetBezier(input, timeline10, bezier7++, frame8, 2, time9, time19, mixY, mixY3, 1f);
						SetBezier(input, timeline10, bezier7++, frame8, 3, time9, time19, mixScaleX, mixScaleX2, 1f);
						SetBezier(input, timeline10, bezier7++, frame8, 4, time9, time19, mixScaleY, mixScaleY2, 1f);
						SetBezier(input, timeline10, bezier7++, frame8, 5, time9, time19, mixShearY, mixShearY2, 1f);
						break;
					}
					time9 = time19;
					mixRotate = mixRotate3;
					mixX = mixX3;
					mixY = mixY3;
					mixScaleX = mixScaleX2;
					mixScaleY = mixScaleY2;
					mixShearY = mixShearY2;
					frame8++;
				}
				timelines.Add(timeline10);
			}
			int m = 0;
			for (int n6 = input.ReadInt(true); m < n6; m++)
			{
				int index3 = input.ReadInt(true);
				PathConstraintData data = skeletonData.pathConstraints.Items[index3];
				int ii7 = 0;
				for (int nn3 = input.ReadInt(true); ii7 < nn3; ii7++)
				{
					switch (input.ReadByte())
					{
					case 0:
						timelines.Add(ReadTimeline(input, new PathConstraintPositionTimeline(input.ReadInt(true), input.ReadInt(true), index3), (data.positionMode == PositionMode.Fixed) ? scale : 1f));
						break;
					case 1:
						timelines.Add(ReadTimeline(input, new PathConstraintSpacingTimeline(input.ReadInt(true), input.ReadInt(true), index3), (data.spacingMode == SpacingMode.Length || data.spacingMode == SpacingMode.Fixed) ? scale : 1f));
						break;
					case 2:
					{
						PathConstraintMixTimeline timeline11 = new PathConstraintMixTimeline(input.ReadInt(true), input.ReadInt(true), index3);
						float time10 = input.ReadFloat();
						float mixRotate2 = input.ReadFloat();
						float mixX2 = input.ReadFloat();
						float mixY2 = input.ReadFloat();
						int frame9 = 0;
						int bezier8 = 0;
						int frameLast4 = timeline11.FrameCount - 1;
						while (true)
						{
							timeline11.SetFrame(frame9, time10, mixRotate2, mixX2, mixY2);
							if (frame9 == frameLast4)
							{
								break;
							}
							float time20 = input.ReadFloat();
							float mixRotate4 = input.ReadFloat();
							float mixX4 = input.ReadFloat();
							float mixY4 = input.ReadFloat();
							switch (input.ReadByte())
							{
							case 1:
								timeline11.SetStepped(frame9);
								break;
							case 2:
								SetBezier(input, timeline11, bezier8++, frame9, 0, time10, time20, mixRotate2, mixRotate4, 1f);
								SetBezier(input, timeline11, bezier8++, frame9, 1, time10, time20, mixX2, mixX4, 1f);
								SetBezier(input, timeline11, bezier8++, frame9, 2, time10, time20, mixY2, mixY4, 1f);
								break;
							}
							time10 = time20;
							mixRotate2 = mixRotate4;
							mixX2 = mixX4;
							mixY2 = mixY4;
							frame9++;
						}
						timelines.Add(timeline11);
						break;
					}
					}
				}
			}
			int n = 0;
			for (int n7 = input.ReadInt(true); n < n7; n++)
			{
				Skin skin = skeletonData.skins.Items[input.ReadInt(true)];
				int ii6 = 0;
				for (int nn4 = input.ReadInt(true); ii6 < nn4; ii6++)
				{
					int slotIndex3 = input.ReadInt(true);
					int iii = 0;
					for (int nnn = input.ReadInt(true); iii < nnn; iii++)
					{
						string attachmentName = input.ReadStringRef();
						Attachment attachment = skin.GetAttachment(slotIndex3, attachmentName);
						if (attachment == null)
						{
							throw new SerializationException("Timeline attachment not found: " + attachmentName);
						}
						int timelineType2 = input.ReadByte();
						int frameCount5 = input.ReadInt(true);
						int frameLast5 = frameCount5 - 1;
						switch (timelineType2)
						{
						case 0:
						{
							VertexAttachment vertexAttachment = (VertexAttachment)attachment;
							bool weighted = vertexAttachment.Bones != null;
							float[] vertices = vertexAttachment.Vertices;
							int deformLength = (weighted ? (vertices.Length / 3 << 1) : vertices.Length);
							DeformTimeline timeline12 = new DeformTimeline(frameCount5, input.ReadInt(true), slotIndex3, vertexAttachment);
							float time11 = input.ReadFloat();
							int frame10 = 0;
							int bezier9 = 0;
							while (true)
							{
								int end = input.ReadInt(true);
								float[] deform;
								if (end == 0)
								{
									deform = (weighted ? new float[deformLength] : vertices);
								}
								else
								{
									deform = new float[deformLength];
									int start = input.ReadInt(true);
									end += start;
									if (scale == 1f)
									{
										for (int v3 = start; v3 < end; v3++)
										{
											deform[v3] = input.ReadFloat();
										}
									}
									else
									{
										for (int v2 = start; v2 < end; v2++)
										{
											deform[v2] = input.ReadFloat() * scale;
										}
									}
									if (!weighted)
									{
										int v = 0;
										for (int vn = deform.Length; v < vn; v++)
										{
											deform[v] += vertices[v];
										}
									}
								}
								timeline12.SetFrame(frame10, time11, deform);
								if (frame10 == frameLast5)
								{
									break;
								}
								float time21 = input.ReadFloat();
								switch (input.ReadByte())
								{
								case 1:
									timeline12.SetStepped(frame10);
									break;
								case 2:
									SetBezier(input, timeline12, bezier9++, frame10, 0, time11, time21, 0f, 1f, 1f);
									break;
								}
								time11 = time21;
								frame10++;
							}
							timelines.Add(timeline12);
							break;
						}
						case 1:
						{
							SequenceTimeline timeline13 = new SequenceTimeline(frameCount5, slotIndex3, attachment);
							for (int frame11 = 0; frame11 < frameCount5; frame11++)
							{
								float time12 = input.ReadFloat();
								int modeAndIndex = input.ReadInt();
								timeline13.SetFrame(frame11, time12, (SequenceMode)(modeAndIndex & 0xF), modeAndIndex >> 4, input.ReadFloat());
							}
							timelines.Add(timeline13);
							break;
						}
						}
					}
				}
			}
			int drawOrderCount = input.ReadInt(true);
			if (drawOrderCount > 0)
			{
				DrawOrderTimeline timeline4 = new DrawOrderTimeline(drawOrderCount);
				int slotCount = skeletonData.slots.Count;
				for (int i2 = 0; i2 < drawOrderCount; i2++)
				{
					float time4 = input.ReadFloat();
					int offsetCount = input.ReadInt(true);
					int[] drawOrder = new int[slotCount];
					for (int ii = slotCount - 1; ii >= 0; ii--)
					{
						drawOrder[ii] = -1;
					}
					int[] unchanged = new int[slotCount - offsetCount];
					int originalIndex = 0;
					int unchangedIndex = 0;
					for (int ii2 = 0; ii2 < offsetCount; ii2++)
					{
						int slotIndex2 = input.ReadInt(true);
						while (originalIndex != slotIndex2)
						{
							unchanged[unchangedIndex++] = originalIndex++;
						}
						drawOrder[originalIndex + input.ReadInt(true)] = originalIndex++;
					}
					while (originalIndex < slotCount)
					{
						unchanged[unchangedIndex++] = originalIndex++;
					}
					for (int ii5 = slotCount - 1; ii5 >= 0; ii5--)
					{
						if (drawOrder[ii5] == -1)
						{
							drawOrder[ii5] = unchanged[--unchangedIndex];
						}
					}
					timeline4.SetFrame(i2, time4, drawOrder);
				}
				timelines.Add(timeline4);
			}
			int eventCount = input.ReadInt(true);
			if (eventCount > 0)
			{
				EventTimeline timeline9 = new EventTimeline(eventCount);
				for (int i3 = 0; i3 < eventCount; i3++)
				{
					float time8 = input.ReadFloat();
					EventData eventData = skeletonData.events.Items[input.ReadInt(true)];
					Event e = new Event(time8, eventData);
					e.intValue = input.ReadInt(false);
					e.floatValue = input.ReadFloat();
					e.stringValue = (input.ReadBoolean() ? input.ReadString() : eventData.String);
					if (e.Data.AudioPath != null)
					{
						e.volume = input.ReadFloat();
						e.balance = input.ReadFloat();
					}
					timeline9.SetFrame(i3, e);
				}
				timelines.Add(timeline9);
			}
			float duration = 0f;
			Timeline[] items = timelines.Items;
			int i4 = 0;
			for (int n8 = timelines.Count; i4 < n8; i4++)
			{
				duration = Math.Max(duration, items[i4].Duration);
			}
			return new Animation(name, timelines, duration);
		}

		private Timeline ReadTimeline(SkeletonInput input, CurveTimeline1 timeline, float scale)
		{
			float time = input.ReadFloat();
			float value = input.ReadFloat() * scale;
			int frame = 0;
			int bezier = 0;
			int frameLast = timeline.FrameCount - 1;
			while (true)
			{
				timeline.SetFrame(frame, time, value);
				if (frame == frameLast)
				{
					break;
				}
				float time2 = input.ReadFloat();
				float value2 = input.ReadFloat() * scale;
				switch (input.ReadByte())
				{
				case 1:
					timeline.SetStepped(frame);
					break;
				case 2:
					SetBezier(input, timeline, bezier++, frame, 0, time, time2, value, value2, scale);
					break;
				}
				time = time2;
				value = value2;
				frame++;
			}
			return timeline;
		}

		private Timeline ReadTimeline(SkeletonInput input, CurveTimeline2 timeline, float scale)
		{
			float time = input.ReadFloat();
			float value1 = input.ReadFloat() * scale;
			float value2 = input.ReadFloat() * scale;
			int frame = 0;
			int bezier = 0;
			int frameLast = timeline.FrameCount - 1;
			while (true)
			{
				timeline.SetFrame(frame, time, value1, value2);
				if (frame == frameLast)
				{
					break;
				}
				float time2 = input.ReadFloat();
				float nvalue1 = input.ReadFloat() * scale;
				float nvalue2 = input.ReadFloat() * scale;
				switch (input.ReadByte())
				{
				case 1:
					timeline.SetStepped(frame);
					break;
				case 2:
					SetBezier(input, timeline, bezier++, frame, 0, time, time2, value1, nvalue1, scale);
					SetBezier(input, timeline, bezier++, frame, 1, time, time2, value2, nvalue2, scale);
					break;
				}
				time = time2;
				value1 = nvalue1;
				value2 = nvalue2;
				frame++;
			}
			return timeline;
		}

		private void SetBezier(SkeletonInput input, CurveTimeline timeline, int bezier, int frame, int value, float time1, float time2, float value1, float value2, float scale)
		{
			timeline.SetBezier(bezier, frame, value, time1, value1, input.ReadFloat(), input.ReadFloat() * scale, input.ReadFloat(), input.ReadFloat() * scale, time2, value2);
		}
	}
}
