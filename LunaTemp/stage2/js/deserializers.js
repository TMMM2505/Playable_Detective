var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointSpring' )
  var i541 = data
  i540.spring = i541[0]
  i540.damper = i541[1]
  i540.targetPosition = i541[2]
  return i540
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointMotor' )
  var i543 = data
  i542.m_TargetVelocity = i543[0]
  i542.m_Force = i543[1]
  i542.m_FreeSpin = i543[2]
  return i542
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointLimits' )
  var i545 = data
  i544.m_Min = i545[0]
  i544.m_Max = i545[1]
  i544.m_Bounciness = i545[2]
  i544.m_BounceMinVelocity = i545[3]
  i544.m_ContactDistance = i545[4]
  i544.minBounce = i545[5]
  i544.maxBounce = i545[6]
  return i544
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointDrive' )
  var i547 = data
  i546.m_PositionSpring = i547[0]
  i546.m_PositionDamper = i547[1]
  i546.m_MaximumForce = i547[2]
  i546.m_UseAcceleration = i547[3]
  return i546
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i549 = data
  i548.m_Spring = i549[0]
  i548.m_Damper = i549[1]
  return i548
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i551 = data
  i550.m_Limit = i551[0]
  i550.m_Bounciness = i551[1]
  i550.m_ContactDistance = i551[2]
  return i550
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i553 = data
  i552.m_ExtremumSlip = i553[0]
  i552.m_ExtremumValue = i553[1]
  i552.m_AsymptoteSlip = i553[2]
  i552.m_AsymptoteValue = i553[3]
  i552.m_Stiffness = i553[4]
  return i552
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i555 = data
  i554.m_LowerAngle = i555[0]
  i554.m_UpperAngle = i555[1]
  return i554
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i557 = data
  i556.m_MotorSpeed = i557[0]
  i556.m_MaximumMotorTorque = i557[1]
  return i556
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i559 = data
  i558.m_DampingRatio = i559[0]
  i558.m_Frequency = i559[1]
  i558.m_Angle = i559[2]
  return i558
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i561 = data
  i560.m_LowerTranslation = i561[0]
  i560.m_UpperTranslation = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i562 = root || new pc.UnityMaterial()
  var i563 = data
  i562.name = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'shader')
  i562.renderQueue = i563[3]
  i562.enableInstancing = !!i563[4]
  var i565 = i563[5]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i565[i + 0]) );
  }
  i562.floatParameters = i564
  var i567 = i563[6]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i567[i + 0]) );
  }
  i562.colorParameters = i566
  var i569 = i563[7]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i569[i + 0]) );
  }
  i562.vectorParameters = i568
  var i571 = i563[8]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i571[i + 0]) );
  }
  i562.textureParameters = i570
  var i573 = i563[9]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i573[i + 0]) );
  }
  i562.materialFlags = i572
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i581 = data
  i580.name = i581[0]
  i580.value = new pc.Color(i581[1], i581[2], i581[3], i581[4])
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = new pc.Vec4( i585[1], i585[2], i585[3], i585[4] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i589 = data
  i588.name = i589[0]
  request.r(i589[1], i589[2], 0, i588, 'value')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i593 = data
  i592.name = i593[0]
  i592.enabled = !!i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i595 = data
  i594.name = i595[0]
  i594.width = i595[1]
  i594.height = i595[2]
  i594.mipmapCount = i595[3]
  i594.anisoLevel = i595[4]
  i594.filterMode = i595[5]
  i594.hdr = !!i595[6]
  i594.format = i595[7]
  i594.wrapMode = i595[8]
  i594.alphaIsTransparency = !!i595[9]
  i594.alphaSource = i595[10]
  i594.graphicsFormat = i595[11]
  i594.sRGBTexture = !!i595[12]
  i594.desiredColorSpace = i595[13]
  i594.wrapU = i595[14]
  i594.wrapV = i595[15]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i597 = data
  i596.position = new pc.Vec3( i597[0], i597[1], i597[2] )
  i596.scale = new pc.Vec3( i597[3], i597[4], i597[5] )
  i596.rotation = new pc.Quat(i597[6], i597[7], i597[8], i597[9])
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i599 = data
  i598.enabled = !!i599[0]
  request.r(i599[1], i599[2], 0, i598, 'sharedMaterial')
  var i601 = i599[3]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.sharedMaterials = i600
  i598.receiveShadows = !!i599[4]
  i598.shadowCastingMode = i599[5]
  i598.sortingLayerID = i599[6]
  i598.sortingOrder = i599[7]
  i598.lightmapIndex = i599[8]
  i598.lightmapSceneIndex = i599[9]
  i598.lightmapScaleOffset = new pc.Vec4( i599[10], i599[11], i599[12], i599[13] )
  i598.lightProbeUsage = i599[14]
  i598.reflectionProbeUsage = i599[15]
  i598.color = new pc.Color(i599[16], i599[17], i599[18], i599[19])
  request.r(i599[20], i599[21], 0, i598, 'sprite')
  i598.flipX = !!i599[22]
  i598.flipY = !!i599[23]
  i598.drawMode = i599[24]
  i598.size = new pc.Vec2( i599[25], i599[26] )
  i598.tileMode = i599[27]
  i598.adaptiveModeThreshold = i599[28]
  i598.maskInteraction = i599[29]
  i598.spriteSortPoint = i599[30]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i605 = data
  i604.bodyType = i605[0]
  request.r(i605[1], i605[2], 0, i604, 'material')
  i604.simulated = !!i605[3]
  i604.useAutoMass = !!i605[4]
  i604.mass = i605[5]
  i604.drag = i605[6]
  i604.angularDrag = i605[7]
  i604.gravityScale = i605[8]
  i604.collisionDetectionMode = i605[9]
  i604.sleepMode = i605[10]
  i604.constraints = i605[11]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i607 = data
  i606.size = new pc.Vec2( i607[0], i607[1] )
  i606.direction = i607[2]
  i606.enabled = !!i607[3]
  i606.isTrigger = !!i607[4]
  i606.usedByEffector = !!i607[5]
  i606.density = i607[6]
  i606.offset = new pc.Vec2( i607[7], i607[8] )
  request.r(i607[9], i607[10], 0, i606, 'material')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i609 = data
  i608.name = i609[0]
  i608.tagId = i609[1]
  i608.enabled = !!i609[2]
  i608.isStatic = !!i609[3]
  i608.layer = i609[4]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i611 = data
  i610.radius = i611[0]
  i610.enabled = !!i611[1]
  i610.isTrigger = !!i611[2]
  i610.usedByEffector = !!i611[3]
  i610.density = i611[4]
  i610.offset = new pc.Vec2( i611[5], i611[6] )
  request.r(i611[7], i611[8], 0, i610, 'material')
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i613 = data
  i612.usedByComposite = !!i613[0]
  i612.autoTiling = !!i613[1]
  i612.size = new pc.Vec2( i613[2], i613[3] )
  i612.edgeRadius = i613[4]
  i612.enabled = !!i613[5]
  i612.isTrigger = !!i613[6]
  i612.usedByEffector = !!i613[7]
  i612.density = i613[8]
  i612.offset = new pc.Vec2( i613[9], i613[10] )
  request.r(i613[11], i613[12], 0, i612, 'material')
  return i612
}

