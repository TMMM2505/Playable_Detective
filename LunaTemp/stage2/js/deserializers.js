var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointSpring' )
  var i675 = data
  i674.spring = i675[0]
  i674.damper = i675[1]
  i674.targetPosition = i675[2]
  return i674
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointMotor' )
  var i677 = data
  i676.m_TargetVelocity = i677[0]
  i676.m_Force = i677[1]
  i676.m_FreeSpin = i677[2]
  return i676
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointLimits' )
  var i679 = data
  i678.m_Min = i679[0]
  i678.m_Max = i679[1]
  i678.m_Bounciness = i679[2]
  i678.m_BounceMinVelocity = i679[3]
  i678.m_ContactDistance = i679[4]
  i678.minBounce = i679[5]
  i678.maxBounce = i679[6]
  return i678
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointDrive' )
  var i681 = data
  i680.m_PositionSpring = i681[0]
  i680.m_PositionDamper = i681[1]
  i680.m_MaximumForce = i681[2]
  i680.m_UseAcceleration = i681[3]
  return i680
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i683 = data
  i682.m_Spring = i683[0]
  i682.m_Damper = i683[1]
  return i682
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i685 = data
  i684.m_Limit = i685[0]
  i684.m_Bounciness = i685[1]
  i684.m_ContactDistance = i685[2]
  return i684
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i687 = data
  i686.m_ExtremumSlip = i687[0]
  i686.m_ExtremumValue = i687[1]
  i686.m_AsymptoteSlip = i687[2]
  i686.m_AsymptoteValue = i687[3]
  i686.m_Stiffness = i687[4]
  return i686
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i689 = data
  i688.m_LowerAngle = i689[0]
  i688.m_UpperAngle = i689[1]
  return i688
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i691 = data
  i690.m_MotorSpeed = i691[0]
  i690.m_MaximumMotorTorque = i691[1]
  return i690
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i693 = data
  i692.m_DampingRatio = i693[0]
  i692.m_Frequency = i693[1]
  i692.m_Angle = i693[2]
  return i692
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i695 = data
  i694.m_LowerTranslation = i695[0]
  i694.m_UpperTranslation = i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i696 = root || new pc.UnityMaterial()
  var i697 = data
  i696.name = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'shader')
  i696.renderQueue = i697[3]
  i696.enableInstancing = !!i697[4]
  var i699 = i697[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i699[i + 0]) );
  }
  i696.floatParameters = i698
  var i701 = i697[6]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i701[i + 0]) );
  }
  i696.colorParameters = i700
  var i703 = i697[7]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i703[i + 0]) );
  }
  i696.vectorParameters = i702
  var i705 = i697[8]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i705[i + 0]) );
  }
  i696.textureParameters = i704
  var i707 = i697[9]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i707[i + 0]) );
  }
  i696.materialFlags = i706
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i711 = data
  i710.name = i711[0]
  i710.value = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i715 = data
  i714.name = i715[0]
  i714.value = new pc.Color(i715[1], i715[2], i715[3], i715[4])
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i719 = data
  i718.name = i719[0]
  i718.value = new pc.Vec4( i719[1], i719[2], i719[3], i719[4] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i723 = data
  i722.name = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'value')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i727 = data
  i726.name = i727[0]
  i726.enabled = !!i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i729 = data
  i728.name = i729[0]
  i728.width = i729[1]
  i728.height = i729[2]
  i728.mipmapCount = i729[3]
  i728.anisoLevel = i729[4]
  i728.filterMode = i729[5]
  i728.hdr = !!i729[6]
  i728.format = i729[7]
  i728.wrapMode = i729[8]
  i728.alphaIsTransparency = !!i729[9]
  i728.alphaSource = i729[10]
  i728.graphicsFormat = i729[11]
  i728.sRGBTexture = !!i729[12]
  i728.desiredColorSpace = i729[13]
  i728.wrapU = i729[14]
  i728.wrapV = i729[15]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i731 = data
  i730.position = new pc.Vec3( i731[0], i731[1], i731[2] )
  i730.scale = new pc.Vec3( i731[3], i731[4], i731[5] )
  i730.rotation = new pc.Quat(i731[6], i731[7], i731[8], i731[9])
  return i730
}

Deserializers["CircleMazeLevelController"] = function (request, data, root) {
  var i732 = root || request.c( 'CircleMazeLevelController' )
  var i733 = data
  var i735 = i733[0]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.circleMazeParts = i734
  i732.spinSpeed = i733[1]
  i732.angularDrag = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i739 = data
  i738.bodyType = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'material')
  i738.simulated = !!i739[3]
  i738.useAutoMass = !!i739[4]
  i738.mass = i739[5]
  i738.drag = i739[6]
  i738.angularDrag = i739[7]
  i738.gravityScale = i739[8]
  i738.collisionDetectionMode = i739[9]
  i738.sleepMode = i739[10]
  i738.constraints = i739[11]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i741 = data
  i740.enabled = !!i741[0]
  request.r(i741[1], i741[2], 0, i740, 'sharedMaterial')
  var i743 = i741[3]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.sharedMaterials = i742
  i740.receiveShadows = !!i741[4]
  i740.shadowCastingMode = i741[5]
  i740.sortingLayerID = i741[6]
  i740.sortingOrder = i741[7]
  i740.lightmapIndex = i741[8]
  i740.lightmapSceneIndex = i741[9]
  i740.lightmapScaleOffset = new pc.Vec4( i741[10], i741[11], i741[12], i741[13] )
  i740.lightProbeUsage = i741[14]
  i740.reflectionProbeUsage = i741[15]
  i740.color = new pc.Color(i741[16], i741[17], i741[18], i741[19])
  request.r(i741[20], i741[21], 0, i740, 'sprite')
  i740.flipX = !!i741[22]
  i740.flipY = !!i741[23]
  i740.drawMode = i741[24]
  i740.size = new pc.Vec2( i741[25], i741[26] )
  i740.tileMode = i741[27]
  i740.adaptiveModeThreshold = i741[28]
  i740.maskInteraction = i741[29]
  i740.spriteSortPoint = i741[30]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i747 = data
  i746.name = i747[0]
  i746.tagId = i747[1]
  i746.enabled = !!i747[2]
  i746.isStatic = !!i747[3]
  i746.layer = i747[4]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i749 = data
  i748.enabled = !!i749[0]
  i748.isTrigger = !!i749[1]
  i748.usedByEffector = !!i749[2]
  i748.density = i749[3]
  i748.offset = new pc.Vec2( i749[4], i749[5] )
  request.r(i749[6], i749[7], 0, i748, 'material')
  i748.edgeRadius = i749[8]
  var i751 = i749[9]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
    i750.push( new pc.Vec2( i751[i + 0], i751[i + 1] ) );
  }
  i748.points = i750
  i748.useAdjacentStartPoint = !!i749[10]
  i748.adjacentStartPoint = new pc.Vec2( i749[11], i749[12] )
  i748.useAdjacentEndPoint = !!i749[13]
  i748.adjacentEndPoint = new pc.Vec2( i749[14], i749[15] )
  return i748
}

