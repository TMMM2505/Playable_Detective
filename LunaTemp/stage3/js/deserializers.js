var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointSpring' )
  var i677 = data
  i676.spring = i677[0]
  i676.damper = i677[1]
  i676.targetPosition = i677[2]
  return i676
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointMotor' )
  var i679 = data
  i678.m_TargetVelocity = i679[0]
  i678.m_Force = i679[1]
  i678.m_FreeSpin = i679[2]
  return i678
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointLimits' )
  var i681 = data
  i680.m_Min = i681[0]
  i680.m_Max = i681[1]
  i680.m_Bounciness = i681[2]
  i680.m_BounceMinVelocity = i681[3]
  i680.m_ContactDistance = i681[4]
  i680.minBounce = i681[5]
  i680.maxBounce = i681[6]
  return i680
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointDrive' )
  var i683 = data
  i682.m_PositionSpring = i683[0]
  i682.m_PositionDamper = i683[1]
  i682.m_MaximumForce = i683[2]
  i682.m_UseAcceleration = i683[3]
  return i682
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i685 = data
  i684.m_Spring = i685[0]
  i684.m_Damper = i685[1]
  return i684
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i687 = data
  i686.m_Limit = i687[0]
  i686.m_Bounciness = i687[1]
  i686.m_ContactDistance = i687[2]
  return i686
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i689 = data
  i688.m_ExtremumSlip = i689[0]
  i688.m_ExtremumValue = i689[1]
  i688.m_AsymptoteSlip = i689[2]
  i688.m_AsymptoteValue = i689[3]
  i688.m_Stiffness = i689[4]
  return i688
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i691 = data
  i690.m_LowerAngle = i691[0]
  i690.m_UpperAngle = i691[1]
  return i690
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i693 = data
  i692.m_MotorSpeed = i693[0]
  i692.m_MaximumMotorTorque = i693[1]
  return i692
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i695 = data
  i694.m_DampingRatio = i695[0]
  i694.m_Frequency = i695[1]
  i694.m_Angle = i695[2]
  return i694
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i697 = data
  i696.m_LowerTranslation = i697[0]
  i696.m_UpperTranslation = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i699 = data
  i698.position = new pc.Vec3( i699[0], i699[1], i699[2] )
  i698.scale = new pc.Vec3( i699[3], i699[4], i699[5] )
  i698.rotation = new pc.Quat(i699[6], i699[7], i699[8], i699[9])
  return i698
}

Deserializers["Level"] = function (request, data, root) {
  var i700 = root || request.c( 'Level' )
  var i701 = data
  var i703 = i701[0]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('Pin')))
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 1, i702, '')
  }
  i700.pins = i702
  var i705 = i701[1]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('Pin')))
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 1, i704, '')
  }
  i700.pinsEndCard = i704
  request.r(i701[2], i701[3], 0, i700, 'hand')
  request.r(i701[4], i701[5], 0, i700, 'cameraElement')
  request.r(i701[6], i701[7], 0, i700, 'winPositionCamera')
  request.r(i701[8], i701[9], 0, i700, 'main')
  request.r(i701[10], i701[11], 0, i700, 'cat')
  request.r(i701[12], i701[13], 0, i700, 'frame')
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i709 = data
  i708.enabled = !!i709[0]
  request.r(i709[1], i709[2], 0, i708, 'sharedMaterial')
  var i711 = i709[3]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i708.sharedMaterials = i710
  i708.receiveShadows = !!i709[4]
  i708.shadowCastingMode = i709[5]
  i708.sortingLayerID = i709[6]
  i708.sortingOrder = i709[7]
  i708.lightmapIndex = i709[8]
  i708.lightmapSceneIndex = i709[9]
  i708.lightmapScaleOffset = new pc.Vec4( i709[10], i709[11], i709[12], i709[13] )
  i708.lightProbeUsage = i709[14]
  i708.reflectionProbeUsage = i709[15]
  i708.color = new pc.Color(i709[16], i709[17], i709[18], i709[19])
  request.r(i709[20], i709[21], 0, i708, 'sprite')
  i708.flipX = !!i709[22]
  i708.flipY = !!i709[23]
  i708.drawMode = i709[24]
  i708.size = new pc.Vec2( i709[25], i709[26] )
  i708.tileMode = i709[27]
  i708.adaptiveModeThreshold = i709[28]
  i708.maskInteraction = i709[29]
  i708.spriteSortPoint = i709[30]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i715 = data
  i714.usedByComposite = !!i715[0]
  i714.autoTiling = !!i715[1]
  i714.size = new pc.Vec2( i715[2], i715[3] )
  i714.edgeRadius = i715[4]
  i714.enabled = !!i715[5]
  i714.isTrigger = !!i715[6]
  i714.usedByEffector = !!i715[7]
  i714.density = i715[8]
  i714.offset = new pc.Vec2( i715[9], i715[10] )
  request.r(i715[11], i715[12], 0, i714, 'material')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i717 = data
  i716.enabled = !!i717[0]
  i716.isTrigger = !!i717[1]
  i716.usedByEffector = !!i717[2]
  i716.density = i717[3]
  i716.offset = new pc.Vec2( i717[4], i717[5] )
  request.r(i717[6], i717[7], 0, i716, 'material')
  i716.edgeRadius = i717[8]
  var i719 = i717[9]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
    i718.push( new pc.Vec2( i719[i + 0], i719[i + 1] ) );
  }
  i716.points = i718
  i716.useAdjacentStartPoint = !!i717[10]
  i716.adjacentStartPoint = new pc.Vec2( i717[11], i717[12] )
  i716.useAdjacentEndPoint = !!i717[13]
  i716.adjacentEndPoint = new pc.Vec2( i717[14], i717[15] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i723 = data
  i722.bodyType = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'material')
  i722.simulated = !!i723[3]
  i722.useAutoMass = !!i723[4]
  i722.mass = i723[5]
  i722.drag = i723[6]
  i722.angularDrag = i723[7]
  i722.gravityScale = i723[8]
  i722.collisionDetectionMode = i723[9]
  i722.sleepMode = i723[10]
  i722.constraints = i723[11]
  return i722
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i724 = root || request.c( 'CameraAnchor' )
  var i725 = data
  i724.anchorType = i725[0]
  i724.anchorOffset = new pc.Vec3( i725[1], i725[2], i725[3] )
  return i724
}

Deserializers["Pin"] = function (request, data, root) {
  var i726 = root || request.c( 'Pin' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'head')
  request.r(i727[2], i727[3], 0, i726, 'end')
  request.r(i727[4], i727[5], 0, i726, 'center')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i729 = data
  i728.name = i729[0]
  i728.tagId = i729[1]
  i728.enabled = !!i729[2]
  i728.isStatic = !!i729[3]
  i728.layer = i729[4]
  return i728
}

Deserializers["Hand"] = function (request, data, root) {
  var i730 = root || request.c( 'Hand' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'anim')
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'animatorController')
  request.r(i733[2], i733[3], 0, i732, 'avatar')
  i732.updateMode = i733[4]
  i732.hasTransformHierarchy = !!i733[5]
  i732.applyRootMotion = !!i733[6]
  var i735 = i733[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.humanBones = i734
  i732.enabled = !!i733[8]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i739 = data
  i738.radius = i739[0]
  i738.enabled = !!i739[1]
  i738.isTrigger = !!i739[2]
  i738.usedByEffector = !!i739[3]
  i738.density = i739[4]
  i738.offset = new pc.Vec2( i739[5], i739[6] )
  request.r(i739[7], i739[8], 0, i738, 'material')
  return i738
}