Deserializers["Pin"] = function (request, data, root) {
  var i614 = root || request.c( 'Pin' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'head')
  request.r(i615[2], i615[3], 0, i614, 'end')
  request.r(i615[4], i615[5], 0, i614, 'center')
  i614.speed = i615[6]
  request.r(i615[7], i615[8], 0, i614, 'dragPin')
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i617 = data
  i616.name = i617[0]
  i616.halfPrecision = !!i617[1]
  i616.useUInt32IndexFormat = !!i617[2]
  i616.vertexCount = i617[3]
  i616.aabb = i617[4]
  var i619 = i617[5]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( !!i619[i + 0] );
  }
  i616.streams = i618
  i616.vertices = i617[6]
  var i621 = i617[7]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i621[i + 0]) );
  }
  i616.subMeshes = i620
  var i623 = i617[8]
  var i622 = []
  for(var i = 0; i < i623.length; i += 16) {
    i622.push( new pc.Mat4().setData(i623[i + 0], i623[i + 1], i623[i + 2], i623[i + 3],  i623[i + 4], i623[i + 5], i623[i + 6], i623[i + 7],  i623[i + 8], i623[i + 9], i623[i + 10], i623[i + 11],  i623[i + 12], i623[i + 13], i623[i + 14], i623[i + 15]) );
  }
  i616.bindposes = i622
  var i625 = i617[9]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i625[i + 0]) );
  }
  i616.blendShapes = i624
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i631 = data
  i630.triangles = i631[0]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i637 = data
  i636.name = i637[0]
  var i639 = i637[1]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i639[i + 0]) );
  }
  i636.frames = i638
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i641 = data
  i640.name = i641[0]
  i640.index = i641[1]
  i640.startup = !!i641[2]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i643 = data
  i642.enabled = !!i643[0]
  i642.aspect = i643[1]
  i642.orthographic = !!i643[2]
  i642.orthographicSize = i643[3]
  i642.backgroundColor = new pc.Color(i643[4], i643[5], i643[6], i643[7])
  i642.nearClipPlane = i643[8]
  i642.farClipPlane = i643[9]
  i642.fieldOfView = i643[10]
  i642.depth = i643[11]
  i642.clearFlags = i643[12]
  i642.cullingMask = i643[13]
  i642.rect = i643[14]
  request.r(i643[15], i643[16], 0, i642, 'targetTexture')
  i642.usePhysicalProperties = !!i643[17]
  i642.focalLength = i643[18]
  i642.sensorSize = new pc.Vec2( i643[19], i643[20] )
  i642.lensShift = new pc.Vec2( i643[21], i643[22] )
  i642.gateFit = i643[23]
  i642.commandBufferCount = i643[24]
  i642.cameraType = i643[25]
  return i642
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i645 = data
  i644.m_RenderShadows = !!i645[0]
  i644.m_RequiresDepthTextureOption = i645[1]
  i644.m_RequiresOpaqueTextureOption = i645[2]
  i644.m_CameraType = i645[3]
  var i647 = i645[4]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 1, i646, '')
  }
  i644.m_Cameras = i646
  i644.m_RendererIndex = i645[5]
  i644.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i645[6] )
  request.r(i645[7], i645[8], 0, i644, 'm_VolumeTrigger')
  i644.m_VolumeFrameworkUpdateModeOption = i645[9]
  i644.m_RenderPostProcessing = !!i645[10]
  i644.m_Antialiasing = i645[11]
  i644.m_AntialiasingQuality = i645[12]
  i644.m_StopNaN = !!i645[13]
  i644.m_Dithering = !!i645[14]
  i644.m_ClearDepth = !!i645[15]
  i644.m_AllowXRRendering = !!i645[16]
  i644.m_AllowHDROutput = !!i645[17]
  i644.m_UseScreenCoordOverride = !!i645[18]
  i644.m_ScreenSizeOverride = new pc.Vec4( i645[19], i645[20], i645[21], i645[22] )
  i644.m_ScreenCoordScaleBias = new pc.Vec4( i645[23], i645[24], i645[25], i645[26] )
  i644.m_RequiresDepthTexture = !!i645[27]
  i644.m_RequiresColorTexture = !!i645[28]
  i644.m_Version = i645[29]
  i644.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i645[30], i644.m_TaaSettings)
  return i644
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i651 = data
  i650.m_Quality = i651[0]
  i650.m_FrameInfluence = i651[1]
  i650.m_JitterScale = i651[2]
  i650.m_MipBias = i651[3]
  i650.m_VarianceClampScale = i651[4]
  i650.m_ContrastAdaptiveSharpening = i651[5]
  return i650
}

Deserializers["GameManager"] = function (request, data, root) {
  var i652 = root || request.c( 'GameManager' )
  var i653 = data
  return i652
}

Deserializers["DeviceOrientationDetection"] = function (request, data, root) {
  var i654 = root || request.c( 'DeviceOrientationDetection' )
  var i655 = data
  return i654
}

Deserializers["ElementsOrientationScale"] = function (request, data, root) {
  var i656 = root || request.c( 'ElementsOrientationScale' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'level')
  request.r(i657[2], i657[3], 0, i656, 'tutorialText')
  request.r(i657[4], i657[5], 0, i656, 'endgamePopup')
  request.r(i657[6], i657[7], 0, i656, 'gameIcon')
  return i656
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i658 = root || request.c( 'SoundManager' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'audioSourceMusic')
  request.r(i659[2], i659[3], 0, i658, 'audioSourceSound')
  request.r(i659[4], i659[5], 0, i658, 'bgTheme')
  request.r(i659[6], i659[7], 0, i658, 'winSfx')
  request.r(i659[8], i659[9], 0, i658, 'loseSfx')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'clip')
  request.r(i661[2], i661[3], 0, i660, 'outputAudioMixerGroup')
  i660.playOnAwake = !!i661[4]
  i660.loop = !!i661[5]
  i660.time = i661[6]
  i660.volume = i661[7]
  i660.pitch = i661[8]
  i660.enabled = !!i661[9]
  return i660
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i662 = root || request.c( 'InputReceiver' )
  var i663 = data
  return i662
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'm_FirstSelected')
  i664.m_sendNavigationEvents = !!i665[2]
  i664.m_DragThreshold = i665[3]
  return i664
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i667 = data
  i666.m_HorizontalAxis = i667[0]
  i666.m_VerticalAxis = i667[1]
  i666.m_SubmitButton = i667[2]
  i666.m_CancelButton = i667[3]
  i666.m_InputActionsPerSecond = i667[4]
  i666.m_RepeatDelay = i667[5]
  i666.m_ForceModuleActive = !!i667[6]
  i666.m_SendPointerHoverToParent = !!i667[7]
  return i666
}