Deserializers["Lava"] = function (request, data, root) {
  var i754 = root || request.c( 'Lava' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'lavaSfx')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i757 = data
  i756.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i757[0], i756.main)
  i756.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i757[1], i756.colorBySpeed)
  i756.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i757[2], i756.colorOverLifetime)
  i756.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i757[3], i756.emission)
  i756.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i757[4], i756.rotationBySpeed)
  i756.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i757[5], i756.rotationOverLifetime)
  i756.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i757[6], i756.shape)
  i756.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i757[7], i756.sizeBySpeed)
  i756.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i757[8], i756.sizeOverLifetime)
  i756.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i757[9], i756.textureSheetAnimation)
  i756.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i757[10], i756.velocityOverLifetime)
  i756.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i757[11], i756.noise)
  i756.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i757[12], i756.inheritVelocity)
  i756.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i757[13], i756.forceOverLifetime)
  i756.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i757[14], i756.limitVelocityOverLifetime)
  i756.useAutoRandomSeed = !!i757[15]
  i756.randomSeed = i757[16]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemMain()
  var i759 = data
  i758.duration = i759[0]
  i758.loop = !!i759[1]
  i758.prewarm = !!i759[2]
  i758.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.startDelay)
  i758.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[4], i758.startLifetime)
  i758.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[5], i758.startSpeed)
  i758.startSize3D = !!i759[6]
  i758.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.startSizeX)
  i758.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[8], i758.startSizeY)
  i758.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[9], i758.startSizeZ)
  i758.startRotation3D = !!i759[10]
  i758.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[11], i758.startRotationX)
  i758.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[12], i758.startRotationY)
  i758.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[13], i758.startRotationZ)
  i758.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i759[14], i758.startColor)
  i758.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[15], i758.gravityModifier)
  i758.simulationSpace = i759[16]
  request.r(i759[17], i759[18], 0, i758, 'customSimulationSpace')
  i758.simulationSpeed = i759[19]
  i758.useUnscaledTime = !!i759[20]
  i758.scalingMode = i759[21]
  i758.playOnAwake = !!i759[22]
  i758.maxParticles = i759[23]
  i758.emitterVelocityMode = i759[24]
  i758.stopAction = i759[25]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxCurve()
  var i761 = data
  i760.mode = i761[0]
  i760.curveMin = new pc.AnimationCurve( { keys_flow: i761[1] } )
  i760.curveMax = new pc.AnimationCurve( { keys_flow: i761[2] } )
  i760.curveMultiplier = i761[3]
  i760.constantMin = i761[4]
  i760.constantMax = i761[5]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i762 = root || new pc.MinMaxGradient()
  var i763 = data
  i762.mode = i763[0]
  i762.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[1], i762.gradientMin)
  i762.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[2], i762.gradientMax)
  i762.colorMin = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.colorMax = new pc.Color(i763[7], i763[8], i763[9], i763[10])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i765 = data
  i764.mode = i765[0]
  var i767 = i765[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i767[i + 0]) );
  }
  i764.colorKeys = i766
  var i769 = i765[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i769[i + 0]) );
  }
  i764.alphaKeys = i768
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemColorBySpeed()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i771[1], i770.color)
  i770.range = new pc.Vec2( i771[2], i771[3] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i775 = data
  i774.color = new pc.Color(i775[0], i775[1], i775[2], i775[3])
  i774.time = i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i779 = data
  i778.alpha = i779[0]
  i778.time = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemColorOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[1], i780.color)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemEmitter()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.rateOverTime)
  i782.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.rateOverDistance)
  var i785 = i783[3]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i785[i + 0]) );
  }
  i782.bursts = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemBurst()
  var i789 = data
  i788.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[0], i788.count)
  i788.cycleCount = i789[1]
  i788.minCount = i789[2]
  i788.maxCount = i789[3]
  i788.repeatInterval = i789[4]
  i788.time = i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  i790.range = new pc.Vec2( i791[5], i791[6] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemRotationOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemShape()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.shapeType = i795[1]
  i794.randomDirectionAmount = i795[2]
  i794.sphericalDirectionAmount = i795[3]
  i794.randomPositionAmount = i795[4]
  i794.alignToDirection = !!i795[5]
  i794.radius = i795[6]
  i794.radiusMode = i795[7]
  i794.radiusSpread = i795[8]
  i794.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[9], i794.radiusSpeed)
  i794.radiusThickness = i795[10]
  i794.angle = i795[11]
  i794.length = i795[12]
  i794.boxThickness = new pc.Vec3( i795[13], i795[14], i795[15] )
  i794.meshShapeType = i795[16]
  request.r(i795[17], i795[18], 0, i794, 'mesh')
  request.r(i795[19], i795[20], 0, i794, 'meshRenderer')
  request.r(i795[21], i795[22], 0, i794, 'skinnedMeshRenderer')
  i794.useMeshMaterialIndex = !!i795[23]
  i794.meshMaterialIndex = i795[24]
  i794.useMeshColors = !!i795[25]
  i794.normalOffset = i795[26]
  i794.arc = i795[27]
  i794.arcMode = i795[28]
  i794.arcSpread = i795[29]
  i794.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[30], i794.arcSpeed)
  i794.donutRadius = i795[31]
  i794.position = new pc.Vec3( i795[32], i795[33], i795[34] )
  i794.rotation = new pc.Vec3( i795[35], i795[36], i795[37] )
  i794.scale = new pc.Vec3( i795[38], i795[39], i795[40] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeBySpeed()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  i796.range = new pc.Vec2( i797[5], i797[6] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemSizeOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.mode = i801[1]
  i800.animation = i801[2]
  i800.numTilesX = i801[3]
  i800.numTilesY = i801[4]
  i800.useRandomRow = !!i801[5]
  i800.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[6], i800.frameOverTime)
  i800.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[7], i800.startFrame)
  i800.cycleCount = i801[8]
  i800.rowIndex = i801[9]
  i800.flipU = i801[10]
  i800.flipV = i801[11]
  i800.spriteCount = i801[12]
  var i803 = i801[13]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.sprites = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.radial)
  i806.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[5], i806.speedModifier)
  i806.space = i807[6]
  i806.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[7], i806.orbitalX)
  i806.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[8], i806.orbitalY)
  i806.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[9], i806.orbitalZ)
  i806.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[10], i806.orbitalOffsetX)
  i806.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.orbitalOffsetY)
  i806.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[12], i806.orbitalOffsetZ)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemNoise()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.separateAxes = !!i809[1]
  i808.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.strengthX)
  i808.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.strengthY)
  i808.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.strengthZ)
  i808.frequency = i809[5]
  i808.damping = !!i809[6]
  i808.octaveCount = i809[7]
  i808.octaveMultiplier = i809[8]
  i808.octaveScale = i809[9]
  i808.quality = i809[10]
  i808.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[11], i808.scrollSpeed)
  i808.scrollSpeedMultiplier = i809[12]
  i808.remapEnabled = !!i809[13]
  i808.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[14], i808.remapX)
  i808.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[15], i808.remapY)
  i808.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[16], i808.remapZ)
  i808.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[17], i808.positionAmount)
  i808.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[18], i808.rotationAmount)
  i808.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[19], i808.sizeAmount)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemInheritVelocity()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.mode = i811[1]
  i810.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.curve)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemForceOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.space = i813[4]
  i812.randomized = !!i813[5]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.limit)
  i814.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.limitX)
  i814.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.limitY)
  i814.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[4], i814.limitZ)
  i814.dampen = i815[5]
  i814.separateAxes = !!i815[6]
  i814.space = i815[7]
  i814.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[8], i814.drag)
  i814.multiplyDragByParticleSize = !!i815[9]
  i814.multiplyDragByParticleVelocity = !!i815[10]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i817 = data
  i816.enabled = !!i817[0]
  request.r(i817[1], i817[2], 0, i816, 'sharedMaterial')
  var i819 = i817[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.sharedMaterials = i818
  i816.receiveShadows = !!i817[4]
  i816.shadowCastingMode = i817[5]
  i816.sortingLayerID = i817[6]
  i816.sortingOrder = i817[7]
  i816.lightmapIndex = i817[8]
  i816.lightmapSceneIndex = i817[9]
  i816.lightmapScaleOffset = new pc.Vec4( i817[10], i817[11], i817[12], i817[13] )
  i816.lightProbeUsage = i817[14]
  i816.reflectionProbeUsage = i817[15]
  request.r(i817[16], i817[17], 0, i816, 'mesh')
  i816.meshCount = i817[18]
  i816.activeVertexStreamsCount = i817[19]
  i816.alignment = i817[20]
  i816.renderMode = i817[21]
  i816.sortMode = i817[22]
  i816.lengthScale = i817[23]
  i816.velocityScale = i817[24]
  i816.cameraVelocityScale = i817[25]
  i816.normalDirection = i817[26]
  i816.sortingFudge = i817[27]
  i816.minParticleSize = i817[28]
  i816.maxParticleSize = i817[29]
  i816.pivot = new pc.Vec3( i817[30], i817[31], i817[32] )
  request.r(i817[33], i817[34], 0, i816, 'trailMaterial')
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i821 = data
  i820.radius = i821[0]
  i820.enabled = !!i821[1]
  i820.isTrigger = !!i821[2]
  i820.usedByEffector = !!i821[3]
  i820.density = i821[4]
  i820.offset = new pc.Vec2( i821[5], i821[6] )
  request.r(i821[7], i821[8], 0, i820, 'material')
  return i820
}

Deserializers["Main"] = function (request, data, root) {
  var i822 = root || request.c( 'Main' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'mainScared')
  request.r(i823[2], i823[3], 0, i822, 'helpMe')
  request.r(i823[4], i823[5], 0, i822, 'getHitSfx')
  request.r(i823[6], i823[7], 0, i822, 'wereWolfAttackHit')
  request.r(i823[8], i823[9], 0, i822, 'mainWin')
  request.r(i823[10], i823[11], 0, i822, 'anim')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i825 = data
  i824.usedByComposite = !!i825[0]
  i824.autoTiling = !!i825[1]
  i824.size = new pc.Vec2( i825[2], i825[3] )
  i824.edgeRadius = i825[4]
  i824.enabled = !!i825[5]
  i824.isTrigger = !!i825[6]
  i824.usedByEffector = !!i825[7]
  i824.density = i825[8]
  i824.offset = new pc.Vec2( i825[9], i825[10] )
  request.r(i825[11], i825[12], 0, i824, 'material')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'sharedMesh')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'additionalVertexStreams')
  i828.enabled = !!i829[2]
  request.r(i829[3], i829[4], 0, i828, 'sharedMaterial')
  var i831 = i829[5]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sharedMaterials = i830
  i828.receiveShadows = !!i829[6]
  i828.shadowCastingMode = i829[7]
  i828.sortingLayerID = i829[8]
  i828.sortingOrder = i829[9]
  i828.lightmapIndex = i829[10]
  i828.lightmapSceneIndex = i829[11]
  i828.lightmapScaleOffset = new pc.Vec4( i829[12], i829[13], i829[14], i829[15] )
  i828.lightProbeUsage = i829[16]
  i828.reflectionProbeUsage = i829[17]
  return i828
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i832 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i833 = data
  i832.loop = !!i833[0]
  i832.timeScale = i833[1]
  request.r(i833[2], i833[3], 0, i832, 'skeletonDataAsset')
  i832.initialSkinName = i833[4]
  i832.fixPrefabOverrideViaMeshFilter = i833[5]
  i832.initialFlipX = !!i833[6]
  i832.initialFlipY = !!i833[7]
  i832.updateWhenInvisible = i833[8]
  i832.zSpacing = i833[9]
  i832.useClipping = !!i833[10]
  i832.immutableTriangles = !!i833[11]
  i832.pmaVertexColors = !!i833[12]
  i832.clearStateOnDisable = !!i833[13]
  i832.tintBlack = !!i833[14]
  i832.singleSubmesh = !!i833[15]
  i832.fixDrawOrder = !!i833[16]
  i832.addNormals = !!i833[17]
  i832.calculateTangents = !!i833[18]
  i832.maskInteraction = i833[19]
  i832.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i833[20], i832.maskMaterials)
  i832.disableRenderingOnOverride = !!i833[21]
  i832.updateTiming = i833[22]
  i832.unscaledTime = !!i833[23]
  i832._animationName = i833[24]
  var i835 = i833[25]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i832.separatorSlotNames = i834
  return i832
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i836 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i837 = data
  var i839 = i837[0]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.materialsMaskDisabled = i838
  var i841 = i837[1]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i836.materialsInsideMask = i840
  var i843 = i837[2]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i836.materialsOutsideMask = i842
  return i836
}