Deserializers["CameraElement"] = function (request, data, root) {
  var i740 = root || request.c( 'CameraElement' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'renderer')
  request.r(i741[2], i741[3], 0, i740, 'vfxSteam')
  request.r(i741[4], i741[5], 0, i740, 'vfxBlink')
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i743 = data
  i742.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i743[0], i742.main)
  i742.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i743[1], i742.colorBySpeed)
  i742.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i743[2], i742.colorOverLifetime)
  i742.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i743[3], i742.emission)
  i742.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i743[4], i742.rotationBySpeed)
  i742.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i743[5], i742.rotationOverLifetime)
  i742.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i743[6], i742.shape)
  i742.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i743[7], i742.sizeBySpeed)
  i742.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i743[8], i742.sizeOverLifetime)
  i742.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i743[9], i742.textureSheetAnimation)
  i742.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i743[10], i742.velocityOverLifetime)
  i742.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i743[11], i742.noise)
  i742.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i743[12], i742.inheritVelocity)
  i742.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i743[13], i742.forceOverLifetime)
  i742.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i743[14], i742.limitVelocityOverLifetime)
  i742.useAutoRandomSeed = !!i743[15]
  i742.randomSeed = i743[16]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemMain()
  var i745 = data
  i744.duration = i745[0]
  i744.loop = !!i745[1]
  i744.prewarm = !!i745[2]
  i744.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.startDelay)
  i744.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[4], i744.startLifetime)
  i744.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[5], i744.startSpeed)
  i744.startSize3D = !!i745[6]
  i744.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[7], i744.startSizeX)
  i744.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[8], i744.startSizeY)
  i744.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[9], i744.startSizeZ)
  i744.startRotation3D = !!i745[10]
  i744.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[11], i744.startRotationX)
  i744.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[12], i744.startRotationY)
  i744.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[13], i744.startRotationZ)
  i744.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i745[14], i744.startColor)
  i744.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[15], i744.gravityModifier)
  i744.simulationSpace = i745[16]
  request.r(i745[17], i745[18], 0, i744, 'customSimulationSpace')
  i744.simulationSpeed = i745[19]
  i744.useUnscaledTime = !!i745[20]
  i744.scalingMode = i745[21]
  i744.playOnAwake = !!i745[22]
  i744.maxParticles = i745[23]
  i744.emitterVelocityMode = i745[24]
  i744.stopAction = i745[25]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i746 = root || new pc.MinMaxCurve()
  var i747 = data
  i746.mode = i747[0]
  i746.curveMin = new pc.AnimationCurve( { keys_flow: i747[1] } )
  i746.curveMax = new pc.AnimationCurve( { keys_flow: i747[2] } )
  i746.curveMultiplier = i747[3]
  i746.constantMin = i747[4]
  i746.constantMax = i747[5]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i748 = root || new pc.MinMaxGradient()
  var i749 = data
  i748.mode = i749[0]
  i748.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i749[1], i748.gradientMin)
  i748.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i749[2], i748.gradientMax)
  i748.colorMin = new pc.Color(i749[3], i749[4], i749[5], i749[6])
  i748.colorMax = new pc.Color(i749[7], i749[8], i749[9], i749[10])
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i751 = data
  i750.mode = i751[0]
  var i753 = i751[1]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i753[i + 0]) );
  }
  i750.colorKeys = i752
  var i755 = i751[2]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i755[i + 0]) );
  }
  i750.alphaKeys = i754
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemColorBySpeed()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[1], i756.color)
  i756.range = new pc.Vec2( i757[2], i757[3] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i761 = data
  i760.color = new pc.Color(i761[0], i761[1], i761[2], i761[3])
  i760.time = i761[4]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i765 = data
  i764.alpha = i765[0]
  i764.time = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemColorOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i767[1], i766.color)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemEmitter()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.rateOverTime)
  i768.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.rateOverDistance)
  var i771 = i769[3]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i771[i + 0]) );
  }
  i768.bursts = i770
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemBurst()
  var i775 = data
  i774.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[0], i774.count)
  i774.cycleCount = i775[1]
  i774.minCount = i775[2]
  i774.maxCount = i775[3]
  i774.repeatInterval = i775[4]
  i774.time = i775[5]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemRotationBySpeed()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.x)
  i776.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.y)
  i776.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[3], i776.z)
  i776.separateAxes = !!i777[4]
  i776.range = new pc.Vec2( i777[5], i777[6] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemRotationOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.separateAxes = !!i779[4]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemShape()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.shapeType = i781[1]
  i780.randomDirectionAmount = i781[2]
  i780.sphericalDirectionAmount = i781[3]
  i780.randomPositionAmount = i781[4]
  i780.alignToDirection = !!i781[5]
  i780.radius = i781[6]
  i780.radiusMode = i781[7]
  i780.radiusSpread = i781[8]
  i780.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[9], i780.radiusSpeed)
  i780.radiusThickness = i781[10]
  i780.angle = i781[11]
  i780.length = i781[12]
  i780.boxThickness = new pc.Vec3( i781[13], i781[14], i781[15] )
  i780.meshShapeType = i781[16]
  request.r(i781[17], i781[18], 0, i780, 'mesh')
  request.r(i781[19], i781[20], 0, i780, 'meshRenderer')
  request.r(i781[21], i781[22], 0, i780, 'skinnedMeshRenderer')
  i780.useMeshMaterialIndex = !!i781[23]
  i780.meshMaterialIndex = i781[24]
  i780.useMeshColors = !!i781[25]
  i780.normalOffset = i781[26]
  i780.arc = i781[27]
  i780.arcMode = i781[28]
  i780.arcSpread = i781[29]
  i780.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[30], i780.arcSpeed)
  i780.donutRadius = i781[31]
  i780.position = new pc.Vec3( i781[32], i781[33], i781[34] )
  i780.rotation = new pc.Vec3( i781[35], i781[36], i781[37] )
  i780.scale = new pc.Vec3( i781[38], i781[39], i781[40] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemSizeBySpeed()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.x)
  i782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.y)
  i782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.z)
  i782.separateAxes = !!i783[4]
  i782.range = new pc.Vec2( i783[5], i783[6] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemSizeOverLifetime()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.x)
  i784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.y)
  i784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.z)
  i784.separateAxes = !!i785[4]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.mode = i787[1]
  i786.animation = i787[2]
  i786.numTilesX = i787[3]
  i786.numTilesY = i787[4]
  i786.useRandomRow = !!i787[5]
  i786.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[6], i786.frameOverTime)
  i786.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[7], i786.startFrame)
  i786.cycleCount = i787[8]
  i786.rowIndex = i787[9]
  i786.flipU = i787[10]
  i786.flipV = i787[11]
  i786.spriteCount = i787[12]
  var i789 = i787[13]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.sprites = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[4], i792.radial)
  i792.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[5], i792.speedModifier)
  i792.space = i793[6]
  i792.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[7], i792.orbitalX)
  i792.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[8], i792.orbitalY)
  i792.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.orbitalZ)
  i792.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[10], i792.orbitalOffsetX)
  i792.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[11], i792.orbitalOffsetY)
  i792.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[12], i792.orbitalOffsetZ)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemNoise()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.separateAxes = !!i795[1]
  i794.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.strengthX)
  i794.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.strengthY)
  i794.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[4], i794.strengthZ)
  i794.frequency = i795[5]
  i794.damping = !!i795[6]
  i794.octaveCount = i795[7]
  i794.octaveMultiplier = i795[8]
  i794.octaveScale = i795[9]
  i794.quality = i795[10]
  i794.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[11], i794.scrollSpeed)
  i794.scrollSpeedMultiplier = i795[12]
  i794.remapEnabled = !!i795[13]
  i794.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[14], i794.remapX)
  i794.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[15], i794.remapY)
  i794.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[16], i794.remapZ)
  i794.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[17], i794.positionAmount)
  i794.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[18], i794.rotationAmount)
  i794.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[19], i794.sizeAmount)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemInheritVelocity()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.mode = i797[1]
  i796.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.curve)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemForceOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.space = i799[4]
  i798.randomized = !!i799[5]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.limit)
  i800.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.limitX)
  i800.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.limitY)
  i800.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[4], i800.limitZ)
  i800.dampen = i801[5]
  i800.separateAxes = !!i801[6]
  i800.space = i801[7]
  i800.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[8], i800.drag)
  i800.multiplyDragByParticleSize = !!i801[9]
  i800.multiplyDragByParticleVelocity = !!i801[10]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i803 = data
  i802.enabled = !!i803[0]
  request.r(i803[1], i803[2], 0, i802, 'sharedMaterial')
  var i805 = i803[3]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.sharedMaterials = i804
  i802.receiveShadows = !!i803[4]
  i802.shadowCastingMode = i803[5]
  i802.sortingLayerID = i803[6]
  i802.sortingOrder = i803[7]
  i802.lightmapIndex = i803[8]
  i802.lightmapSceneIndex = i803[9]
  i802.lightmapScaleOffset = new pc.Vec4( i803[10], i803[11], i803[12], i803[13] )
  i802.lightProbeUsage = i803[14]
  i802.reflectionProbeUsage = i803[15]
  request.r(i803[16], i803[17], 0, i802, 'mesh')
  i802.meshCount = i803[18]
  i802.activeVertexStreamsCount = i803[19]
  i802.alignment = i803[20]
  i802.renderMode = i803[21]
  i802.sortMode = i803[22]
  i802.lengthScale = i803[23]
  i802.velocityScale = i803[24]
  i802.cameraVelocityScale = i803[25]
  i802.normalDirection = i803[26]
  i802.sortingFudge = i803[27]
  i802.minParticleSize = i803[28]
  i802.maxParticleSize = i803[29]
  i802.pivot = new pc.Vec3( i803[30], i803[31], i803[32] )
  request.r(i803[33], i803[34], 0, i802, 'trailMaterial')
  return i802
}

Deserializers["Liquid"] = function (request, data, root) {
  var i806 = root || request.c( 'Liquid' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'liquid')
  request.r(i807[2], i807[3], 0, i806, 'rock')
  request.r(i807[4], i807[5], 0, i806, 'steamVFX')
  return i806
}