Deserializers["UIManager"] = function (request, data, root) {
  var i668 = root || request.c( 'UIManager' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'tutorialText')
  request.r(i669[2], i669[3], 0, i668, 'FadeBG')
  request.r(i669[4], i669[5], 0, i668, 'endGamePopUp')
  request.r(i669[6], i669[7], 0, i668, 'rewardBox')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i671 = data
  i670.pivot = new pc.Vec2( i671[0], i671[1] )
  i670.anchorMin = new pc.Vec2( i671[2], i671[3] )
  i670.anchorMax = new pc.Vec2( i671[4], i671[5] )
  i670.sizeDelta = new pc.Vec2( i671[6], i671[7] )
  i670.anchoredPosition3D = new pc.Vec3( i671[8], i671[9], i671[10] )
  i670.rotation = new pc.Quat(i671[11], i671[12], i671[13], i671[14])
  i670.scale = new pc.Vec3( i671[15], i671[16], i671[17] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i673 = data
  i672.enabled = !!i673[0]
  i672.planeDistance = i673[1]
  i672.referencePixelsPerUnit = i673[2]
  i672.isFallbackOverlay = !!i673[3]
  i672.renderMode = i673[4]
  i672.renderOrder = i673[5]
  i672.sortingLayerName = i673[6]
  i672.sortingOrder = i673[7]
  i672.scaleFactor = i673[8]
  request.r(i673[9], i673[10], 0, i672, 'worldCamera')
  i672.overrideSorting = !!i673[11]
  i672.pixelPerfect = !!i673[12]
  i672.targetDisplay = i673[13]
  i672.overridePixelPerfect = !!i673[14]
  return i672
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i675 = data
  i674.m_UiScaleMode = i675[0]
  i674.m_ReferencePixelsPerUnit = i675[1]
  i674.m_ScaleFactor = i675[2]
  i674.m_ReferenceResolution = new pc.Vec2( i675[3], i675[4] )
  i674.m_ScreenMatchMode = i675[5]
  i674.m_MatchWidthOrHeight = i675[6]
  i674.m_PhysicalUnit = i675[7]
  i674.m_FallbackScreenDPI = i675[8]
  i674.m_DefaultSpriteDPI = i675[9]
  i674.m_DynamicPixelsPerUnit = i675[10]
  i674.m_PresetInfoIsWorld = !!i675[11]
  return i674
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i677 = data
  i676.m_IgnoreReversedGraphics = !!i677[0]
  i676.m_BlockingObjects = i677[1]
  i676.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i677[2] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i679 = data
  i678.cullTransparentMesh = !!i679[0]
  return i678
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i680 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i681 = data
  i680.m_hasFontAssetChanged = !!i681[0]
  request.r(i681[1], i681[2], 0, i680, 'm_baseMaterial')
  i680.m_maskOffset = new pc.Vec4( i681[3], i681[4], i681[5], i681[6] )
  i680.m_text = i681[7]
  i680.m_isRightToLeft = !!i681[8]
  request.r(i681[9], i681[10], 0, i680, 'm_fontAsset')
  request.r(i681[11], i681[12], 0, i680, 'm_sharedMaterial')
  var i683 = i681[13]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i680.m_fontSharedMaterials = i682
  request.r(i681[14], i681[15], 0, i680, 'm_fontMaterial')
  var i685 = i681[16]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i680.m_fontMaterials = i684
  i680.m_fontColor32 = UnityEngine.Color32.ConstructColor(i681[17], i681[18], i681[19], i681[20])
  i680.m_fontColor = new pc.Color(i681[21], i681[22], i681[23], i681[24])
  i680.m_enableVertexGradient = !!i681[25]
  i680.m_colorMode = i681[26]
  i680.m_fontColorGradient = request.d('TMPro.VertexGradient', i681[27], i680.m_fontColorGradient)
  request.r(i681[28], i681[29], 0, i680, 'm_fontColorGradientPreset')
  request.r(i681[30], i681[31], 0, i680, 'm_spriteAsset')
  i680.m_tintAllSprites = !!i681[32]
  request.r(i681[33], i681[34], 0, i680, 'm_StyleSheet')
  i680.m_TextStyleHashCode = i681[35]
  i680.m_overrideHtmlColors = !!i681[36]
  i680.m_faceColor = UnityEngine.Color32.ConstructColor(i681[37], i681[38], i681[39], i681[40])
  i680.m_fontSize = i681[41]
  i680.m_fontSizeBase = i681[42]
  i680.m_fontWeight = i681[43]
  i680.m_enableAutoSizing = !!i681[44]
  i680.m_fontSizeMin = i681[45]
  i680.m_fontSizeMax = i681[46]
  i680.m_fontStyle = i681[47]
  i680.m_HorizontalAlignment = i681[48]
  i680.m_VerticalAlignment = i681[49]
  i680.m_textAlignment = i681[50]
  i680.m_characterSpacing = i681[51]
  i680.m_wordSpacing = i681[52]
  i680.m_lineSpacing = i681[53]
  i680.m_lineSpacingMax = i681[54]
  i680.m_paragraphSpacing = i681[55]
  i680.m_charWidthMaxAdj = i681[56]
  i680.m_enableWordWrapping = !!i681[57]
  i680.m_wordWrappingRatios = i681[58]
  i680.m_overflowMode = i681[59]
  request.r(i681[60], i681[61], 0, i680, 'm_linkedTextComponent')
  request.r(i681[62], i681[63], 0, i680, 'parentLinkedComponent')
  i680.m_enableKerning = !!i681[64]
  i680.m_enableExtraPadding = !!i681[65]
  i680.checkPaddingRequired = !!i681[66]
  i680.m_isRichText = !!i681[67]
  i680.m_parseCtrlCharacters = !!i681[68]
  i680.m_isOrthographic = !!i681[69]
  i680.m_isCullingEnabled = !!i681[70]
  i680.m_horizontalMapping = i681[71]
  i680.m_verticalMapping = i681[72]
  i680.m_uvLineOffset = i681[73]
  i680.m_geometrySortingOrder = i681[74]
  i680.m_IsTextObjectScaleStatic = !!i681[75]
  i680.m_VertexBufferAutoSizeReduction = !!i681[76]
  i680.m_useMaxVisibleDescender = !!i681[77]
  i680.m_pageToDisplay = i681[78]
  i680.m_margin = new pc.Vec4( i681[79], i681[80], i681[81], i681[82] )
  i680.m_isUsingLegacyAnimationComponent = !!i681[83]
  i680.m_isVolumetricText = !!i681[84]
  request.r(i681[85], i681[86], 0, i680, 'm_Material')
  i680.m_Maskable = !!i681[87]
  i680.m_Color = new pc.Color(i681[88], i681[89], i681[90], i681[91])
  i680.m_RaycastTarget = !!i681[92]
  i680.m_RaycastPadding = new pc.Vec4( i681[93], i681[94], i681[95], i681[96] )
  return i680
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i686 = root || request.c( 'TMPro.VertexGradient' )
  var i687 = data
  i686.topLeft = new pc.Color(i687[0], i687[1], i687[2], i687[3])
  i686.topRight = new pc.Color(i687[4], i687[5], i687[6], i687[7])
  i686.bottomLeft = new pc.Color(i687[8], i687[9], i687[10], i687[11])
  i686.bottomRight = new pc.Color(i687[12], i687[13], i687[14], i687[15])
  return i686
}

Deserializers["Pulse"] = function (request, data, root) {
  var i688 = root || request.c( 'Pulse' )
  var i689 = data
  i688.scale = i689[0]
  i688.duration = i689[1]
  i688.ease = i689[2]
  i688.loopCount = i689[3]
  i688.from = !!i689[4]
  return i688
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.Slider' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_FillRect')
  request.r(i691[2], i691[3], 0, i690, 'm_HandleRect')
  i690.m_Direction = i691[4]
  i690.m_MinValue = i691[5]
  i690.m_MaxValue = i691[6]
  i690.m_WholeNumbers = !!i691[7]
  i690.m_Value = i691[8]
  i690.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i691[9], i690.m_OnValueChanged)
  i690.m_Navigation = request.d('UnityEngine.UI.Navigation', i691[10], i690.m_Navigation)
  i690.m_Transition = i691[11]
  i690.m_Colors = request.d('UnityEngine.UI.ColorBlock', i691[12], i690.m_Colors)
  i690.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i691[13], i690.m_SpriteState)
  i690.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i691[14], i690.m_AnimationTriggers)
  i690.m_Interactable = !!i691[15]
  request.r(i691[16], i691[17], 0, i690, 'm_TargetGraphic')
  return i690
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i693 = data
  i692.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i693[0], i692.m_PersistentCalls)
  return i692
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i695 = data
  var i697 = i695[0]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i697.length; i += 1) {
    i696.add(request.d('UnityEngine.Events.PersistentCall', i697[i + 0]));
  }
  i694.m_Calls = i696
  return i694
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_Target')
  i700.m_TargetAssemblyTypeName = i701[2]
  i700.m_MethodName = i701[3]
  i700.m_Mode = i701[4]
  i700.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i701[5], i700.m_Arguments)
  i700.m_CallState = i701[6]
  return i700
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i703 = data
  i702.m_Mode = i703[0]
  i702.m_WrapAround = !!i703[1]
  request.r(i703[2], i703[3], 0, i702, 'm_SelectOnUp')
  request.r(i703[4], i703[5], 0, i702, 'm_SelectOnDown')
  request.r(i703[6], i703[7], 0, i702, 'm_SelectOnLeft')
  request.r(i703[8], i703[9], 0, i702, 'm_SelectOnRight')
  return i702
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i705 = data
  i704.m_NormalColor = new pc.Color(i705[0], i705[1], i705[2], i705[3])
  i704.m_HighlightedColor = new pc.Color(i705[4], i705[5], i705[6], i705[7])
  i704.m_PressedColor = new pc.Color(i705[8], i705[9], i705[10], i705[11])
  i704.m_SelectedColor = new pc.Color(i705[12], i705[13], i705[14], i705[15])
  i704.m_DisabledColor = new pc.Color(i705[16], i705[17], i705[18], i705[19])
  i704.m_ColorMultiplier = i705[20]
  i704.m_FadeDuration = i705[21]
  return i704
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'm_HighlightedSprite')
  request.r(i707[2], i707[3], 0, i706, 'm_PressedSprite')
  request.r(i707[4], i707[5], 0, i706, 'm_SelectedSprite')
  request.r(i707[6], i707[7], 0, i706, 'm_DisabledSprite')
  return i706
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i709 = data
  i708.m_NormalTrigger = i709[0]
  i708.m_HighlightedTrigger = i709[1]
  i708.m_PressedTrigger = i709[2]
  i708.m_SelectedTrigger = i709[3]
  i708.m_DisabledTrigger = i709[4]
  return i708
}