Deserializers["WereWolf"] = function (request, data, root) {
  var i846 = root || request.c( 'WereWolf' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'roarSfx')
  request.r(i847[2], i847[3], 0, i846, 'anim')
  return i846
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i848 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'boneRoot')
  i848.flipBy180DegreeRotation = !!i849[2]
  request.r(i849[3], i849[4], 0, i848, 'skeletonRenderer')
  request.r(i849[5], i849[6], 0, i848, 'skeletonGraphic')
  return i848
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i850 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i851 = data
  i850.boneName = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'parentReference')
  i850.mode = i851[3]
  i850.position = !!i851[4]
  i850.rotation = !!i851[5]
  i850.scale = !!i851[6]
  i850.zPosition = !!i851[7]
  i850.overrideAlpha = i851[8]
  request.r(i851[9], i851[10], 0, i850, 'hierarchy')
  return i850
}

Deserializers["Hand"] = function (request, data, root) {
  var i852 = root || request.c( 'Hand' )
  var i853 = data
  var i855 = i853[0]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i852.destinations = i854
  i852.waitTime = i853[1]
  return i852
}

Deserializers["Pulse"] = function (request, data, root) {
  var i858 = root || request.c( 'Pulse' )
  var i859 = data
  i858.scale = i859[0]
  i858.duration = i859[1]
  i858.ease = i859[2]
  i858.loopCount = i859[3]
  i858.from = !!i859[4]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i861 = data
  i860.name = i861[0]
  i860.halfPrecision = !!i861[1]
  i860.useUInt32IndexFormat = !!i861[2]
  i860.vertexCount = i861[3]
  i860.aabb = i861[4]
  var i863 = i861[5]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( !!i863[i + 0] );
  }
  i860.streams = i862
  i860.vertices = i861[6]
  var i865 = i861[7]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i865[i + 0]) );
  }
  i860.subMeshes = i864
  var i867 = i861[8]
  var i866 = []
  for(var i = 0; i < i867.length; i += 16) {
    i866.push( new pc.Mat4().setData(i867[i + 0], i867[i + 1], i867[i + 2], i867[i + 3],  i867[i + 4], i867[i + 5], i867[i + 6], i867[i + 7],  i867[i + 8], i867[i + 9], i867[i + 10], i867[i + 11],  i867[i + 12], i867[i + 13], i867[i + 14], i867[i + 15]) );
  }
  i860.bindposes = i866
  var i869 = i861[9]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i869[i + 0]) );
  }
  i860.blendShapes = i868
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i875 = data
  i874.triangles = i875[0]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i881 = data
  i880.name = i881[0]
  var i883 = i881[1]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i883[i + 0]) );
  }
  i880.frames = i882
  return i880
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i884 = root || request.c( 'CameraAnchor' )
  var i885 = data
  i884.anchorType = i885[0]
  i884.anchorOffset = new pc.Vec3( i885[1], i885[2], i885[3] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'animatorController')
  request.r(i887[2], i887[3], 0, i886, 'avatar')
  i886.updateMode = i887[4]
  i886.hasTransformHierarchy = !!i887[5]
  i886.applyRootMotion = !!i887[6]
  var i889 = i887[7]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.humanBones = i888
  i886.enabled = !!i887[8]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'clip')
  request.r(i893[2], i893[3], 0, i892, 'outputAudioMixerGroup')
  i892.playOnAwake = !!i893[4]
  i892.loop = !!i893[5]
  i892.time = i893[6]
  i892.volume = i893[7]
  i892.pitch = i893[8]
  i892.enabled = !!i893[9]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i895 = data
  i894.name = i895[0]
  i894.index = i895[1]
  i894.startup = !!i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i897 = data
  i896.enabled = !!i897[0]
  i896.aspect = i897[1]
  i896.orthographic = !!i897[2]
  i896.orthographicSize = i897[3]
  i896.backgroundColor = new pc.Color(i897[4], i897[5], i897[6], i897[7])
  i896.nearClipPlane = i897[8]
  i896.farClipPlane = i897[9]
  i896.fieldOfView = i897[10]
  i896.depth = i897[11]
  i896.clearFlags = i897[12]
  i896.cullingMask = i897[13]
  i896.rect = i897[14]
  request.r(i897[15], i897[16], 0, i896, 'targetTexture')
  i896.usePhysicalProperties = !!i897[17]
  i896.focalLength = i897[18]
  i896.sensorSize = new pc.Vec2( i897[19], i897[20] )
  i896.lensShift = new pc.Vec2( i897[21], i897[22] )
  i896.gateFit = i897[23]
  i896.commandBufferCount = i897[24]
  i896.cameraType = i897[25]
  return i896
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i898 = root || request.c( 'ViewportHandler' )
  var i899 = data
  i898.wireColor = new pc.Color(i899[0], i899[1], i899[2], i899[3])
  i898.UnitsSize = i899[4]
  i898.constraint = i899[5]
  request.r(i899[6], i899[7], 0, i898, 'camera')
  return i898
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i900 = root || request.c( 'CameraFollower' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'viewportHandler')
  return i900
}

Deserializers["GameManager"] = function (request, data, root) {
  var i902 = root || request.c( 'GameManager' )
  var i903 = data
  return i902
}

Deserializers["DeviceOrientationDetection"] = function (request, data, root) {
  var i904 = root || request.c( 'DeviceOrientationDetection' )
  var i905 = data
  return i904
}

Deserializers["ElementsOrientationScale"] = function (request, data, root) {
  var i906 = root || request.c( 'ElementsOrientationScale' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'level')
  request.r(i907[2], i907[3], 0, i906, 'tutorialText')
  request.r(i907[4], i907[5], 0, i906, 'iqSlider')
  request.r(i907[6], i907[7], 0, i906, 'endgamePopup')
  request.r(i907[8], i907[9], 0, i906, 'gameIcon')
  return i906
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i908 = root || request.c( 'SoundManager' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'sfxObject')
  request.r(i909[2], i909[3], 0, i908, 'bgTheme')
  request.r(i909[4], i909[5], 0, i908, 'winSfx')
  request.r(i909[6], i909[7], 0, i908, 'loseSfx')
  return i908
}

Deserializers["InputManagerLevelCircleMaze"] = function (request, data, root) {
  var i910 = root || request.c( 'InputManagerLevelCircleMaze' )
  var i911 = data
  i910.newInputThreshold = i911[0]
  return i910
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'm_FirstSelected')
  i912.m_sendNavigationEvents = !!i913[2]
  i912.m_DragThreshold = i913[3]
  return i912
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i915 = data
  i914.m_HorizontalAxis = i915[0]
  i914.m_VerticalAxis = i915[1]
  i914.m_SubmitButton = i915[2]
  i914.m_CancelButton = i915[3]
  i914.m_InputActionsPerSecond = i915[4]
  i914.m_RepeatDelay = i915[5]
  i914.m_ForceModuleActive = !!i915[6]
  i914.m_SendPointerHoverToParent = !!i915[7]
  return i914
}