Deserializers["Cat"] = function (request, data, root) {
  var i808 = root || request.c( 'Cat' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'anim')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'sharedMesh')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'additionalVertexStreams')
  i812.enabled = !!i813[2]
  request.r(i813[3], i813[4], 0, i812, 'sharedMaterial')
  var i815 = i813[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.sharedMaterials = i814
  i812.receiveShadows = !!i813[6]
  i812.shadowCastingMode = i813[7]
  i812.sortingLayerID = i813[8]
  i812.sortingOrder = i813[9]
  i812.lightmapIndex = i813[10]
  i812.lightmapSceneIndex = i813[11]
  i812.lightmapScaleOffset = new pc.Vec4( i813[12], i813[13], i813[14], i813[15] )
  i812.lightProbeUsage = i813[16]
  i812.reflectionProbeUsage = i813[17]
  return i812
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i816 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i817 = data
  i816.loop = !!i817[0]
  i816.timeScale = i817[1]
  request.r(i817[2], i817[3], 0, i816, 'skeletonDataAsset')
  i816.initialSkinName = i817[4]
  i816.fixPrefabOverrideViaMeshFilter = i817[5]
  i816.initialFlipX = !!i817[6]
  i816.initialFlipY = !!i817[7]
  i816.updateWhenInvisible = i817[8]
  i816.zSpacing = i817[9]
  i816.useClipping = !!i817[10]
  i816.immutableTriangles = !!i817[11]
  i816.pmaVertexColors = !!i817[12]
  i816.clearStateOnDisable = !!i817[13]
  i816.tintBlack = !!i817[14]
  i816.singleSubmesh = !!i817[15]
  i816.fixDrawOrder = !!i817[16]
  i816.addNormals = !!i817[17]
  i816.calculateTangents = !!i817[18]
  i816.maskInteraction = i817[19]
  i816.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i817[20], i816.maskMaterials)
  i816.disableRenderingOnOverride = !!i817[21]
  i816.updateTiming = i817[22]
  i816.unscaledTime = !!i817[23]
  i816._animationName = i817[24]
  var i819 = i817[25]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i816.separatorSlotNames = i818
  return i816
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i820 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.materialsMaskDisabled = i822
  var i825 = i821[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i820.materialsInsideMask = i824
  var i827 = i821[2]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i820.materialsOutsideMask = i826
  return i820
}

Deserializers["Anim"] = function (request, data, root) {
  var i830 = root || request.c( 'Anim' )
  var i831 = data
  var i833 = i831[0]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(i833[i + 0]);
  }
  i830.tracks = i832
  request.r(i831[1], i831[2], 0, i830, 'anim')
  return i830
}

Deserializers["Rat"] = function (request, data, root) {
  var i836 = root || request.c( 'Rat' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'anim')
  return i836
}

Deserializers["Main"] = function (request, data, root) {
  var i838 = root || request.c( 'Main' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'anim')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i840 = root || new pc.UnityMaterial()
  var i841 = data
  i840.name = i841[0]
  request.r(i841[1], i841[2], 0, i840, 'shader')
  i840.renderQueue = i841[3]
  i840.enableInstancing = !!i841[4]
  var i843 = i841[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i843[i + 0]) );
  }
  i840.floatParameters = i842
  var i845 = i841[6]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i845[i + 0]) );
  }
  i840.colorParameters = i844
  var i847 = i841[7]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i847[i + 0]) );
  }
  i840.vectorParameters = i846
  var i849 = i841[8]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i849[i + 0]) );
  }
  i840.textureParameters = i848
  var i851 = i841[9]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i851[i + 0]) );
  }
  i840.materialFlags = i850
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i855 = data
  i854.name = i855[0]
  i854.value = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i859 = data
  i858.name = i859[0]
  i858.value = new pc.Color(i859[1], i859[2], i859[3], i859[4])
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i863 = data
  i862.name = i863[0]
  i862.value = new pc.Vec4( i863[1], i863[2], i863[3], i863[4] )
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i867 = data
  i866.name = i867[0]
  request.r(i867[1], i867[2], 0, i866, 'value')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i871 = data
  i870.name = i871[0]
  i870.enabled = !!i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i873 = data
  i872.name = i873[0]
  i872.width = i873[1]
  i872.height = i873[2]
  i872.mipmapCount = i873[3]
  i872.anisoLevel = i873[4]
  i872.filterMode = i873[5]
  i872.hdr = !!i873[6]
  i872.format = i873[7]
  i872.wrapMode = i873[8]
  i872.alphaIsTransparency = !!i873[9]
  i872.alphaSource = i873[10]
  i872.graphicsFormat = i873[11]
  i872.sRGBTexture = !!i873[12]
  i872.desiredColorSpace = i873[13]
  i872.wrapU = i873[14]
  i872.wrapV = i873[15]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i875 = data
  i874.name = i875[0]
  i874.halfPrecision = !!i875[1]
  i874.useUInt32IndexFormat = !!i875[2]
  i874.vertexCount = i875[3]
  i874.aabb = i875[4]
  var i877 = i875[5]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( !!i877[i + 0] );
  }
  i874.streams = i876
  i874.vertices = i875[6]
  var i879 = i875[7]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i879[i + 0]) );
  }
  i874.subMeshes = i878
  var i881 = i875[8]
  var i880 = []
  for(var i = 0; i < i881.length; i += 16) {
    i880.push( new pc.Mat4().setData(i881[i + 0], i881[i + 1], i881[i + 2], i881[i + 3],  i881[i + 4], i881[i + 5], i881[i + 6], i881[i + 7],  i881[i + 8], i881[i + 9], i881[i + 10], i881[i + 11],  i881[i + 12], i881[i + 13], i881[i + 14], i881[i + 15]) );
  }
  i874.bindposes = i880
  var i883 = i875[9]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i883[i + 0]) );
  }
  i874.blendShapes = i882
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i889 = data
  i888.triangles = i889[0]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i895 = data
  i894.name = i895[0]
  var i897 = i895[1]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i897[i + 0]) );
  }
  i894.frames = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i899 = data
  i898.name = i899[0]
  i898.index = i899[1]
  i898.startup = !!i899[2]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i901 = data
  i900.enabled = !!i901[0]
  i900.aspect = i901[1]
  i900.orthographic = !!i901[2]
  i900.orthographicSize = i901[3]
  i900.backgroundColor = new pc.Color(i901[4], i901[5], i901[6], i901[7])
  i900.nearClipPlane = i901[8]
  i900.farClipPlane = i901[9]
  i900.fieldOfView = i901[10]
  i900.depth = i901[11]
  i900.clearFlags = i901[12]
  i900.cullingMask = i901[13]
  i900.rect = i901[14]
  request.r(i901[15], i901[16], 0, i900, 'targetTexture')
  i900.usePhysicalProperties = !!i901[17]
  i900.focalLength = i901[18]
  i900.sensorSize = new pc.Vec2( i901[19], i901[20] )
  i900.lensShift = new pc.Vec2( i901[21], i901[22] )
  i900.gateFit = i901[23]
  i900.commandBufferCount = i901[24]
  i900.cameraType = i901[25]
  return i900
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i902 = root || request.c( 'ViewportHandler' )
  var i903 = data
  i902.wireColor = new pc.Color(i903[0], i903[1], i903[2], i903[3])
  i902.UnitsSize = i903[4]
  i902.constraint = i903[5]
  request.r(i903[6], i903[7], 0, i902, 'camera')
  return i902
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i904 = root || request.c( 'CameraFollower' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'viewportHandler')
  return i904
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i906 = root || request.c( 'LevelManager' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'levelPrefab')
  i906.isEndCard = !!i907[2]
  return i906
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i908 = root || request.c( 'SoundManager' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Sound', i911[i + 0]) );
  }
  i908.Sounds = i910
  var i913 = i909[1]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 1, i912, '')
  }
  i908.audioSources = i912
  return i908
}

Deserializers["Sound"] = function (request, data, root) {
  var i916 = root || request.c( 'Sound' )
  var i917 = data
  i916.name = i917[0]
  request.r(i917[1], i917[2], 0, i916, 'clip')
  return i916
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i920 = root || request.c( 'InputReceiver' )
  var i921 = data
  return i920
}