Deserializers["TimerSlider"] = function (request, data, root) {
  var i710 = root || request.c( 'TimerSlider' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'slider')
  i710.sliderTimer = i711[2]
  request.r(i711[3], i711[4], 0, i710, 'numberText')
  request.r(i711[5], i711[6], 0, i710, 'brain')
  request.r(i711[7], i711[8], 0, i710, 'emergencySfx')
  i710.emergencyColor = new pc.Color(i711[9], i711[10], i711[11], i711[12])
  return i710
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Image' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_Sprite')
  i712.m_Type = i713[2]
  i712.m_PreserveAspect = !!i713[3]
  i712.m_FillCenter = !!i713[4]
  i712.m_FillMethod = i713[5]
  i712.m_FillAmount = i713[6]
  i712.m_FillClockwise = !!i713[7]
  i712.m_FillOrigin = i713[8]
  i712.m_UseSpriteMesh = !!i713[9]
  i712.m_PixelsPerUnitMultiplier = i713[10]
  request.r(i713[11], i713[12], 0, i712, 'm_Material')
  i712.m_Maskable = !!i713[13]
  i712.m_Color = new pc.Color(i713[14], i713[15], i713[16], i713[17])
  i712.m_RaycastTarget = !!i713[18]
  i712.m_RaycastPadding = new pc.Vec4( i713[19], i713[20], i713[21], i713[22] )
  return i712
}

Deserializers["EndGamePopup"] = function (request, data, root) {
  var i714 = root || request.c( 'EndGamePopup' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'popupTransform')
  request.r(i715[2], i715[3], 0, i714, 'victoryText')
  request.r(i715[4], i715[5], 0, i714, 'loseText')
  request.r(i715[6], i715[7], 0, i714, 'ctaButton')
  request.r(i715[8], i715[9], 0, i714, 'buttonText')
  return i714
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Button' )
  var i717 = data
  i716.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i717[0], i716.m_OnClick)
  i716.m_Navigation = request.d('UnityEngine.UI.Navigation', i717[1], i716.m_Navigation)
  i716.m_Transition = i717[2]
  i716.m_Colors = request.d('UnityEngine.UI.ColorBlock', i717[3], i716.m_Colors)
  i716.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i717[4], i716.m_SpriteState)
  i716.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i717[5], i716.m_AnimationTriggers)
  i716.m_Interactable = !!i717[6]
  request.r(i717[7], i717[8], 0, i716, 'm_TargetGraphic')
  return i716
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i719 = data
  i718.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i719[0], i718.m_PersistentCalls)
  return i718
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'm_ObjectArgument')
  i720.m_ObjectArgumentAssemblyTypeName = i721[2]
  i720.m_IntArgument = i721[3]
  i720.m_FloatArgument = i721[4]
  i720.m_StringArgument = i721[5]
  i720.m_BoolArgument = !!i721[6]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'sharedMesh')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'additionalVertexStreams')
  i724.enabled = !!i725[2]
  request.r(i725[3], i725[4], 0, i724, 'sharedMaterial')
  var i727 = i725[5]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.sharedMaterials = i726
  i724.receiveShadows = !!i725[6]
  i724.shadowCastingMode = i725[7]
  i724.sortingLayerID = i725[8]
  i724.sortingOrder = i725[9]
  i724.lightmapIndex = i725[10]
  i724.lightmapSceneIndex = i725[11]
  i724.lightmapScaleOffset = new pc.Vec4( i725[12], i725[13], i725[14], i725[15] )
  i724.lightProbeUsage = i725[16]
  i724.reflectionProbeUsage = i725[17]
  return i724
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i728 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i729 = data
  i728.loop = !!i729[0]
  i728.timeScale = i729[1]
  request.r(i729[2], i729[3], 0, i728, 'skeletonDataAsset')
  i728.initialSkinName = i729[4]
  i728.fixPrefabOverrideViaMeshFilter = i729[5]
  i728.initialFlipX = !!i729[6]
  i728.initialFlipY = !!i729[7]
  i728.updateWhenInvisible = i729[8]
  i728.zSpacing = i729[9]
  i728.useClipping = !!i729[10]
  i728.immutableTriangles = !!i729[11]
  i728.pmaVertexColors = !!i729[12]
  i728.clearStateOnDisable = !!i729[13]
  i728.tintBlack = !!i729[14]
  i728.singleSubmesh = !!i729[15]
  i728.fixDrawOrder = !!i729[16]
  i728.addNormals = !!i729[17]
  i728.calculateTangents = !!i729[18]
  i728.maskInteraction = i729[19]
  i728.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i729[20], i728.maskMaterials)
  i728.disableRenderingOnOverride = !!i729[21]
  i728.updateTiming = i729[22]
  i728.unscaledTime = !!i729[23]
  i728._animationName = i729[24]
  var i731 = i729[25]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i728.separatorSlotNames = i730
  return i728
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i732 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i733 = data
  var i735 = i733[0]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.materialsMaskDisabled = i734
  var i737 = i733[1]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i732.materialsInsideMask = i736
  var i739 = i733[2]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i732.materialsOutsideMask = i738
  return i732
}

Deserializers["CountdownController"] = function (request, data, root) {
  var i742 = root || request.c( 'CountdownController' )
  var i743 = data
  i742.countdownTime = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'countdownDisplay')
  request.r(i743[3], i743[4], 0, i742, 'uiFill')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i745 = data
  i744.enabled = !!i745[0]
  i744.isTrigger = !!i745[1]
  i744.usedByEffector = !!i745[2]
  i744.density = i745[3]
  i744.offset = new pc.Vec2( i745[4], i745[5] )
  request.r(i745[6], i745[7], 0, i744, 'material')
  i744.edgeRadius = i745[8]
  var i747 = i745[9]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
    i746.push( new pc.Vec2( i747[i + 0], i747[i + 1] ) );
  }
  i744.points = i746
  i744.useAdjacentStartPoint = !!i745[10]
  i744.adjacentStartPoint = new pc.Vec2( i745[11], i745[12] )
  i744.useAdjacentEndPoint = !!i745[13]
  i744.adjacentEndPoint = new pc.Vec2( i745[14], i745[15] )
  return i744
}

Deserializers["Floater"] = function (request, data, root) {
  var i750 = root || request.c( 'Floater' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'rb')
  i750.displacementConstant = i751[2]
  i750.depthBeforeSubmerged = i751[3]
  request.r(i751[4], i751[5], 0, i750, 'currentWater')
  return i750
}

Deserializers["SpriteOutline"] = function (request, data, root) {
  var i752 = root || request.c( 'SpriteOutline' )
  var i753 = data
  var i755 = i753[0]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('SpriteOutline')))
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 1, i754, '')
  }
  i752.glowBatonPass = i754
  i752.isFirstGlow = !!i753[1]
  return i752
}

Deserializers["WaterTriggerHandler"] = function (request, data, root) {
  var i758 = root || request.c( 'WaterTriggerHandler' )
  var i759 = data
  return i758
}

Deserializers["InteractableWater"] = function (request, data, root) {
  var i760 = root || request.c( 'InteractableWater' )
  var i761 = data
  i760.NumOfXVertices = i761[0]
  i760.Width = i761[1]
  i760.Height = i761[2]
  request.r(i761[3], i761[4], 0, i760, 'WaterMaterial')
  i760.GizmoColor = new pc.Color(i761[5], i761[6], i761[7], i761[8])
  request.r(i761[9], i761[10], 0, i760, 'connectedWaterFlow')
  i760.pumpRatio = i761[11]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i763 = data
  i762.enabled = !!i763[0]
  i762.sortingLayerIndex = i763[1]
  i762.sortingOrder = i763[2]
  i762.sortingLayerName = i763[3]
  return i762
}

Deserializers["Puppy"] = function (request, data, root) {
  var i764 = root || request.c( 'Puppy' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'callingForHelpSfx')
  request.r(i765[2], i765[3], 0, i764, 'dieSfx')
  request.r(i765[4], i765[5], 0, i764, 'anim')
  request.r(i765[6], i765[7], 0, i764, 'linkedOutline')
  return i764
}

Deserializers["Main"] = function (request, data, root) {
  var i766 = root || request.c( 'Main' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'mainScared')
  request.r(i767[2], i767[3], 0, i766, 'helpMe')
  request.r(i767[4], i767[5], 0, i766, 'mainWin')
  request.r(i767[6], i767[7], 0, i766, 'anim')
  request.r(i767[8], i767[9], 0, i766, 'linkedOutline')
  return i766
}

