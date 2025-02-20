using System;
using System.Collections.Generic;
using System.IO;

namespace Spine
{
	public class SkeletonJson : SkeletonLoader
	{
		public SkeletonJson(AttachmentLoader attachmentLoader)
			: base(attachmentLoader)
		{
		}

		public SkeletonJson(params Atlas[] atlasArray)
			: base(atlasArray)
		{
		}

		public override SkeletonData ReadSkeletonData(string path)
		{
			using (StreamReader reader = new StreamReader(new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.Read)))
			{
				SkeletonData skeletonData = ReadSkeletonData(reader);
				skeletonData.name = Path.GetFileNameWithoutExtension(path);
				return skeletonData;
			}
		}

		public SkeletonData ReadSkeletonData(TextReader reader)
		{
			if (reader == null)
			{
				throw new ArgumentNullException("reader", "reader cannot be null.");
			}
			float scale = base.scale;
			SkeletonData skeletonData = new SkeletonData();
			if (!(Json.Deserialize(reader) is Dictionary<string, object> root))
			{
				throw new Exception("Invalid JSON.");
			}
			if (root.ContainsKey("skeleton"))
			{
				Dictionary<string, object> skeletonMap = (Dictionary<string, object>)root["skeleton"];
				skeletonData.hash = (string)skeletonMap["hash"];
				skeletonData.version = (string)skeletonMap["spine"];
				skeletonData.x = GetFloat(skeletonMap, "x", 0f);
				skeletonData.y = GetFloat(skeletonMap, "y", 0f);
				skeletonData.width = GetFloat(skeletonMap, "width", 0f);
				skeletonData.height = GetFloat(skeletonMap, "height", 0f);
				skeletonData.fps = GetFloat(skeletonMap, "fps", 30f);
				skeletonData.imagesPath = GetString(skeletonMap, "images", null);
				skeletonData.audioPath = GetString(skeletonMap, "audio", null);
			}
			if (root.ContainsKey("bones"))
			{
				foreach (Dictionary<string, object> boneMap in (List<object>)root["bones"])
				{
					BoneData parent2 = null;
					if (boneMap.ContainsKey("parent"))
					{
						parent2 = skeletonData.FindBone((string)boneMap["parent"]);
						if (parent2 == null)
						{
							throw new Exception("Parent bone not found: " + boneMap["parent"]);
						}
					}
					BoneData data2 = new BoneData(skeletonData.Bones.Count, (string)boneMap["name"], parent2);
					data2.length = GetFloat(boneMap, "length", 0f) * scale;
					data2.x = GetFloat(boneMap, "x", 0f) * scale;
					data2.y = GetFloat(boneMap, "y", 0f) * scale;
					data2.rotation = GetFloat(boneMap, "rotation", 0f);
					data2.scaleX = GetFloat(boneMap, "scaleX", 1f);
					data2.scaleY = GetFloat(boneMap, "scaleY", 1f);
					data2.shearX = GetFloat(boneMap, "shearX", 0f);
					data2.shearY = GetFloat(boneMap, "shearY", 0f);
					string tm = GetString(boneMap, "transform", TransformMode.Normal.ToString());
					data2.transformMode = (TransformMode)Enum.Parse(typeof(TransformMode), tm, true);
					data2.skinRequired = GetBoolean(boneMap, "skin", false);
					skeletonData.bones.Add(data2);
				}
			}
			if (root.ContainsKey("slots"))
			{
				foreach (Dictionary<string, object> slotMap in (List<object>)root["slots"])
				{
					string slotName = (string)slotMap["name"];
					string boneName = (string)slotMap["bone"];
					BoneData boneData = skeletonData.FindBone(boneName);
					if (boneData == null)
					{
						throw new Exception("Slot bone not found: " + boneName);
					}
					SlotData data3 = new SlotData(skeletonData.Slots.Count, slotName, boneData);
					if (slotMap.ContainsKey("color"))
					{
						string color = (string)slotMap["color"];
						data3.r = ToColor(color, 0);
						data3.g = ToColor(color, 1);
						data3.b = ToColor(color, 2);
						data3.a = ToColor(color, 3);
					}
					if (slotMap.ContainsKey("dark"))
					{
						string color2 = (string)slotMap["dark"];
						data3.r2 = ToColor(color2, 0, 6);
						data3.g2 = ToColor(color2, 1, 6);
						data3.b2 = ToColor(color2, 2, 6);
						data3.hasSecondColor = true;
					}
					data3.attachmentName = GetString(slotMap, "attachment", null);
					if (slotMap.ContainsKey("blend"))
					{
						data3.blendMode = (BlendMode)Enum.Parse(typeof(BlendMode), (string)slotMap["blend"], true);
					}
					else
					{
						data3.blendMode = BlendMode.Normal;
					}
					skeletonData.slots.Add(data3);
				}
			}
			if (root.ContainsKey("ik"))
			{
				foreach (Dictionary<string, object> constraintMap in (List<object>)root["ik"])
				{
					IkConstraintData data4 = new IkConstraintData((string)constraintMap["name"]);
					data4.order = GetInt(constraintMap, "order", 0);
					data4.skinRequired = GetBoolean(constraintMap, "skin", false);
					if (constraintMap.ContainsKey("bones"))
					{
						foreach (string boneName4 in (List<object>)constraintMap["bones"])
						{
							BoneData bone4 = skeletonData.FindBone(boneName4);
							if (bone4 == null)
							{
								throw new Exception("IK bone not found: " + boneName4);
							}
							data4.bones.Add(bone4);
						}
					}
					string targetName3 = (string)constraintMap["target"];
					data4.target = skeletonData.FindBone(targetName3);
					if (data4.target == null)
					{
						throw new Exception("IK target bone not found: " + targetName3);
					}
					data4.mix = GetFloat(constraintMap, "mix", 1f);
					data4.softness = GetFloat(constraintMap, "softness", 0f) * scale;
					data4.bendDirection = (GetBoolean(constraintMap, "bendPositive", true) ? 1 : (-1));
					data4.compress = GetBoolean(constraintMap, "compress", false);
					data4.stretch = GetBoolean(constraintMap, "stretch", false);
					data4.uniform = GetBoolean(constraintMap, "uniform", false);
					skeletonData.ikConstraints.Add(data4);
				}
			}
			if (root.ContainsKey("transform"))
			{
				foreach (Dictionary<string, object> constraintMap3 in (List<object>)root["transform"])
				{
					TransformConstraintData data6 = new TransformConstraintData((string)constraintMap3["name"]);
					data6.order = GetInt(constraintMap3, "order", 0);
					data6.skinRequired = GetBoolean(constraintMap3, "skin", false);
					if (constraintMap3.ContainsKey("bones"))
					{
						foreach (string boneName3 in (List<object>)constraintMap3["bones"])
						{
							BoneData bone3 = skeletonData.FindBone(boneName3);
							if (bone3 == null)
							{
								throw new Exception("Transform constraint bone not found: " + boneName3);
							}
							data6.bones.Add(bone3);
						}
					}
					string targetName2 = (string)constraintMap3["target"];
					data6.target = skeletonData.FindBone(targetName2);
					if (data6.target == null)
					{
						throw new Exception("Transform constraint target bone not found: " + targetName2);
					}
					data6.local = GetBoolean(constraintMap3, "local", false);
					data6.relative = GetBoolean(constraintMap3, "relative", false);
					data6.offsetRotation = GetFloat(constraintMap3, "rotation", 0f);
					data6.offsetX = GetFloat(constraintMap3, "x", 0f) * scale;
					data6.offsetY = GetFloat(constraintMap3, "y", 0f) * scale;
					data6.offsetScaleX = GetFloat(constraintMap3, "scaleX", 0f);
					data6.offsetScaleY = GetFloat(constraintMap3, "scaleY", 0f);
					data6.offsetShearY = GetFloat(constraintMap3, "shearY", 0f);
					data6.mixRotate = GetFloat(constraintMap3, "mixRotate", 1f);
					data6.mixX = GetFloat(constraintMap3, "mixX", 1f);
					data6.mixY = GetFloat(constraintMap3, "mixY", data6.mixX);
					data6.mixScaleX = GetFloat(constraintMap3, "mixScaleX", 1f);
					data6.mixScaleY = GetFloat(constraintMap3, "mixScaleY", data6.mixScaleX);
					data6.mixShearY = GetFloat(constraintMap3, "mixShearY", 1f);
					skeletonData.transformConstraints.Add(data6);
				}
			}
			if (root.ContainsKey("path"))
			{
				foreach (Dictionary<string, object> constraintMap2 in (List<object>)root["path"])
				{
					PathConstraintData data5 = new PathConstraintData((string)constraintMap2["name"]);
					data5.order = GetInt(constraintMap2, "order", 0);
					data5.skinRequired = GetBoolean(constraintMap2, "skin", false);
					if (constraintMap2.ContainsKey("bones"))
					{
						foreach (string boneName2 in (List<object>)constraintMap2["bones"])
						{
							BoneData bone2 = skeletonData.FindBone(boneName2);
							if (bone2 == null)
							{
								throw new Exception("Path bone not found: " + boneName2);
							}
							data5.bones.Add(bone2);
						}
					}
					string targetName = (string)constraintMap2["target"];
					data5.target = skeletonData.FindSlot(targetName);
					if (data5.target == null)
					{
						throw new Exception("Path target slot not found: " + targetName);
					}
					data5.positionMode = (PositionMode)Enum.Parse(typeof(PositionMode), GetString(constraintMap2, "positionMode", "percent"), true);
					data5.spacingMode = (SpacingMode)Enum.Parse(typeof(SpacingMode), GetString(constraintMap2, "spacingMode", "length"), true);
					data5.rotateMode = (RotateMode)Enum.Parse(typeof(RotateMode), GetString(constraintMap2, "rotateMode", "tangent"), true);
					data5.offsetRotation = GetFloat(constraintMap2, "rotation", 0f);
					data5.position = GetFloat(constraintMap2, "position", 0f);
					if (data5.positionMode == PositionMode.Fixed)
					{
						data5.position *= scale;
					}
					data5.spacing = GetFloat(constraintMap2, "spacing", 0f);
					if (data5.spacingMode == SpacingMode.Length || data5.spacingMode == SpacingMode.Fixed)
					{
						data5.spacing *= scale;
					}
					data5.mixRotate = GetFloat(constraintMap2, "mixRotate", 1f);
					data5.mixX = GetFloat(constraintMap2, "mixX", 1f);
					data5.mixY = GetFloat(constraintMap2, "mixY", data5.mixX);
					skeletonData.pathConstraints.Add(data5);
				}
			}
			if (root.ContainsKey("skins"))
			{
				foreach (Dictionary<string, object> skinMap in (List<object>)root["skins"])
				{
					Skin skin2 = new Skin((string)skinMap["name"]);
					if (skinMap.ContainsKey("bones"))
					{
						foreach (string entryName4 in (List<object>)skinMap["bones"])
						{
							BoneData bone = skeletonData.FindBone(entryName4);
							if (bone == null)
							{
								throw new Exception("Skin bone not found: " + entryName4);
							}
							skin2.bones.Add(bone);
						}
					}
					skin2.bones.TrimExcess();
					if (skinMap.ContainsKey("ik"))
					{
						foreach (string entryName3 in (List<object>)skinMap["ik"])
						{
							IkConstraintData constraint3 = skeletonData.FindIkConstraint(entryName3);
							if (constraint3 == null)
							{
								throw new Exception("Skin IK constraint not found: " + entryName3);
							}
							skin2.constraints.Add(constraint3);
						}
					}
					if (skinMap.ContainsKey("transform"))
					{
						foreach (string entryName2 in (List<object>)skinMap["transform"])
						{
							TransformConstraintData constraint2 = skeletonData.FindTransformConstraint(entryName2);
							if (constraint2 == null)
							{
								throw new Exception("Skin transform constraint not found: " + entryName2);
							}
							skin2.constraints.Add(constraint2);
						}
					}
					if (skinMap.ContainsKey("path"))
					{
						foreach (string entryName in (List<object>)skinMap["path"])
						{
							PathConstraintData constraint = skeletonData.FindPathConstraint(entryName);
							if (constraint == null)
							{
								throw new Exception("Skin path constraint not found: " + entryName);
							}
							skin2.constraints.Add(constraint);
						}
					}
					skin2.constraints.TrimExcess();
					if (skinMap.ContainsKey("attachments"))
					{
						foreach (KeyValuePair<string, object> slotEntry in (Dictionary<string, object>)skinMap["attachments"])
						{
							int slotIndex = FindSlotIndex(skeletonData, slotEntry.Key);
							foreach (KeyValuePair<string, object> entry3 in (Dictionary<string, object>)slotEntry.Value)
							{
								try
								{
									Attachment attachment = ReadAttachment((Dictionary<string, object>)entry3.Value, skin2, slotIndex, entry3.Key, skeletonData);
									if (attachment != null)
									{
										skin2.SetAttachment(slotIndex, entry3.Key, attachment);
									}
								}
								catch (Exception e2)
								{
									throw new Exception("Error reading attachment: " + entry3.Key + ", skin: " + skin2, e2);
								}
							}
						}
					}
					skeletonData.skins.Add(skin2);
					if (skin2.name == "default")
					{
						skeletonData.defaultSkin = skin2;
					}
				}
			}
			int i = 0;
			for (int j = linkedMeshes.Count; i < j; i++)
			{
				LinkedMesh linkedMesh = linkedMeshes[i];
				Skin skin = ((linkedMesh.skin == null) ? skeletonData.defaultSkin : skeletonData.FindSkin(linkedMesh.skin));
				if (skin == null)
				{
					throw new Exception("Slot not found: " + linkedMesh.skin);
				}
				Attachment parent = skin.GetAttachment(linkedMesh.slotIndex, linkedMesh.parent);
				if (parent == null)
				{
					throw new Exception("Parent mesh not found: " + linkedMesh.parent);
				}
				linkedMesh.mesh.TimelineAttachment = (linkedMesh.inheritTimelines ? ((VertexAttachment)parent) : linkedMesh.mesh);
				linkedMesh.mesh.ParentMesh = (MeshAttachment)parent;
				if (linkedMesh.mesh.Region != null)
				{
					linkedMesh.mesh.UpdateRegion();
				}
			}
			linkedMeshes.Clear();
			if (root.ContainsKey("events"))
			{
				foreach (KeyValuePair<string, object> entry2 in (Dictionary<string, object>)root["events"])
				{
					Dictionary<string, object> entryMap = (Dictionary<string, object>)entry2.Value;
					EventData data = new EventData(entry2.Key);
					data.Int = GetInt(entryMap, "int", 0);
					data.Float = GetFloat(entryMap, "float", 0f);
					data.String = GetString(entryMap, "string", string.Empty);
					data.AudioPath = GetString(entryMap, "audio", null);
					if (data.AudioPath != null)
					{
						data.Volume = GetFloat(entryMap, "volume", 1f);
						data.Balance = GetFloat(entryMap, "balance", 0f);
					}
					skeletonData.events.Add(data);
				}
			}
			if (root.ContainsKey("animations"))
			{
				foreach (KeyValuePair<string, object> entry in (Dictionary<string, object>)root["animations"])
				{
					try
					{
						ReadAnimation((Dictionary<string, object>)entry.Value, entry.Key, skeletonData);
					}
					catch (Exception e)
					{
						throw new Exception("Error reading animation: " + entry.Key + "\n" + e.Message, e);
					}
				}
			}
			skeletonData.bones.TrimExcess();
			skeletonData.slots.TrimExcess();
			skeletonData.skins.TrimExcess();
			skeletonData.events.TrimExcess();
			skeletonData.animations.TrimExcess();
			skeletonData.ikConstraints.TrimExcess();
			return skeletonData;
		}