Deserializers["UIManager"] = function (request, data, root) {
  var i922 = root || request.c( 'UIManager' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'uicLose')
  request.r(i923[2], i923[3], 0, i922, 'uicWin')
  request.r(i923[4], i923[5], 0, i922, 'animTakePhoto')
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i925 = data
  i924.pivot = new pc.Vec2( i925[0], i925[1] )
  i924.anchorMin = new pc.Vec2( i925[2], i925[3] )
  i924.anchorMax = new pc.Vec2( i925[4], i925[5] )
  i924.sizeDelta = new pc.Vec2( i925[6], i925[7] )
  i924.anchoredPosition3D = new pc.Vec3( i925[8], i925[9], i925[10] )
  i924.rotation = new pc.Quat(i925[11], i925[12], i925[13], i925[14])
  i924.scale = new pc.Vec3( i925[15], i925[16], i925[17] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i927 = data
  i926.enabled = !!i927[0]
  i926.planeDistance = i927[1]
  i926.referencePixelsPerUnit = i927[2]
  i926.isFallbackOverlay = !!i927[3]
  i926.renderMode = i927[4]
  i926.renderOrder = i927[5]
  i926.sortingLayerName = i927[6]
  i926.sortingOrder = i927[7]
  i926.scaleFactor = i927[8]
  request.r(i927[9], i927[10], 0, i926, 'worldCamera')
  i926.overrideSorting = !!i927[11]
  i926.pixelPerfect = !!i927[12]
  i926.targetDisplay = i927[13]
  i926.overridePixelPerfect = !!i927[14]
  return i926
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i929 = data
  i928.m_UiScaleMode = i929[0]
  i928.m_ReferencePixelsPerUnit = i929[1]
  i928.m_ScaleFactor = i929[2]
  i928.m_ReferenceResolution = new pc.Vec2( i929[3], i929[4] )
  i928.m_ScreenMatchMode = i929[5]
  i928.m_MatchWidthOrHeight = i929[6]
  i928.m_PhysicalUnit = i929[7]
  i928.m_FallbackScreenDPI = i929[8]
  i928.m_DefaultSpriteDPI = i929[9]
  i928.m_DynamicPixelsPerUnit = i929[10]
  i928.m_PresetInfoIsWorld = !!i929[11]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i931 = data
  i930.cullTransparentMesh = !!i931[0]
  return i930
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.Image' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'm_Sprite')
  i932.m_Type = i933[2]
  i932.m_PreserveAspect = !!i933[3]
  i932.m_FillCenter = !!i933[4]
  i932.m_FillMethod = i933[5]
  i932.m_FillAmount = i933[6]
  i932.m_FillClockwise = !!i933[7]
  i932.m_FillOrigin = i933[8]
  i932.m_UseSpriteMesh = !!i933[9]
  i932.m_PixelsPerUnitMultiplier = i933[10]
  request.r(i933[11], i933[12], 0, i932, 'm_Material')
  i932.m_Maskable = !!i933[13]
  i932.m_Color = new pc.Color(i933[14], i933[15], i933[16], i933[17])
  i932.m_RaycastTarget = !!i933[18]
  i932.m_RaycastPadding = new pc.Vec4( i933[19], i933[20], i933[21], i933[22] )
  return i932
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i935 = data
  i934.m_IgnoreReversedGraphics = !!i935[0]
  i934.m_BlockingObjects = i935[1]
  i934.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i935[2] )
  return i934
}

Deserializers["UICLose"] = function (request, data, root) {
  var i936 = root || request.c( 'UICLose' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'text')
  return i936
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.Button' )
  var i939 = data
  i938.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i939[0], i938.m_OnClick)
  i938.m_Navigation = request.d('UnityEngine.UI.Navigation', i939[1], i938.m_Navigation)
  i938.m_Transition = i939[2]
  i938.m_Colors = request.d('UnityEngine.UI.ColorBlock', i939[3], i938.m_Colors)
  i938.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i939[4], i938.m_SpriteState)
  i938.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i939[5], i938.m_AnimationTriggers)
  i938.m_Interactable = !!i939[6]
  request.r(i939[7], i939[8], 0, i938, 'm_TargetGraphic')
  return i938
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i941 = data
  i940.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i941[0], i940.m_PersistentCalls)
  return i940
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('UnityEngine.Events.PersistentCall', i945[i + 0]));
  }
  i942.m_Calls = i944
  return i942
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_Target')
  i948.m_TargetAssemblyTypeName = i949[2]
  i948.m_MethodName = i949[3]
  i948.m_Mode = i949[4]
  i948.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i949[5], i948.m_Arguments)
  i948.m_CallState = i949[6]
  return i948
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'm_ObjectArgument')
  i950.m_ObjectArgumentAssemblyTypeName = i951[2]
  i950.m_IntArgument = i951[3]
  i950.m_FloatArgument = i951[4]
  i950.m_StringArgument = i951[5]
  i950.m_BoolArgument = !!i951[6]
  return i950
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i953 = data
  i952.m_Mode = i953[0]
  i952.m_WrapAround = !!i953[1]
  request.r(i953[2], i953[3], 0, i952, 'm_SelectOnUp')
  request.r(i953[4], i953[5], 0, i952, 'm_SelectOnDown')
  request.r(i953[6], i953[7], 0, i952, 'm_SelectOnLeft')
  request.r(i953[8], i953[9], 0, i952, 'm_SelectOnRight')
  return i952
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i955 = data
  i954.m_NormalColor = new pc.Color(i955[0], i955[1], i955[2], i955[3])
  i954.m_HighlightedColor = new pc.Color(i955[4], i955[5], i955[6], i955[7])
  i954.m_PressedColor = new pc.Color(i955[8], i955[9], i955[10], i955[11])
  i954.m_SelectedColor = new pc.Color(i955[12], i955[13], i955[14], i955[15])
  i954.m_DisabledColor = new pc.Color(i955[16], i955[17], i955[18], i955[19])
  i954.m_ColorMultiplier = i955[20]
  i954.m_FadeDuration = i955[21]
  return i954
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_HighlightedSprite')
  request.r(i957[2], i957[3], 0, i956, 'm_PressedSprite')
  request.r(i957[4], i957[5], 0, i956, 'm_SelectedSprite')
  request.r(i957[6], i957[7], 0, i956, 'm_DisabledSprite')
  return i956
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i959 = data
  i958.m_NormalTrigger = i959[0]
  i958.m_HighlightedTrigger = i959[1]
  i958.m_PressedTrigger = i959[2]
  i958.m_SelectedTrigger = i959[3]
  i958.m_DisabledTrigger = i959[4]
  return i958
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i961 = data
  i960.m_StartCorner = i961[0]
  i960.m_StartAxis = i961[1]
  i960.m_CellSize = new pc.Vec2( i961[2], i961[3] )
  i960.m_Spacing = new pc.Vec2( i961[4], i961[5] )
  i960.m_Constraint = i961[6]
  i960.m_ConstraintCount = i961[7]
  i960.m_Padding = UnityEngine.RectOffset.FromPaddings(i961[8], i961[9], i961[10], i961[11])
  i960.m_ChildAlignment = i961[12]
  return i960
}

Deserializers["ItemLetter"] = function (request, data, root) {
  var i962 = root || request.c( 'ItemLetter' )
  var i963 = data
  i962.duration = i963[0]
  i962.strength = i963[1]
  i962.vibrato = i963[2]
  return i962
}