Deserializers["Hand"] = function (request, data, root) {
  var i768 = root || request.c( 'Hand' )
  var i769 = data
  var i771 = i769[0]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 1, i770, '')
  }
  i768.destinations = i770
  var i773 = i769[1]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Pin')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i768.linkedPins = i772
  request.r(i769[2], i769[3], 0, i768, 'linkedOutline')
  i768.waitTime = i769[4]
  request.r(i769[5], i769[6], 0, i768, 'inputManager')
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i779 = data
  i778.ambientIntensity = i779[0]
  i778.reflectionIntensity = i779[1]
  i778.ambientMode = i779[2]
  i778.ambientLight = new pc.Color(i779[3], i779[4], i779[5], i779[6])
  i778.ambientSkyColor = new pc.Color(i779[7], i779[8], i779[9], i779[10])
  i778.ambientGroundColor = new pc.Color(i779[11], i779[12], i779[13], i779[14])
  i778.ambientEquatorColor = new pc.Color(i779[15], i779[16], i779[17], i779[18])
  i778.fogColor = new pc.Color(i779[19], i779[20], i779[21], i779[22])
  i778.fogEndDistance = i779[23]
  i778.fogStartDistance = i779[24]
  i778.fogDensity = i779[25]
  i778.fog = !!i779[26]
  request.r(i779[27], i779[28], 0, i778, 'skybox')
  i778.fogMode = i779[29]
  var i781 = i779[30]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i781[i + 0]) );
  }
  i778.lightmaps = i780
  i778.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i779[31], i778.lightProbes)
  i778.lightmapsMode = i779[32]
  i778.mixedBakeMode = i779[33]
  i778.environmentLightingMode = i779[34]
  i778.ambientProbe = new pc.SphericalHarmonicsL2(i779[35])
  i778.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i779[36])
  i778.useReferenceAmbientProbe = !!i779[37]
  request.r(i779[38], i779[39], 0, i778, 'customReflection')
  request.r(i779[40], i779[41], 0, i778, 'defaultReflection')
  i778.defaultReflectionMode = i779[42]
  i778.defaultReflectionResolution = i779[43]
  i778.sunLightObjectId = i779[44]
  i778.pixelLightCount = i779[45]
  i778.defaultReflectionHDR = !!i779[46]
  i778.hasLightDataAsset = !!i779[47]
  i778.hasManualGenerate = !!i779[48]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'lightmapColor')
  request.r(i785[2], i785[3], 0, i784, 'lightmapDirection')
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i786 = root || new UnityEngine.LightProbes()
  var i787 = data
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i795 = data
  i794.AdditionalLightsPerObjectLimit = i795[0]
  i794.AdditionalLightsRenderingMode = i795[1]
  i794.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i795[2], i794.LightRenderingMode)
  i794.ColorGradingLutSize = i795[3]
  i794.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i795[4], i794.ColorGradingMode)
  i794.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i795[5], i794.MainLightRenderingMode)
  i794.MainLightRenderingModeValue = i795[6]
  i794.MainLightShadowsSupported = !!i795[7]
  i794.MixedLightingSupported = !!i795[8]
  i794.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i795[9], i794.MsaaQuality)
  i794.MSAA = i795[10]
  i794.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i795[11], i794.OpaqueDownsampling)
  i794.RenderScale = i795[12]
  i794.RequireDepthTexture = !!i795[13]
  i794.RequireOpaqueTexture = !!i795[14]
  i794.ShadowAtlasResolution = i795[15]
  i794.ShadowDepthBias = i795[16]
  i794.SupportsHDR = !!i795[17]
  i794.SupportsTerrainHoles = !!i795[18]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i797 = data
  i796.Disabled = i797[0]
  i796.PerVertex = i797[1]
  i796.PerPixel = i797[2]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i799 = data
  i798.LowDynamicRange = i799[0]
  i798.HighDynamicRange = i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i801 = data
  i800.Disabled = i801[0]
  i800._2x = i801[1]
  i800._4x = i801[2]
  i800._8x = i801[3]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i803 = data
  i802.None = i803[0]
  i802._2xBilinear = i803[1]
  i802._4xBox = i803[2]
  i802._4xBilinear = i803[3]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i805 = data
  var i807 = i805[0]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i807[i + 0]));
  }
  i804.ShaderCompilationErrors = i806
  i804.name = i805[1]
  i804.guid = i805[2]
  var i809 = i805[3]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i804.shaderDefinedKeywords = i808
  var i811 = i805[4]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i811[i + 0]) );
  }
  i804.passes = i810
  var i813 = i805[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i813[i + 0]) );
  }
  i804.usePasses = i812
  var i815 = i805[6]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i815[i + 0]) );
  }
  i804.defaultParameterValues = i814
  request.r(i805[7], i805[8], 0, i804, 'unityFallbackShader')
  i804.readDepth = !!i805[9]
  i804.isCreatedByShaderGraph = !!i805[10]
  i804.compiled = !!i805[11]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i819 = data
  i818.shaderName = i819[0]
  i818.errorMessage = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i822 = root || new pc.UnityShaderPass()
  var i823 = data
  i822.id = i823[0]
  i822.subShaderIndex = i823[1]
  i822.name = i823[2]
  i822.passType = i823[3]
  i822.grabPassTextureName = i823[4]
  i822.usePass = !!i823[5]
  i822.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[6], i822.zTest)
  i822.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[7], i822.zWrite)
  i822.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[8], i822.culling)
  i822.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i823[9], i822.blending)
  i822.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i823[10], i822.alphaBlending)
  i822.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[11], i822.colorWriteMask)
  i822.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[12], i822.offsetUnits)
  i822.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[13], i822.offsetFactor)
  i822.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[14], i822.stencilRef)
  i822.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[15], i822.stencilReadMask)
  i822.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[16], i822.stencilWriteMask)
  i822.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i823[17], i822.stencilOp)
  i822.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i823[18], i822.stencilOpFront)
  i822.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i823[19], i822.stencilOpBack)
  var i825 = i823[20]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i825[i + 0]) );
  }
  i822.tags = i824
  var i827 = i823[21]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i822.passDefinedKeywords = i826
  var i829 = i823[22]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i829[i + 0]) );
  }
  i822.passDefinedKeywordGroups = i828
  var i831 = i823[23]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i831[i + 0]) );
  }
  i822.variants = i830
  var i833 = i823[24]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i833[i + 0]) );
  }
  i822.excludedVariants = i832
  i822.hasDepthReader = !!i823[25]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i835 = data
  i834.val = i835[0]
  i834.name = i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i837 = data
  i836.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[0], i836.src)
  i836.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[1], i836.dst)
  i836.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[2], i836.op)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i839 = data
  i838.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[0], i838.pass)
  i838.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[1], i838.fail)
  i838.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[2], i838.zFail)
  i838.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[3], i838.comp)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i843 = data
  i842.name = i843[0]
  i842.value = i843[1]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i847 = data
  var i849 = i847[0]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i846.keywords = i848
  i846.hasDiscard = !!i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i853 = data
  i852.passId = i853[0]
  i852.subShaderIndex = i853[1]
  var i855 = i853[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i852.keywords = i854
  i852.vertexProgram = i853[3]
  i852.fragmentProgram = i853[4]
  i852.exportedForWebGl2 = !!i853[5]
  i852.readDepth = !!i853[6]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'shader')
  i858.pass = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i863 = data
  i862.name = i863[0]
  i862.type = i863[1]
  i862.value = new pc.Vec4( i863[2], i863[3], i863[4], i863[5] )
  i862.textureValue = i863[6]
  i862.shaderPropertyFlag = i863[7]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i865 = data
  i864.name = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'texture')
  i864.aabb = i865[3]
  i864.vertices = i865[4]
  i864.triangles = i865[5]
  i864.textureRect = UnityEngine.Rect.MinMaxRect(i865[6], i865[7], i865[8], i865[9])
  i864.packedRect = UnityEngine.Rect.MinMaxRect(i865[10], i865[11], i865[12], i865[13])
  i864.border = new pc.Vec4( i865[14], i865[15], i865[16], i865[17] )
  i864.transparency = i865[18]
  i864.bounds = i865[19]
  i864.pixelsPerUnit = i865[20]
  i864.textureWidth = i865[21]
  i864.textureHeight = i865[22]
  i864.nativeSize = new pc.Vec2( i865[23], i865[24] )
  i864.pivot = new pc.Vec2( i865[25], i865[26] )
  i864.textureRectOffset = new pc.Vec2( i865[27], i865[28] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i867 = data
  i866.name = i867[0]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i869 = data
  i868.name = i869[0]
  i868.ascent = i869[1]
  i868.originalLineHeight = i869[2]
  i868.fontSize = i869[3]
  var i871 = i869[4]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i871[i + 0]) );
  }
  i868.characterInfo = i870
  request.r(i869[5], i869[6], 0, i868, 'texture')
  i868.originalFontSize = i869[7]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i875 = data
  i874.index = i875[0]
  i874.advance = i875[1]
  i874.bearing = i875[2]
  i874.glyphWidth = i875[3]
  i874.glyphHeight = i875[4]
  i874.minX = i875[5]
  i874.maxX = i875[6]
  i874.minY = i875[7]
  i874.maxY = i875[8]
  i874.uvBottomLeftX = i875[9]
  i874.uvBottomLeftY = i875[10]
  i874.uvBottomRightX = i875[11]
  i874.uvBottomRightY = i875[12]
  i874.uvTopLeftX = i875[13]
  i874.uvTopLeftY = i875[14]
  i874.uvTopRightX = i875[15]
  i874.uvTopRightY = i875[16]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i877 = data
  i876.name = i877[0]
  i876.bytes64 = i877[1]
  i876.data = i877[2]
  return i876
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i879 = data
  i878.hashCode = i879[0]
  request.r(i879[1], i879[2], 0, i878, 'material')
  i878.materialHashCode = i879[3]
  request.r(i879[4], i879[5], 0, i878, 'atlas')
  i878.normalStyle = i879[6]
  i878.normalSpacingOffset = i879[7]
  i878.boldStyle = i879[8]
  i878.boldSpacing = i879[9]
  i878.italicStyle = i879[10]
  i878.tabSize = i879[11]
  i878.m_Version = i879[12]
  i878.m_SourceFontFileGUID = i879[13]
  request.r(i879[14], i879[15], 0, i878, 'm_SourceFontFile_EditorRef')
  request.r(i879[16], i879[17], 0, i878, 'm_SourceFontFile')
  i878.m_AtlasPopulationMode = i879[18]
  i878.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i879[19], i878.m_FaceInfo)
  var i881 = i879[20]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('UnityEngine.TextCore.Glyph', i881[i + 0]));
  }
  i878.m_GlyphTable = i880
  var i883 = i879[21]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('TMPro.TMP_Character', i883[i + 0]));
  }
  i878.m_CharacterTable = i882
  var i885 = i879[22]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i878.m_AtlasTextures = i884
  i878.m_AtlasTextureIndex = i879[23]
  i878.m_IsMultiAtlasTexturesEnabled = !!i879[24]
  i878.m_ClearDynamicDataOnBuild = !!i879[25]
  var i887 = i879[26]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('UnityEngine.TextCore.GlyphRect', i887[i + 0]));
  }
  i878.m_UsedGlyphRects = i886
  var i889 = i879[27]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('UnityEngine.TextCore.GlyphRect', i889[i + 0]));
  }
  i878.m_FreeGlyphRects = i888
  i878.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i879[28], i878.m_fontInfo)
  i878.m_AtlasWidth = i879[29]
  i878.m_AtlasHeight = i879[30]
  i878.m_AtlasPadding = i879[31]
  i878.m_AtlasRenderMode = i879[32]
  var i891 = i879[33]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('TMPro.TMP_Glyph', i891[i + 0]));
  }
  i878.m_glyphInfoList = i890
  i878.m_KerningTable = request.d('TMPro.KerningTable', i879[34], i878.m_KerningTable)
  i878.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i879[35], i878.m_FontFeatureTable)
  var i893 = i879[36]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 1, i892, '')
  }
  i878.fallbackFontAssets = i892
  var i895 = i879[37]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 1, i894, '')
  }
  i878.m_FallbackFontAssetTable = i894
  i878.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i879[38], i878.m_CreationSettings)
  var i897 = i879[39]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('TMPro.TMP_FontWeightPair', i897[i + 0]) );
  }
  i878.m_FontWeightTable = i896
  var i899 = i879[40]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('TMPro.TMP_FontWeightPair', i899[i + 0]) );
  }
  i878.fontWeights = i898
  return i878
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i901 = data
  i900.m_FaceIndex = i901[0]
  i900.m_FamilyName = i901[1]
  i900.m_StyleName = i901[2]
  i900.m_PointSize = i901[3]
  i900.m_Scale = i901[4]
  i900.m_UnitsPerEM = i901[5]
  i900.m_LineHeight = i901[6]
  i900.m_AscentLine = i901[7]
  i900.m_CapLine = i901[8]
  i900.m_MeanLine = i901[9]
  i900.m_Baseline = i901[10]
  i900.m_DescentLine = i901[11]
  i900.m_SuperscriptOffset = i901[12]
  i900.m_SuperscriptSize = i901[13]
  i900.m_SubscriptOffset = i901[14]
  i900.m_SubscriptSize = i901[15]
  i900.m_UnderlineOffset = i901[16]
  i900.m_UnderlineThickness = i901[17]
  i900.m_StrikethroughOffset = i901[18]
  i900.m_StrikethroughThickness = i901[19]
  i900.m_TabWidth = i901[20]
  return i900
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i905 = data
  i904.m_Index = i905[0]
  i904.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i905[1], i904.m_Metrics)
  i904.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i905[2], i904.m_GlyphRect)
  i904.m_Scale = i905[3]
  i904.m_AtlasIndex = i905[4]
  i904.m_ClassDefinitionType = i905[5]
  return i904
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i907 = data
  i906.m_Width = i907[0]
  i906.m_Height = i907[1]
  i906.m_HorizontalBearingX = i907[2]
  i906.m_HorizontalBearingY = i907[3]
  i906.m_HorizontalAdvance = i907[4]
  return i906
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i909 = data
  i908.m_X = i909[0]
  i908.m_Y = i909[1]
  i908.m_Width = i909[2]
  i908.m_Height = i909[3]
  return i908
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_Character' )
  var i913 = data
  i912.m_ElementType = i913[0]
  i912.m_Unicode = i913[1]
  i912.m_GlyphIndex = i913[2]
  i912.m_Scale = i913[3]
  return i912
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i919 = data
  i918.Name = i919[0]
  i918.PointSize = i919[1]
  i918.Scale = i919[2]
  i918.CharacterCount = i919[3]
  i918.LineHeight = i919[4]
  i918.Baseline = i919[5]
  i918.Ascender = i919[6]
  i918.CapHeight = i919[7]
  i918.Descender = i919[8]
  i918.CenterLine = i919[9]
  i918.SuperscriptOffset = i919[10]
  i918.SubscriptOffset = i919[11]
  i918.SubSize = i919[12]
  i918.Underline = i919[13]
  i918.UnderlineThickness = i919[14]
  i918.strikethrough = i919[15]
  i918.strikethroughThickness = i919[16]
  i918.TabWidth = i919[17]
  i918.Padding = i919[18]
  i918.AtlasWidth = i919[19]
  i918.AtlasHeight = i919[20]
  return i918
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_Glyph' )
  var i923 = data
  i922.id = i923[0]
  i922.x = i923[1]
  i922.y = i923[2]
  i922.width = i923[3]
  i922.height = i923[4]
  i922.xOffset = i923[5]
  i922.yOffset = i923[6]
  i922.xAdvance = i923[7]
  i922.scale = i923[8]
  return i922
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.KerningTable' )
  var i925 = data
  var i927 = i925[0]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('TMPro.KerningPair', i927[i + 0]));
  }
  i924.kerningPairs = i926
  return i924
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.KerningPair' )
  var i931 = data
  i930.xOffset = i931[0]
  i930.m_FirstGlyph = i931[1]
  i930.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i931[2], i930.m_FirstGlyphAdjustments)
  i930.m_SecondGlyph = i931[3]
  i930.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i931[4], i930.m_SecondGlyphAdjustments)
  i930.m_IgnoreSpacingAdjustments = !!i931[5]
  return i930
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i933 = data
  var i935 = i933[0]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i935[i + 0]));
  }
  i932.m_GlyphPairAdjustmentRecords = i934
  return i932
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i939 = data
  i938.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i939[0], i938.m_FirstAdjustmentRecord)
  i938.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i939[1], i938.m_SecondAdjustmentRecord)
  i938.m_FeatureLookupFlags = i939[2]
  return i938
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i943 = data
  i942.sourceFontFileName = i943[0]
  i942.sourceFontFileGUID = i943[1]
  i942.pointSizeSamplingMode = i943[2]
  i942.pointSize = i943[3]
  i942.padding = i943[4]
  i942.packingMode = i943[5]
  i942.atlasWidth = i943[6]
  i942.atlasHeight = i943[7]
  i942.characterSetSelectionMode = i943[8]
  i942.characterSequence = i943[9]
  i942.referencedFontAssetGUID = i943[10]
  i942.referencedTextAssetGUID = i943[11]
  i942.fontStyle = i943[12]
  i942.fontStyleModifier = i943[13]
  i942.renderMode = i943[14]
  i942.includeFontFeatures = !!i943[15]
  return i942
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'regularTypeface')
  request.r(i947[2], i947[3], 0, i946, 'italicTypeface')
  return i946
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i948 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i949 = data
  var i951 = i949[0]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i948.atlasAssets = i950
  i948.scale = i949[1]
  request.r(i949[2], i949[3], 0, i948, 'skeletonJSON')
  i948.isUpgradingBlendModeMaterials = !!i949[4]
  i948.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i949[5], i948.blendModeMaterials)
  var i953 = i949[6]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i948.skeletonDataModifiers = i952
  var i955 = i949[7]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( i955[i + 0] );
  }
  i948.fromAnimation = i954
  var i957 = i949[8]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( i957[i + 0] );
  }
  i948.toAnimation = i956
  i948.duration = i949[9]
  i948.defaultMix = i949[10]
  request.r(i949[11], i949[12], 0, i948, 'controller')
  return i948
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i960 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i961 = data
  i960.applyAdditiveMaterial = !!i961[0]
  var i963 = i961[1]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i963[i + 0]));
  }
  i960.additiveMaterials = i962
  var i965 = i961[2]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i965[i + 0]));
  }
  i960.multiplyMaterials = i964
  var i967 = i961[3]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i967[i + 0]));
  }
  i960.screenMaterials = i966
  i960.requiresBlendModeMaterials = !!i961[4]
  return i960
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i970 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i971 = data
  i970.pageName = i971[0]
  request.r(i971[1], i971[2], 0, i970, 'material')
  return i970
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i974 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'atlasFile')
  var i977 = i975[2]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 2, i976, '')
  }
  i974.materials = i976
  i974.textureLoadingMode = i975[3]
  request.r(i975[4], i975[5], 0, i974, 'onDemandTextureLoader')
  return i974
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i979 = data
  i978.m_GlyphIndex = i979[0]
  i978.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i979[1], i978.m_GlyphValueRecord)
  return i978
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i981 = data
  i980.m_XPlacement = i981[0]
  i980.m_YPlacement = i981[1]
  i980.m_XAdvance = i981[2]
  i980.m_YAdvance = i981[3]
  return i980
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_Settings' )
  var i983 = data
  i982.m_enableWordWrapping = !!i983[0]
  i982.m_enableKerning = !!i983[1]
  i982.m_enableExtraPadding = !!i983[2]
  i982.m_enableTintAllSprites = !!i983[3]
  i982.m_enableParseEscapeCharacters = !!i983[4]
  i982.m_EnableRaycastTarget = !!i983[5]
  i982.m_GetFontFeaturesAtRuntime = !!i983[6]
  i982.m_missingGlyphCharacter = i983[7]
  i982.m_warningsDisabled = !!i983[8]
  request.r(i983[9], i983[10], 0, i982, 'm_defaultFontAsset')
  i982.m_defaultFontAssetPath = i983[11]
  i982.m_defaultFontSize = i983[12]
  i982.m_defaultAutoSizeMinRatio = i983[13]
  i982.m_defaultAutoSizeMaxRatio = i983[14]
  i982.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i983[15], i983[16] )
  i982.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i983[17], i983[18] )
  i982.m_autoSizeTextContainer = !!i983[19]
  i982.m_IsTextObjectScaleStatic = !!i983[20]
  var i985 = i983[21]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 1, i984, '')
  }
  i982.m_fallbackFontAssets = i984
  i982.m_matchMaterialPreset = !!i983[22]
  request.r(i983[23], i983[24], 0, i982, 'm_defaultSpriteAsset')
  i982.m_defaultSpriteAssetPath = i983[25]
  i982.m_enableEmojiSupport = !!i983[26]
  i982.m_MissingCharacterSpriteUnicode = i983[27]
  i982.m_defaultColorGradientPresetsPath = i983[28]
  request.r(i983[29], i983[30], 0, i982, 'm_defaultStyleSheet')
  i982.m_StyleSheetsResourcePath = i983[31]
  request.r(i983[32], i983[33], 0, i982, 'm_leadingCharacters')
  request.r(i983[34], i983[35], 0, i982, 'm_followingCharacters')
  i982.m_UseModernHangulLineBreakingRules = !!i983[36]
  return i982
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i987 = data
  i986.hashCode = i987[0]
  request.r(i987[1], i987[2], 0, i986, 'material')
  i986.materialHashCode = i987[3]
  request.r(i987[4], i987[5], 0, i986, 'spriteSheet')
  var i989 = i987[6]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('TMPro.TMP_Sprite', i989[i + 0]));
  }
  i986.spriteInfoList = i988
  var i991 = i987[7]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i986.fallbackSpriteAssets = i990
  i986.m_Version = i987[8]
  i986.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i987[9], i986.m_FaceInfo)
  var i993 = i987[10]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('TMPro.TMP_SpriteCharacter', i993[i + 0]));
  }
  i986.m_SpriteCharacterTable = i992
  var i995 = i987[11]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(request.d('TMPro.TMP_SpriteGlyph', i995[i + 0]));
  }
  i986.m_SpriteGlyphTable = i994
  return i986
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_Sprite' )
  var i999 = data
  i998.name = i999[0]
  i998.hashCode = i999[1]
  i998.unicode = i999[2]
  i998.pivot = new pc.Vec2( i999[3], i999[4] )
  request.r(i999[5], i999[6], 0, i998, 'sprite')
  i998.id = i999[7]
  i998.x = i999[8]
  i998.y = i999[9]
  i998.width = i999[10]
  i998.height = i999[11]
  i998.xOffset = i999[12]
  i998.yOffset = i999[13]
  i998.xAdvance = i999[14]
  i998.scale = i999[15]
  return i998
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1005 = data
  i1004.m_Name = i1005[0]
  i1004.m_HashCode = i1005[1]
  i1004.m_ElementType = i1005[2]
  i1004.m_Unicode = i1005[3]
  i1004.m_GlyphIndex = i1005[4]
  i1004.m_Scale = i1005[5]
  return i1004
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'sprite')
  i1008.m_Index = i1009[2]
  i1008.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1009[3], i1008.m_Metrics)
  i1008.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1009[4], i1008.m_GlyphRect)
  i1008.m_Scale = i1009[5]
  i1008.m_AtlasIndex = i1009[6]
  i1008.m_ClassDefinitionType = i1009[7]
  return i1008
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('TMPro.TMP_Style', i1013[i + 0]));
  }
  i1010.m_StyleList = i1012
  return i1010
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_Style' )
  var i1017 = data
  i1016.m_Name = i1017[0]
  i1016.m_HashCode = i1017[1]
  i1016.m_OpeningDefinition = i1017[2]
  i1016.m_ClosingDefinition = i1017[3]
  i1016.m_OpeningTagArray = i1017[4]
  i1016.m_ClosingTagArray = i1017[5]
  i1016.m_OpeningTagUnicodeArray = i1017[6]
  i1016.m_ClosingTagUnicodeArray = i1017[7]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1021[i + 0]) );
  }
  i1018.files = i1020
  i1018.componentToPrefabIds = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1025 = data
  i1024.path = i1025[0]
  request.r(i1025[1], i1025[2], 0, i1024, 'unityObject')
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1029[i + 0]) );
  }
  i1026.scriptsExecutionOrder = i1028
  var i1031 = i1027[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1031[i + 0]) );
  }
  i1026.sortingLayers = i1030
  var i1033 = i1027[2]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1033[i + 0]) );
  }
  i1026.cullingLayers = i1032
  i1026.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1027[3], i1026.timeSettings)
  i1026.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1027[4], i1026.physicsSettings)
  i1026.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1027[5], i1026.physics2DSettings)
  i1026.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1027[6], i1026.qualitySettings)
  i1026.enableRealtimeShadows = !!i1027[7]
  i1026.enableAutoInstancing = !!i1027[8]
  i1026.enableDynamicBatching = !!i1027[9]
  i1026.lightmapEncodingQuality = i1027[10]
  i1026.desiredColorSpace = i1027[11]
  var i1035 = i1027[12]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1026.allTags = i1034
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.value = i1039[1]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1043 = data
  i1042.id = i1043[0]
  i1042.name = i1043[1]
  i1042.value = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.name = i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1049 = data
  i1048.fixedDeltaTime = i1049[0]
  i1048.maximumDeltaTime = i1049[1]
  i1048.timeScale = i1049[2]
  i1048.maximumParticleTimestep = i1049[3]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1051 = data
  i1050.gravity = new pc.Vec3( i1051[0], i1051[1], i1051[2] )
  i1050.defaultSolverIterations = i1051[3]
  i1050.bounceThreshold = i1051[4]
  i1050.autoSyncTransforms = !!i1051[5]
  i1050.autoSimulation = !!i1051[6]
  var i1053 = i1051[7]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1053[i + 0]) );
  }
  i1050.collisionMatrix = i1052
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1057 = data
  i1056.enabled = !!i1057[0]
  i1056.layerId = i1057[1]
  i1056.otherLayerId = i1057[2]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'material')
  i1058.gravity = new pc.Vec2( i1059[2], i1059[3] )
  i1058.positionIterations = i1059[4]
  i1058.velocityIterations = i1059[5]
  i1058.velocityThreshold = i1059[6]
  i1058.maxLinearCorrection = i1059[7]
  i1058.maxAngularCorrection = i1059[8]
  i1058.maxTranslationSpeed = i1059[9]
  i1058.maxRotationSpeed = i1059[10]
  i1058.baumgarteScale = i1059[11]
  i1058.baumgarteTOIScale = i1059[12]
  i1058.timeToSleep = i1059[13]
  i1058.linearSleepTolerance = i1059[14]
  i1058.angularSleepTolerance = i1059[15]
  i1058.defaultContactOffset = i1059[16]
  i1058.autoSimulation = !!i1059[17]
  i1058.queriesHitTriggers = !!i1059[18]
  i1058.queriesStartInColliders = !!i1059[19]
  i1058.callbacksOnDisable = !!i1059[20]
  i1058.reuseCollisionCallbacks = !!i1059[21]
  i1058.autoSyncTransforms = !!i1059[22]
  var i1061 = i1059[23]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1061[i + 0]) );
  }
  i1058.collisionMatrix = i1060
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1065 = data
  i1064.enabled = !!i1065[0]
  i1064.layerId = i1065[1]
  i1064.otherLayerId = i1065[2]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1069[i + 0]) );
  }
  i1066.qualityLevels = i1068
  var i1071 = i1067[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1066.names = i1070
  i1066.shadows = i1067[2]
  i1066.anisotropicFiltering = i1067[3]
  i1066.antiAliasing = i1067[4]
  i1066.lodBias = i1067[5]
  i1066.shadowCascades = i1067[6]
  i1066.shadowDistance = i1067[7]
  i1066.shadowmaskMode = i1067[8]
  i1066.shadowProjection = i1067[9]
  i1066.shadowResolution = i1067[10]
  i1066.softParticles = !!i1067[11]
  i1066.softVegetation = !!i1067[12]
  i1066.activeColorSpace = i1067[13]
  i1066.desiredColorSpace = i1067[14]
  i1066.masterTextureLimit = i1067[15]
  i1066.maxQueuedFrames = i1067[16]
  i1066.particleRaycastBudget = i1067[17]
  i1066.pixelLightCount = i1067[18]
  i1066.realtimeReflectionProbes = !!i1067[19]
  i1066.shadowCascade2Split = i1067[20]
  i1066.shadowCascade4Split = new pc.Vec3( i1067[21], i1067[22], i1067[23] )
  i1066.streamingMipmapsActive = !!i1067[24]
  i1066.vSyncCount = i1067[25]
  i1066.asyncUploadBufferSize = i1067[26]
  i1066.asyncUploadTimeSlice = i1067[27]
  i1066.billboardsFaceCameraPosition = !!i1067[28]
  i1066.shadowNearPlaneOffset = i1067[29]
  i1066.streamingMipmapsMemoryBudget = i1067[30]
  i1066.maximumLODLevel = i1067[31]
  i1066.streamingMipmapsAddAllCameras = !!i1067[32]
  i1066.streamingMipmapsMaxLevelReduction = i1067[33]
  i1066.streamingMipmapsRenderersPerFrame = i1067[34]
  i1066.resolutionScalingFixedDPIFactor = i1067[35]
  i1066.streamingMipmapsMaxFileIORequests = i1067[36]
  i1066.currentQualityLevel = i1067[37]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1077 = data
  i1076.weight = i1077[0]
  i1076.vertices = i1077[1]
  i1076.normals = i1077[2]
  i1076.tangents = i1077[3]
  return i1076
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1079 = data
  i1078.xPlacement = i1079[0]
  i1078.yPlacement = i1079[1]
  i1078.xAdvance = i1079[2]
  i1078.yAdvance = i1079[3]
  return i1078
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[13],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[6],"80":[6],"81":[6],"82":[6],"83":[6],"84":[6],"85":[6],"86":[6],"87":[6],"88":[6],"89":[6],"90":[6],"91":[6],"92":[13],"93":[42],"94":[95],"96":[95],"30":[21],"50":[41,42,45,49],"97":[13],"98":[21],"99":[100],"101":[102],"103":[13],"104":[105],"106":[21],"107":[33,21],"39":[42],"108":[33,21],"109":[110,42],"111":[42],"112":[42,41],"113":[72],"114":[6],"115":[105],"116":[117],"118":[21],"119":[42,21],"20":[21,33],"120":[21],"121":[33,21],"122":[42],"123":[33,21],"124":[21],"125":[13],"15":[13],"126":[127],"128":[100],"129":[3],"130":[21],"131":[21],"32":[30],"37":[33,21],"132":[21],"31":[30],"133":[21],"134":[21],"135":[21],"136":[21],"137":[21],"138":[21],"139":[21],"140":[21],"141":[21],"142":[33,21],"143":[21],"144":[21],"145":[21],"36":[21],"146":[33,21],"147":[21],"148":[26],"149":[26],"27":[26],"150":[26],"151":[13],"152":[13],"153":[100]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Rigidbody2D","UnityEngine.CapsuleCollider2D","UnityEngine.CircleCollider2D","UnityEngine.BoxCollider2D","UnityEngine.MonoBehaviour","Pin","UnityEngine.AudioClip","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","GameManager","DeviceOrientationDetection","ElementsOrientationScale","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.RectTransform","SoundManager","UnityEngine.AudioSource","InputReceiver","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UIManager","EndGamePopup","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","Pulse","UnityEngine.UI.Slider","UnityEngine.UI.Image","TimerSlider","Spine.Unity.SkeletonAnimation","UnityEngine.UI.Button","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","CountdownController","UnityEngine.EdgeCollider2D","Floater","SpriteOutline","UnityEngine.Mesh","WaterTriggerHandler","InteractableWater","UnityEngine.Rendering.SortingGroup","Puppy","Main","Hand","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ViewportHandler","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "Base_Playable";

Deserializers.lunaInitializationTime = "02/19/2025 03:51:42";

Deserializers.lunaDaysRunning = "26.3";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "DetectivePin_Playable_Lv52_1401";

Deserializers.lunaAppID = "24841";

Deserializers.projectId = "a1c17f56d03c7f14b951814cb9530e84";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.11\ncom.unity.shadergraph: 14.0.11\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "927d5f51-1110-48c5-af00-d042f1946174";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