		private Attachment ReadAttachment(Dictionary<string, object> map, Skin skin, int slotIndex, string name, SkeletonData skeletonData)
		{
			float scale = base.scale;
			name = GetString(map, "name", name);
			string typeName = GetString(map, "type", "region");
			switch ((AttachmentType)Enum.Parse(typeof(AttachmentType), typeName, true))
			{
			case AttachmentType.Region:
			{
				string path = GetString(map, "path", name);
				map.TryGetValue("sequence", out var sequenceJson);
				Sequence sequence = ReadSequence(sequenceJson);
				RegionAttachment region = attachmentLoader.NewRegionAttachment(skin, name, path, sequence);
				if (region == null)
				{
					return null;
				}
				region.Path = path;
				region.x = GetFloat(map, "x", 0f) * scale;
				region.y = GetFloat(map, "y", 0f) * scale;
				region.scaleX = GetFloat(map, "scaleX", 1f);
				region.scaleY = GetFloat(map, "scaleY", 1f);
				region.rotation = GetFloat(map, "rotation", 0f);
				region.width = GetFloat(map, "width", 32f) * scale;
				region.height = GetFloat(map, "height", 32f) * scale;
				region.sequence = sequence;
				if (map.ContainsKey("color"))
				{
					string color = (string)map["color"];
					region.r = ToColor(color, 0);
					region.g = ToColor(color, 1);
					region.b = ToColor(color, 2);
					region.a = ToColor(color, 3);
				}
				if (region.Region != null)
				{
					region.UpdateRegion();
				}
				return region;
			}
			case AttachmentType.Boundingbox:
			{
				BoundingBoxAttachment box = attachmentLoader.NewBoundingBoxAttachment(skin, name);
				if (box == null)
				{
					return null;
				}
				ReadVertices(map, box, GetInt(map, "vertexCount", 0) << 1);
				return box;
			}
			case AttachmentType.Mesh:
			case AttachmentType.Linkedmesh:
			{
				string path2 = GetString(map, "path", name);
				map.TryGetValue("sequence", out var sequenceJson2);
				Sequence sequence2 = ReadSequence(sequenceJson2);
				MeshAttachment mesh = attachmentLoader.NewMeshAttachment(skin, name, path2, sequence2);
				if (mesh == null)
				{
					return null;
				}
				mesh.Path = path2;
				if (map.ContainsKey("color"))
				{
					string color2 = (string)map["color"];
					mesh.r = ToColor(color2, 0);
					mesh.g = ToColor(color2, 1);
					mesh.b = ToColor(color2, 2);
					mesh.a = ToColor(color2, 3);
				}
				mesh.Width = GetFloat(map, "width", 0f) * scale;
				mesh.Height = GetFloat(map, "height", 0f) * scale;
				mesh.Sequence = sequence2;
				string parent = GetString(map, "parent", null);
				if (parent != null)
				{
					linkedMeshes.Add(new LinkedMesh(mesh, GetString(map, "skin", null), slotIndex, parent, GetBoolean(map, "timelines", true)));
					return mesh;
				}
				float[] uvs = GetFloatArray(map, "uvs", 1f);
				ReadVertices(map, mesh, uvs.Length);
				mesh.triangles = GetIntArray(map, "triangles");
				mesh.regionUVs = uvs;
				if (mesh.Region != null)
				{
					mesh.UpdateRegion();
				}
				if (map.ContainsKey("hull"))
				{
					mesh.HullLength = GetInt(map, "hull", 0) << 1;
				}
				if (map.ContainsKey("edges"))
				{
					mesh.Edges = GetIntArray(map, "edges");
				}
				return mesh;
			}
			case AttachmentType.Path:
			{
				PathAttachment pathAttachment = attachmentLoader.NewPathAttachment(skin, name);
				if (pathAttachment == null)
				{
					return null;
				}
				pathAttachment.closed = GetBoolean(map, "closed", false);
				pathAttachment.constantSpeed = GetBoolean(map, "constantSpeed", true);
				int vertexCount = GetInt(map, "vertexCount", 0);
				ReadVertices(map, pathAttachment, vertexCount << 1);
				pathAttachment.lengths = GetFloatArray(map, "lengths", scale);
				return pathAttachment;
			}
			case AttachmentType.Point:
			{
				PointAttachment point = attachmentLoader.NewPointAttachment(skin, name);
				if (point == null)
				{
					return null;
				}
				point.x = GetFloat(map, "x", 0f) * scale;
				point.y = GetFloat(map, "y", 0f) * scale;
				point.rotation = GetFloat(map, "rotation", 0f);
				return point;
			}
			case AttachmentType.Clipping:
			{
				ClippingAttachment clip = attachmentLoader.NewClippingAttachment(skin, name);
				if (clip == null)
				{
					return null;
				}
				string end = GetString(map, "end", null);
				if (end != null)
				{
					SlotData slot = skeletonData.FindSlot(end);
					if (slot == null)
					{
						throw new Exception("Clipping end slot not found: " + end);
					}
					clip.EndSlot = slot;
				}
				ReadVertices(map, clip, GetInt(map, "vertexCount", 0) << 1);
				return clip;
			}
			default:
				return null;
			}
		}