Deserializers["UICWin"] = function (request, data, root) {
  var i964 = root || request.c( 'UICWin' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.items = i966
  return i964
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_FirstSelected')
  i968.m_sendNavigationEvents = !!i969[2]
  i968.m_DragThreshold = i969[3]
  return i968
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i971 = data
  i970.m_HorizontalAxis = i971[0]
  i970.m_VerticalAxis = i971[1]
  i970.m_SubmitButton = i971[2]
  i970.m_CancelButton = i971[3]
  i970.m_InputActionsPerSecond = i971[4]
  i970.m_RepeatDelay = i971[5]
  i970.m_ForceModuleActive = !!i971[6]
  i970.m_SendPointerHoverToParent = !!i971[7]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i973 = data
  i972.ambientIntensity = i973[0]
  i972.reflectionIntensity = i973[1]
  i972.ambientMode = i973[2]
  i972.ambientLight = new pc.Color(i973[3], i973[4], i973[5], i973[6])
  i972.ambientSkyColor = new pc.Color(i973[7], i973[8], i973[9], i973[10])
  i972.ambientGroundColor = new pc.Color(i973[11], i973[12], i973[13], i973[14])
  i972.ambientEquatorColor = new pc.Color(i973[15], i973[16], i973[17], i973[18])
  i972.fogColor = new pc.Color(i973[19], i973[20], i973[21], i973[22])
  i972.fogEndDistance = i973[23]
  i972.fogStartDistance = i973[24]
  i972.fogDensity = i973[25]
  i972.fog = !!i973[26]
  request.r(i973[27], i973[28], 0, i972, 'skybox')
  i972.fogMode = i973[29]
  var i975 = i973[30]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i975[i + 0]) );
  }
  i972.lightmaps = i974
  i972.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i973[31], i972.lightProbes)
  i972.lightmapsMode = i973[32]
  i972.mixedBakeMode = i973[33]
  i972.environmentLightingMode = i973[34]
  i972.ambientProbe = new pc.SphericalHarmonicsL2(i973[35])
  i972.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i973[36])
  i972.useReferenceAmbientProbe = !!i973[37]
  request.r(i973[38], i973[39], 0, i972, 'customReflection')
  request.r(i973[40], i973[41], 0, i972, 'defaultReflection')
  i972.defaultReflectionMode = i973[42]
  i972.defaultReflectionResolution = i973[43]
  i972.sunLightObjectId = i973[44]
  i972.pixelLightCount = i973[45]
  i972.defaultReflectionHDR = !!i973[46]
  i972.hasLightDataAsset = !!i973[47]
  i972.hasManualGenerate = !!i973[48]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'lightmapColor')
  request.r(i979[2], i979[3], 0, i978, 'lightmapDirection')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i980 = root || new UnityEngine.LightProbes()
  var i981 = data
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i989 = data
  i988.name = i989[0]
  i988.bounciness = i989[1]
  i988.friction = i989[2]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i991 = data
  var i993 = i991[0]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i993[i + 0]));
  }
  i990.ShaderCompilationErrors = i992
  i990.name = i991[1]
  i990.guid = i991[2]
  var i995 = i991[3]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i990.shaderDefinedKeywords = i994
  var i997 = i991[4]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i997[i + 0]) );
  }
  i990.passes = i996
  var i999 = i991[5]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i999[i + 0]) );
  }
  i990.usePasses = i998
  var i1001 = i991[6]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1001[i + 0]) );
  }
  i990.defaultParameterValues = i1000
  request.r(i991[7], i991[8], 0, i990, 'unityFallbackShader')
  i990.readDepth = !!i991[9]
  i990.isCreatedByShaderGraph = !!i991[10]
  i990.compiled = !!i991[11]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1005 = data
  i1004.shaderName = i1005[0]
  i1004.errorMessage = i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1008 = root || new pc.UnityShaderPass()
  var i1009 = data
  i1008.id = i1009[0]
  i1008.subShaderIndex = i1009[1]
  i1008.name = i1009[2]
  i1008.passType = i1009[3]
  i1008.grabPassTextureName = i1009[4]
  i1008.usePass = !!i1009[5]
  i1008.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[6], i1008.zTest)
  i1008.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[7], i1008.zWrite)
  i1008.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[8], i1008.culling)
  i1008.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1009[9], i1008.blending)
  i1008.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1009[10], i1008.alphaBlending)
  i1008.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[11], i1008.colorWriteMask)
  i1008.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[12], i1008.offsetUnits)
  i1008.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[13], i1008.offsetFactor)
  i1008.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[14], i1008.stencilRef)
  i1008.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[15], i1008.stencilReadMask)
  i1008.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1009[16], i1008.stencilWriteMask)
  i1008.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1009[17], i1008.stencilOp)
  i1008.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1009[18], i1008.stencilOpFront)
  i1008.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1009[19], i1008.stencilOpBack)
  var i1011 = i1009[20]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1011[i + 0]) );
  }
  i1008.tags = i1010
  var i1013 = i1009[21]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1008.passDefinedKeywords = i1012
  var i1015 = i1009[22]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1015[i + 0]) );
  }
  i1008.passDefinedKeywordGroups = i1014
  var i1017 = i1009[23]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1017[i + 0]) );
  }
  i1008.variants = i1016
  var i1019 = i1009[24]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1019[i + 0]) );
  }
  i1008.excludedVariants = i1018
  i1008.hasDepthReader = !!i1009[25]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1021 = data
  i1020.val = i1021[0]
  i1020.name = i1021[1]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1023 = data
  i1022.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[0], i1022.src)
  i1022.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[1], i1022.dst)
  i1022.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[2], i1022.op)
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1025 = data
  i1024.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[0], i1024.pass)
  i1024.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[1], i1024.fail)
  i1024.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[2], i1024.zFail)
  i1024.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[3], i1024.comp)
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1029 = data
  i1028.name = i1029[0]
  i1028.value = i1029[1]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1032.keywords = i1034
  i1032.hasDiscard = !!i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1039 = data
  i1038.passId = i1039[0]
  i1038.subShaderIndex = i1039[1]
  var i1041 = i1039[2]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1038.keywords = i1040
  i1038.vertexProgram = i1039[3]
  i1038.fragmentProgram = i1039[4]
  i1038.exportedForWebGl2 = !!i1039[5]
  i1038.readDepth = !!i1039[6]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'shader')
  i1044.pass = i1045[2]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.type = i1049[1]
  i1048.value = new pc.Vec4( i1049[2], i1049[3], i1049[4], i1049[5] )
  i1048.textureValue = i1049[6]
  i1048.shaderPropertyFlag = i1049[7]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1051 = data
  i1050.name = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'texture')
  i1050.aabb = i1051[3]
  i1050.vertices = i1051[4]
  i1050.triangles = i1051[5]
  i1050.textureRect = UnityEngine.Rect.MinMaxRect(i1051[6], i1051[7], i1051[8], i1051[9])
  i1050.packedRect = UnityEngine.Rect.MinMaxRect(i1051[10], i1051[11], i1051[12], i1051[13])
  i1050.border = new pc.Vec4( i1051[14], i1051[15], i1051[16], i1051[17] )
  i1050.transparency = i1051[18]
  i1050.bounds = i1051[19]
  i1050.pixelsPerUnit = i1051[20]
  i1050.textureWidth = i1051[21]
  i1050.textureHeight = i1051[22]
  i1050.nativeSize = new pc.Vec2( i1051[23], i1051[24] )
  i1050.pivot = new pc.Vec2( i1051[25], i1051[26] )
  i1050.textureRectOffset = new pc.Vec2( i1051[27], i1051[28] )
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1053 = data
  i1052.name = i1053[0]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.wrapMode = i1055[1]
  i1054.isLooping = !!i1055[2]
  i1054.length = i1055[3]
  var i1057 = i1055[4]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1057[i + 0]) );
  }
  i1054.curves = i1056
  var i1059 = i1055[5]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1059[i + 0]) );
  }
  i1054.events = i1058
  i1054.halfPrecision = !!i1055[6]
  i1054._frameRate = i1055[7]
  i1054.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1055[8], i1054.localBounds)
  i1054.hasMuscleCurves = !!i1055[9]
  var i1061 = i1055[10]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1054.clipMuscleConstant = i1060
  i1054.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1055[11], i1054.clipBindingConstant)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1065 = data
  i1064.path = i1065[0]
  i1064.hash = i1065[1]
  i1064.componentType = i1065[2]
  i1064.property = i1065[3]
  i1064.keys = i1065[4]
  var i1067 = i1065[5]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1067[i + 0]) );
  }
  i1064.objectReferenceKeys = i1066
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1071 = data
  i1070.time = i1071[0]
  request.r(i1071[1], i1071[2], 0, i1070, 'value')
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1075 = data
  i1074.functionName = i1075[0]
  i1074.floatParameter = i1075[1]
  i1074.intParameter = i1075[2]
  i1074.stringParameter = i1075[3]
  request.r(i1075[4], i1075[5], 0, i1074, 'objectReferenceParameter')
  i1074.time = i1075[6]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1077 = data
  i1076.center = new pc.Vec3( i1077[0], i1077[1], i1077[2] )
  i1076.extends = new pc.Vec3( i1077[3], i1077[4], i1077[5] )
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1080.genericBindings = i1082
  var i1085 = i1081[1]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( i1085[i + 0] );
  }
  i1080.pptrCurveMapping = i1084
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.ascent = i1087[1]
  i1086.originalLineHeight = i1087[2]
  i1086.fontSize = i1087[3]
  var i1089 = i1087[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1089[i + 0]) );
  }
  i1086.characterInfo = i1088
  request.r(i1087[5], i1087[6], 0, i1086, 'texture')
  i1086.originalFontSize = i1087[7]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1093 = data
  i1092.index = i1093[0]
  i1092.advance = i1093[1]
  i1092.bearing = i1093[2]
  i1092.glyphWidth = i1093[3]
  i1092.glyphHeight = i1093[4]
  i1092.minX = i1093[5]
  i1092.maxX = i1093[6]
  i1092.minY = i1093[7]
  i1092.maxY = i1093[8]
  i1092.uvBottomLeftX = i1093[9]
  i1092.uvBottomLeftY = i1093[10]
  i1092.uvBottomRightX = i1093[11]
  i1092.uvBottomRightY = i1093[12]
  i1092.uvTopLeftX = i1093[13]
  i1092.uvTopLeftY = i1093[14]
  i1092.uvTopRightX = i1093[15]
  i1092.uvTopRightY = i1093[16]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1095 = data
  i1094.name = i1095[0]
  var i1097 = i1095[1]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1097[i + 0]) );
  }
  i1094.layers = i1096
  var i1099 = i1095[2]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1099[i + 0]) );
  }
  i1094.parameters = i1098
  i1094.animationClips = i1095[3]
  i1094.avatarUnsupported = i1095[4]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.defaultWeight = i1103[1]
  i1102.blendingMode = i1103[2]
  i1102.avatarMask = i1103[3]
  i1102.syncedLayerIndex = i1103[4]
  i1102.syncedLayerAffectsTiming = !!i1103[5]
  i1102.syncedLayers = i1103[6]
  i1102.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1103[7], i1102.stateMachine)
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1105 = data
  i1104.id = i1105[0]
  i1104.name = i1105[1]
  i1104.path = i1105[2]
  var i1107 = i1105[3]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1107[i + 0]) );
  }
  i1104.states = i1106
  var i1109 = i1105[4]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1109[i + 0]) );
  }
  i1104.machines = i1108
  var i1111 = i1105[5]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1111[i + 0]) );
  }
  i1104.entryStateTransitions = i1110
  var i1113 = i1105[6]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1113[i + 0]) );
  }
  i1104.exitStateTransitions = i1112
  var i1115 = i1105[7]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1115[i + 0]) );
  }
  i1104.anyStateTransitions = i1114
  i1104.defaultStateId = i1105[8]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1119 = data
  i1118.id = i1119[0]
  i1118.name = i1119[1]
  i1118.cycleOffset = i1119[2]
  i1118.cycleOffsetParameter = i1119[3]
  i1118.cycleOffsetParameterActive = !!i1119[4]
  i1118.mirror = !!i1119[5]
  i1118.mirrorParameter = i1119[6]
  i1118.mirrorParameterActive = !!i1119[7]
  i1118.motionId = i1119[8]
  i1118.nameHash = i1119[9]
  i1118.fullPathHash = i1119[10]
  i1118.speed = i1119[11]
  i1118.speedParameter = i1119[12]
  i1118.speedParameterActive = !!i1119[13]
  i1118.tag = i1119[14]
  i1118.tagHash = i1119[15]
  i1118.writeDefaultValues = !!i1119[16]
  var i1121 = i1119[17]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 2, i1120, '')
  }
  i1118.behaviours = i1120
  var i1123 = i1119[18]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1123[i + 0]) );
  }
  i1118.transitions = i1122
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1129 = data
  i1128.fullPath = i1129[0]
  i1128.canTransitionToSelf = !!i1129[1]
  i1128.duration = i1129[2]
  i1128.exitTime = i1129[3]
  i1128.hasExitTime = !!i1129[4]
  i1128.hasFixedDuration = !!i1129[5]
  i1128.interruptionSource = i1129[6]
  i1128.offset = i1129[7]
  i1128.orderedInterruption = !!i1129[8]
  i1128.destinationStateId = i1129[9]
  i1128.isExit = !!i1129[10]
  i1128.mute = !!i1129[11]
  i1128.solo = !!i1129[12]
  var i1131 = i1129[13]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1131[i + 0]) );
  }
  i1128.conditions = i1130
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1137 = data
  i1136.destinationStateId = i1137[0]
  i1136.isExit = !!i1137[1]
  i1136.mute = !!i1137[2]
  i1136.solo = !!i1137[3]
  var i1139 = i1137[4]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1139[i + 0]) );
  }
  i1136.conditions = i1138
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1143 = data
  i1142.mode = i1143[0]
  i1142.parameter = i1143[1]
  i1142.threshold = i1143[2]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1147 = data
  i1146.defaultBool = !!i1147[0]
  i1146.defaultFloat = i1147[1]
  i1146.defaultInt = i1147[2]
  i1146.name = i1147[3]
  i1146.nameHash = i1147[4]
  i1146.type = i1147[5]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.bytes64 = i1149[1]
  i1148.data = i1149[2]
  return i1148
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1150 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 2, i1152, '')
  }
  i1150.atlasAssets = i1152
  i1150.scale = i1151[1]
  request.r(i1151[2], i1151[3], 0, i1150, 'skeletonJSON')
  i1150.isUpgradingBlendModeMaterials = !!i1151[4]
  i1150.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1151[5], i1150.blendModeMaterials)
  var i1155 = i1151[6]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 1, i1154, '')
  }
  i1150.skeletonDataModifiers = i1154
  var i1157 = i1151[7]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1150.fromAnimation = i1156
  var i1159 = i1151[8]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1150.toAnimation = i1158
  i1150.duration = i1151[9]
  i1150.defaultMix = i1151[10]
  request.r(i1151[11], i1151[12], 0, i1150, 'controller')
  return i1150
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1162 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1163 = data
  i1162.applyAdditiveMaterial = !!i1163[0]
  var i1165 = i1163[1]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1165[i + 0]));
  }
  i1162.additiveMaterials = i1164
  var i1167 = i1163[2]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1167[i + 0]));
  }
  i1162.multiplyMaterials = i1166
  var i1169 = i1163[3]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1169[i + 0]));
  }
  i1162.screenMaterials = i1168
  i1162.requiresBlendModeMaterials = !!i1163[4]
  return i1162
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1172 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1173 = data
  i1172.pageName = i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'material')
  return i1172
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1176 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'atlasFile')
  var i1179 = i1177[2]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 2, i1178, '')
  }
  i1176.materials = i1178
  i1176.textureLoadingMode = i1177[3]
  request.r(i1177[4], i1177[5], 0, i1176, 'onDemandTextureLoader')
  return i1176
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_Settings' )
  var i1181 = data
  i1180.m_enableWordWrapping = !!i1181[0]
  i1180.m_enableKerning = !!i1181[1]
  i1180.m_enableExtraPadding = !!i1181[2]
  i1180.m_enableTintAllSprites = !!i1181[3]
  i1180.m_enableParseEscapeCharacters = !!i1181[4]
  i1180.m_EnableRaycastTarget = !!i1181[5]
  i1180.m_GetFontFeaturesAtRuntime = !!i1181[6]
  i1180.m_missingGlyphCharacter = i1181[7]
  i1180.m_warningsDisabled = !!i1181[8]
  request.r(i1181[9], i1181[10], 0, i1180, 'm_defaultFontAsset')
  i1180.m_defaultFontAssetPath = i1181[11]
  i1180.m_defaultFontSize = i1181[12]
  i1180.m_defaultAutoSizeMinRatio = i1181[13]
  i1180.m_defaultAutoSizeMaxRatio = i1181[14]
  i1180.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1181[15], i1181[16] )
  i1180.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1181[17], i1181[18] )
  i1180.m_autoSizeTextContainer = !!i1181[19]
  i1180.m_IsTextObjectScaleStatic = !!i1181[20]
  var i1183 = i1181[21]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 1, i1182, '')
  }
  i1180.m_fallbackFontAssets = i1182
  i1180.m_matchMaterialPreset = !!i1181[22]
  request.r(i1181[23], i1181[24], 0, i1180, 'm_defaultSpriteAsset')
  i1180.m_defaultSpriteAssetPath = i1181[25]
  i1180.m_enableEmojiSupport = !!i1181[26]
  i1180.m_MissingCharacterSpriteUnicode = i1181[27]
  i1180.m_defaultColorGradientPresetsPath = i1181[28]
  request.r(i1181[29], i1181[30], 0, i1180, 'm_defaultStyleSheet')
  i1180.m_StyleSheetsResourcePath = i1181[31]
  request.r(i1181[32], i1181[33], 0, i1180, 'm_leadingCharacters')
  request.r(i1181[34], i1181[35], 0, i1180, 'm_followingCharacters')
  i1180.m_UseModernHangulLineBreakingRules = !!i1181[36]
  return i1180
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1187 = data
  i1186.hashCode = i1187[0]
  request.r(i1187[1], i1187[2], 0, i1186, 'material')
  i1186.materialHashCode = i1187[3]
  request.r(i1187[4], i1187[5], 0, i1186, 'atlas')
  i1186.normalStyle = i1187[6]
  i1186.normalSpacingOffset = i1187[7]
  i1186.boldStyle = i1187[8]
  i1186.boldSpacing = i1187[9]
  i1186.italicStyle = i1187[10]
  i1186.tabSize = i1187[11]
  i1186.m_Version = i1187[12]
  i1186.m_SourceFontFileGUID = i1187[13]
  request.r(i1187[14], i1187[15], 0, i1186, 'm_SourceFontFile_EditorRef')
  request.r(i1187[16], i1187[17], 0, i1186, 'm_SourceFontFile')
  i1186.m_AtlasPopulationMode = i1187[18]
  i1186.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1187[19], i1186.m_FaceInfo)
  var i1189 = i1187[20]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('UnityEngine.TextCore.Glyph', i1189[i + 0]));
  }
  i1186.m_GlyphTable = i1188
  var i1191 = i1187[21]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('TMPro.TMP_Character', i1191[i + 0]));
  }
  i1186.m_CharacterTable = i1190
  var i1193 = i1187[22]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 2, i1192, '')
  }
  i1186.m_AtlasTextures = i1192
  i1186.m_AtlasTextureIndex = i1187[23]
  i1186.m_IsMultiAtlasTexturesEnabled = !!i1187[24]
  i1186.m_ClearDynamicDataOnBuild = !!i1187[25]
  var i1195 = i1187[26]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('UnityEngine.TextCore.GlyphRect', i1195[i + 0]));
  }
  i1186.m_UsedGlyphRects = i1194
  var i1197 = i1187[27]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('UnityEngine.TextCore.GlyphRect', i1197[i + 0]));
  }
  i1186.m_FreeGlyphRects = i1196
  i1186.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1187[28], i1186.m_fontInfo)
  i1186.m_AtlasWidth = i1187[29]
  i1186.m_AtlasHeight = i1187[30]
  i1186.m_AtlasPadding = i1187[31]
  i1186.m_AtlasRenderMode = i1187[32]
  var i1199 = i1187[33]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('TMPro.TMP_Glyph', i1199[i + 0]));
  }
  i1186.m_glyphInfoList = i1198
  i1186.m_KerningTable = request.d('TMPro.KerningTable', i1187[34], i1186.m_KerningTable)
  i1186.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1187[35], i1186.m_FontFeatureTable)
  var i1201 = i1187[36]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1186.fallbackFontAssets = i1200
  var i1203 = i1187[37]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 1, i1202, '')
  }
  i1186.m_FallbackFontAssetTable = i1202
  i1186.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1187[38], i1186.m_CreationSettings)
  var i1205 = i1187[39]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('TMPro.TMP_FontWeightPair', i1205[i + 0]) );
  }
  i1186.m_FontWeightTable = i1204
  var i1207 = i1187[40]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('TMPro.TMP_FontWeightPair', i1207[i + 0]) );
  }
  i1186.fontWeights = i1206
  return i1186
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1209 = data
  i1208.m_FaceIndex = i1209[0]
  i1208.m_FamilyName = i1209[1]
  i1208.m_StyleName = i1209[2]
  i1208.m_PointSize = i1209[3]
  i1208.m_Scale = i1209[4]
  i1208.m_UnitsPerEM = i1209[5]
  i1208.m_LineHeight = i1209[6]
  i1208.m_AscentLine = i1209[7]
  i1208.m_CapLine = i1209[8]
  i1208.m_MeanLine = i1209[9]
  i1208.m_Baseline = i1209[10]
  i1208.m_DescentLine = i1209[11]
  i1208.m_SuperscriptOffset = i1209[12]
  i1208.m_SuperscriptSize = i1209[13]
  i1208.m_SubscriptOffset = i1209[14]
  i1208.m_SubscriptSize = i1209[15]
  i1208.m_UnderlineOffset = i1209[16]
  i1208.m_UnderlineThickness = i1209[17]
  i1208.m_StrikethroughOffset = i1209[18]
  i1208.m_StrikethroughThickness = i1209[19]
  i1208.m_TabWidth = i1209[20]
  return i1208
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1213 = data
  i1212.m_Index = i1213[0]
  i1212.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1213[1], i1212.m_Metrics)
  i1212.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1213[2], i1212.m_GlyphRect)
  i1212.m_Scale = i1213[3]
  i1212.m_AtlasIndex = i1213[4]
  i1212.m_ClassDefinitionType = i1213[5]
  return i1212
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1215 = data
  i1214.m_Width = i1215[0]
  i1214.m_Height = i1215[1]
  i1214.m_HorizontalBearingX = i1215[2]
  i1214.m_HorizontalBearingY = i1215[3]
  i1214.m_HorizontalAdvance = i1215[4]
  return i1214
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1217 = data
  i1216.m_X = i1217[0]
  i1216.m_Y = i1217[1]
  i1216.m_Width = i1217[2]
  i1216.m_Height = i1217[3]
  return i1216
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_Character' )
  var i1221 = data
  i1220.m_ElementType = i1221[0]
  i1220.m_Unicode = i1221[1]
  i1220.m_GlyphIndex = i1221[2]
  i1220.m_Scale = i1221[3]
  return i1220
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1227 = data
  i1226.Name = i1227[0]
  i1226.PointSize = i1227[1]
  i1226.Scale = i1227[2]
  i1226.CharacterCount = i1227[3]
  i1226.LineHeight = i1227[4]
  i1226.Baseline = i1227[5]
  i1226.Ascender = i1227[6]
  i1226.CapHeight = i1227[7]
  i1226.Descender = i1227[8]
  i1226.CenterLine = i1227[9]
  i1226.SuperscriptOffset = i1227[10]
  i1226.SubscriptOffset = i1227[11]
  i1226.SubSize = i1227[12]
  i1226.Underline = i1227[13]
  i1226.UnderlineThickness = i1227[14]
  i1226.strikethrough = i1227[15]
  i1226.strikethroughThickness = i1227[16]
  i1226.TabWidth = i1227[17]
  i1226.Padding = i1227[18]
  i1226.AtlasWidth = i1227[19]
  i1226.AtlasHeight = i1227[20]
  return i1226
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1231 = data
  i1230.id = i1231[0]
  i1230.x = i1231[1]
  i1230.y = i1231[2]
  i1230.width = i1231[3]
  i1230.height = i1231[4]
  i1230.xOffset = i1231[5]
  i1230.yOffset = i1231[6]
  i1230.xAdvance = i1231[7]
  i1230.scale = i1231[8]
  return i1230
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.KerningTable' )
  var i1233 = data
  var i1235 = i1233[0]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('TMPro.KerningPair', i1235[i + 0]));
  }
  i1232.kerningPairs = i1234
  return i1232
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.KerningPair' )
  var i1239 = data
  i1238.xOffset = i1239[0]
  i1238.m_FirstGlyph = i1239[1]
  i1238.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1239[2], i1238.m_FirstGlyphAdjustments)
  i1238.m_SecondGlyph = i1239[3]
  i1238.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1239[4], i1238.m_SecondGlyphAdjustments)
  i1238.m_IgnoreSpacingAdjustments = !!i1239[5]
  return i1238
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1243[i + 0]));
  }
  i1240.m_GlyphPairAdjustmentRecords = i1242
  return i1240
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1247 = data
  i1246.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1247[0], i1246.m_FirstAdjustmentRecord)
  i1246.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1247[1], i1246.m_SecondAdjustmentRecord)
  i1246.m_FeatureLookupFlags = i1247[2]
  return i1246
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1249 = data
  i1248.m_GlyphIndex = i1249[0]
  i1248.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1249[1], i1248.m_GlyphValueRecord)
  return i1248
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1251 = data
  i1250.m_XPlacement = i1251[0]
  i1250.m_YPlacement = i1251[1]
  i1250.m_XAdvance = i1251[2]
  i1250.m_YAdvance = i1251[3]
  return i1250
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1253 = data
  i1252.sourceFontFileName = i1253[0]
  i1252.sourceFontFileGUID = i1253[1]
  i1252.pointSizeSamplingMode = i1253[2]
  i1252.pointSize = i1253[3]
  i1252.padding = i1253[4]
  i1252.packingMode = i1253[5]
  i1252.atlasWidth = i1253[6]
  i1252.atlasHeight = i1253[7]
  i1252.characterSetSelectionMode = i1253[8]
  i1252.characterSequence = i1253[9]
  i1252.referencedFontAssetGUID = i1253[10]
  i1252.referencedTextAssetGUID = i1253[11]
  i1252.fontStyle = i1253[12]
  i1252.fontStyleModifier = i1253[13]
  i1252.renderMode = i1253[14]
  i1252.includeFontFeatures = !!i1253[15]
  return i1252
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'regularTypeface')
  request.r(i1257[2], i1257[3], 0, i1256, 'italicTypeface')
  return i1256
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1259 = data
  i1258.hashCode = i1259[0]
  request.r(i1259[1], i1259[2], 0, i1258, 'material')
  i1258.materialHashCode = i1259[3]
  request.r(i1259[4], i1259[5], 0, i1258, 'spriteSheet')
  var i1261 = i1259[6]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.TMP_Sprite', i1261[i + 0]));
  }
  i1258.spriteInfoList = i1260
  var i1263 = i1259[7]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1263.length; i += 2) {
  request.r(i1263[i + 0], i1263[i + 1], 1, i1262, '')
  }
  i1258.fallbackSpriteAssets = i1262
  i1258.m_Version = i1259[8]
  i1258.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1259[9], i1258.m_FaceInfo)
  var i1265 = i1259[10]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('TMPro.TMP_SpriteCharacter', i1265[i + 0]));
  }
  i1258.m_SpriteCharacterTable = i1264
  var i1267 = i1259[11]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.TMP_SpriteGlyph', i1267[i + 0]));
  }
  i1258.m_SpriteGlyphTable = i1266
  return i1258
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1271 = data
  i1270.name = i1271[0]
  i1270.hashCode = i1271[1]
  i1270.unicode = i1271[2]
  i1270.pivot = new pc.Vec2( i1271[3], i1271[4] )
  request.r(i1271[5], i1271[6], 0, i1270, 'sprite')
  i1270.id = i1271[7]
  i1270.x = i1271[8]
  i1270.y = i1271[9]
  i1270.width = i1271[10]
  i1270.height = i1271[11]
  i1270.xOffset = i1271[12]
  i1270.yOffset = i1271[13]
  i1270.xAdvance = i1271[14]
  i1270.scale = i1271[15]
  return i1270
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1277 = data
  i1276.m_Name = i1277[0]
  i1276.m_HashCode = i1277[1]
  i1276.m_ElementType = i1277[2]
  i1276.m_Unicode = i1277[3]
  i1276.m_GlyphIndex = i1277[4]
  i1276.m_Scale = i1277[5]
  return i1276
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'sprite')
  i1280.m_Index = i1281[2]
  i1280.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1281[3], i1280.m_Metrics)
  i1280.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1281[4], i1280.m_GlyphRect)
  i1280.m_Scale = i1281[5]
  i1280.m_AtlasIndex = i1281[6]
  i1280.m_ClassDefinitionType = i1281[7]
  return i1280
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('TMPro.TMP_Style', i1285[i + 0]));
  }
  i1282.m_StyleList = i1284
  return i1282
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_Style' )
  var i1289 = data
  i1288.m_Name = i1289[0]
  i1288.m_HashCode = i1289[1]
  i1288.m_OpeningDefinition = i1289[2]
  i1288.m_ClosingDefinition = i1289[3]
  i1288.m_OpeningTagArray = i1289[4]
  i1288.m_ClosingTagArray = i1289[5]
  i1288.m_OpeningTagUnicodeArray = i1289[6]
  i1288.m_ClosingTagUnicodeArray = i1289[7]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1293[i + 0]) );
  }
  i1290.files = i1292
  i1290.componentToPrefabIds = i1291[1]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1297 = data
  i1296.path = i1297[0]
  request.r(i1297[1], i1297[2], 0, i1296, 'unityObject')
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1301[i + 0]) );
  }
  i1298.scriptsExecutionOrder = i1300
  var i1303 = i1299[1]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1303[i + 0]) );
  }
  i1298.sortingLayers = i1302
  var i1305 = i1299[2]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1305[i + 0]) );
  }
  i1298.cullingLayers = i1304
  i1298.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1299[3], i1298.timeSettings)
  i1298.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1299[4], i1298.physicsSettings)
  i1298.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1299[5], i1298.physics2DSettings)
  i1298.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1299[6], i1298.qualitySettings)
  i1298.enableRealtimeShadows = !!i1299[7]
  i1298.enableAutoInstancing = !!i1299[8]
  i1298.enableDynamicBatching = !!i1299[9]
  i1298.lightmapEncodingQuality = i1299[10]
  i1298.desiredColorSpace = i1299[11]
  var i1307 = i1299[12]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( i1307[i + 0] );
  }
  i1298.allTags = i1306
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1311 = data
  i1310.name = i1311[0]
  i1310.value = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.name = i1315[1]
  i1314.value = i1315[2]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1319 = data
  i1318.id = i1319[0]
  i1318.name = i1319[1]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1321 = data
  i1320.fixedDeltaTime = i1321[0]
  i1320.maximumDeltaTime = i1321[1]
  i1320.timeScale = i1321[2]
  i1320.maximumParticleTimestep = i1321[3]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1323 = data
  i1322.gravity = new pc.Vec3( i1323[0], i1323[1], i1323[2] )
  i1322.defaultSolverIterations = i1323[3]
  i1322.bounceThreshold = i1323[4]
  i1322.autoSyncTransforms = !!i1323[5]
  i1322.autoSimulation = !!i1323[6]
  var i1325 = i1323[7]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1325[i + 0]) );
  }
  i1322.collisionMatrix = i1324
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1329 = data
  i1328.enabled = !!i1329[0]
  i1328.layerId = i1329[1]
  i1328.otherLayerId = i1329[2]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'material')
  i1330.gravity = new pc.Vec2( i1331[2], i1331[3] )
  i1330.positionIterations = i1331[4]
  i1330.velocityIterations = i1331[5]
  i1330.velocityThreshold = i1331[6]
  i1330.maxLinearCorrection = i1331[7]
  i1330.maxAngularCorrection = i1331[8]
  i1330.maxTranslationSpeed = i1331[9]
  i1330.maxRotationSpeed = i1331[10]
  i1330.baumgarteScale = i1331[11]
  i1330.baumgarteTOIScale = i1331[12]
  i1330.timeToSleep = i1331[13]
  i1330.linearSleepTolerance = i1331[14]
  i1330.angularSleepTolerance = i1331[15]
  i1330.defaultContactOffset = i1331[16]
  i1330.autoSimulation = !!i1331[17]
  i1330.queriesHitTriggers = !!i1331[18]
  i1330.queriesStartInColliders = !!i1331[19]
  i1330.callbacksOnDisable = !!i1331[20]
  i1330.reuseCollisionCallbacks = !!i1331[21]
  i1330.autoSyncTransforms = !!i1331[22]
  var i1333 = i1331[23]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1333[i + 0]) );
  }
  i1330.collisionMatrix = i1332
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1337 = data
  i1336.enabled = !!i1337[0]
  i1336.layerId = i1337[1]
  i1336.otherLayerId = i1337[2]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1341[i + 0]) );
  }
  i1338.qualityLevels = i1340
  var i1343 = i1339[1]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( i1343[i + 0] );
  }
  i1338.names = i1342
  i1338.shadows = i1339[2]
  i1338.anisotropicFiltering = i1339[3]
  i1338.antiAliasing = i1339[4]
  i1338.lodBias = i1339[5]
  i1338.shadowCascades = i1339[6]
  i1338.shadowDistance = i1339[7]
  i1338.shadowmaskMode = i1339[8]
  i1338.shadowProjection = i1339[9]
  i1338.shadowResolution = i1339[10]
  i1338.softParticles = !!i1339[11]
  i1338.softVegetation = !!i1339[12]
  i1338.activeColorSpace = i1339[13]
  i1338.desiredColorSpace = i1339[14]
  i1338.masterTextureLimit = i1339[15]
  i1338.maxQueuedFrames = i1339[16]
  i1338.particleRaycastBudget = i1339[17]
  i1338.pixelLightCount = i1339[18]
  i1338.realtimeReflectionProbes = !!i1339[19]
  i1338.shadowCascade2Split = i1339[20]
  i1338.shadowCascade4Split = new pc.Vec3( i1339[21], i1339[22], i1339[23] )
  i1338.streamingMipmapsActive = !!i1339[24]
  i1338.vSyncCount = i1339[25]
  i1338.asyncUploadBufferSize = i1339[26]
  i1338.asyncUploadTimeSlice = i1339[27]
  i1338.billboardsFaceCameraPosition = !!i1339[28]
  i1338.shadowNearPlaneOffset = i1339[29]
  i1338.streamingMipmapsMemoryBudget = i1339[30]
  i1338.maximumLODLevel = i1339[31]
  i1338.streamingMipmapsAddAllCameras = !!i1339[32]
  i1338.streamingMipmapsMaxLevelReduction = i1339[33]
  i1338.streamingMipmapsRenderersPerFrame = i1339[34]
  i1338.resolutionScalingFixedDPIFactor = i1339[35]
  i1338.streamingMipmapsMaxFileIORequests = i1339[36]
  i1338.currentQualityLevel = i1339[37]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1349 = data
  i1348.weight = i1349[0]
  i1348.vertices = i1349[1]
  i1348.normals = i1349[2]
  i1348.tangents = i1349[3]
  return i1348
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1351 = data
  i1350.xPlacement = i1351[0]
  i1350.yPlacement = i1351[1]
  i1350.xAdvance = i1351[2]
  i1350.yAdvance = i1351[3]
  return i1350
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[32],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[13],"81":[13],"82":[13],"83":[13],"84":[13],"85":[13],"86":[13],"87":[13],"88":[13],"89":[13],"90":[13],"91":[13],"92":[13],"93":[32],"94":[26],"95":[96],"97":[96],"44":[43],"34":[32],"98":[99],"100":[8],"101":[99],"102":[43],"103":[43],"49":[44],"48":[47,43],"104":[43],"46":[44],"105":[43],"51":[43],"106":[43],"107":[43],"108":[43],"109":[43],"110":[43],"111":[43],"112":[43],"113":[47,43],"114":[43],"115":[43],"116":[43],"117":[43],"118":[47,43],"119":[43],"120":[53],"121":[53],"54":[53],"122":[53],"123":[32],"124":[32],"125":[126],"127":[32],"128":[129],"130":[43],"131":[47,43],"27":[26],"132":[47,43],"133":[15,26],"134":[26],"135":[26,24],"136":[73],"137":[13],"138":[129],"139":[140],"141":[43],"142":[26,43],"143":[43,47],"144":[43],"145":[47,43],"146":[26],"147":[47,43],"148":[43],"149":[99]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Level","Pin","Hand","CameraElement","Main","Cat","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.EdgeCollider2D","UnityEngine.Rigidbody2D","CameraAnchor","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CircleCollider2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Liquid","UnityEngine.GameObject","UnityEngine.PhysicsMaterial2D","Anim","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Rat","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","CameraFollower","LevelManager","SoundManager","UnityEngine.AudioClip","InputReceiver","UIManager","UICLose","UICWin","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Button","UnityEngine.UI.GridLayoutGroup","ItemLetter","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.41f1";

Deserializers.productName = "Base_Playable";

Deserializers.lunaInitializationTime = "01/14/2025 05:46:30";

Deserializers.lunaDaysRunning = "1.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1835";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5345";

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

Deserializers.linearColorSpace = true;

Deserializers.buildID = "c52cedb1-e0f4-4aca-914f-5bb0ae0e1301";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