Deserializers["UIManager"] = function (request, data, root) {
  var i916 = root || request.c( 'UIManager' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'tutorialText')
  request.r(i917[2], i917[3], 0, i916, 'FadeBG')
  request.r(i917[4], i917[5], 0, i916, 'endGamePopUp')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i919 = data
  i918.pivot = new pc.Vec2( i919[0], i919[1] )
  i918.anchorMin = new pc.Vec2( i919[2], i919[3] )
  i918.anchorMax = new pc.Vec2( i919[4], i919[5] )
  i918.sizeDelta = new pc.Vec2( i919[6], i919[7] )
  i918.anchoredPosition3D = new pc.Vec3( i919[8], i919[9], i919[10] )
  i918.rotation = new pc.Quat(i919[11], i919[12], i919[13], i919[14])
  i918.scale = new pc.Vec3( i919[15], i919[16], i919[17] )
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i921 = data
  i920.enabled = !!i921[0]
  i920.planeDistance = i921[1]
  i920.referencePixelsPerUnit = i921[2]
  i920.isFallbackOverlay = !!i921[3]
  i920.renderMode = i921[4]
  i920.renderOrder = i921[5]
  i920.sortingLayerName = i921[6]
  i920.sortingOrder = i921[7]
  i920.scaleFactor = i921[8]
  request.r(i921[9], i921[10], 0, i920, 'worldCamera')
  i920.overrideSorting = !!i921[11]
  i920.pixelPerfect = !!i921[12]
  i920.targetDisplay = i921[13]
  i920.overridePixelPerfect = !!i921[14]
  return i920
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i923 = data
  i922.m_UiScaleMode = i923[0]
  i922.m_ReferencePixelsPerUnit = i923[1]
  i922.m_ScaleFactor = i923[2]
  i922.m_ReferenceResolution = new pc.Vec2( i923[3], i923[4] )
  i922.m_ScreenMatchMode = i923[5]
  i922.m_MatchWidthOrHeight = i923[6]
  i922.m_PhysicalUnit = i923[7]
  i922.m_FallbackScreenDPI = i923[8]
  i922.m_DefaultSpriteDPI = i923[9]
  i922.m_DynamicPixelsPerUnit = i923[10]
  i922.m_PresetInfoIsWorld = !!i923[11]
  return i922
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i925 = data
  i924.m_IgnoreReversedGraphics = !!i925[0]
  i924.m_BlockingObjects = i925[1]
  i924.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i925[2] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i927 = data
  i926.cullTransparentMesh = !!i927[0]
  return i926
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i929 = data
  i928.m_hasFontAssetChanged = !!i929[0]
  request.r(i929[1], i929[2], 0, i928, 'm_baseMaterial')
  i928.m_maskOffset = new pc.Vec4( i929[3], i929[4], i929[5], i929[6] )
  i928.m_text = i929[7]
  i928.m_isRightToLeft = !!i929[8]
  request.r(i929[9], i929[10], 0, i928, 'm_fontAsset')
  request.r(i929[11], i929[12], 0, i928, 'm_sharedMaterial')
  var i931 = i929[13]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i928.m_fontSharedMaterials = i930
  request.r(i929[14], i929[15], 0, i928, 'm_fontMaterial')
  var i933 = i929[16]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i928.m_fontMaterials = i932
  i928.m_fontColor32 = UnityEngine.Color32.ConstructColor(i929[17], i929[18], i929[19], i929[20])
  i928.m_fontColor = new pc.Color(i929[21], i929[22], i929[23], i929[24])
  i928.m_enableVertexGradient = !!i929[25]
  i928.m_colorMode = i929[26]
  i928.m_fontColorGradient = request.d('TMPro.VertexGradient', i929[27], i928.m_fontColorGradient)
  request.r(i929[28], i929[29], 0, i928, 'm_fontColorGradientPreset')
  request.r(i929[30], i929[31], 0, i928, 'm_spriteAsset')
  i928.m_tintAllSprites = !!i929[32]
  request.r(i929[33], i929[34], 0, i928, 'm_StyleSheet')
  i928.m_TextStyleHashCode = i929[35]
  i928.m_overrideHtmlColors = !!i929[36]
  i928.m_faceColor = UnityEngine.Color32.ConstructColor(i929[37], i929[38], i929[39], i929[40])
  i928.m_fontSize = i929[41]
  i928.m_fontSizeBase = i929[42]
  i928.m_fontWeight = i929[43]
  i928.m_enableAutoSizing = !!i929[44]
  i928.m_fontSizeMin = i929[45]
  i928.m_fontSizeMax = i929[46]
  i928.m_fontStyle = i929[47]
  i928.m_HorizontalAlignment = i929[48]
  i928.m_VerticalAlignment = i929[49]
  i928.m_textAlignment = i929[50]
  i928.m_characterSpacing = i929[51]
  i928.m_wordSpacing = i929[52]
  i928.m_lineSpacing = i929[53]
  i928.m_lineSpacingMax = i929[54]
  i928.m_paragraphSpacing = i929[55]
  i928.m_charWidthMaxAdj = i929[56]
  i928.m_enableWordWrapping = !!i929[57]
  i928.m_wordWrappingRatios = i929[58]
  i928.m_overflowMode = i929[59]
  request.r(i929[60], i929[61], 0, i928, 'm_linkedTextComponent')
  request.r(i929[62], i929[63], 0, i928, 'parentLinkedComponent')
  i928.m_enableKerning = !!i929[64]
  i928.m_enableExtraPadding = !!i929[65]
  i928.checkPaddingRequired = !!i929[66]
  i928.m_isRichText = !!i929[67]
  i928.m_parseCtrlCharacters = !!i929[68]
  i928.m_isOrthographic = !!i929[69]
  i928.m_isCullingEnabled = !!i929[70]
  i928.m_horizontalMapping = i929[71]
  i928.m_verticalMapping = i929[72]
  i928.m_uvLineOffset = i929[73]
  i928.m_geometrySortingOrder = i929[74]
  i928.m_IsTextObjectScaleStatic = !!i929[75]
  i928.m_VertexBufferAutoSizeReduction = !!i929[76]
  i928.m_useMaxVisibleDescender = !!i929[77]
  i928.m_pageToDisplay = i929[78]
  i928.m_margin = new pc.Vec4( i929[79], i929[80], i929[81], i929[82] )
  i928.m_isUsingLegacyAnimationComponent = !!i929[83]
  i928.m_isVolumetricText = !!i929[84]
  request.r(i929[85], i929[86], 0, i928, 'm_Material')
  i928.m_Maskable = !!i929[87]
  i928.m_Color = new pc.Color(i929[88], i929[89], i929[90], i929[91])
  i928.m_RaycastTarget = !!i929[92]
  i928.m_RaycastPadding = new pc.Vec4( i929[93], i929[94], i929[95], i929[96] )
  return i928
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.VertexGradient' )
  var i935 = data
  i934.topLeft = new pc.Color(i935[0], i935[1], i935[2], i935[3])
  i934.topRight = new pc.Color(i935[4], i935[5], i935[6], i935[7])
  i934.bottomLeft = new pc.Color(i935[8], i935[9], i935[10], i935[11])
  i934.bottomRight = new pc.Color(i935[12], i935[13], i935[14], i935[15])
  return i934
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.Slider' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'm_FillRect')
  request.r(i937[2], i937[3], 0, i936, 'm_HandleRect')
  i936.m_Direction = i937[4]
  i936.m_MinValue = i937[5]
  i936.m_MaxValue = i937[6]
  i936.m_WholeNumbers = !!i937[7]
  i936.m_Value = i937[8]
  i936.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i937[9], i936.m_OnValueChanged)
  i936.m_Navigation = request.d('UnityEngine.UI.Navigation', i937[10], i936.m_Navigation)
  i936.m_Transition = i937[11]
  i936.m_Colors = request.d('UnityEngine.UI.ColorBlock', i937[12], i936.m_Colors)
  i936.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i937[13], i936.m_SpriteState)
  i936.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i937[14], i936.m_AnimationTriggers)
  i936.m_Interactable = !!i937[15]
  request.r(i937[16], i937[17], 0, i936, 'm_TargetGraphic')
  return i936
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i939 = data
  i938.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i939[0], i938.m_PersistentCalls)
  return i938
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i941 = data
  var i943 = i941[0]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('UnityEngine.Events.PersistentCall', i943[i + 0]));
  }
  i940.m_Calls = i942
  return i940
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'm_Target')
  i946.m_TargetAssemblyTypeName = i947[2]
  i946.m_MethodName = i947[3]
  i946.m_Mode = i947[4]
  i946.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i947[5], i946.m_Arguments)
  i946.m_CallState = i947[6]
  return i946
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i949 = data
  i948.m_Mode = i949[0]
  i948.m_WrapAround = !!i949[1]
  request.r(i949[2], i949[3], 0, i948, 'm_SelectOnUp')
  request.r(i949[4], i949[5], 0, i948, 'm_SelectOnDown')
  request.r(i949[6], i949[7], 0, i948, 'm_SelectOnLeft')
  request.r(i949[8], i949[9], 0, i948, 'm_SelectOnRight')
  return i948
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i951 = data
  i950.m_NormalColor = new pc.Color(i951[0], i951[1], i951[2], i951[3])
  i950.m_HighlightedColor = new pc.Color(i951[4], i951[5], i951[6], i951[7])
  i950.m_PressedColor = new pc.Color(i951[8], i951[9], i951[10], i951[11])
  i950.m_SelectedColor = new pc.Color(i951[12], i951[13], i951[14], i951[15])
  i950.m_DisabledColor = new pc.Color(i951[16], i951[17], i951[18], i951[19])
  i950.m_ColorMultiplier = i951[20]
  i950.m_FadeDuration = i951[21]
  return i950
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'm_HighlightedSprite')
  request.r(i953[2], i953[3], 0, i952, 'm_PressedSprite')
  request.r(i953[4], i953[5], 0, i952, 'm_SelectedSprite')
  request.r(i953[6], i953[7], 0, i952, 'm_DisabledSprite')
  return i952
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i955 = data
  i954.m_NormalTrigger = i955[0]
  i954.m_HighlightedTrigger = i955[1]
  i954.m_PressedTrigger = i955[2]
  i954.m_SelectedTrigger = i955[3]
  i954.m_DisabledTrigger = i955[4]
  return i954
}

Deserializers["IQSlider"] = function (request, data, root) {
  var i956 = root || request.c( 'IQSlider' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'slider')
  i956.sliderTimer = i957[2]
  request.r(i957[3], i957[4], 0, i956, 'numberText')
  request.r(i957[5], i957[6], 0, i956, 'brain')
  request.r(i957[7], i957[8], 0, i956, 'emergencySfx')
  i956.emergencyColor = new pc.Color(i957[9], i957[10], i957[11], i957[12])
  return i956
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.UI.Image' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'm_Sprite')
  i958.m_Type = i959[2]
  i958.m_PreserveAspect = !!i959[3]
  i958.m_FillCenter = !!i959[4]
  i958.m_FillMethod = i959[5]
  i958.m_FillAmount = i959[6]
  i958.m_FillClockwise = !!i959[7]
  i958.m_FillOrigin = i959[8]
  i958.m_UseSpriteMesh = !!i959[9]
  i958.m_PixelsPerUnitMultiplier = i959[10]
  request.r(i959[11], i959[12], 0, i958, 'm_Material')
  i958.m_Maskable = !!i959[13]
  i958.m_Color = new pc.Color(i959[14], i959[15], i959[16], i959[17])
  i958.m_RaycastTarget = !!i959[18]
  i958.m_RaycastPadding = new pc.Vec4( i959[19], i959[20], i959[21], i959[22] )
  return i958
}