		public static Sequence ReadSequence(object sequenceJson)
		{
			if (!(sequenceJson is Dictionary<string, object> map))
			{
				return null;
			}
			Sequence sequence = new Sequence(GetInt(map, "count"));
			sequence.start = GetInt(map, "start", 1);
			sequence.digits = GetInt(map, "digits", 0);
			sequence.setupIndex = GetInt(map, "setup", 0);
			return sequence;
		}

		private void ReadVertices(Dictionary<string, object> map, VertexAttachment attachment, int verticesLength)
		{
			attachment.WorldVerticesLength = verticesLength;
			float[] vertices = GetFloatArray(map, "vertices", 1f);
			float scale = base.Scale;
			if (verticesLength == vertices.Length)
			{
				if (scale != 1f)
				{
					for (int j = 0; j < vertices.Length; j++)
					{
						vertices[j] *= scale;
					}
				}
				attachment.vertices = vertices;
				return;
			}
			ExposedList<float> weights = new ExposedList<float>(verticesLength * 3 * 3);
			ExposedList<int> bones = new ExposedList<int>(verticesLength * 3);
			int i = 0;
			int k = vertices.Length;
			while (i < k)
			{
				int boneCount = (int)vertices[i++];
				bones.Add(boneCount);
				for (int nn = i + (boneCount << 2); i < nn; i += 4)
				{
					bones.Add((int)vertices[i]);
					weights.Add(vertices[i + 1] * base.Scale);
					weights.Add(vertices[i + 2] * base.Scale);
					weights.Add(vertices[i + 3]);
				}
			}
			attachment.bones = bones.ToArray();
			attachment.vertices = weights.ToArray();
		}

		private int FindSlotIndex(SkeletonData skeletonData, string slotName)
		{
			SlotData[] slots = skeletonData.slots.Items;
			int i = 0;
			for (int j = skeletonData.slots.Count; i < j; i++)
			{
				if (slots[i].name == slotName)
				{
					return i;
				}
			}
			throw new Exception("Slot not found: " + slotName);
		}

		private void ReadAnimation(Dictionary<string, object> map, string name, SkeletonData skeletonData)
		{
			float scale = base.scale;
			ExposedList<Timeline> timelines = new ExposedList<Timeline>();
			if (map.ContainsKey("slots"))
			{
				foreach (KeyValuePair<string, object> entry in (Dictionary<string, object>)map["slots"])
				{
					string slotName = entry.Key;
					int slotIndex2 = FindSlotIndex(skeletonData, slotName);
					Dictionary<string, object> timelineMap3 = (Dictionary<string, object>)entry.Value;
					foreach (KeyValuePair<string, object> timelineEntry2 in timelineMap3)
					{
						List<object> values6 = (List<object>)timelineEntry2.Value;
						int frames4 = values6.Count;
						if (frames4 == 0)
						{
							continue;
						}
						string timelineName3 = timelineEntry2.Key;
						switch (timelineName3)
						{
						case "attachment":
						{
							AttachmentTimeline timeline14 = new AttachmentTimeline(frames4, slotIndex2);
							int frame8 = 0;
							foreach (Dictionary<string, object> keyMap5 in values6)
							{
								timeline14.SetFrame(frame8++, GetFloat(keyMap5, "time", 0f), GetString(keyMap5, "name", null));
							}
							timelines.Add(timeline14);
							break;
						}
						case "rgba":
						{
							RGBATimeline timeline15 = new RGBATimeline(frames4, frames4 << 2, slotIndex2);
							List<object>.Enumerator keyMapEnumerator7 = values6.GetEnumerator();
							keyMapEnumerator7.MoveNext();
							Dictionary<string, object> keyMap7 = (Dictionary<string, object>)keyMapEnumerator7.Current;
							float time6 = GetFloat(keyMap7, "time", 0f);
							string color2 = (string)keyMap7["color"];
							float r2 = ToColor(color2, 0);
							float g2 = ToColor(color2, 1);
							float b2 = ToColor(color2, 2);
							float a = ToColor(color2, 3);
							int frame10 = 0;
							int bezier5 = 0;
							while (true)
							{
								timeline15.SetFrame(frame10, time6, r2, g2, b2, a);
								if (!keyMapEnumerator7.MoveNext())
								{
									break;
								}
								Dictionary<string, object> nextMap5 = (Dictionary<string, object>)keyMapEnumerator7.Current;
								float time13 = GetFloat(nextMap5, "time", 0f);
								color2 = (string)nextMap5["color"];
								float nr = ToColor(color2, 0);
								float ng = ToColor(color2, 1);
								float nb = ToColor(color2, 2);
								float na = ToColor(color2, 3);
								if (keyMap7.ContainsKey("curve"))
								{
									object curve5 = keyMap7["curve"];
									bezier5 = ReadCurve(curve5, timeline15, bezier5, frame10, 0, time6, time13, r2, nr, 1f);
									bezier5 = ReadCurve(curve5, timeline15, bezier5, frame10, 1, time6, time13, g2, ng, 1f);
									bezier5 = ReadCurve(curve5, timeline15, bezier5, frame10, 2, time6, time13, b2, nb, 1f);
									bezier5 = ReadCurve(curve5, timeline15, bezier5, frame10, 3, time6, time13, a, na, 1f);
								}
								time6 = time13;
								r2 = nr;
								g2 = ng;
								b2 = nb;
								a = na;
								keyMap7 = nextMap5;
								frame10++;
							}
							timeline15.Shrink(bezier5);
							timelines.Add(timeline15);
							break;
						}
						case "rgb":
						{
							RGBTimeline timeline16 = new RGBTimeline(frames4, frames4 * 3, slotIndex2);
							List<object>.Enumerator keyMapEnumerator8 = values6.GetEnumerator();
							keyMapEnumerator8.MoveNext();
							Dictionary<string, object> keyMap8 = (Dictionary<string, object>)keyMapEnumerator8.Current;
							float time7 = GetFloat(keyMap8, "time", 0f);
							string color3 = (string)keyMap8["color"];
							float r3 = ToColor(color3, 0, 6);
							float g3 = ToColor(color3, 1, 6);
							float b3 = ToColor(color3, 2, 6);
							int frame11 = 0;
							int bezier7 = 0;
							while (true)
							{
								timeline16.SetFrame(frame11, time7, r3, g3, b3);
								if (!keyMapEnumerator8.MoveNext())
								{
									break;
								}
								Dictionary<string, object> nextMap7 = (Dictionary<string, object>)keyMapEnumerator8.Current;
								float time15 = GetFloat(nextMap7, "time", 0f);
								color3 = (string)nextMap7["color"];
								float nr3 = ToColor(color3, 0, 6);
								float ng3 = ToColor(color3, 1, 6);
								float nb2 = ToColor(color3, 2, 6);
								if (keyMap8.ContainsKey("curve"))
								{
									object curve6 = keyMap8["curve"];
									bezier7 = ReadCurve(curve6, timeline16, bezier7, frame11, 0, time7, time15, r3, nr3, 1f);
									bezier7 = ReadCurve(curve6, timeline16, bezier7, frame11, 1, time7, time15, g3, ng3, 1f);
									bezier7 = ReadCurve(curve6, timeline16, bezier7, frame11, 2, time7, time15, b3, nb2, 1f);
								}
								time7 = time15;
								r3 = nr3;
								g3 = ng3;
								b3 = nb2;
								keyMap8 = nextMap7;
								frame11++;
							}
							timeline16.Shrink(bezier7);
							timelines.Add(timeline16);
							break;
						}
						case "alpha":
						{
							List<object>.Enumerator keyMapEnumerator9 = values6.GetEnumerator();
							keyMapEnumerator9.MoveNext();
							timelines.Add(ReadTimeline(ref keyMapEnumerator9, new AlphaTimeline(frames4, frames4, slotIndex2), 0f, 1f));
							break;
						}
						case "rgba2":
						{
							RGBA2Timeline timeline17 = new RGBA2Timeline(frames4, frames4 * 7, slotIndex2);
							List<object>.Enumerator keyMapEnumerator10 = values6.GetEnumerator();
							keyMapEnumerator10.MoveNext();
							Dictionary<string, object> keyMap9 = (Dictionary<string, object>)keyMapEnumerator10.Current;
							float time8 = GetFloat(keyMap9, "time", 0f);
							string color4 = (string)keyMap9["light"];
							float r4 = ToColor(color4, 0);
							float g4 = ToColor(color4, 1);
							float b4 = ToColor(color4, 2);
							float a2 = ToColor(color4, 3);
							color4 = (string)keyMap9["dark"];
							float r6 = ToColor(color4, 0, 6);
							float g6 = ToColor(color4, 1, 6);
							float b6 = ToColor(color4, 2, 6);
							int frame12 = 0;
							int bezier8 = 0;
							while (true)
							{
								timeline17.SetFrame(frame12, time8, r4, g4, b4, a2, r6, g6, b6);
								if (!keyMapEnumerator10.MoveNext())
								{
									break;
								}
								Dictionary<string, object> nextMap8 = (Dictionary<string, object>)keyMapEnumerator10.Current;
								float time16 = GetFloat(nextMap8, "time", 0f);
								color4 = (string)nextMap8["light"];
								float nr4 = ToColor(color4, 0);
								float ng4 = ToColor(color4, 1);
								float nb4 = ToColor(color4, 2);
								float na2 = ToColor(color4, 3);
								color4 = (string)nextMap8["dark"];
								float nr5 = ToColor(color4, 0, 6);
								float ng5 = ToColor(color4, 1, 6);
								float nb5 = ToColor(color4, 2, 6);
								if (keyMap9.ContainsKey("curve"))
								{
									object curve7 = keyMap9["curve"];
									bezier8 = ReadCurve(curve7, timeline17, bezier8, frame12, 0, time8, time16, r4, nr4, 1f);
									bezier8 = ReadCurve(curve7, timeline17, bezier8, frame12, 1, time8, time16, g4, ng4, 1f);
									bezier8 = ReadCurve(curve7, timeline17, bezier8, frame12, 2, time8, time16, b4, nb4, 1f);
									bezier8 = ReadCurve(curve7, timeline17, bezier8, frame12, 3, time8, time16, a2, na2, 1f);
									bezier8 = ReadCurve(curve7, timeline17, bezier8, frame12, 4, time8, time16, r6, nr5, 1f);
									bezier8 = ReadCurve(curve7, timeline17, bezier8, frame12, 5, time8, time16, g6, ng5, 1f);
									bezier8 = ReadCurve(curve7, timeline17, bezier8, frame12, 6, time8, time16, b6, nb5, 1f);
								}
								time8 = time16;
								r4 = nr4;
								g4 = ng4;
								b4 = nb4;
								a2 = na2;
								r6 = nr5;
								g6 = ng5;
								b6 = nb5;
								keyMap9 = nextMap8;
								frame12++;
							}
							timeline17.Shrink(bezier8);
							timelines.Add(timeline17);
							break;
						}
						case "rgb2":
						{
							RGB2Timeline timeline13 = new RGB2Timeline(frames4, frames4 * 6, slotIndex2);
							List<object>.Enumerator keyMapEnumerator6 = values6.GetEnumerator();
							keyMapEnumerator6.MoveNext();
							Dictionary<string, object> keyMap6 = (Dictionary<string, object>)keyMapEnumerator6.Current;
							float time5 = GetFloat(keyMap6, "time", 0f);
							string color = (string)keyMap6["light"];
							float r = ToColor(color, 0, 6);
							float g = ToColor(color, 1, 6);
							float b = ToColor(color, 2, 6);
							color = (string)keyMap6["dark"];
							float r5 = ToColor(color, 0, 6);
							float g5 = ToColor(color, 1, 6);
							float b5 = ToColor(color, 2, 6);
							int frame9 = 0;
							int bezier6 = 0;
							while (true)
							{
								timeline13.SetFrame(frame9, time5, r, g, b, r5, g5, b5);
								if (!keyMapEnumerator6.MoveNext())
								{
									break;
								}
								Dictionary<string, object> nextMap6 = (Dictionary<string, object>)keyMapEnumerator6.Current;
								float time14 = GetFloat(nextMap6, "time", 0f);
								color = (string)nextMap6["light"];
								float nr2 = ToColor(color, 0, 6);
								float ng2 = ToColor(color, 1, 6);
								float nb3 = ToColor(color, 2, 6);
								color = (string)nextMap6["dark"];
								float nr6 = ToColor(color, 0, 6);
								float ng6 = ToColor(color, 1, 6);
								float nb6 = ToColor(color, 2, 6);
								if (keyMap6.ContainsKey("curve"))
								{
									object curve8 = keyMap6["curve"];
									bezier6 = ReadCurve(curve8, timeline13, bezier6, frame9, 0, time5, time14, r, nr2, 1f);
									bezier6 = ReadCurve(curve8, timeline13, bezier6, frame9, 1, time5, time14, g, ng2, 1f);
									bezier6 = ReadCurve(curve8, timeline13, bezier6, frame9, 2, time5, time14, b, nb3, 1f);
									bezier6 = ReadCurve(curve8, timeline13, bezier6, frame9, 3, time5, time14, r5, nr6, 1f);
									bezier6 = ReadCurve(curve8, timeline13, bezier6, frame9, 4, time5, time14, g5, ng6, 1f);
									bezier6 = ReadCurve(curve8, timeline13, bezier6, frame9, 5, time5, time14, b5, nb6, 1f);
								}
								time5 = time14;
								r = nr2;
								g = ng2;
								b = nb3;
								r5 = nr6;
								g5 = ng6;
								b5 = nb6;
								keyMap6 = nextMap6;
								frame9++;
							}
							timeline13.Shrink(bezier6);
							timelines.Add(timeline13);
							break;
						}
						default:
							throw new Exception("Invalid timeline type for a slot: " + timelineName3 + " (" + slotName + ")");
						}
					}
				}
			}
			if (map.ContainsKey("bones"))
			{
				foreach (KeyValuePair<string, object> entry2 in (Dictionary<string, object>)map["bones"])
				{
					string boneName = entry2.Key;
					int boneIndex = -1;
					BoneData[] bones = skeletonData.bones.Items;
					int n = 0;
					for (int n4 = skeletonData.bones.Count; n < n4; n++)
					{
						if (bones[n].name == boneName)
						{
							boneIndex = n;
							break;
						}
					}
					if (boneIndex == -1)
					{
						throw new Exception("Bone not found: " + boneName);
					}
					Dictionary<string, object> timelineMap6 = (Dictionary<string, object>)entry2.Value;
					foreach (KeyValuePair<string, object> timelineEntry3 in timelineMap6)
					{
						List<object> values7 = (List<object>)timelineEntry3.Value;
						List<object>.Enumerator keyMapEnumerator5 = values7.GetEnumerator();
						if (keyMapEnumerator5.MoveNext())
						{
							int frames3 = values7.Count;
							string timelineName2 = timelineEntry3.Key;
							switch (timelineName2)
							{
							case "rotate":
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, new RotateTimeline(frames3, frames3, boneIndex), 0f, 1f));
								continue;
							case "translate":
							{
								TranslateTimeline timeline10 = new TranslateTimeline(frames3, frames3 << 1, boneIndex);
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, timeline10, "x", "y", 0f, scale));
								continue;
							}
							case "translatex":
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, new TranslateXTimeline(frames3, frames3, boneIndex), 0f, scale));
								continue;
							case "translatey":
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, new TranslateYTimeline(frames3, frames3, boneIndex), 0f, scale));
								continue;
							case "scale":
							{
								ScaleTimeline timeline11 = new ScaleTimeline(frames3, frames3 << 1, boneIndex);
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, timeline11, "x", "y", 1f, 1f));
								continue;
							}
							case "scalex":
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, new ScaleXTimeline(frames3, frames3, boneIndex), 1f, 1f));
								continue;
							case "scaley":
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, new ScaleYTimeline(frames3, frames3, boneIndex), 1f, 1f));
								continue;
							case "shear":
							{
								ShearTimeline timeline12 = new ShearTimeline(frames3, frames3 << 1, boneIndex);
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, timeline12, "x", "y", 0f, 1f));
								continue;
							}
							case "shearx":
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, new ShearXTimeline(frames3, frames3, boneIndex), 0f, 1f));
								continue;
							case "sheary":
								timelines.Add(ReadTimeline(ref keyMapEnumerator5, new ShearYTimeline(frames3, frames3, boneIndex), 0f, 1f));
								continue;
							}
							throw new Exception("Invalid timeline type for a bone: " + timelineName2 + " (" + boneName + ")");
						}
					}
				}
			}
			if (map.ContainsKey("ik"))
			{
				foreach (KeyValuePair<string, object> timelineMap5 in (Dictionary<string, object>)map["ik"])
				{
					List<object> values5 = (List<object>)timelineMap5.Value;
					List<object>.Enumerator keyMapEnumerator4 = values5.GetEnumerator();
					if (!keyMapEnumerator4.MoveNext())
					{
						continue;
					}
					Dictionary<string, object> keyMap4 = (Dictionary<string, object>)keyMapEnumerator4.Current;
					IkConstraintData constraint3 = skeletonData.FindIkConstraint(timelineMap5.Key);
					IkConstraintTimeline timeline9 = new IkConstraintTimeline(values5.Count, values5.Count << 1, skeletonData.IkConstraints.IndexOf(constraint3));
					float time4 = GetFloat(keyMap4, "time", 0f);
					float mix = GetFloat(keyMap4, "mix", 1f);
					float softness = GetFloat(keyMap4, "softness", 0f) * scale;
					int frame7 = 0;
					int bezier4 = 0;
					while (true)
					{
						timeline9.SetFrame(frame7, time4, mix, softness, GetBoolean(keyMap4, "bendPositive", true) ? 1 : (-1), GetBoolean(keyMap4, "compress", false), GetBoolean(keyMap4, "stretch", false));
						if (!keyMapEnumerator4.MoveNext())
						{
							break;
						}
						Dictionary<string, object> nextMap4 = (Dictionary<string, object>)keyMapEnumerator4.Current;
						float time12 = GetFloat(nextMap4, "time", 0f);
						float mix2 = GetFloat(nextMap4, "mix", 1f);
						float softness2 = GetFloat(nextMap4, "softness", 0f) * scale;
						if (keyMap4.ContainsKey("curve"))
						{
							object curve4 = keyMap4["curve"];
							bezier4 = ReadCurve(curve4, timeline9, bezier4, frame7, 0, time4, time12, mix, mix2, 1f);
							bezier4 = ReadCurve(curve4, timeline9, bezier4, frame7, 1, time4, time12, softness, softness2, scale);
						}
						time4 = time12;
						mix = mix2;
						softness = softness2;
						keyMap4 = nextMap4;
						frame7++;
					}
					timeline9.Shrink(bezier4);
					timelines.Add(timeline9);
				}
			}
			if (map.ContainsKey("transform"))
			{
				foreach (KeyValuePair<string, object> timelineMap4 in (Dictionary<string, object>)map["transform"])
				{
					List<object> values4 = (List<object>)timelineMap4.Value;
					List<object>.Enumerator keyMapEnumerator3 = values4.GetEnumerator();
					if (!keyMapEnumerator3.MoveNext())
					{
						continue;
					}
					Dictionary<string, object> keyMap3 = (Dictionary<string, object>)keyMapEnumerator3.Current;
					TransformConstraintData constraint2 = skeletonData.FindTransformConstraint(timelineMap4.Key);
					TransformConstraintTimeline timeline8 = new TransformConstraintTimeline(values4.Count, values4.Count * 6, skeletonData.TransformConstraints.IndexOf(constraint2));
					float time3 = GetFloat(keyMap3, "time", 0f);
					float mixRotate2 = GetFloat(keyMap3, "mixRotate", 1f);
					float mixShearY = GetFloat(keyMap3, "mixShearY", 1f);
					float mixX2 = GetFloat(keyMap3, "mixX", 1f);
					float mixY2 = GetFloat(keyMap3, "mixY", mixX2);
					float mixScaleX = GetFloat(keyMap3, "mixScaleX", 1f);
					float mixScaleY = GetFloat(keyMap3, "mixScaleY", mixScaleX);
					int frame6 = 0;
					int bezier3 = 0;
					while (true)
					{
						timeline8.SetFrame(frame6, time3, mixRotate2, mixX2, mixY2, mixScaleX, mixScaleY, mixShearY);
						if (!keyMapEnumerator3.MoveNext())
						{
							break;
						}
						Dictionary<string, object> nextMap3 = (Dictionary<string, object>)keyMapEnumerator3.Current;
						float time11 = GetFloat(nextMap3, "time", 0f);
						float mixRotate4 = GetFloat(nextMap3, "mixRotate", 1f);
						float mixShearY2 = GetFloat(nextMap3, "mixShearY", 1f);
						float mixX4 = GetFloat(nextMap3, "mixX", 1f);
						float mixY4 = GetFloat(nextMap3, "mixY", mixX4);
						float mixScaleX2 = GetFloat(nextMap3, "mixScaleX", 1f);
						float mixScaleY2 = GetFloat(nextMap3, "mixScaleY", mixScaleX2);
						if (keyMap3.ContainsKey("curve"))
						{
							object curve3 = keyMap3["curve"];
							bezier3 = ReadCurve(curve3, timeline8, bezier3, frame6, 0, time3, time11, mixRotate2, mixRotate4, 1f);
							bezier3 = ReadCurve(curve3, timeline8, bezier3, frame6, 1, time3, time11, mixX2, mixX4, 1f);
							bezier3 = ReadCurve(curve3, timeline8, bezier3, frame6, 2, time3, time11, mixY2, mixY4, 1f);
							bezier3 = ReadCurve(curve3, timeline8, bezier3, frame6, 3, time3, time11, mixScaleX, mixScaleX2, 1f);
							bezier3 = ReadCurve(curve3, timeline8, bezier3, frame6, 4, time3, time11, mixScaleY, mixScaleY2, 1f);
							bezier3 = ReadCurve(curve3, timeline8, bezier3, frame6, 5, time3, time11, mixShearY, mixShearY2, 1f);
						}
						time3 = time11;
						mixRotate2 = mixRotate4;
						mixX2 = mixX4;
						mixY2 = mixY4;
						mixScaleX = mixScaleX2;
						mixScaleY = mixScaleY2;
						mixShearY = mixShearY2;
						keyMap3 = nextMap3;
						frame6++;
					}
					timeline8.Shrink(bezier3);
					timelines.Add(timeline8);
				}
			}
			if (map.ContainsKey("path"))
			{
				foreach (KeyValuePair<string, object> constraintMap in (Dictionary<string, object>)map["path"])
				{
					PathConstraintData constraint = skeletonData.FindPathConstraint(constraintMap.Key);
					if (constraint == null)
					{
						throw new Exception("Path constraint not found: " + constraintMap.Key);
					}
					int constraintIndex = skeletonData.pathConstraints.IndexOf(constraint);
					Dictionary<string, object> timelineMap2 = (Dictionary<string, object>)constraintMap.Value;
					foreach (KeyValuePair<string, object> timelineEntry in timelineMap2)
					{
						List<object> values3 = (List<object>)timelineEntry.Value;
						List<object>.Enumerator keyMapEnumerator2 = values3.GetEnumerator();
						if (!keyMapEnumerator2.MoveNext())
						{
							continue;
						}
						int frames2 = values3.Count;
						switch (timelineEntry.Key)
						{
						case "position":
						{
							CurveTimeline1 timeline5 = new PathConstraintPositionTimeline(frames2, frames2, constraintIndex);
							timelines.Add(ReadTimeline(ref keyMapEnumerator2, timeline5, 0f, (constraint.positionMode == PositionMode.Fixed) ? scale : 1f));
							break;
						}
						case "spacing":
						{
							CurveTimeline1 timeline6 = new PathConstraintSpacingTimeline(frames2, frames2, constraintIndex);
							timelines.Add(ReadTimeline(ref keyMapEnumerator2, timeline6, 0f, (constraint.spacingMode == SpacingMode.Length || constraint.spacingMode == SpacingMode.Fixed) ? scale : 1f));
							break;
						}
						case "mix":
						{
							PathConstraintMixTimeline timeline7 = new PathConstraintMixTimeline(frames2, frames2 * 3, constraintIndex);
							Dictionary<string, object> keyMap2 = (Dictionary<string, object>)keyMapEnumerator2.Current;
							float time2 = GetFloat(keyMap2, "time", 0f);
							float mixRotate = GetFloat(keyMap2, "mixRotate", 1f);
							float mixX = GetFloat(keyMap2, "mixX", 1f);
							float mixY = GetFloat(keyMap2, "mixY", mixX);
							int frame5 = 0;
							int bezier2 = 0;
							while (true)
							{
								timeline7.SetFrame(frame5, time2, mixRotate, mixX, mixY);
								if (!keyMapEnumerator2.MoveNext())
								{
									break;
								}
								Dictionary<string, object> nextMap2 = (Dictionary<string, object>)keyMapEnumerator2.Current;
								float time10 = GetFloat(nextMap2, "time", 0f);
								float mixRotate3 = GetFloat(nextMap2, "mixRotate", 1f);
								float mixX3 = GetFloat(nextMap2, "mixX", 1f);
								float mixY3 = GetFloat(nextMap2, "mixY", mixX3);
								if (keyMap2.ContainsKey("curve"))
								{
									object curve2 = keyMap2["curve"];
									bezier2 = ReadCurve(curve2, timeline7, bezier2, frame5, 0, time2, time10, mixRotate, mixRotate3, 1f);
									bezier2 = ReadCurve(curve2, timeline7, bezier2, frame5, 1, time2, time10, mixX, mixX3, 1f);
									bezier2 = ReadCurve(curve2, timeline7, bezier2, frame5, 2, time2, time10, mixY, mixY3, 1f);
								}
								time2 = time10;
								mixRotate = mixRotate3;
								mixX = mixX3;
								mixY = mixY3;
								keyMap2 = nextMap2;
								frame5++;
							}
							timeline7.Shrink(bezier2);
							timelines.Add(timeline7);
							break;
						}
						}
					}
				}
			}
			if (map.ContainsKey("attachments"))
			{
				foreach (KeyValuePair<string, object> attachmentsMap in (Dictionary<string, object>)map["attachments"])
				{
					Skin skin = skeletonData.FindSkin(attachmentsMap.Key);
					foreach (KeyValuePair<string, object> slotMap in (Dictionary<string, object>)attachmentsMap.Value)
					{
						SlotData slot = skeletonData.FindSlot(slotMap.Key);
						if (slot == null)
						{
							throw new Exception("Slot not found: " + slotMap.Key);
						}
						foreach (KeyValuePair<string, object> attachmentMap in (Dictionary<string, object>)slotMap.Value)
						{
							Attachment attachment = skin.GetAttachment(slot.index, attachmentMap.Key);
							if (attachment == null)
							{
								throw new Exception("Timeline attachment not found: " + attachmentMap.Key);
							}
							foreach (KeyValuePair<string, object> timelineMap in (Dictionary<string, object>)attachmentMap.Value)
							{
								List<object> values2 = (List<object>)timelineMap.Value;
								List<object>.Enumerator keyMapEnumerator = values2.GetEnumerator();
								if (!keyMapEnumerator.MoveNext())
								{
									continue;
								}
								Dictionary<string, object> keyMap = (Dictionary<string, object>)keyMapEnumerator.Current;
								int frames = values2.Count;
								string timelineName = timelineMap.Key;
								if (timelineName == "deform")
								{
									VertexAttachment vertexAttachment = (VertexAttachment)attachment;
									bool weighted = vertexAttachment.bones != null;
									float[] vertices = vertexAttachment.vertices;
									int deformLength = (weighted ? (vertices.Length / 3 << 1) : vertices.Length);
									DeformTimeline timeline4 = new DeformTimeline(frames, frames, slot.Index, vertexAttachment);
									float time = GetFloat(keyMap, "time", 0f);
									int frame4 = 0;
									int bezier = 0;
									while (true)
									{
										float[] deform;
										if (!keyMap.ContainsKey("vertices"))
										{
											deform = (weighted ? new float[deformLength] : vertices);
										}
										else
										{
											deform = new float[deformLength];
											int start = GetInt(keyMap, "offset", 0);
											float[] verticesValue = GetFloatArray(keyMap, "vertices", 1f);
											Array.Copy(verticesValue, 0, deform, start, verticesValue.Length);
											if (scale != 1f)
											{
												int m = start;
												for (int n3 = m + verticesValue.Length; m < n3; m++)
												{
													deform[m] *= scale;
												}
											}
											if (!weighted)
											{
												for (int l = 0; l < deformLength; l++)
												{
													deform[l] += vertices[l];
												}
											}
										}
										timeline4.SetFrame(frame4, time, deform);
										if (!keyMapEnumerator.MoveNext())
										{
											break;
										}
										Dictionary<string, object> nextMap = (Dictionary<string, object>)keyMapEnumerator.Current;
										float time9 = GetFloat(nextMap, "time", 0f);
										if (keyMap.ContainsKey("curve"))
										{
											object curve = keyMap["curve"];
											bezier = ReadCurve(curve, timeline4, bezier, frame4, 0, time, time9, 0f, 1f, 1f);
										}
										time = time9;
										keyMap = nextMap;
										frame4++;
									}
									timeline4.Shrink(bezier);
									timelines.Add(timeline4);
								}
								else if (timelineName == "sequence")
								{
									SequenceTimeline timeline3 = new SequenceTimeline(frames, slot.index, attachment);
									float lastDelay = 0f;
									int frame3 = 0;
									while (keyMap != null)
									{
										float delay = GetFloat(keyMap, "delay", lastDelay);
										SequenceMode sequenceMode = (SequenceMode)Enum.Parse(typeof(SequenceMode), GetString(keyMap, "mode", "hold"), true);
										timeline3.SetFrame(frame3, GetFloat(keyMap, "time", 0f), sequenceMode, GetInt(keyMap, "index", 0), delay);
										lastDelay = delay;
										keyMap = (keyMapEnumerator.MoveNext() ? ((Dictionary<string, object>)keyMapEnumerator.Current) : null);
										frame3++;
									}
									timelines.Add(timeline3);
								}
							}
						}
					}
				}
			}
			if (map.ContainsKey("drawOrder"))
			{
				List<object> values = (List<object>)map["drawOrder"];
				DrawOrderTimeline timeline2 = new DrawOrderTimeline(values.Count);
				int slotCount = skeletonData.slots.Count;
				int frame2 = 0;
				foreach (Dictionary<string, object> drawOrderMap in values)
				{
					int[] drawOrder = null;
					if (drawOrderMap.ContainsKey("offsets"))
					{
						drawOrder = new int[slotCount];
						for (int k = slotCount - 1; k >= 0; k--)
						{
							drawOrder[k] = -1;
						}
						List<object> offsets = (List<object>)drawOrderMap["offsets"];
						int[] unchanged = new int[slotCount - offsets.Count];
						int originalIndex = 0;
						int unchangedIndex = 0;
						foreach (Dictionary<string, object> offsetMap in offsets)
						{
							int slotIndex = FindSlotIndex(skeletonData, (string)offsetMap["slot"]);
							while (originalIndex != slotIndex)
							{
								unchanged[unchangedIndex++] = originalIndex++;
							}
							int index = originalIndex + (int)(float)offsetMap["offset"];
							drawOrder[index] = originalIndex++;
						}
						while (originalIndex < slotCount)
						{
							unchanged[unchangedIndex++] = originalIndex++;
						}
						for (int j = slotCount - 1; j >= 0; j--)
						{
							if (drawOrder[j] == -1)
							{
								drawOrder[j] = unchanged[--unchangedIndex];
							}
						}
					}
					timeline2.SetFrame(frame2, GetFloat(drawOrderMap, "time", 0f), drawOrder);
					frame2++;
				}
				timelines.Add(timeline2);
			}
			if (map.ContainsKey("events"))
			{
				List<object> eventsMap = (List<object>)map["events"];
				EventTimeline timeline = new EventTimeline(eventsMap.Count);
				int frame = 0;
				foreach (Dictionary<string, object> eventMap in eventsMap)
				{
					EventData eventData = skeletonData.FindEvent((string)eventMap["name"]);
					if (eventData == null)
					{
						throw new Exception("Event not found: " + eventMap["name"]);
					}
					Event e = new Event(GetFloat(eventMap, "time", 0f), eventData)
					{
						intValue = GetInt(eventMap, "int", eventData.Int),
						floatValue = GetFloat(eventMap, "float", eventData.Float),
						stringValue = GetString(eventMap, "string", eventData.String)
					};
					if (e.data.AudioPath != null)
					{
						e.volume = GetFloat(eventMap, "volume", eventData.Volume);
						e.balance = GetFloat(eventMap, "balance", eventData.Balance);
					}
					timeline.SetFrame(frame, e);
					frame++;
				}
				timelines.Add(timeline);
			}
			timelines.TrimExcess();
			float duration = 0f;
			Timeline[] items = timelines.Items;
			int i = 0;
			for (int n2 = timelines.Count; i < n2; i++)
			{
				duration = Math.Max(duration, items[i].Duration);
			}
			skeletonData.animations.Add(new Animation(name, timelines, duration));
		}

		private static Timeline ReadTimeline(ref List<object>.Enumerator keyMapEnumerator, CurveTimeline1 timeline, float defaultValue, float scale)
		{
			Dictionary<string, object> keyMap = (Dictionary<string, object>)keyMapEnumerator.Current;
			float time = GetFloat(keyMap, "time", 0f);
			float value = GetFloat(keyMap, "value", defaultValue) * scale;
			int frame = 0;
			int bezier = 0;
			while (true)
			{
				timeline.SetFrame(frame, time, value);
				if (!keyMapEnumerator.MoveNext())
				{
					break;
				}
				Dictionary<string, object> nextMap = (Dictionary<string, object>)keyMapEnumerator.Current;
				float time2 = GetFloat(nextMap, "time", 0f);
				float value2 = GetFloat(nextMap, "value", defaultValue) * scale;
				if (keyMap.ContainsKey("curve"))
				{
					object curve = keyMap["curve"];
					bezier = ReadCurve(curve, timeline, bezier, frame, 0, time, time2, value, value2, scale);
				}
				time = time2;
				value = value2;
				keyMap = nextMap;
				frame++;
			}
			timeline.Shrink(bezier);
			return timeline;
		}

		private static Timeline ReadTimeline(ref List<object>.Enumerator keyMapEnumerator, CurveTimeline2 timeline, string name1, string name2, float defaultValue, float scale)
		{
			Dictionary<string, object> keyMap = (Dictionary<string, object>)keyMapEnumerator.Current;
			float time = GetFloat(keyMap, "time", 0f);
			float value1 = GetFloat(keyMap, name1, defaultValue) * scale;
			float value2 = GetFloat(keyMap, name2, defaultValue) * scale;
			int frame = 0;
			int bezier = 0;
			while (true)
			{
				timeline.SetFrame(frame, time, value1, value2);
				if (!keyMapEnumerator.MoveNext())
				{
					break;
				}
				Dictionary<string, object> nextMap = (Dictionary<string, object>)keyMapEnumerator.Current;
				float time2 = GetFloat(nextMap, "time", 0f);
				float nvalue1 = GetFloat(nextMap, name1, defaultValue) * scale;
				float nvalue2 = GetFloat(nextMap, name2, defaultValue) * scale;
				if (keyMap.ContainsKey("curve"))
				{
					object curve = keyMap["curve"];
					bezier = ReadCurve(curve, timeline, bezier, frame, 0, time, time2, value1, nvalue1, scale);
					bezier = ReadCurve(curve, timeline, bezier, frame, 1, time, time2, value2, nvalue2, scale);
				}
				time = time2;
				value1 = nvalue1;
				value2 = nvalue2;
				keyMap = nextMap;
				frame++;
			}
			timeline.Shrink(bezier);
			return timeline;
		}

		private static int ReadCurve(object curve, CurveTimeline timeline, int bezier, int frame, int value, float time1, float time2, float value1, float value2, float scale)
		{
			if (curve is string curveString)
			{
				if (curveString == "stepped")
				{
					timeline.SetStepped(frame);
				}
				return bezier;
			}
			List<object> curveValues = (List<object>)curve;
			int i = value << 2;
			float cx1 = (float)curveValues[i];
			float cy1 = (float)curveValues[i + 1] * scale;
			float cx2 = (float)curveValues[i + 2];
			float cy2 = (float)curveValues[i + 3] * scale;
			SetBezier(timeline, frame, value, bezier, time1, value1, cx1, cy1, cx2, cy2, time2, value2);
			return bezier + 1;
		}

		private static void SetBezier(CurveTimeline timeline, int frame, int value, int bezier, float time1, float value1, float cx1, float cy1, float cx2, float cy2, float time2, float value2)
		{
			timeline.SetBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2);
		}

		private static float[] GetFloatArray(Dictionary<string, object> map, string name, float scale)
		{
			List<object> list = (List<object>)map[name];
			float[] values = new float[list.Count];
			if (scale == 1f)
			{
				int j = 0;
				for (int l = list.Count; j < l; j++)
				{
					values[j] = (float)list[j];
				}
			}
			else
			{
				int i = 0;
				for (int k = list.Count; i < k; i++)
				{
					values[i] = (float)list[i] * scale;
				}
			}
			return values;
		}

		private static int[] GetIntArray(Dictionary<string, object> map, string name)
		{
			List<object> list = (List<object>)map[name];
			int[] values = new int[list.Count];
			int i = 0;
			for (int j = list.Count; i < j; i++)
			{
				values[i] = (int)(float)list[i];
			}
			return values;
		}

		private static float GetFloat(Dictionary<string, object> map, string name, float defaultValue)
		{
			if (!map.ContainsKey(name))
			{
				return defaultValue;
			}
			return (float)map[name];
		}

		private static int GetInt(Dictionary<string, object> map, string name, int defaultValue)
		{
			if (!map.ContainsKey(name))
			{
				return defaultValue;
			}
			return (int)(float)map[name];
		}

		private static int GetInt(Dictionary<string, object> map, string name)
		{
			if (!map.ContainsKey(name))
			{
				throw new ArgumentException("Named value not found: " + name);
			}
			return (int)(float)map[name];
		}

		private static bool GetBoolean(Dictionary<string, object> map, string name, bool defaultValue)
		{
			if (!map.ContainsKey(name))
			{
				return defaultValue;
			}
			return (bool)map[name];
		}

		private static string GetString(Dictionary<string, object> map, string name, string defaultValue)
		{
			if (!map.ContainsKey(name))
			{
				return defaultValue;
			}
			return (string)map[name];
		}

		private static float ToColor(string hexString, int colorIndex, int expectedLength = 8)
		{
			if (hexString.Length < expectedLength)
			{
				throw new ArgumentException("Color hexadecimal length must be " + expectedLength + ", received: " + hexString, "hexString");
			}
			return (float)Convert.ToInt32(hexString.Substring(colorIndex * 2, 2), 16) / 255f;
		}
	}
}