Deserializers["EndGamePopup"] = function (request, data, root) {
  var i960 = root || request.c( 'EndGamePopup' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'popupTransform')
  request.r(i961[2], i961[3], 0, i960, 'buttonText')
  request.r(i961[4], i961[5], 0, i960, 'victoryText')
  request.r(i961[6], i961[7], 0, i960, 'loseText')
  return i960
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.Button' )
  var i963 = data
  i962.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i963[0], i962.m_OnClick)
  i962.m_Navigation = request.d('UnityEngine.UI.Navigation', i963[1], i962.m_Navigation)
  i962.m_Transition = i963[2]
  i962.m_Colors = request.d('UnityEngine.UI.ColorBlock', i963[3], i962.m_Colors)
  i962.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i963[4], i962.m_SpriteState)
  i962.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i963[5], i962.m_AnimationTriggers)
  i962.m_Interactable = !!i963[6]
  request.r(i963[7], i963[8], 0, i962, 'm_TargetGraphic')
  return i962
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i965 = data
  i964.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i965[0], i964.m_PersistentCalls)
  return i964
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'm_ObjectArgument')
  i966.m_ObjectArgumentAssemblyTypeName = i967[2]
  i966.m_IntArgument = i967[3]
  i966.m_FloatArgument = i967[4]
  i966.m_StringArgument = i967[5]
  i966.m_BoolArgument = !!i967[6]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i969 = data
  i968.ambientIntensity = i969[0]
  i968.reflectionIntensity = i969[1]
  i968.ambientMode = i969[2]
  i968.ambientLight = new pc.Color(i969[3], i969[4], i969[5], i969[6])
  i968.ambientSkyColor = new pc.Color(i969[7], i969[8], i969[9], i969[10])
  i968.ambientGroundColor = new pc.Color(i969[11], i969[12], i969[13], i969[14])
  i968.ambientEquatorColor = new pc.Color(i969[15], i969[16], i969[17], i969[18])
  i968.fogColor = new pc.Color(i969[19], i969[20], i969[21], i969[22])
  i968.fogEndDistance = i969[23]
  i968.fogStartDistance = i969[24]
  i968.fogDensity = i969[25]
  i968.fog = !!i969[26]
  request.r(i969[27], i969[28], 0, i968, 'skybox')
  i968.fogMode = i969[29]
  var i971 = i969[30]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i971[i + 0]) );
  }
  i968.lightmaps = i970
  i968.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i969[31], i968.lightProbes)
  i968.lightmapsMode = i969[32]
  i968.mixedBakeMode = i969[33]
  i968.environmentLightingMode = i969[34]
  i968.ambientProbe = new pc.SphericalHarmonicsL2(i969[35])
  i968.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i969[36])
  i968.useReferenceAmbientProbe = !!i969[37]
  request.r(i969[38], i969[39], 0, i968, 'customReflection')
  request.r(i969[40], i969[41], 0, i968, 'defaultReflection')
  i968.defaultReflectionMode = i969[42]
  i968.defaultReflectionResolution = i969[43]
  i968.sunLightObjectId = i969[44]
  i968.pixelLightCount = i969[45]
  i968.defaultReflectionHDR = !!i969[46]
  i968.hasLightDataAsset = !!i969[47]
  i968.hasManualGenerate = !!i969[48]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'lightmapColor')
  request.r(i975[2], i975[3], 0, i974, 'lightmapDirection')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i976 = root || new UnityEngine.LightProbes()
  var i977 = data
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i985 = data
  i984.name = i985[0]
  i984.bounciness = i985[1]
  i984.friction = i985[2]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i989[i + 0]));
  }
  i986.ShaderCompilationErrors = i988
  i986.name = i987[1]
  i986.guid = i987[2]
  var i991 = i987[3]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i986.shaderDefinedKeywords = i990
  var i993 = i987[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i993[i + 0]) );
  }
  i986.passes = i992
  var i995 = i987[5]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i995[i + 0]) );
  }
  i986.usePasses = i994
  var i997 = i987[6]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i997[i + 0]) );
  }
  i986.defaultParameterValues = i996
  request.r(i987[7], i987[8], 0, i986, 'unityFallbackShader')
  i986.readDepth = !!i987[9]
  i986.isCreatedByShaderGraph = !!i987[10]
  i986.compiled = !!i987[11]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1001 = data
  i1000.shaderName = i1001[0]
  i1000.errorMessage = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1004 = root || new pc.UnityShaderPass()
  var i1005 = data
  i1004.id = i1005[0]
  i1004.subShaderIndex = i1005[1]
  i1004.name = i1005[2]
  i1004.passType = i1005[3]
  i1004.grabPassTextureName = i1005[4]
  i1004.usePass = !!i1005[5]
  i1004.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[6], i1004.zTest)
  i1004.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[7], i1004.zWrite)
  i1004.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[8], i1004.culling)
  i1004.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1005[9], i1004.blending)
  i1004.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1005[10], i1004.alphaBlending)
  i1004.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[11], i1004.colorWriteMask)
  i1004.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[12], i1004.offsetUnits)
  i1004.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[13], i1004.offsetFactor)
  i1004.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[14], i1004.stencilRef)
  i1004.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[15], i1004.stencilReadMask)
  i1004.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[16], i1004.stencilWriteMask)
  i1004.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1005[17], i1004.stencilOp)
  i1004.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1005[18], i1004.stencilOpFront)
  i1004.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1005[19], i1004.stencilOpBack)
  var i1007 = i1005[20]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1007[i + 0]) );
  }
  i1004.tags = i1006
  var i1009 = i1005[21]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1004.passDefinedKeywords = i1008
  var i1011 = i1005[22]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1011[i + 0]) );
  }
  i1004.passDefinedKeywordGroups = i1010
  var i1013 = i1005[23]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1013[i + 0]) );
  }
  i1004.variants = i1012
  var i1015 = i1005[24]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1015[i + 0]) );
  }
  i1004.excludedVariants = i1014
  i1004.hasDepthReader = !!i1005[25]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1017 = data
  i1016.val = i1017[0]
  i1016.name = i1017[1]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1019 = data
  i1018.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[0], i1018.src)
  i1018.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[1], i1018.dst)
  i1018.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[2], i1018.op)
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1021 = data
  i1020.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[0], i1020.pass)
  i1020.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[1], i1020.fail)
  i1020.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[2], i1020.zFail)
  i1020.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[3], i1020.comp)
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.value = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1028.keywords = i1030
  i1028.hasDiscard = !!i1029[1]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1035 = data
  i1034.passId = i1035[0]
  i1034.subShaderIndex = i1035[1]
  var i1037 = i1035[2]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( i1037[i + 0] );
  }
  i1034.keywords = i1036
  i1034.vertexProgram = i1035[3]
  i1034.fragmentProgram = i1035[4]
  i1034.exportedForWebGl2 = !!i1035[5]
  i1034.readDepth = !!i1035[6]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'shader')
  i1040.pass = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.type = i1045[1]
  i1044.value = new pc.Vec4( i1045[2], i1045[3], i1045[4], i1045[5] )
  i1044.textureValue = i1045[6]
  i1044.shaderPropertyFlag = i1045[7]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1047 = data
  i1046.name = i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'texture')
  i1046.aabb = i1047[3]
  i1046.vertices = i1047[4]
  i1046.triangles = i1047[5]
  i1046.textureRect = UnityEngine.Rect.MinMaxRect(i1047[6], i1047[7], i1047[8], i1047[9])
  i1046.packedRect = UnityEngine.Rect.MinMaxRect(i1047[10], i1047[11], i1047[12], i1047[13])
  i1046.border = new pc.Vec4( i1047[14], i1047[15], i1047[16], i1047[17] )
  i1046.transparency = i1047[18]
  i1046.bounds = i1047[19]
  i1046.pixelsPerUnit = i1047[20]
  i1046.textureWidth = i1047[21]
  i1046.textureHeight = i1047[22]
  i1046.nativeSize = new pc.Vec2( i1047[23], i1047[24] )
  i1046.pivot = new pc.Vec2( i1047[25], i1047[26] )
  i1046.textureRectOffset = new pc.Vec2( i1047[27], i1047[28] )
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1049 = data
  i1048.name = i1049[0]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.wrapMode = i1051[1]
  i1050.isLooping = !!i1051[2]
  i1050.length = i1051[3]
  var i1053 = i1051[4]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1053[i + 0]) );
  }
  i1050.curves = i1052
  var i1055 = i1051[5]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1055[i + 0]) );
  }
  i1050.events = i1054
  i1050.halfPrecision = !!i1051[6]
  i1050._frameRate = i1051[7]
  i1050.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1051[8], i1050.localBounds)
  i1050.hasMuscleCurves = !!i1051[9]
  var i1057 = i1051[10]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1050.clipMuscleConstant = i1056
  i1050.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1051[11], i1050.clipBindingConstant)
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1061 = data
  i1060.path = i1061[0]
  i1060.hash = i1061[1]
  i1060.componentType = i1061[2]
  i1060.property = i1061[3]
  i1060.keys = i1061[4]
  var i1063 = i1061[5]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1063[i + 0]) );
  }
  i1060.objectReferenceKeys = i1062
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1067 = data
  i1066.time = i1067[0]
  request.r(i1067[1], i1067[2], 0, i1066, 'value')
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1071 = data
  i1070.functionName = i1071[0]
  i1070.floatParameter = i1071[1]
  i1070.intParameter = i1071[2]
  i1070.stringParameter = i1071[3]
  request.r(i1071[4], i1071[5], 0, i1070, 'objectReferenceParameter')
  i1070.time = i1071[6]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1073 = data
  i1072.center = new pc.Vec3( i1073[0], i1073[1], i1073[2] )
  i1072.extends = new pc.Vec3( i1073[3], i1073[4], i1073[5] )
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1077 = data
  var i1079 = i1077[0]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1076.genericBindings = i1078
  var i1081 = i1077[1]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1076.pptrCurveMapping = i1080
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.ascent = i1083[1]
  i1082.originalLineHeight = i1083[2]
  i1082.fontSize = i1083[3]
  var i1085 = i1083[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1085[i + 0]) );
  }
  i1082.characterInfo = i1084
  request.r(i1083[5], i1083[6], 0, i1082, 'texture')
  i1082.originalFontSize = i1083[7]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1089 = data
  i1088.index = i1089[0]
  i1088.advance = i1089[1]
  i1088.bearing = i1089[2]
  i1088.glyphWidth = i1089[3]
  i1088.glyphHeight = i1089[4]
  i1088.minX = i1089[5]
  i1088.maxX = i1089[6]
  i1088.minY = i1089[7]
  i1088.maxY = i1089[8]
  i1088.uvBottomLeftX = i1089[9]
  i1088.uvBottomLeftY = i1089[10]
  i1088.uvBottomRightX = i1089[11]
  i1088.uvBottomRightY = i1089[12]
  i1088.uvTopLeftX = i1089[13]
  i1088.uvTopLeftY = i1089[14]
  i1088.uvTopRightX = i1089[15]
  i1088.uvTopRightY = i1089[16]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1091 = data
  i1090.name = i1091[0]
  var i1093 = i1091[1]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1093[i + 0]) );
  }
  i1090.layers = i1092
  var i1095 = i1091[2]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1095[i + 0]) );
  }
  i1090.parameters = i1094
  i1090.animationClips = i1091[3]
  i1090.avatarUnsupported = i1091[4]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.defaultWeight = i1099[1]
  i1098.blendingMode = i1099[2]
  i1098.avatarMask = i1099[3]
  i1098.syncedLayerIndex = i1099[4]
  i1098.syncedLayerAffectsTiming = !!i1099[5]
  i1098.syncedLayers = i1099[6]
  i1098.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1099[7], i1098.stateMachine)
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1101 = data
  i1100.id = i1101[0]
  i1100.name = i1101[1]
  i1100.path = i1101[2]
  var i1103 = i1101[3]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1103[i + 0]) );
  }
  i1100.states = i1102
  var i1105 = i1101[4]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1105[i + 0]) );
  }
  i1100.machines = i1104
  var i1107 = i1101[5]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1107[i + 0]) );
  }
  i1100.entryStateTransitions = i1106
  var i1109 = i1101[6]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1109[i + 0]) );
  }
  i1100.exitStateTransitions = i1108
  var i1111 = i1101[7]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1111[i + 0]) );
  }
  i1100.anyStateTransitions = i1110
  i1100.defaultStateId = i1101[8]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1115 = data
  i1114.id = i1115[0]
  i1114.name = i1115[1]
  i1114.cycleOffset = i1115[2]
  i1114.cycleOffsetParameter = i1115[3]
  i1114.cycleOffsetParameterActive = !!i1115[4]
  i1114.mirror = !!i1115[5]
  i1114.mirrorParameter = i1115[6]
  i1114.mirrorParameterActive = !!i1115[7]
  i1114.motionId = i1115[8]
  i1114.nameHash = i1115[9]
  i1114.fullPathHash = i1115[10]
  i1114.speed = i1115[11]
  i1114.speedParameter = i1115[12]
  i1114.speedParameterActive = !!i1115[13]
  i1114.tag = i1115[14]
  i1114.tagHash = i1115[15]
  i1114.writeDefaultValues = !!i1115[16]
  var i1117 = i1115[17]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 2, i1116, '')
  }
  i1114.behaviours = i1116
  var i1119 = i1115[18]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1119[i + 0]) );
  }
  i1114.transitions = i1118
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1125 = data
  i1124.fullPath = i1125[0]
  i1124.canTransitionToSelf = !!i1125[1]
  i1124.duration = i1125[2]
  i1124.exitTime = i1125[3]
  i1124.hasExitTime = !!i1125[4]
  i1124.hasFixedDuration = !!i1125[5]
  i1124.interruptionSource = i1125[6]
  i1124.offset = i1125[7]
  i1124.orderedInterruption = !!i1125[8]
  i1124.destinationStateId = i1125[9]
  i1124.isExit = !!i1125[10]
  i1124.mute = !!i1125[11]
  i1124.solo = !!i1125[12]
  var i1127 = i1125[13]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1127[i + 0]) );
  }
  i1124.conditions = i1126
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1133 = data
  i1132.destinationStateId = i1133[0]
  i1132.isExit = !!i1133[1]
  i1132.mute = !!i1133[2]
  i1132.solo = !!i1133[3]
  var i1135 = i1133[4]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1135[i + 0]) );
  }
  i1132.conditions = i1134
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1139 = data
  i1138.mode = i1139[0]
  i1138.parameter = i1139[1]
  i1138.threshold = i1139[2]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1143 = data
  i1142.defaultBool = !!i1143[0]
  i1142.defaultFloat = i1143[1]
  i1142.defaultInt = i1143[2]
  i1142.name = i1143[3]
  i1142.nameHash = i1143[4]
  i1142.type = i1143[5]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1145 = data
  i1144.name = i1145[0]
  i1144.bytes64 = i1145[1]
  i1144.data = i1145[2]
  return i1144
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1146 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 2) {
  request.r(i1149[i + 0], i1149[i + 1], 2, i1148, '')
  }
  i1146.atlasAssets = i1148
  i1146.scale = i1147[1]
  request.r(i1147[2], i1147[3], 0, i1146, 'skeletonJSON')
  i1146.isUpgradingBlendModeMaterials = !!i1147[4]
  i1146.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1147[5], i1146.blendModeMaterials)
  var i1151 = i1147[6]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1151.length; i += 2) {
  request.r(i1151[i + 0], i1151[i + 1], 1, i1150, '')
  }
  i1146.skeletonDataModifiers = i1150
  var i1153 = i1147[7]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1146.fromAnimation = i1152
  var i1155 = i1147[8]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1146.toAnimation = i1154
  i1146.duration = i1147[9]
  i1146.defaultMix = i1147[10]
  request.r(i1147[11], i1147[12], 0, i1146, 'controller')
  return i1146
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1158 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1159 = data
  i1158.applyAdditiveMaterial = !!i1159[0]
  var i1161 = i1159[1]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1161[i + 0]));
  }
  i1158.additiveMaterials = i1160
  var i1163 = i1159[2]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1163[i + 0]));
  }
  i1158.multiplyMaterials = i1162
  var i1165 = i1159[3]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1165[i + 0]));
  }
  i1158.screenMaterials = i1164
  i1158.requiresBlendModeMaterials = !!i1159[4]
  return i1158
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1168 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1169 = data
  i1168.pageName = i1169[0]
  request.r(i1169[1], i1169[2], 0, i1168, 'material')
  return i1168
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1172 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1173 = data
  request.r(i1173[0], i1173[1], 0, i1172, 'atlasFile')
  var i1175 = i1173[2]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 2) {
  request.r(i1175[i + 0], i1175[i + 1], 2, i1174, '')
  }
  i1172.materials = i1174
  i1172.textureLoadingMode = i1173[3]
  request.r(i1173[4], i1173[5], 0, i1172, 'onDemandTextureLoader')
  return i1172
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1177 = data
  i1176.hashCode = i1177[0]
  request.r(i1177[1], i1177[2], 0, i1176, 'material')
  i1176.materialHashCode = i1177[3]
  request.r(i1177[4], i1177[5], 0, i1176, 'atlas')
  i1176.normalStyle = i1177[6]
  i1176.normalSpacingOffset = i1177[7]
  i1176.boldStyle = i1177[8]
  i1176.boldSpacing = i1177[9]
  i1176.italicStyle = i1177[10]
  i1176.tabSize = i1177[11]
  i1176.m_Version = i1177[12]
  i1176.m_SourceFontFileGUID = i1177[13]
  request.r(i1177[14], i1177[15], 0, i1176, 'm_SourceFontFile_EditorRef')
  request.r(i1177[16], i1177[17], 0, i1176, 'm_SourceFontFile')
  i1176.m_AtlasPopulationMode = i1177[18]
  i1176.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1177[19], i1176.m_FaceInfo)
  var i1179 = i1177[20]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('UnityEngine.TextCore.Glyph', i1179[i + 0]));
  }
  i1176.m_GlyphTable = i1178
  var i1181 = i1177[21]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.TMP_Character', i1181[i + 0]));
  }
  i1176.m_CharacterTable = i1180
  var i1183 = i1177[22]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 2, i1182, '')
  }
  i1176.m_AtlasTextures = i1182
  i1176.m_AtlasTextureIndex = i1177[23]
  i1176.m_IsMultiAtlasTexturesEnabled = !!i1177[24]
  i1176.m_ClearDynamicDataOnBuild = !!i1177[25]
  var i1185 = i1177[26]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('UnityEngine.TextCore.GlyphRect', i1185[i + 0]));
  }
  i1176.m_UsedGlyphRects = i1184
  var i1187 = i1177[27]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('UnityEngine.TextCore.GlyphRect', i1187[i + 0]));
  }
  i1176.m_FreeGlyphRects = i1186
  i1176.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1177[28], i1176.m_fontInfo)
  i1176.m_AtlasWidth = i1177[29]
  i1176.m_AtlasHeight = i1177[30]
  i1176.m_AtlasPadding = i1177[31]
  i1176.m_AtlasRenderMode = i1177[32]
  var i1189 = i1177[33]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.TMP_Glyph', i1189[i + 0]));
  }
  i1176.m_glyphInfoList = i1188
  i1176.m_KerningTable = request.d('TMPro.KerningTable', i1177[34], i1176.m_KerningTable)
  i1176.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1177[35], i1176.m_FontFeatureTable)
  var i1191 = i1177[36]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 1, i1190, '')
  }
  i1176.fallbackFontAssets = i1190
  var i1193 = i1177[37]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1176.m_FallbackFontAssetTable = i1192
  i1176.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1177[38], i1176.m_CreationSettings)
  var i1195 = i1177[39]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('TMPro.TMP_FontWeightPair', i1195[i + 0]) );
  }
  i1176.m_FontWeightTable = i1194
  var i1197 = i1177[40]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('TMPro.TMP_FontWeightPair', i1197[i + 0]) );
  }
  i1176.fontWeights = i1196
  return i1176
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1199 = data
  i1198.m_FaceIndex = i1199[0]
  i1198.m_FamilyName = i1199[1]
  i1198.m_StyleName = i1199[2]
  i1198.m_PointSize = i1199[3]
  i1198.m_Scale = i1199[4]
  i1198.m_UnitsPerEM = i1199[5]
  i1198.m_LineHeight = i1199[6]
  i1198.m_AscentLine = i1199[7]
  i1198.m_CapLine = i1199[8]
  i1198.m_MeanLine = i1199[9]
  i1198.m_Baseline = i1199[10]
  i1198.m_DescentLine = i1199[11]
  i1198.m_SuperscriptOffset = i1199[12]
  i1198.m_SuperscriptSize = i1199[13]
  i1198.m_SubscriptOffset = i1199[14]
  i1198.m_SubscriptSize = i1199[15]
  i1198.m_UnderlineOffset = i1199[16]
  i1198.m_UnderlineThickness = i1199[17]
  i1198.m_StrikethroughOffset = i1199[18]
  i1198.m_StrikethroughThickness = i1199[19]
  i1198.m_TabWidth = i1199[20]
  return i1198
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1203 = data
  i1202.m_Index = i1203[0]
  i1202.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1203[1], i1202.m_Metrics)
  i1202.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1203[2], i1202.m_GlyphRect)
  i1202.m_Scale = i1203[3]
  i1202.m_AtlasIndex = i1203[4]
  i1202.m_ClassDefinitionType = i1203[5]
  return i1202
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1205 = data
  i1204.m_Width = i1205[0]
  i1204.m_Height = i1205[1]
  i1204.m_HorizontalBearingX = i1205[2]
  i1204.m_HorizontalBearingY = i1205[3]
  i1204.m_HorizontalAdvance = i1205[4]
  return i1204
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1207 = data
  i1206.m_X = i1207[0]
  i1206.m_Y = i1207[1]
  i1206.m_Width = i1207[2]
  i1206.m_Height = i1207[3]
  return i1206
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_Character' )
  var i1211 = data
  i1210.m_ElementType = i1211[0]
  i1210.m_Unicode = i1211[1]
  i1210.m_GlyphIndex = i1211[2]
  i1210.m_Scale = i1211[3]
  return i1210
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1217 = data
  i1216.Name = i1217[0]
  i1216.PointSize = i1217[1]
  i1216.Scale = i1217[2]
  i1216.CharacterCount = i1217[3]
  i1216.LineHeight = i1217[4]
  i1216.Baseline = i1217[5]
  i1216.Ascender = i1217[6]
  i1216.CapHeight = i1217[7]
  i1216.Descender = i1217[8]
  i1216.CenterLine = i1217[9]
  i1216.SuperscriptOffset = i1217[10]
  i1216.SubscriptOffset = i1217[11]
  i1216.SubSize = i1217[12]
  i1216.Underline = i1217[13]
  i1216.UnderlineThickness = i1217[14]
  i1216.strikethrough = i1217[15]
  i1216.strikethroughThickness = i1217[16]
  i1216.TabWidth = i1217[17]
  i1216.Padding = i1217[18]
  i1216.AtlasWidth = i1217[19]
  i1216.AtlasHeight = i1217[20]
  return i1216
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1221 = data
  i1220.id = i1221[0]
  i1220.x = i1221[1]
  i1220.y = i1221[2]
  i1220.width = i1221[3]
  i1220.height = i1221[4]
  i1220.xOffset = i1221[5]
  i1220.yOffset = i1221[6]
  i1220.xAdvance = i1221[7]
  i1220.scale = i1221[8]
  return i1220
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.KerningTable' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('TMPro.KerningPair', i1225[i + 0]));
  }
  i1222.kerningPairs = i1224
  return i1222
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.KerningPair' )
  var i1229 = data
  i1228.xOffset = i1229[0]
  i1228.m_FirstGlyph = i1229[1]
  i1228.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1229[2], i1228.m_FirstGlyphAdjustments)
  i1228.m_SecondGlyph = i1229[3]
  i1228.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1229[4], i1228.m_SecondGlyphAdjustments)
  i1228.m_IgnoreSpacingAdjustments = !!i1229[5]
  return i1228
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1233[i + 0]));
  }
  i1230.m_GlyphPairAdjustmentRecords = i1232
  return i1230
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1237 = data
  i1236.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1237[0], i1236.m_FirstAdjustmentRecord)
  i1236.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1237[1], i1236.m_SecondAdjustmentRecord)
  i1236.m_FeatureLookupFlags = i1237[2]
  return i1236
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1241 = data
  i1240.sourceFontFileName = i1241[0]
  i1240.sourceFontFileGUID = i1241[1]
  i1240.pointSizeSamplingMode = i1241[2]
  i1240.pointSize = i1241[3]
  i1240.padding = i1241[4]
  i1240.packingMode = i1241[5]
  i1240.atlasWidth = i1241[6]
  i1240.atlasHeight = i1241[7]
  i1240.characterSetSelectionMode = i1241[8]
  i1240.characterSequence = i1241[9]
  i1240.referencedFontAssetGUID = i1241[10]
  i1240.referencedTextAssetGUID = i1241[11]
  i1240.fontStyle = i1241[12]
  i1240.fontStyleModifier = i1241[13]
  i1240.renderMode = i1241[14]
  i1240.includeFontFeatures = !!i1241[15]
  return i1240
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1245 = data
  request.r(i1245[0], i1245[1], 0, i1244, 'regularTypeface')
  request.r(i1245[2], i1245[3], 0, i1244, 'italicTypeface')
  return i1244
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_Settings' )
  var i1247 = data
  i1246.m_enableWordWrapping = !!i1247[0]
  i1246.m_enableKerning = !!i1247[1]
  i1246.m_enableExtraPadding = !!i1247[2]
  i1246.m_enableTintAllSprites = !!i1247[3]
  i1246.m_enableParseEscapeCharacters = !!i1247[4]
  i1246.m_EnableRaycastTarget = !!i1247[5]
  i1246.m_GetFontFeaturesAtRuntime = !!i1247[6]
  i1246.m_missingGlyphCharacter = i1247[7]
  i1246.m_warningsDisabled = !!i1247[8]
  request.r(i1247[9], i1247[10], 0, i1246, 'm_defaultFontAsset')
  i1246.m_defaultFontAssetPath = i1247[11]
  i1246.m_defaultFontSize = i1247[12]
  i1246.m_defaultAutoSizeMinRatio = i1247[13]
  i1246.m_defaultAutoSizeMaxRatio = i1247[14]
  i1246.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1247[15], i1247[16] )
  i1246.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1247[17], i1247[18] )
  i1246.m_autoSizeTextContainer = !!i1247[19]
  i1246.m_IsTextObjectScaleStatic = !!i1247[20]
  var i1249 = i1247[21]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1249.length; i += 2) {
  request.r(i1249[i + 0], i1249[i + 1], 1, i1248, '')
  }
  i1246.m_fallbackFontAssets = i1248
  i1246.m_matchMaterialPreset = !!i1247[22]
  request.r(i1247[23], i1247[24], 0, i1246, 'm_defaultSpriteAsset')
  i1246.m_defaultSpriteAssetPath = i1247[25]
  i1246.m_enableEmojiSupport = !!i1247[26]
  i1246.m_MissingCharacterSpriteUnicode = i1247[27]
  i1246.m_defaultColorGradientPresetsPath = i1247[28]
  request.r(i1247[29], i1247[30], 0, i1246, 'm_defaultStyleSheet')
  i1246.m_StyleSheetsResourcePath = i1247[31]
  request.r(i1247[32], i1247[33], 0, i1246, 'm_leadingCharacters')
  request.r(i1247[34], i1247[35], 0, i1246, 'm_followingCharacters')
  i1246.m_UseModernHangulLineBreakingRules = !!i1247[36]
  return i1246
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1251 = data
  i1250.m_GlyphIndex = i1251[0]
  i1250.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1251[1], i1250.m_GlyphValueRecord)
  return i1250
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1253 = data
  i1252.m_XPlacement = i1253[0]
  i1252.m_YPlacement = i1253[1]
  i1252.m_XAdvance = i1253[2]
  i1252.m_YAdvance = i1253[3]
  return i1252
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1255 = data
  i1254.hashCode = i1255[0]
  request.r(i1255[1], i1255[2], 0, i1254, 'material')
  i1254.materialHashCode = i1255[3]
  request.r(i1255[4], i1255[5], 0, i1254, 'spriteSheet')
  var i1257 = i1255[6]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.TMP_Sprite', i1257[i + 0]));
  }
  i1254.spriteInfoList = i1256
  var i1259 = i1255[7]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1259.length; i += 2) {
  request.r(i1259[i + 0], i1259[i + 1], 1, i1258, '')
  }
  i1254.fallbackSpriteAssets = i1258
  i1254.m_Version = i1255[8]
  i1254.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1255[9], i1254.m_FaceInfo)
  var i1261 = i1255[10]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.TMP_SpriteCharacter', i1261[i + 0]));
  }
  i1254.m_SpriteCharacterTable = i1260
  var i1263 = i1255[11]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.TMP_SpriteGlyph', i1263[i + 0]));
  }
  i1254.m_SpriteGlyphTable = i1262
  return i1254
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.hashCode = i1267[1]
  i1266.unicode = i1267[2]
  i1266.pivot = new pc.Vec2( i1267[3], i1267[4] )
  request.r(i1267[5], i1267[6], 0, i1266, 'sprite')
  i1266.id = i1267[7]
  i1266.x = i1267[8]
  i1266.y = i1267[9]
  i1266.width = i1267[10]
  i1266.height = i1267[11]
  i1266.xOffset = i1267[12]
  i1266.yOffset = i1267[13]
  i1266.xAdvance = i1267[14]
  i1266.scale = i1267[15]
  return i1266
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1273 = data
  i1272.m_Name = i1273[0]
  i1272.m_HashCode = i1273[1]
  i1272.m_ElementType = i1273[2]
  i1272.m_Unicode = i1273[3]
  i1272.m_GlyphIndex = i1273[4]
  i1272.m_Scale = i1273[5]
  return i1272
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'sprite')
  i1276.m_Index = i1277[2]
  i1276.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1277[3], i1276.m_Metrics)
  i1276.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1277[4], i1276.m_GlyphRect)
  i1276.m_Scale = i1277[5]
  i1276.m_AtlasIndex = i1277[6]
  i1276.m_ClassDefinitionType = i1277[7]
  return i1276
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1279 = data
  var i1281 = i1279[0]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('TMPro.TMP_Style', i1281[i + 0]));
  }
  i1278.m_StyleList = i1280
  return i1278
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_Style' )
  var i1285 = data
  i1284.m_Name = i1285[0]
  i1284.m_HashCode = i1285[1]
  i1284.m_OpeningDefinition = i1285[2]
  i1284.m_ClosingDefinition = i1285[3]
  i1284.m_OpeningTagArray = i1285[4]
  i1284.m_ClosingTagArray = i1285[5]
  i1284.m_OpeningTagUnicodeArray = i1285[6]
  i1284.m_ClosingTagUnicodeArray = i1285[7]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1287 = data
  var i1289 = i1287[0]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1289[i + 0]) );
  }
  i1286.files = i1288
  i1286.componentToPrefabIds = i1287[1]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1293 = data
  i1292.path = i1293[0]
  request.r(i1293[1], i1293[2], 0, i1292, 'unityObject')
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1295 = data
  var i1297 = i1295[0]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1297[i + 0]) );
  }
  i1294.scriptsExecutionOrder = i1296
  var i1299 = i1295[1]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1299[i + 0]) );
  }
  i1294.sortingLayers = i1298
  var i1301 = i1295[2]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1301[i + 0]) );
  }
  i1294.cullingLayers = i1300
  i1294.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1295[3], i1294.timeSettings)
  i1294.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1295[4], i1294.physicsSettings)
  i1294.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1295[5], i1294.physics2DSettings)
  i1294.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1295[6], i1294.qualitySettings)
  i1294.enableRealtimeShadows = !!i1295[7]
  i1294.enableAutoInstancing = !!i1295[8]
  i1294.enableDynamicBatching = !!i1295[9]
  i1294.lightmapEncodingQuality = i1295[10]
  i1294.desiredColorSpace = i1295[11]
  var i1303 = i1295[12]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( i1303[i + 0] );
  }
  i1294.allTags = i1302
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1307 = data
  i1306.name = i1307[0]
  i1306.value = i1307[1]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1311 = data
  i1310.id = i1311[0]
  i1310.name = i1311[1]
  i1310.value = i1311[2]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.name = i1315[1]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1317 = data
  i1316.fixedDeltaTime = i1317[0]
  i1316.maximumDeltaTime = i1317[1]
  i1316.timeScale = i1317[2]
  i1316.maximumParticleTimestep = i1317[3]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1319 = data
  i1318.gravity = new pc.Vec3( i1319[0], i1319[1], i1319[2] )
  i1318.defaultSolverIterations = i1319[3]
  i1318.bounceThreshold = i1319[4]
  i1318.autoSyncTransforms = !!i1319[5]
  i1318.autoSimulation = !!i1319[6]
  var i1321 = i1319[7]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1321[i + 0]) );
  }
  i1318.collisionMatrix = i1320
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1325 = data
  i1324.enabled = !!i1325[0]
  i1324.layerId = i1325[1]
  i1324.otherLayerId = i1325[2]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1327 = data
  request.r(i1327[0], i1327[1], 0, i1326, 'material')
  i1326.gravity = new pc.Vec2( i1327[2], i1327[3] )
  i1326.positionIterations = i1327[4]
  i1326.velocityIterations = i1327[5]
  i1326.velocityThreshold = i1327[6]
  i1326.maxLinearCorrection = i1327[7]
  i1326.maxAngularCorrection = i1327[8]
  i1326.maxTranslationSpeed = i1327[9]
  i1326.maxRotationSpeed = i1327[10]
  i1326.baumgarteScale = i1327[11]
  i1326.baumgarteTOIScale = i1327[12]
  i1326.timeToSleep = i1327[13]
  i1326.linearSleepTolerance = i1327[14]
  i1326.angularSleepTolerance = i1327[15]
  i1326.defaultContactOffset = i1327[16]
  i1326.autoSimulation = !!i1327[17]
  i1326.queriesHitTriggers = !!i1327[18]
  i1326.queriesStartInColliders = !!i1327[19]
  i1326.callbacksOnDisable = !!i1327[20]
  i1326.reuseCollisionCallbacks = !!i1327[21]
  i1326.autoSyncTransforms = !!i1327[22]
  var i1329 = i1327[23]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1329[i + 0]) );
  }
  i1326.collisionMatrix = i1328
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1333 = data
  i1332.enabled = !!i1333[0]
  i1332.layerId = i1333[1]
  i1332.otherLayerId = i1333[2]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1335 = data
  var i1337 = i1335[0]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1337[i + 0]) );
  }
  i1334.qualityLevels = i1336
  var i1339 = i1335[1]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( i1339[i + 0] );
  }
  i1334.names = i1338
  i1334.shadows = i1335[2]
  i1334.anisotropicFiltering = i1335[3]
  i1334.antiAliasing = i1335[4]
  i1334.lodBias = i1335[5]
  i1334.shadowCascades = i1335[6]
  i1334.shadowDistance = i1335[7]
  i1334.shadowmaskMode = i1335[8]
  i1334.shadowProjection = i1335[9]
  i1334.shadowResolution = i1335[10]
  i1334.softParticles = !!i1335[11]
  i1334.softVegetation = !!i1335[12]
  i1334.activeColorSpace = i1335[13]
  i1334.desiredColorSpace = i1335[14]
  i1334.masterTextureLimit = i1335[15]
  i1334.maxQueuedFrames = i1335[16]
  i1334.particleRaycastBudget = i1335[17]
  i1334.pixelLightCount = i1335[18]
  i1334.realtimeReflectionProbes = !!i1335[19]
  i1334.shadowCascade2Split = i1335[20]
  i1334.shadowCascade4Split = new pc.Vec3( i1335[21], i1335[22], i1335[23] )
  i1334.streamingMipmapsActive = !!i1335[24]
  i1334.vSyncCount = i1335[25]
  i1334.asyncUploadBufferSize = i1335[26]
  i1334.asyncUploadTimeSlice = i1335[27]
  i1334.billboardsFaceCameraPosition = !!i1335[28]
  i1334.shadowNearPlaneOffset = i1335[29]
  i1334.streamingMipmapsMemoryBudget = i1335[30]
  i1334.maximumLODLevel = i1335[31]
  i1334.streamingMipmapsAddAllCameras = !!i1335[32]
  i1334.streamingMipmapsMaxLevelReduction = i1335[33]
  i1334.streamingMipmapsRenderersPerFrame = i1335[34]
  i1334.resolutionScalingFixedDPIFactor = i1335[35]
  i1334.streamingMipmapsMaxFileIORequests = i1335[36]
  i1334.currentQualityLevel = i1335[37]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1345 = data
  i1344.weight = i1345[0]
  i1344.vertices = i1345[1]
  i1344.normals = i1345[2]
  i1344.tangents = i1345[3]
  return i1344
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1347 = data
  i1346.xPlacement = i1347[0]
  i1346.yPlacement = i1347[1]
  i1346.xAdvance = i1347[2]
  i1346.yAdvance = i1347[3]
  return i1346
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[33],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[4],"84":[4],"85":[4],"86":[4],"87":[4],"88":[4],"89":[4],"90":[4],"91":[4],"92":[4],"93":[4],"94":[4],"95":[4],"96":[33],"97":[19],"98":[99],"100":[99],"50":[42],"35":[33],"101":[102],"103":[5],"104":[102],"105":[42],"106":[42],"52":[50],"56":[53,42],"107":[42],"51":[50],"108":[42],"109":[42],"110":[42],"111":[42],"112":[42],"113":[42],"114":[42],"115":[42],"116":[42],"117":[53,42],"118":[42],"119":[42],"120":[42],"55":[42],"121":[53,42],"122":[42],"123":[46],"124":[46],"47":[46],"125":[46],"126":[33],"127":[33],"128":[129],"130":[33],"131":[132],"133":[42],"134":[53,42],"15":[19],"135":[53,42],"136":[29,19],"137":[19],"138":[19,17],"139":[76],"140":[4],"22":[132],"141":[23],"142":[42],"143":[19,42],"41":[42,53],"144":[42],"145":[53,42],"146":[19],"147":[53,42],"148":[42],"149":[102]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","CircleMazeLevelController","UnityEngine.Rigidbody2D","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.EdgeCollider2D","Lava","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.CircleCollider2D","Main","Spine.Unity.SkeletonAnimation","UnityEngine.BoxCollider2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","WereWolf","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityBone","UnityEngine.PointEffector2D","Hand","Pulse","UnityEngine.Texture2D","CameraAnchor","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.PhysicsMaterial2D","UnityEngine.AudioSource","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","CameraFollower","GameManager","DeviceOrientationDetection","ElementsOrientationScale","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.RectTransform","SoundManager","InputManagerLevelCircleMaze","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UIManager","EndGamePopup","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","IQSlider","UnityEngine.UI.Button","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.41f1";

Deserializers.productName = "Base_Playable";

Deserializers.lunaInitializationTime = "12/26/2024 09:53:28";

Deserializers.lunaDaysRunning = "54.9";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "DetectivePin_Playable_Lv52_1401";

Deserializers.lunaAppID = "25626";

Deserializers.projectId = "a1c17f56d03c7f14b951814cb9530e84";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1778";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5532";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

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

Deserializers.buildID = "51cda0d9-7023-45c2-92d3-5695ec4d63f3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

