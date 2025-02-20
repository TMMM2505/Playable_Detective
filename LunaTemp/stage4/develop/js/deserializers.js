var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.JointSpring' )
  var i2023 = data
  i2022.spring = i2023[0]
  i2022.damper = i2023[1]
  i2022.targetPosition = i2023[2]
  return i2022
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2024 = root || request.c( 'UnityEngine.JointMotor' )
  var i2025 = data
  i2024.m_TargetVelocity = i2025[0]
  i2024.m_Force = i2025[1]
  i2024.m_FreeSpin = i2025[2]
  return i2024
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.JointLimits' )
  var i2027 = data
  i2026.m_Min = i2027[0]
  i2026.m_Max = i2027[1]
  i2026.m_Bounciness = i2027[2]
  i2026.m_BounceMinVelocity = i2027[3]
  i2026.m_ContactDistance = i2027[4]
  i2026.minBounce = i2027[5]
  i2026.maxBounce = i2027[6]
  return i2026
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.JointDrive' )
  var i2029 = data
  i2028.m_PositionSpring = i2029[0]
  i2028.m_PositionDamper = i2029[1]
  i2028.m_MaximumForce = i2029[2]
  i2028.m_UseAcceleration = i2029[3]
  return i2028
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2031 = data
  i2030.m_Spring = i2031[0]
  i2030.m_Damper = i2031[1]
  return i2030
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2033 = data
  i2032.m_Limit = i2033[0]
  i2032.m_Bounciness = i2033[1]
  i2032.m_ContactDistance = i2033[2]
  return i2032
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2035 = data
  i2034.m_ExtremumSlip = i2035[0]
  i2034.m_ExtremumValue = i2035[1]
  i2034.m_AsymptoteSlip = i2035[2]
  i2034.m_AsymptoteValue = i2035[3]
  i2034.m_Stiffness = i2035[4]
  return i2034
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2037 = data
  i2036.m_LowerAngle = i2037[0]
  i2036.m_UpperAngle = i2037[1]
  return i2036
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2039 = data
  i2038.m_MotorSpeed = i2039[0]
  i2038.m_MaximumMotorTorque = i2039[1]
  return i2038
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2041 = data
  i2040.m_DampingRatio = i2041[0]
  i2040.m_Frequency = i2041[1]
  i2040.m_Angle = i2041[2]
  return i2040
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2043 = data
  i2042.m_LowerTranslation = i2043[0]
  i2042.m_UpperTranslation = i2043[1]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2044 = root || new pc.UnityMaterial()
  var i2045 = data
  i2044.name = i2045[0]
  request.r(i2045[1], i2045[2], 0, i2044, 'shader')
  i2044.renderQueue = i2045[3]
  i2044.enableInstancing = !!i2045[4]
  var i2047 = i2045[5]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2047[i + 0]) );
  }
  i2044.floatParameters = i2046
  var i2049 = i2045[6]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2049[i + 0]) );
  }
  i2044.colorParameters = i2048
  var i2051 = i2045[7]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2051[i + 0]) );
  }
  i2044.vectorParameters = i2050
  var i2053 = i2045[8]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2053[i + 0]) );
  }
  i2044.textureParameters = i2052
  var i2055 = i2045[9]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2055[i + 0]) );
  }
  i2044.materialFlags = i2054
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2059 = data
  i2058.name = i2059[0]
  i2058.value = i2059[1]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2063 = data
  i2062.name = i2063[0]
  i2062.value = new pc.Color(i2063[1], i2063[2], i2063[3], i2063[4])
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2067 = data
  i2066.name = i2067[0]
  i2066.value = new pc.Vec4( i2067[1], i2067[2], i2067[3], i2067[4] )
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2071 = data
  i2070.name = i2071[0]
  request.r(i2071[1], i2071[2], 0, i2070, 'value')
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2075 = data
  i2074.name = i2075[0]
  i2074.enabled = !!i2075[1]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2077 = data
  i2076.name = i2077[0]
  i2076.width = i2077[1]
  i2076.height = i2077[2]
  i2076.mipmapCount = i2077[3]
  i2076.anisoLevel = i2077[4]
  i2076.filterMode = i2077[5]
  i2076.hdr = !!i2077[6]
  i2076.format = i2077[7]
  i2076.wrapMode = i2077[8]
  i2076.alphaIsTransparency = !!i2077[9]
  i2076.alphaSource = i2077[10]
  i2076.graphicsFormat = i2077[11]
  i2076.sRGBTexture = !!i2077[12]
  i2076.desiredColorSpace = i2077[13]
  i2076.wrapU = i2077[14]
  i2076.wrapV = i2077[15]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2079 = data
  i2078.position = new pc.Vec3( i2079[0], i2079[1], i2079[2] )
  i2078.scale = new pc.Vec3( i2079[3], i2079[4], i2079[5] )
  i2078.rotation = new pc.Quat(i2079[6], i2079[7], i2079[8], i2079[9])
  return i2078
}

Deserializers["CircleMazeLevelController"] = function (request, data, root) {
  var i2080 = root || request.c( 'CircleMazeLevelController' )
  var i2081 = data
  var i2083 = i2081[0]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 2) {
  request.r(i2083[i + 0], i2083[i + 1], 2, i2082, '')
  }
  i2080.circleMazeParts = i2082
  i2080.spinSpeed = i2081[1]
  i2080.angularDrag = i2081[2]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2087 = data
  i2086.bodyType = i2087[0]
  request.r(i2087[1], i2087[2], 0, i2086, 'material')
  i2086.simulated = !!i2087[3]
  i2086.useAutoMass = !!i2087[4]
  i2086.mass = i2087[5]
  i2086.drag = i2087[6]
  i2086.angularDrag = i2087[7]
  i2086.gravityScale = i2087[8]
  i2086.collisionDetectionMode = i2087[9]
  i2086.sleepMode = i2087[10]
  i2086.constraints = i2087[11]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2089 = data
  i2088.enabled = !!i2089[0]
  request.r(i2089[1], i2089[2], 0, i2088, 'sharedMaterial')
  var i2091 = i2089[3]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 2) {
  request.r(i2091[i + 0], i2091[i + 1], 2, i2090, '')
  }
  i2088.sharedMaterials = i2090
  i2088.receiveShadows = !!i2089[4]
  i2088.shadowCastingMode = i2089[5]
  i2088.sortingLayerID = i2089[6]
  i2088.sortingOrder = i2089[7]
  i2088.lightmapIndex = i2089[8]
  i2088.lightmapSceneIndex = i2089[9]
  i2088.lightmapScaleOffset = new pc.Vec4( i2089[10], i2089[11], i2089[12], i2089[13] )
  i2088.lightProbeUsage = i2089[14]
  i2088.reflectionProbeUsage = i2089[15]
  i2088.color = new pc.Color(i2089[16], i2089[17], i2089[18], i2089[19])
  request.r(i2089[20], i2089[21], 0, i2088, 'sprite')
  i2088.flipX = !!i2089[22]
  i2088.flipY = !!i2089[23]
  i2088.drawMode = i2089[24]
  i2088.size = new pc.Vec2( i2089[25], i2089[26] )
  i2088.tileMode = i2089[27]
  i2088.adaptiveModeThreshold = i2089[28]
  i2088.maskInteraction = i2089[29]
  i2088.spriteSortPoint = i2089[30]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2095 = data
  i2094.name = i2095[0]
  i2094.tagId = i2095[1]
  i2094.enabled = !!i2095[2]
  i2094.isStatic = !!i2095[3]
  i2094.layer = i2095[4]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.isTrigger = !!i2097[1]
  i2096.usedByEffector = !!i2097[2]
  i2096.density = i2097[3]
  i2096.offset = new pc.Vec2( i2097[4], i2097[5] )
  request.r(i2097[6], i2097[7], 0, i2096, 'material')
  i2096.edgeRadius = i2097[8]
  var i2099 = i2097[9]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 2) {
    i2098.push( new pc.Vec2( i2099[i + 0], i2099[i + 1] ) );
  }
  i2096.points = i2098
  i2096.useAdjacentStartPoint = !!i2097[10]
  i2096.adjacentStartPoint = new pc.Vec2( i2097[11], i2097[12] )
  i2096.useAdjacentEndPoint = !!i2097[13]
  i2096.adjacentEndPoint = new pc.Vec2( i2097[14], i2097[15] )
  return i2096
}

Deserializers["Lava"] = function (request, data, root) {
  var i2102 = root || request.c( 'Lava' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'lavaSfx')
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2105 = data
  i2104.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2105[0], i2104.main)
  i2104.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2105[1], i2104.colorBySpeed)
  i2104.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2105[2], i2104.colorOverLifetime)
  i2104.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2105[3], i2104.emission)
  i2104.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2105[4], i2104.rotationBySpeed)
  i2104.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2105[5], i2104.rotationOverLifetime)
  i2104.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2105[6], i2104.shape)
  i2104.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2105[7], i2104.sizeBySpeed)
  i2104.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2105[8], i2104.sizeOverLifetime)
  i2104.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2105[9], i2104.textureSheetAnimation)
  i2104.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2105[10], i2104.velocityOverLifetime)
  i2104.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2105[11], i2104.noise)
  i2104.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2105[12], i2104.inheritVelocity)
  i2104.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2105[13], i2104.forceOverLifetime)
  i2104.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2105[14], i2104.limitVelocityOverLifetime)
  i2104.useAutoRandomSeed = !!i2105[15]
  i2104.randomSeed = i2105[16]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2106 = root || new pc.ParticleSystemMain()
  var i2107 = data
  i2106.duration = i2107[0]
  i2106.loop = !!i2107[1]
  i2106.prewarm = !!i2107[2]
  i2106.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[3], i2106.startDelay)
  i2106.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[4], i2106.startLifetime)
  i2106.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[5], i2106.startSpeed)
  i2106.startSize3D = !!i2107[6]
  i2106.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[7], i2106.startSizeX)
  i2106.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[8], i2106.startSizeY)
  i2106.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[9], i2106.startSizeZ)
  i2106.startRotation3D = !!i2107[10]
  i2106.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[11], i2106.startRotationX)
  i2106.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[12], i2106.startRotationY)
  i2106.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[13], i2106.startRotationZ)
  i2106.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2107[14], i2106.startColor)
  i2106.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[15], i2106.gravityModifier)
  i2106.simulationSpace = i2107[16]
  request.r(i2107[17], i2107[18], 0, i2106, 'customSimulationSpace')
  i2106.simulationSpeed = i2107[19]
  i2106.useUnscaledTime = !!i2107[20]
  i2106.scalingMode = i2107[21]
  i2106.playOnAwake = !!i2107[22]
  i2106.maxParticles = i2107[23]
  i2106.emitterVelocityMode = i2107[24]
  i2106.stopAction = i2107[25]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2108 = root || new pc.MinMaxCurve()
  var i2109 = data
  i2108.mode = i2109[0]
  i2108.curveMin = new pc.AnimationCurve( { keys_flow: i2109[1] } )
  i2108.curveMax = new pc.AnimationCurve( { keys_flow: i2109[2] } )
  i2108.curveMultiplier = i2109[3]
  i2108.constantMin = i2109[4]
  i2108.constantMax = i2109[5]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2110 = root || new pc.MinMaxGradient()
  var i2111 = data
  i2110.mode = i2111[0]
  i2110.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2111[1], i2110.gradientMin)
  i2110.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2111[2], i2110.gradientMax)
  i2110.colorMin = new pc.Color(i2111[3], i2111[4], i2111[5], i2111[6])
  i2110.colorMax = new pc.Color(i2111[7], i2111[8], i2111[9], i2111[10])
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2113 = data
  i2112.mode = i2113[0]
  var i2115 = i2113[1]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2115[i + 0]) );
  }
  i2112.colorKeys = i2114
  var i2117 = i2113[2]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2117[i + 0]) );
  }
  i2112.alphaKeys = i2116
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2118 = root || new pc.ParticleSystemColorBySpeed()
  var i2119 = data
  i2118.enabled = !!i2119[0]
  i2118.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2119[1], i2118.color)
  i2118.range = new pc.Vec2( i2119[2], i2119[3] )
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2123 = data
  i2122.color = new pc.Color(i2123[0], i2123[1], i2123[2], i2123[3])
  i2122.time = i2123[4]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2127 = data
  i2126.alpha = i2127[0]
  i2126.time = i2127[1]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2128 = root || new pc.ParticleSystemColorOverLifetime()
  var i2129 = data
  i2128.enabled = !!i2129[0]
  i2128.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2129[1], i2128.color)
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2130 = root || new pc.ParticleSystemEmitter()
  var i2131 = data
  i2130.enabled = !!i2131[0]
  i2130.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[1], i2130.rateOverTime)
  i2130.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[2], i2130.rateOverDistance)
  var i2133 = i2131[3]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2133[i + 0]) );
  }
  i2130.bursts = i2132
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2136 = root || new pc.ParticleSystemBurst()
  var i2137 = data
  i2136.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[0], i2136.count)
  i2136.cycleCount = i2137[1]
  i2136.minCount = i2137[2]
  i2136.maxCount = i2137[3]
  i2136.repeatInterval = i2137[4]
  i2136.time = i2137[5]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2138 = root || new pc.ParticleSystemRotationBySpeed()
  var i2139 = data
  i2138.enabled = !!i2139[0]
  i2138.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[1], i2138.x)
  i2138.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[2], i2138.y)
  i2138.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[3], i2138.z)
  i2138.separateAxes = !!i2139[4]
  i2138.range = new pc.Vec2( i2139[5], i2139[6] )
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2140 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2141 = data
  i2140.enabled = !!i2141[0]
  i2140.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[1], i2140.x)
  i2140.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[2], i2140.y)
  i2140.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2141[3], i2140.z)
  i2140.separateAxes = !!i2141[4]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2142 = root || new pc.ParticleSystemShape()
  var i2143 = data
  i2142.enabled = !!i2143[0]
  i2142.shapeType = i2143[1]
  i2142.randomDirectionAmount = i2143[2]
  i2142.sphericalDirectionAmount = i2143[3]
  i2142.randomPositionAmount = i2143[4]
  i2142.alignToDirection = !!i2143[5]
  i2142.radius = i2143[6]
  i2142.radiusMode = i2143[7]
  i2142.radiusSpread = i2143[8]
  i2142.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2143[9], i2142.radiusSpeed)
  i2142.radiusThickness = i2143[10]
  i2142.angle = i2143[11]
  i2142.length = i2143[12]
  i2142.boxThickness = new pc.Vec3( i2143[13], i2143[14], i2143[15] )
  i2142.meshShapeType = i2143[16]
  request.r(i2143[17], i2143[18], 0, i2142, 'mesh')
  request.r(i2143[19], i2143[20], 0, i2142, 'meshRenderer')
  request.r(i2143[21], i2143[22], 0, i2142, 'skinnedMeshRenderer')
  i2142.useMeshMaterialIndex = !!i2143[23]
  i2142.meshMaterialIndex = i2143[24]
  i2142.useMeshColors = !!i2143[25]
  i2142.normalOffset = i2143[26]
  i2142.arc = i2143[27]
  i2142.arcMode = i2143[28]
  i2142.arcSpread = i2143[29]
  i2142.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2143[30], i2142.arcSpeed)
  i2142.donutRadius = i2143[31]
  i2142.position = new pc.Vec3( i2143[32], i2143[33], i2143[34] )
  i2142.rotation = new pc.Vec3( i2143[35], i2143[36], i2143[37] )
  i2142.scale = new pc.Vec3( i2143[38], i2143[39], i2143[40] )
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2144 = root || new pc.ParticleSystemSizeBySpeed()
  var i2145 = data
  i2144.enabled = !!i2145[0]
  i2144.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2145[1], i2144.x)
  i2144.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2145[2], i2144.y)
  i2144.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2145[3], i2144.z)
  i2144.separateAxes = !!i2145[4]
  i2144.range = new pc.Vec2( i2145[5], i2145[6] )
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2146 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2147 = data
  i2146.enabled = !!i2147[0]
  i2146.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[1], i2146.x)
  i2146.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[2], i2146.y)
  i2146.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[3], i2146.z)
  i2146.separateAxes = !!i2147[4]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2148 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2149 = data
  i2148.enabled = !!i2149[0]
  i2148.mode = i2149[1]
  i2148.animation = i2149[2]
  i2148.numTilesX = i2149[3]
  i2148.numTilesY = i2149[4]
  i2148.useRandomRow = !!i2149[5]
  i2148.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[6], i2148.frameOverTime)
  i2148.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[7], i2148.startFrame)
  i2148.cycleCount = i2149[8]
  i2148.rowIndex = i2149[9]
  i2148.flipU = i2149[10]
  i2148.flipV = i2149[11]
  i2148.spriteCount = i2149[12]
  var i2151 = i2149[13]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 2) {
  request.r(i2151[i + 0], i2151[i + 1], 2, i2150, '')
  }
  i2148.sprites = i2150
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2154 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2155 = data
  i2154.enabled = !!i2155[0]
  i2154.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[1], i2154.x)
  i2154.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[2], i2154.y)
  i2154.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[3], i2154.z)
  i2154.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[4], i2154.radial)
  i2154.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[5], i2154.speedModifier)
  i2154.space = i2155[6]
  i2154.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[7], i2154.orbitalX)
  i2154.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[8], i2154.orbitalY)
  i2154.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[9], i2154.orbitalZ)
  i2154.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[10], i2154.orbitalOffsetX)
  i2154.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[11], i2154.orbitalOffsetY)
  i2154.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[12], i2154.orbitalOffsetZ)
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2156 = root || new pc.ParticleSystemNoise()
  var i2157 = data
  i2156.enabled = !!i2157[0]
  i2156.separateAxes = !!i2157[1]
  i2156.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[2], i2156.strengthX)
  i2156.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[3], i2156.strengthY)
  i2156.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[4], i2156.strengthZ)
  i2156.frequency = i2157[5]
  i2156.damping = !!i2157[6]
  i2156.octaveCount = i2157[7]
  i2156.octaveMultiplier = i2157[8]
  i2156.octaveScale = i2157[9]
  i2156.quality = i2157[10]
  i2156.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[11], i2156.scrollSpeed)
  i2156.scrollSpeedMultiplier = i2157[12]
  i2156.remapEnabled = !!i2157[13]
  i2156.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[14], i2156.remapX)
  i2156.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[15], i2156.remapY)
  i2156.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[16], i2156.remapZ)
  i2156.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[17], i2156.positionAmount)
  i2156.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[18], i2156.rotationAmount)
  i2156.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[19], i2156.sizeAmount)
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2158 = root || new pc.ParticleSystemInheritVelocity()
  var i2159 = data
  i2158.enabled = !!i2159[0]
  i2158.mode = i2159[1]
  i2158.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[2], i2158.curve)
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2160 = root || new pc.ParticleSystemForceOverLifetime()
  var i2161 = data
  i2160.enabled = !!i2161[0]
  i2160.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[1], i2160.x)
  i2160.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[2], i2160.y)
  i2160.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[3], i2160.z)
  i2160.space = i2161[4]
  i2160.randomized = !!i2161[5]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2162 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2163 = data
  i2162.enabled = !!i2163[0]
  i2162.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[1], i2162.limit)
  i2162.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[2], i2162.limitX)
  i2162.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[3], i2162.limitY)
  i2162.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[4], i2162.limitZ)
  i2162.dampen = i2163[5]
  i2162.separateAxes = !!i2163[6]
  i2162.space = i2163[7]
  i2162.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[8], i2162.drag)
  i2162.multiplyDragByParticleSize = !!i2163[9]
  i2162.multiplyDragByParticleVelocity = !!i2163[10]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2165 = data
  i2164.enabled = !!i2165[0]
  request.r(i2165[1], i2165[2], 0, i2164, 'sharedMaterial')
  var i2167 = i2165[3]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 2) {
  request.r(i2167[i + 0], i2167[i + 1], 2, i2166, '')
  }
  i2164.sharedMaterials = i2166
  i2164.receiveShadows = !!i2165[4]
  i2164.shadowCastingMode = i2165[5]
  i2164.sortingLayerID = i2165[6]
  i2164.sortingOrder = i2165[7]
  i2164.lightmapIndex = i2165[8]
  i2164.lightmapSceneIndex = i2165[9]
  i2164.lightmapScaleOffset = new pc.Vec4( i2165[10], i2165[11], i2165[12], i2165[13] )
  i2164.lightProbeUsage = i2165[14]
  i2164.reflectionProbeUsage = i2165[15]
  request.r(i2165[16], i2165[17], 0, i2164, 'mesh')
  i2164.meshCount = i2165[18]
  i2164.activeVertexStreamsCount = i2165[19]
  i2164.alignment = i2165[20]
  i2164.renderMode = i2165[21]
  i2164.sortMode = i2165[22]
  i2164.lengthScale = i2165[23]
  i2164.velocityScale = i2165[24]
  i2164.cameraVelocityScale = i2165[25]
  i2164.normalDirection = i2165[26]
  i2164.sortingFudge = i2165[27]
  i2164.minParticleSize = i2165[28]
  i2164.maxParticleSize = i2165[29]
  i2164.pivot = new pc.Vec3( i2165[30], i2165[31], i2165[32] )
  request.r(i2165[33], i2165[34], 0, i2164, 'trailMaterial')
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2169 = data
  i2168.radius = i2169[0]
  i2168.enabled = !!i2169[1]
  i2168.isTrigger = !!i2169[2]
  i2168.usedByEffector = !!i2169[3]
  i2168.density = i2169[4]
  i2168.offset = new pc.Vec2( i2169[5], i2169[6] )
  request.r(i2169[7], i2169[8], 0, i2168, 'material')
  return i2168
}

Deserializers["Main"] = function (request, data, root) {
  var i2170 = root || request.c( 'Main' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'mainScared')
  request.r(i2171[2], i2171[3], 0, i2170, 'helpMe')
  request.r(i2171[4], i2171[5], 0, i2170, 'getHitSfx')
  request.r(i2171[6], i2171[7], 0, i2170, 'wereWolfAttackHit')
  request.r(i2171[8], i2171[9], 0, i2170, 'mainWin')
  request.r(i2171[10], i2171[11], 0, i2170, 'anim')
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2173 = data
  i2172.usedByComposite = !!i2173[0]
  i2172.autoTiling = !!i2173[1]
  i2172.size = new pc.Vec2( i2173[2], i2173[3] )
  i2172.edgeRadius = i2173[4]
  i2172.enabled = !!i2173[5]
  i2172.isTrigger = !!i2173[6]
  i2172.usedByEffector = !!i2173[7]
  i2172.density = i2173[8]
  i2172.offset = new pc.Vec2( i2173[9], i2173[10] )
  request.r(i2173[11], i2173[12], 0, i2172, 'material')
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'sharedMesh')
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'additionalVertexStreams')
  i2176.enabled = !!i2177[2]
  request.r(i2177[3], i2177[4], 0, i2176, 'sharedMaterial')
  var i2179 = i2177[5]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 2) {
  request.r(i2179[i + 0], i2179[i + 1], 2, i2178, '')
  }
  i2176.sharedMaterials = i2178
  i2176.receiveShadows = !!i2177[6]
  i2176.shadowCastingMode = i2177[7]
  i2176.sortingLayerID = i2177[8]
  i2176.sortingOrder = i2177[9]
  i2176.lightmapIndex = i2177[10]
  i2176.lightmapSceneIndex = i2177[11]
  i2176.lightmapScaleOffset = new pc.Vec4( i2177[12], i2177[13], i2177[14], i2177[15] )
  i2176.lightProbeUsage = i2177[16]
  i2176.reflectionProbeUsage = i2177[17]
  return i2176
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2180 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2181 = data
  i2180.loop = !!i2181[0]
  i2180.timeScale = i2181[1]
  request.r(i2181[2], i2181[3], 0, i2180, 'skeletonDataAsset')
  i2180.initialSkinName = i2181[4]
  i2180.fixPrefabOverrideViaMeshFilter = i2181[5]
  i2180.initialFlipX = !!i2181[6]
  i2180.initialFlipY = !!i2181[7]
  i2180.updateWhenInvisible = i2181[8]
  i2180.zSpacing = i2181[9]
  i2180.useClipping = !!i2181[10]
  i2180.immutableTriangles = !!i2181[11]
  i2180.pmaVertexColors = !!i2181[12]
  i2180.clearStateOnDisable = !!i2181[13]
  i2180.tintBlack = !!i2181[14]
  i2180.singleSubmesh = !!i2181[15]
  i2180.fixDrawOrder = !!i2181[16]
  i2180.addNormals = !!i2181[17]
  i2180.calculateTangents = !!i2181[18]
  i2180.maskInteraction = i2181[19]
  i2180.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2181[20], i2180.maskMaterials)
  i2180.disableRenderingOnOverride = !!i2181[21]
  i2180.updateTiming = i2181[22]
  i2180.unscaledTime = !!i2181[23]
  i2180._animationName = i2181[24]
  var i2183 = i2181[25]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( i2183[i + 0] );
  }
  i2180.separatorSlotNames = i2182
  return i2180
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2184 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2185 = data
  var i2187 = i2185[0]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 2) {
  request.r(i2187[i + 0], i2187[i + 1], 2, i2186, '')
  }
  i2184.materialsMaskDisabled = i2186
  var i2189 = i2185[1]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 2, i2188, '')
  }
  i2184.materialsInsideMask = i2188
  var i2191 = i2185[2]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 2) {
  request.r(i2191[i + 0], i2191[i + 1], 2, i2190, '')
  }
  i2184.materialsOutsideMask = i2190
  return i2184
}

Deserializers["WereWolf"] = function (request, data, root) {
  var i2194 = root || request.c( 'WereWolf' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'roarSfx')
  request.r(i2195[2], i2195[3], 0, i2194, 'anim')
  return i2194
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i2196 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'boneRoot')
  i2196.flipBy180DegreeRotation = !!i2197[2]
  request.r(i2197[3], i2197[4], 0, i2196, 'skeletonRenderer')
  request.r(i2197[5], i2197[6], 0, i2196, 'skeletonGraphic')
  return i2196
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i2198 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i2199 = data
  i2198.boneName = i2199[0]
  request.r(i2199[1], i2199[2], 0, i2198, 'parentReference')
  i2198.mode = i2199[3]
  i2198.position = !!i2199[4]
  i2198.rotation = !!i2199[5]
  i2198.scale = !!i2199[6]
  i2198.zPosition = !!i2199[7]
  i2198.overrideAlpha = i2199[8]
  request.r(i2199[9], i2199[10], 0, i2198, 'hierarchy')
  return i2198
}

Deserializers["Hand"] = function (request, data, root) {
  var i2200 = root || request.c( 'Hand' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2203.length; i += 2) {
  request.r(i2203[i + 0], i2203[i + 1], 1, i2202, '')
  }
  i2200.destinations = i2202
  i2200.waitTime = i2201[1]
  return i2200
}

Deserializers["Pulse"] = function (request, data, root) {
  var i2206 = root || request.c( 'Pulse' )
  var i2207 = data
  i2206.scale = i2207[0]
  i2206.duration = i2207[1]
  i2206.ease = i2207[2]
  i2206.loopCount = i2207[3]
  i2206.from = !!i2207[4]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.halfPrecision = !!i2209[1]
  i2208.useUInt32IndexFormat = !!i2209[2]
  i2208.vertexCount = i2209[3]
  i2208.aabb = i2209[4]
  var i2211 = i2209[5]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( !!i2211[i + 0] );
  }
  i2208.streams = i2210
  i2208.vertices = i2209[6]
  var i2213 = i2209[7]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2213[i + 0]) );
  }
  i2208.subMeshes = i2212
  var i2215 = i2209[8]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 16) {
    i2214.push( new pc.Mat4().setData(i2215[i + 0], i2215[i + 1], i2215[i + 2], i2215[i + 3],  i2215[i + 4], i2215[i + 5], i2215[i + 6], i2215[i + 7],  i2215[i + 8], i2215[i + 9], i2215[i + 10], i2215[i + 11],  i2215[i + 12], i2215[i + 13], i2215[i + 14], i2215[i + 15]) );
  }
  i2208.bindposes = i2214
  var i2217 = i2209[9]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2217[i + 0]) );
  }
  i2208.blendShapes = i2216
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2223 = data
  i2222.triangles = i2223[0]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2229 = data
  i2228.name = i2229[0]
  var i2231 = i2229[1]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2231[i + 0]) );
  }
  i2228.frames = i2230
  return i2228
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i2232 = root || request.c( 'CameraAnchor' )
  var i2233 = data
  i2232.anchorType = i2233[0]
  i2232.anchorOffset = new pc.Vec3( i2233[1], i2233[2], i2233[3] )
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'animatorController')
  request.r(i2235[2], i2235[3], 0, i2234, 'avatar')
  i2234.updateMode = i2235[4]
  i2234.hasTransformHierarchy = !!i2235[5]
  i2234.applyRootMotion = !!i2235[6]
  var i2237 = i2235[7]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 2) {
  request.r(i2237[i + 0], i2237[i + 1], 2, i2236, '')
  }
  i2234.humanBones = i2236
  i2234.enabled = !!i2235[8]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'clip')
  request.r(i2241[2], i2241[3], 0, i2240, 'outputAudioMixerGroup')
  i2240.playOnAwake = !!i2241[4]
  i2240.loop = !!i2241[5]
  i2240.time = i2241[6]
  i2240.volume = i2241[7]
  i2240.pitch = i2241[8]
  i2240.enabled = !!i2241[9]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2243 = data
  i2242.name = i2243[0]
  i2242.index = i2243[1]
  i2242.startup = !!i2243[2]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2245 = data
  i2244.enabled = !!i2245[0]
  i2244.aspect = i2245[1]
  i2244.orthographic = !!i2245[2]
  i2244.orthographicSize = i2245[3]
  i2244.backgroundColor = new pc.Color(i2245[4], i2245[5], i2245[6], i2245[7])
  i2244.nearClipPlane = i2245[8]
  i2244.farClipPlane = i2245[9]
  i2244.fieldOfView = i2245[10]
  i2244.depth = i2245[11]
  i2244.clearFlags = i2245[12]
  i2244.cullingMask = i2245[13]
  i2244.rect = i2245[14]
  request.r(i2245[15], i2245[16], 0, i2244, 'targetTexture')
  i2244.usePhysicalProperties = !!i2245[17]
  i2244.focalLength = i2245[18]
  i2244.sensorSize = new pc.Vec2( i2245[19], i2245[20] )
  i2244.lensShift = new pc.Vec2( i2245[21], i2245[22] )
  i2244.gateFit = i2245[23]
  i2244.commandBufferCount = i2245[24]
  i2244.cameraType = i2245[25]
  return i2244
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i2246 = root || request.c( 'ViewportHandler' )
  var i2247 = data
  i2246.wireColor = new pc.Color(i2247[0], i2247[1], i2247[2], i2247[3])
  i2246.UnitsSize = i2247[4]
  i2246.constraint = i2247[5]
  request.r(i2247[6], i2247[7], 0, i2246, 'camera')
  return i2246
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i2248 = root || request.c( 'CameraFollower' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'viewportHandler')
  return i2248
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2250 = root || request.c( 'GameManager' )
  var i2251 = data
  return i2250
}

Deserializers["DeviceOrientationDetection"] = function (request, data, root) {
  var i2252 = root || request.c( 'DeviceOrientationDetection' )
  var i2253 = data
  return i2252
}

Deserializers["ElementsOrientationScale"] = function (request, data, root) {
  var i2254 = root || request.c( 'ElementsOrientationScale' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'level')
  request.r(i2255[2], i2255[3], 0, i2254, 'tutorialText')
  request.r(i2255[4], i2255[5], 0, i2254, 'iqSlider')
  request.r(i2255[6], i2255[7], 0, i2254, 'endgamePopup')
  request.r(i2255[8], i2255[9], 0, i2254, 'gameIcon')
  return i2254
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i2256 = root || request.c( 'SoundManager' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'sfxObject')
  request.r(i2257[2], i2257[3], 0, i2256, 'bgTheme')
  request.r(i2257[4], i2257[5], 0, i2256, 'winSfx')
  request.r(i2257[6], i2257[7], 0, i2256, 'loseSfx')
  return i2256
}

Deserializers["InputManagerLevelCircleMaze"] = function (request, data, root) {
  var i2258 = root || request.c( 'InputManagerLevelCircleMaze' )
  var i2259 = data
  i2258.newInputThreshold = i2259[0]
  return i2258
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'm_FirstSelected')
  i2260.m_sendNavigationEvents = !!i2261[2]
  i2260.m_DragThreshold = i2261[3]
  return i2260
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2263 = data
  i2262.m_HorizontalAxis = i2263[0]
  i2262.m_VerticalAxis = i2263[1]
  i2262.m_SubmitButton = i2263[2]
  i2262.m_CancelButton = i2263[3]
  i2262.m_InputActionsPerSecond = i2263[4]
  i2262.m_RepeatDelay = i2263[5]
  i2262.m_ForceModuleActive = !!i2263[6]
  i2262.m_SendPointerHoverToParent = !!i2263[7]
  return i2262
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2264 = root || request.c( 'UIManager' )
  var i2265 = data
  request.r(i2265[0], i2265[1], 0, i2264, 'tutorialText')
  request.r(i2265[2], i2265[3], 0, i2264, 'FadeBG')
  request.r(i2265[4], i2265[5], 0, i2264, 'endGamePopUp')
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2267 = data
  i2266.pivot = new pc.Vec2( i2267[0], i2267[1] )
  i2266.anchorMin = new pc.Vec2( i2267[2], i2267[3] )
  i2266.anchorMax = new pc.Vec2( i2267[4], i2267[5] )
  i2266.sizeDelta = new pc.Vec2( i2267[6], i2267[7] )
  i2266.anchoredPosition3D = new pc.Vec3( i2267[8], i2267[9], i2267[10] )
  i2266.rotation = new pc.Quat(i2267[11], i2267[12], i2267[13], i2267[14])
  i2266.scale = new pc.Vec3( i2267[15], i2267[16], i2267[17] )
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.planeDistance = i2269[1]
  i2268.referencePixelsPerUnit = i2269[2]
  i2268.isFallbackOverlay = !!i2269[3]
  i2268.renderMode = i2269[4]
  i2268.renderOrder = i2269[5]
  i2268.sortingLayerName = i2269[6]
  i2268.sortingOrder = i2269[7]
  i2268.scaleFactor = i2269[8]
  request.r(i2269[9], i2269[10], 0, i2268, 'worldCamera')
  i2268.overrideSorting = !!i2269[11]
  i2268.pixelPerfect = !!i2269[12]
  i2268.targetDisplay = i2269[13]
  i2268.overridePixelPerfect = !!i2269[14]
  return i2268
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2271 = data
  i2270.m_UiScaleMode = i2271[0]
  i2270.m_ReferencePixelsPerUnit = i2271[1]
  i2270.m_ScaleFactor = i2271[2]
  i2270.m_ReferenceResolution = new pc.Vec2( i2271[3], i2271[4] )
  i2270.m_ScreenMatchMode = i2271[5]
  i2270.m_MatchWidthOrHeight = i2271[6]
  i2270.m_PhysicalUnit = i2271[7]
  i2270.m_FallbackScreenDPI = i2271[8]
  i2270.m_DefaultSpriteDPI = i2271[9]
  i2270.m_DynamicPixelsPerUnit = i2271[10]
  i2270.m_PresetInfoIsWorld = !!i2271[11]
  return i2270
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2273 = data
  i2272.m_IgnoreReversedGraphics = !!i2273[0]
  i2272.m_BlockingObjects = i2273[1]
  i2272.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2273[2] )
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2275 = data
  i2274.cullTransparentMesh = !!i2275[0]
  return i2274
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2276 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2277 = data
  i2276.m_hasFontAssetChanged = !!i2277[0]
  request.r(i2277[1], i2277[2], 0, i2276, 'm_baseMaterial')
  i2276.m_maskOffset = new pc.Vec4( i2277[3], i2277[4], i2277[5], i2277[6] )
  i2276.m_text = i2277[7]
  i2276.m_isRightToLeft = !!i2277[8]
  request.r(i2277[9], i2277[10], 0, i2276, 'm_fontAsset')
  request.r(i2277[11], i2277[12], 0, i2276, 'm_sharedMaterial')
  var i2279 = i2277[13]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 2, i2278, '')
  }
  i2276.m_fontSharedMaterials = i2278
  request.r(i2277[14], i2277[15], 0, i2276, 'm_fontMaterial')
  var i2281 = i2277[16]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 2) {
  request.r(i2281[i + 0], i2281[i + 1], 2, i2280, '')
  }
  i2276.m_fontMaterials = i2280
  i2276.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2277[17], i2277[18], i2277[19], i2277[20])
  i2276.m_fontColor = new pc.Color(i2277[21], i2277[22], i2277[23], i2277[24])
  i2276.m_enableVertexGradient = !!i2277[25]
  i2276.m_colorMode = i2277[26]
  i2276.m_fontColorGradient = request.d('TMPro.VertexGradient', i2277[27], i2276.m_fontColorGradient)
  request.r(i2277[28], i2277[29], 0, i2276, 'm_fontColorGradientPreset')
  request.r(i2277[30], i2277[31], 0, i2276, 'm_spriteAsset')
  i2276.m_tintAllSprites = !!i2277[32]
  request.r(i2277[33], i2277[34], 0, i2276, 'm_StyleSheet')
  i2276.m_TextStyleHashCode = i2277[35]
  i2276.m_overrideHtmlColors = !!i2277[36]
  i2276.m_faceColor = UnityEngine.Color32.ConstructColor(i2277[37], i2277[38], i2277[39], i2277[40])
  i2276.m_fontSize = i2277[41]
  i2276.m_fontSizeBase = i2277[42]
  i2276.m_fontWeight = i2277[43]
  i2276.m_enableAutoSizing = !!i2277[44]
  i2276.m_fontSizeMin = i2277[45]
  i2276.m_fontSizeMax = i2277[46]
  i2276.m_fontStyle = i2277[47]
  i2276.m_HorizontalAlignment = i2277[48]
  i2276.m_VerticalAlignment = i2277[49]
  i2276.m_textAlignment = i2277[50]
  i2276.m_characterSpacing = i2277[51]
  i2276.m_wordSpacing = i2277[52]
  i2276.m_lineSpacing = i2277[53]
  i2276.m_lineSpacingMax = i2277[54]
  i2276.m_paragraphSpacing = i2277[55]
  i2276.m_charWidthMaxAdj = i2277[56]
  i2276.m_enableWordWrapping = !!i2277[57]
  i2276.m_wordWrappingRatios = i2277[58]
  i2276.m_overflowMode = i2277[59]
  request.r(i2277[60], i2277[61], 0, i2276, 'm_linkedTextComponent')
  request.r(i2277[62], i2277[63], 0, i2276, 'parentLinkedComponent')
  i2276.m_enableKerning = !!i2277[64]
  i2276.m_enableExtraPadding = !!i2277[65]
  i2276.checkPaddingRequired = !!i2277[66]
  i2276.m_isRichText = !!i2277[67]
  i2276.m_parseCtrlCharacters = !!i2277[68]
  i2276.m_isOrthographic = !!i2277[69]
  i2276.m_isCullingEnabled = !!i2277[70]
  i2276.m_horizontalMapping = i2277[71]
  i2276.m_verticalMapping = i2277[72]
  i2276.m_uvLineOffset = i2277[73]
  i2276.m_geometrySortingOrder = i2277[74]
  i2276.m_IsTextObjectScaleStatic = !!i2277[75]
  i2276.m_VertexBufferAutoSizeReduction = !!i2277[76]
  i2276.m_useMaxVisibleDescender = !!i2277[77]
  i2276.m_pageToDisplay = i2277[78]
  i2276.m_margin = new pc.Vec4( i2277[79], i2277[80], i2277[81], i2277[82] )
  i2276.m_isUsingLegacyAnimationComponent = !!i2277[83]
  i2276.m_isVolumetricText = !!i2277[84]
  request.r(i2277[85], i2277[86], 0, i2276, 'm_Material')
  i2276.m_Maskable = !!i2277[87]
  i2276.m_Color = new pc.Color(i2277[88], i2277[89], i2277[90], i2277[91])
  i2276.m_RaycastTarget = !!i2277[92]
  i2276.m_RaycastPadding = new pc.Vec4( i2277[93], i2277[94], i2277[95], i2277[96] )
  return i2276
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2282 = root || request.c( 'TMPro.VertexGradient' )
  var i2283 = data
  i2282.topLeft = new pc.Color(i2283[0], i2283[1], i2283[2], i2283[3])
  i2282.topRight = new pc.Color(i2283[4], i2283[5], i2283[6], i2283[7])
  i2282.bottomLeft = new pc.Color(i2283[8], i2283[9], i2283[10], i2283[11])
  i2282.bottomRight = new pc.Color(i2283[12], i2283[13], i2283[14], i2283[15])
  return i2282
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'm_FillRect')
  request.r(i2285[2], i2285[3], 0, i2284, 'm_HandleRect')
  i2284.m_Direction = i2285[4]
  i2284.m_MinValue = i2285[5]
  i2284.m_MaxValue = i2285[6]
  i2284.m_WholeNumbers = !!i2285[7]
  i2284.m_Value = i2285[8]
  i2284.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2285[9], i2284.m_OnValueChanged)
  i2284.m_Navigation = request.d('UnityEngine.UI.Navigation', i2285[10], i2284.m_Navigation)
  i2284.m_Transition = i2285[11]
  i2284.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2285[12], i2284.m_Colors)
  i2284.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2285[13], i2284.m_SpriteState)
  i2284.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2285[14], i2284.m_AnimationTriggers)
  i2284.m_Interactable = !!i2285[15]
  request.r(i2285[16], i2285[17], 0, i2284, 'm_TargetGraphic')
  return i2284
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2287 = data
  i2286.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2287[0], i2286.m_PersistentCalls)
  return i2286
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2289 = data
  var i2291 = i2289[0]
  var i2290 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.add(request.d('UnityEngine.Events.PersistentCall', i2291[i + 0]));
  }
  i2288.m_Calls = i2290
  return i2288
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'm_Target')
  i2294.m_TargetAssemblyTypeName = i2295[2]
  i2294.m_MethodName = i2295[3]
  i2294.m_Mode = i2295[4]
  i2294.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2295[5], i2294.m_Arguments)
  i2294.m_CallState = i2295[6]
  return i2294
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2297 = data
  i2296.m_Mode = i2297[0]
  i2296.m_WrapAround = !!i2297[1]
  request.r(i2297[2], i2297[3], 0, i2296, 'm_SelectOnUp')
  request.r(i2297[4], i2297[5], 0, i2296, 'm_SelectOnDown')
  request.r(i2297[6], i2297[7], 0, i2296, 'm_SelectOnLeft')
  request.r(i2297[8], i2297[9], 0, i2296, 'm_SelectOnRight')
  return i2296
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2299 = data
  i2298.m_NormalColor = new pc.Color(i2299[0], i2299[1], i2299[2], i2299[3])
  i2298.m_HighlightedColor = new pc.Color(i2299[4], i2299[5], i2299[6], i2299[7])
  i2298.m_PressedColor = new pc.Color(i2299[8], i2299[9], i2299[10], i2299[11])
  i2298.m_SelectedColor = new pc.Color(i2299[12], i2299[13], i2299[14], i2299[15])
  i2298.m_DisabledColor = new pc.Color(i2299[16], i2299[17], i2299[18], i2299[19])
  i2298.m_ColorMultiplier = i2299[20]
  i2298.m_FadeDuration = i2299[21]
  return i2298
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2301 = data
  request.r(i2301[0], i2301[1], 0, i2300, 'm_HighlightedSprite')
  request.r(i2301[2], i2301[3], 0, i2300, 'm_PressedSprite')
  request.r(i2301[4], i2301[5], 0, i2300, 'm_SelectedSprite')
  request.r(i2301[6], i2301[7], 0, i2300, 'm_DisabledSprite')
  return i2300
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2303 = data
  i2302.m_NormalTrigger = i2303[0]
  i2302.m_HighlightedTrigger = i2303[1]
  i2302.m_PressedTrigger = i2303[2]
  i2302.m_SelectedTrigger = i2303[3]
  i2302.m_DisabledTrigger = i2303[4]
  return i2302
}

Deserializers["IQSlider"] = function (request, data, root) {
  var i2304 = root || request.c( 'IQSlider' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'slider')
  i2304.sliderTimer = i2305[2]
  request.r(i2305[3], i2305[4], 0, i2304, 'numberText')
  request.r(i2305[5], i2305[6], 0, i2304, 'brain')
  request.r(i2305[7], i2305[8], 0, i2304, 'emergencySfx')
  i2304.emergencyColor = new pc.Color(i2305[9], i2305[10], i2305[11], i2305[12])
  return i2304
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.Image' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'm_Sprite')
  i2306.m_Type = i2307[2]
  i2306.m_PreserveAspect = !!i2307[3]
  i2306.m_FillCenter = !!i2307[4]
  i2306.m_FillMethod = i2307[5]
  i2306.m_FillAmount = i2307[6]
  i2306.m_FillClockwise = !!i2307[7]
  i2306.m_FillOrigin = i2307[8]
  i2306.m_UseSpriteMesh = !!i2307[9]
  i2306.m_PixelsPerUnitMultiplier = i2307[10]
  request.r(i2307[11], i2307[12], 0, i2306, 'm_Material')
  i2306.m_Maskable = !!i2307[13]
  i2306.m_Color = new pc.Color(i2307[14], i2307[15], i2307[16], i2307[17])
  i2306.m_RaycastTarget = !!i2307[18]
  i2306.m_RaycastPadding = new pc.Vec4( i2307[19], i2307[20], i2307[21], i2307[22] )
  return i2306
}

Deserializers["EndGamePopup"] = function (request, data, root) {
  var i2308 = root || request.c( 'EndGamePopup' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'popupTransform')
  request.r(i2309[2], i2309[3], 0, i2308, 'buttonText')
  request.r(i2309[4], i2309[5], 0, i2308, 'victoryText')
  request.r(i2309[6], i2309[7], 0, i2308, 'loseText')
  return i2308
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.UI.Button' )
  var i2311 = data
  i2310.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2311[0], i2310.m_OnClick)
  i2310.m_Navigation = request.d('UnityEngine.UI.Navigation', i2311[1], i2310.m_Navigation)
  i2310.m_Transition = i2311[2]
  i2310.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2311[3], i2310.m_Colors)
  i2310.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2311[4], i2310.m_SpriteState)
  i2310.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2311[5], i2310.m_AnimationTriggers)
  i2310.m_Interactable = !!i2311[6]
  request.r(i2311[7], i2311[8], 0, i2310, 'm_TargetGraphic')
  return i2310
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2313 = data
  i2312.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2313[0], i2312.m_PersistentCalls)
  return i2312
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'm_ObjectArgument')
  i2314.m_ObjectArgumentAssemblyTypeName = i2315[2]
  i2314.m_IntArgument = i2315[3]
  i2314.m_FloatArgument = i2315[4]
  i2314.m_StringArgument = i2315[5]
  i2314.m_BoolArgument = !!i2315[6]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2317 = data
  i2316.ambientIntensity = i2317[0]
  i2316.reflectionIntensity = i2317[1]
  i2316.ambientMode = i2317[2]
  i2316.ambientLight = new pc.Color(i2317[3], i2317[4], i2317[5], i2317[6])
  i2316.ambientSkyColor = new pc.Color(i2317[7], i2317[8], i2317[9], i2317[10])
  i2316.ambientGroundColor = new pc.Color(i2317[11], i2317[12], i2317[13], i2317[14])
  i2316.ambientEquatorColor = new pc.Color(i2317[15], i2317[16], i2317[17], i2317[18])
  i2316.fogColor = new pc.Color(i2317[19], i2317[20], i2317[21], i2317[22])
  i2316.fogEndDistance = i2317[23]
  i2316.fogStartDistance = i2317[24]
  i2316.fogDensity = i2317[25]
  i2316.fog = !!i2317[26]
  request.r(i2317[27], i2317[28], 0, i2316, 'skybox')
  i2316.fogMode = i2317[29]
  var i2319 = i2317[30]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2319[i + 0]) );
  }
  i2316.lightmaps = i2318
  i2316.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2317[31], i2316.lightProbes)
  i2316.lightmapsMode = i2317[32]
  i2316.mixedBakeMode = i2317[33]
  i2316.environmentLightingMode = i2317[34]
  i2316.ambientProbe = new pc.SphericalHarmonicsL2(i2317[35])
  i2316.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2317[36])
  i2316.useReferenceAmbientProbe = !!i2317[37]
  request.r(i2317[38], i2317[39], 0, i2316, 'customReflection')
  request.r(i2317[40], i2317[41], 0, i2316, 'defaultReflection')
  i2316.defaultReflectionMode = i2317[42]
  i2316.defaultReflectionResolution = i2317[43]
  i2316.sunLightObjectId = i2317[44]
  i2316.pixelLightCount = i2317[45]
  i2316.defaultReflectionHDR = !!i2317[46]
  i2316.hasLightDataAsset = !!i2317[47]
  i2316.hasManualGenerate = !!i2317[48]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'lightmapColor')
  request.r(i2323[2], i2323[3], 0, i2322, 'lightmapDirection')
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2324 = root || new UnityEngine.LightProbes()
  var i2325 = data
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i2333 = data
  i2332.name = i2333[0]
  i2332.bounciness = i2333[1]
  i2332.friction = i2333[2]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2335 = data
  var i2337 = i2335[0]
  var i2336 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2337[i + 0]));
  }
  i2334.ShaderCompilationErrors = i2336
  i2334.name = i2335[1]
  i2334.guid = i2335[2]
  var i2339 = i2335[3]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( i2339[i + 0] );
  }
  i2334.shaderDefinedKeywords = i2338
  var i2341 = i2335[4]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2341[i + 0]) );
  }
  i2334.passes = i2340
  var i2343 = i2335[5]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2343[i + 0]) );
  }
  i2334.usePasses = i2342
  var i2345 = i2335[6]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2345[i + 0]) );
  }
  i2334.defaultParameterValues = i2344
  request.r(i2335[7], i2335[8], 0, i2334, 'unityFallbackShader')
  i2334.readDepth = !!i2335[9]
  i2334.isCreatedByShaderGraph = !!i2335[10]
  i2334.compiled = !!i2335[11]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2349 = data
  i2348.shaderName = i2349[0]
  i2348.errorMessage = i2349[1]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2352 = root || new pc.UnityShaderPass()
  var i2353 = data
  i2352.id = i2353[0]
  i2352.subShaderIndex = i2353[1]
  i2352.name = i2353[2]
  i2352.passType = i2353[3]
  i2352.grabPassTextureName = i2353[4]
  i2352.usePass = !!i2353[5]
  i2352.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2353[6], i2352.zTest)
  i2352.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2353[7], i2352.zWrite)
  i2352.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2353[8], i2352.culling)
  i2352.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2353[9], i2352.blending)
  i2352.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2353[10], i2352.alphaBlending)
  i2352.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2353[11], i2352.colorWriteMask)
  i2352.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2353[12], i2352.offsetUnits)
  i2352.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2353[13], i2352.offsetFactor)
  i2352.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2353[14], i2352.stencilRef)
  i2352.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2353[15], i2352.stencilReadMask)
  i2352.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2353[16], i2352.stencilWriteMask)
  i2352.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2353[17], i2352.stencilOp)
  i2352.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2353[18], i2352.stencilOpFront)
  i2352.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2353[19], i2352.stencilOpBack)
  var i2355 = i2353[20]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2355[i + 0]) );
  }
  i2352.tags = i2354
  var i2357 = i2353[21]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( i2357[i + 0] );
  }
  i2352.passDefinedKeywords = i2356
  var i2359 = i2353[22]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2359[i + 0]) );
  }
  i2352.passDefinedKeywordGroups = i2358
  var i2361 = i2353[23]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2361[i + 0]) );
  }
  i2352.variants = i2360
  var i2363 = i2353[24]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2363[i + 0]) );
  }
  i2352.excludedVariants = i2362
  i2352.hasDepthReader = !!i2353[25]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2365 = data
  i2364.val = i2365[0]
  i2364.name = i2365[1]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2367 = data
  i2366.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[0], i2366.src)
  i2366.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[1], i2366.dst)
  i2366.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[2], i2366.op)
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2369 = data
  i2368.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2369[0], i2368.pass)
  i2368.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2369[1], i2368.fail)
  i2368.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2369[2], i2368.zFail)
  i2368.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2369[3], i2368.comp)
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2373 = data
  i2372.name = i2373[0]
  i2372.value = i2373[1]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2377 = data
  var i2379 = i2377[0]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( i2379[i + 0] );
  }
  i2376.keywords = i2378
  i2376.hasDiscard = !!i2377[1]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2383 = data
  i2382.passId = i2383[0]
  i2382.subShaderIndex = i2383[1]
  var i2385 = i2383[2]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( i2385[i + 0] );
  }
  i2382.keywords = i2384
  i2382.vertexProgram = i2383[3]
  i2382.fragmentProgram = i2383[4]
  i2382.exportedForWebGl2 = !!i2383[5]
  i2382.readDepth = !!i2383[6]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'shader')
  i2388.pass = i2389[2]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2393 = data
  i2392.name = i2393[0]
  i2392.type = i2393[1]
  i2392.value = new pc.Vec4( i2393[2], i2393[3], i2393[4], i2393[5] )
  i2392.textureValue = i2393[6]
  i2392.shaderPropertyFlag = i2393[7]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2395 = data
  i2394.name = i2395[0]
  request.r(i2395[1], i2395[2], 0, i2394, 'texture')
  i2394.aabb = i2395[3]
  i2394.vertices = i2395[4]
  i2394.triangles = i2395[5]
  i2394.textureRect = UnityEngine.Rect.MinMaxRect(i2395[6], i2395[7], i2395[8], i2395[9])
  i2394.packedRect = UnityEngine.Rect.MinMaxRect(i2395[10], i2395[11], i2395[12], i2395[13])
  i2394.border = new pc.Vec4( i2395[14], i2395[15], i2395[16], i2395[17] )
  i2394.transparency = i2395[18]
  i2394.bounds = i2395[19]
  i2394.pixelsPerUnit = i2395[20]
  i2394.textureWidth = i2395[21]
  i2394.textureHeight = i2395[22]
  i2394.nativeSize = new pc.Vec2( i2395[23], i2395[24] )
  i2394.pivot = new pc.Vec2( i2395[25], i2395[26] )
  i2394.textureRectOffset = new pc.Vec2( i2395[27], i2395[28] )
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2397 = data
  i2396.name = i2397[0]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2399 = data
  i2398.name = i2399[0]
  i2398.wrapMode = i2399[1]
  i2398.isLooping = !!i2399[2]
  i2398.length = i2399[3]
  var i2401 = i2399[4]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2401[i + 0]) );
  }
  i2398.curves = i2400
  var i2403 = i2399[5]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2403[i + 0]) );
  }
  i2398.events = i2402
  i2398.halfPrecision = !!i2399[6]
  i2398._frameRate = i2399[7]
  i2398.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2399[8], i2398.localBounds)
  i2398.hasMuscleCurves = !!i2399[9]
  var i2405 = i2399[10]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( i2405[i + 0] );
  }
  i2398.clipMuscleConstant = i2404
  i2398.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2399[11], i2398.clipBindingConstant)
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2409 = data
  i2408.path = i2409[0]
  i2408.hash = i2409[1]
  i2408.componentType = i2409[2]
  i2408.property = i2409[3]
  i2408.keys = i2409[4]
  var i2411 = i2409[5]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2411[i + 0]) );
  }
  i2408.objectReferenceKeys = i2410
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2415 = data
  i2414.time = i2415[0]
  request.r(i2415[1], i2415[2], 0, i2414, 'value')
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2419 = data
  i2418.functionName = i2419[0]
  i2418.floatParameter = i2419[1]
  i2418.intParameter = i2419[2]
  i2418.stringParameter = i2419[3]
  request.r(i2419[4], i2419[5], 0, i2418, 'objectReferenceParameter')
  i2418.time = i2419[6]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2421 = data
  i2420.center = new pc.Vec3( i2421[0], i2421[1], i2421[2] )
  i2420.extends = new pc.Vec3( i2421[3], i2421[4], i2421[5] )
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2425 = data
  var i2427 = i2425[0]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( i2427[i + 0] );
  }
  i2424.genericBindings = i2426
  var i2429 = i2425[1]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( i2429[i + 0] );
  }
  i2424.pptrCurveMapping = i2428
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2431 = data
  i2430.name = i2431[0]
  i2430.ascent = i2431[1]
  i2430.originalLineHeight = i2431[2]
  i2430.fontSize = i2431[3]
  var i2433 = i2431[4]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2433[i + 0]) );
  }
  i2430.characterInfo = i2432
  request.r(i2431[5], i2431[6], 0, i2430, 'texture')
  i2430.originalFontSize = i2431[7]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2437 = data
  i2436.index = i2437[0]
  i2436.advance = i2437[1]
  i2436.bearing = i2437[2]
  i2436.glyphWidth = i2437[3]
  i2436.glyphHeight = i2437[4]
  i2436.minX = i2437[5]
  i2436.maxX = i2437[6]
  i2436.minY = i2437[7]
  i2436.maxY = i2437[8]
  i2436.uvBottomLeftX = i2437[9]
  i2436.uvBottomLeftY = i2437[10]
  i2436.uvBottomRightX = i2437[11]
  i2436.uvBottomRightY = i2437[12]
  i2436.uvTopLeftX = i2437[13]
  i2436.uvTopLeftY = i2437[14]
  i2436.uvTopRightX = i2437[15]
  i2436.uvTopRightY = i2437[16]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2439 = data
  i2438.name = i2439[0]
  var i2441 = i2439[1]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2441[i + 0]) );
  }
  i2438.layers = i2440
  var i2443 = i2439[2]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2443[i + 0]) );
  }
  i2438.parameters = i2442
  i2438.animationClips = i2439[3]
  i2438.avatarUnsupported = i2439[4]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2447 = data
  i2446.name = i2447[0]
  i2446.defaultWeight = i2447[1]
  i2446.blendingMode = i2447[2]
  i2446.avatarMask = i2447[3]
  i2446.syncedLayerIndex = i2447[4]
  i2446.syncedLayerAffectsTiming = !!i2447[5]
  i2446.syncedLayers = i2447[6]
  i2446.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2447[7], i2446.stateMachine)
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2449 = data
  i2448.id = i2449[0]
  i2448.name = i2449[1]
  i2448.path = i2449[2]
  var i2451 = i2449[3]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2451[i + 0]) );
  }
  i2448.states = i2450
  var i2453 = i2449[4]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2453[i + 0]) );
  }
  i2448.machines = i2452
  var i2455 = i2449[5]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2455[i + 0]) );
  }
  i2448.entryStateTransitions = i2454
  var i2457 = i2449[6]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2457[i + 0]) );
  }
  i2448.exitStateTransitions = i2456
  var i2459 = i2449[7]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2459[i + 0]) );
  }
  i2448.anyStateTransitions = i2458
  i2448.defaultStateId = i2449[8]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2463 = data
  i2462.id = i2463[0]
  i2462.name = i2463[1]
  i2462.cycleOffset = i2463[2]
  i2462.cycleOffsetParameter = i2463[3]
  i2462.cycleOffsetParameterActive = !!i2463[4]
  i2462.mirror = !!i2463[5]
  i2462.mirrorParameter = i2463[6]
  i2462.mirrorParameterActive = !!i2463[7]
  i2462.motionId = i2463[8]
  i2462.nameHash = i2463[9]
  i2462.fullPathHash = i2463[10]
  i2462.speed = i2463[11]
  i2462.speedParameter = i2463[12]
  i2462.speedParameterActive = !!i2463[13]
  i2462.tag = i2463[14]
  i2462.tagHash = i2463[15]
  i2462.writeDefaultValues = !!i2463[16]
  var i2465 = i2463[17]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 2) {
  request.r(i2465[i + 0], i2465[i + 1], 2, i2464, '')
  }
  i2462.behaviours = i2464
  var i2467 = i2463[18]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2467[i + 0]) );
  }
  i2462.transitions = i2466
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2473 = data
  i2472.fullPath = i2473[0]
  i2472.canTransitionToSelf = !!i2473[1]
  i2472.duration = i2473[2]
  i2472.exitTime = i2473[3]
  i2472.hasExitTime = !!i2473[4]
  i2472.hasFixedDuration = !!i2473[5]
  i2472.interruptionSource = i2473[6]
  i2472.offset = i2473[7]
  i2472.orderedInterruption = !!i2473[8]
  i2472.destinationStateId = i2473[9]
  i2472.isExit = !!i2473[10]
  i2472.mute = !!i2473[11]
  i2472.solo = !!i2473[12]
  var i2475 = i2473[13]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2475[i + 0]) );
  }
  i2472.conditions = i2474
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2481 = data
  i2480.destinationStateId = i2481[0]
  i2480.isExit = !!i2481[1]
  i2480.mute = !!i2481[2]
  i2480.solo = !!i2481[3]
  var i2483 = i2481[4]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2483[i + 0]) );
  }
  i2480.conditions = i2482
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2487 = data
  i2486.mode = i2487[0]
  i2486.parameter = i2487[1]
  i2486.threshold = i2487[2]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2491 = data
  i2490.defaultBool = !!i2491[0]
  i2490.defaultFloat = i2491[1]
  i2490.defaultInt = i2491[2]
  i2490.name = i2491[3]
  i2490.nameHash = i2491[4]
  i2490.type = i2491[5]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2493 = data
  i2492.name = i2493[0]
  i2492.bytes64 = i2493[1]
  i2492.data = i2493[2]
  return i2492
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2494 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2495 = data
  var i2497 = i2495[0]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 2) {
  request.r(i2497[i + 0], i2497[i + 1], 2, i2496, '')
  }
  i2494.atlasAssets = i2496
  i2494.scale = i2495[1]
  request.r(i2495[2], i2495[3], 0, i2494, 'skeletonJSON')
  i2494.isUpgradingBlendModeMaterials = !!i2495[4]
  i2494.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2495[5], i2494.blendModeMaterials)
  var i2499 = i2495[6]
  var i2498 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 1, i2498, '')
  }
  i2494.skeletonDataModifiers = i2498
  var i2501 = i2495[7]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( i2501[i + 0] );
  }
  i2494.fromAnimation = i2500
  var i2503 = i2495[8]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( i2503[i + 0] );
  }
  i2494.toAnimation = i2502
  i2494.duration = i2495[9]
  i2494.defaultMix = i2495[10]
  request.r(i2495[11], i2495[12], 0, i2494, 'controller')
  return i2494
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2506 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2507 = data
  i2506.applyAdditiveMaterial = !!i2507[0]
  var i2509 = i2507[1]
  var i2508 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2509[i + 0]));
  }
  i2506.additiveMaterials = i2508
  var i2511 = i2507[2]
  var i2510 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2511[i + 0]));
  }
  i2506.multiplyMaterials = i2510
  var i2513 = i2507[3]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2513[i + 0]));
  }
  i2506.screenMaterials = i2512
  i2506.requiresBlendModeMaterials = !!i2507[4]
  return i2506
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2516 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2517 = data
  i2516.pageName = i2517[0]
  request.r(i2517[1], i2517[2], 0, i2516, 'material')
  return i2516
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2520 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'atlasFile')
  var i2523 = i2521[2]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 2, i2522, '')
  }
  i2520.materials = i2522
  i2520.textureLoadingMode = i2521[3]
  request.r(i2521[4], i2521[5], 0, i2520, 'onDemandTextureLoader')
  return i2520
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2524 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2525 = data
  i2524.hashCode = i2525[0]
  request.r(i2525[1], i2525[2], 0, i2524, 'material')
  i2524.materialHashCode = i2525[3]
  request.r(i2525[4], i2525[5], 0, i2524, 'atlas')
  i2524.normalStyle = i2525[6]
  i2524.normalSpacingOffset = i2525[7]
  i2524.boldStyle = i2525[8]
  i2524.boldSpacing = i2525[9]
  i2524.italicStyle = i2525[10]
  i2524.tabSize = i2525[11]
  i2524.m_Version = i2525[12]
  i2524.m_SourceFontFileGUID = i2525[13]
  request.r(i2525[14], i2525[15], 0, i2524, 'm_SourceFontFile_EditorRef')
  request.r(i2525[16], i2525[17], 0, i2524, 'm_SourceFontFile')
  i2524.m_AtlasPopulationMode = i2525[18]
  i2524.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2525[19], i2524.m_FaceInfo)
  var i2527 = i2525[20]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.add(request.d('UnityEngine.TextCore.Glyph', i2527[i + 0]));
  }
  i2524.m_GlyphTable = i2526
  var i2529 = i2525[21]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.add(request.d('TMPro.TMP_Character', i2529[i + 0]));
  }
  i2524.m_CharacterTable = i2528
  var i2531 = i2525[22]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 2) {
  request.r(i2531[i + 0], i2531[i + 1], 2, i2530, '')
  }
  i2524.m_AtlasTextures = i2530
  i2524.m_AtlasTextureIndex = i2525[23]
  i2524.m_IsMultiAtlasTexturesEnabled = !!i2525[24]
  i2524.m_ClearDynamicDataOnBuild = !!i2525[25]
  var i2533 = i2525[26]
  var i2532 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.add(request.d('UnityEngine.TextCore.GlyphRect', i2533[i + 0]));
  }
  i2524.m_UsedGlyphRects = i2532
  var i2535 = i2525[27]
  var i2534 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.add(request.d('UnityEngine.TextCore.GlyphRect', i2535[i + 0]));
  }
  i2524.m_FreeGlyphRects = i2534
  i2524.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2525[28], i2524.m_fontInfo)
  i2524.m_AtlasWidth = i2525[29]
  i2524.m_AtlasHeight = i2525[30]
  i2524.m_AtlasPadding = i2525[31]
  i2524.m_AtlasRenderMode = i2525[32]
  var i2537 = i2525[33]
  var i2536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.add(request.d('TMPro.TMP_Glyph', i2537[i + 0]));
  }
  i2524.m_glyphInfoList = i2536
  i2524.m_KerningTable = request.d('TMPro.KerningTable', i2525[34], i2524.m_KerningTable)
  i2524.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2525[35], i2524.m_FontFeatureTable)
  var i2539 = i2525[36]
  var i2538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 1, i2538, '')
  }
  i2524.fallbackFontAssets = i2538
  var i2541 = i2525[37]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2541.length; i += 2) {
  request.r(i2541[i + 0], i2541[i + 1], 1, i2540, '')
  }
  i2524.m_FallbackFontAssetTable = i2540
  i2524.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2525[38], i2524.m_CreationSettings)
  var i2543 = i2525[39]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('TMPro.TMP_FontWeightPair', i2543[i + 0]) );
  }
  i2524.m_FontWeightTable = i2542
  var i2545 = i2525[40]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('TMPro.TMP_FontWeightPair', i2545[i + 0]) );
  }
  i2524.fontWeights = i2544
  return i2524
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2546 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2547 = data
  i2546.m_FaceIndex = i2547[0]
  i2546.m_FamilyName = i2547[1]
  i2546.m_StyleName = i2547[2]
  i2546.m_PointSize = i2547[3]
  i2546.m_Scale = i2547[4]
  i2546.m_UnitsPerEM = i2547[5]
  i2546.m_LineHeight = i2547[6]
  i2546.m_AscentLine = i2547[7]
  i2546.m_CapLine = i2547[8]
  i2546.m_MeanLine = i2547[9]
  i2546.m_Baseline = i2547[10]
  i2546.m_DescentLine = i2547[11]
  i2546.m_SuperscriptOffset = i2547[12]
  i2546.m_SuperscriptSize = i2547[13]
  i2546.m_SubscriptOffset = i2547[14]
  i2546.m_SubscriptSize = i2547[15]
  i2546.m_UnderlineOffset = i2547[16]
  i2546.m_UnderlineThickness = i2547[17]
  i2546.m_StrikethroughOffset = i2547[18]
  i2546.m_StrikethroughThickness = i2547[19]
  i2546.m_TabWidth = i2547[20]
  return i2546
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2550 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2551 = data
  i2550.m_Index = i2551[0]
  i2550.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2551[1], i2550.m_Metrics)
  i2550.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2551[2], i2550.m_GlyphRect)
  i2550.m_Scale = i2551[3]
  i2550.m_AtlasIndex = i2551[4]
  i2550.m_ClassDefinitionType = i2551[5]
  return i2550
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2552 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2553 = data
  i2552.m_Width = i2553[0]
  i2552.m_Height = i2553[1]
  i2552.m_HorizontalBearingX = i2553[2]
  i2552.m_HorizontalBearingY = i2553[3]
  i2552.m_HorizontalAdvance = i2553[4]
  return i2552
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2554 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2555 = data
  i2554.m_X = i2555[0]
  i2554.m_Y = i2555[1]
  i2554.m_Width = i2555[2]
  i2554.m_Height = i2555[3]
  return i2554
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2558 = root || request.c( 'TMPro.TMP_Character' )
  var i2559 = data
  i2558.m_ElementType = i2559[0]
  i2558.m_Unicode = i2559[1]
  i2558.m_GlyphIndex = i2559[2]
  i2558.m_Scale = i2559[3]
  return i2558
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2564 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2565 = data
  i2564.Name = i2565[0]
  i2564.PointSize = i2565[1]
  i2564.Scale = i2565[2]
  i2564.CharacterCount = i2565[3]
  i2564.LineHeight = i2565[4]
  i2564.Baseline = i2565[5]
  i2564.Ascender = i2565[6]
  i2564.CapHeight = i2565[7]
  i2564.Descender = i2565[8]
  i2564.CenterLine = i2565[9]
  i2564.SuperscriptOffset = i2565[10]
  i2564.SubscriptOffset = i2565[11]
  i2564.SubSize = i2565[12]
  i2564.Underline = i2565[13]
  i2564.UnderlineThickness = i2565[14]
  i2564.strikethrough = i2565[15]
  i2564.strikethroughThickness = i2565[16]
  i2564.TabWidth = i2565[17]
  i2564.Padding = i2565[18]
  i2564.AtlasWidth = i2565[19]
  i2564.AtlasHeight = i2565[20]
  return i2564
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2568 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2569 = data
  i2568.id = i2569[0]
  i2568.x = i2569[1]
  i2568.y = i2569[2]
  i2568.width = i2569[3]
  i2568.height = i2569[4]
  i2568.xOffset = i2569[5]
  i2568.yOffset = i2569[6]
  i2568.xAdvance = i2569[7]
  i2568.scale = i2569[8]
  return i2568
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2570 = root || request.c( 'TMPro.KerningTable' )
  var i2571 = data
  var i2573 = i2571[0]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.add(request.d('TMPro.KerningPair', i2573[i + 0]));
  }
  i2570.kerningPairs = i2572
  return i2570
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2576 = root || request.c( 'TMPro.KerningPair' )
  var i2577 = data
  i2576.xOffset = i2577[0]
  i2576.m_FirstGlyph = i2577[1]
  i2576.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2577[2], i2576.m_FirstGlyphAdjustments)
  i2576.m_SecondGlyph = i2577[3]
  i2576.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2577[4], i2576.m_SecondGlyphAdjustments)
  i2576.m_IgnoreSpacingAdjustments = !!i2577[5]
  return i2576
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2578 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2579 = data
  var i2581 = i2579[0]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2581[i + 0]));
  }
  i2578.m_GlyphPairAdjustmentRecords = i2580
  return i2578
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2584 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2585 = data
  i2584.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2585[0], i2584.m_FirstAdjustmentRecord)
  i2584.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2585[1], i2584.m_SecondAdjustmentRecord)
  i2584.m_FeatureLookupFlags = i2585[2]
  return i2584
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2588 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2589 = data
  i2588.sourceFontFileName = i2589[0]
  i2588.sourceFontFileGUID = i2589[1]
  i2588.pointSizeSamplingMode = i2589[2]
  i2588.pointSize = i2589[3]
  i2588.padding = i2589[4]
  i2588.packingMode = i2589[5]
  i2588.atlasWidth = i2589[6]
  i2588.atlasHeight = i2589[7]
  i2588.characterSetSelectionMode = i2589[8]
  i2588.characterSequence = i2589[9]
  i2588.referencedFontAssetGUID = i2589[10]
  i2588.referencedTextAssetGUID = i2589[11]
  i2588.fontStyle = i2589[12]
  i2588.fontStyleModifier = i2589[13]
  i2588.renderMode = i2589[14]
  i2588.includeFontFeatures = !!i2589[15]
  return i2588
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'regularTypeface')
  request.r(i2593[2], i2593[3], 0, i2592, 'italicTypeface')
  return i2592
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2594 = root || request.c( 'TMPro.TMP_Settings' )
  var i2595 = data
  i2594.m_enableWordWrapping = !!i2595[0]
  i2594.m_enableKerning = !!i2595[1]
  i2594.m_enableExtraPadding = !!i2595[2]
  i2594.m_enableTintAllSprites = !!i2595[3]
  i2594.m_enableParseEscapeCharacters = !!i2595[4]
  i2594.m_EnableRaycastTarget = !!i2595[5]
  i2594.m_GetFontFeaturesAtRuntime = !!i2595[6]
  i2594.m_missingGlyphCharacter = i2595[7]
  i2594.m_warningsDisabled = !!i2595[8]
  request.r(i2595[9], i2595[10], 0, i2594, 'm_defaultFontAsset')
  i2594.m_defaultFontAssetPath = i2595[11]
  i2594.m_defaultFontSize = i2595[12]
  i2594.m_defaultAutoSizeMinRatio = i2595[13]
  i2594.m_defaultAutoSizeMaxRatio = i2595[14]
  i2594.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2595[15], i2595[16] )
  i2594.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2595[17], i2595[18] )
  i2594.m_autoSizeTextContainer = !!i2595[19]
  i2594.m_IsTextObjectScaleStatic = !!i2595[20]
  var i2597 = i2595[21]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 1, i2596, '')
  }
  i2594.m_fallbackFontAssets = i2596
  i2594.m_matchMaterialPreset = !!i2595[22]
  request.r(i2595[23], i2595[24], 0, i2594, 'm_defaultSpriteAsset')
  i2594.m_defaultSpriteAssetPath = i2595[25]
  i2594.m_enableEmojiSupport = !!i2595[26]
  i2594.m_MissingCharacterSpriteUnicode = i2595[27]
  i2594.m_defaultColorGradientPresetsPath = i2595[28]
  request.r(i2595[29], i2595[30], 0, i2594, 'm_defaultStyleSheet')
  i2594.m_StyleSheetsResourcePath = i2595[31]
  request.r(i2595[32], i2595[33], 0, i2594, 'm_leadingCharacters')
  request.r(i2595[34], i2595[35], 0, i2594, 'm_followingCharacters')
  i2594.m_UseModernHangulLineBreakingRules = !!i2595[36]
  return i2594
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2598 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2599 = data
  i2598.m_GlyphIndex = i2599[0]
  i2598.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2599[1], i2598.m_GlyphValueRecord)
  return i2598
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2600 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2601 = data
  i2600.m_XPlacement = i2601[0]
  i2600.m_YPlacement = i2601[1]
  i2600.m_XAdvance = i2601[2]
  i2600.m_YAdvance = i2601[3]
  return i2600
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2603 = data
  i2602.hashCode = i2603[0]
  request.r(i2603[1], i2603[2], 0, i2602, 'material')
  i2602.materialHashCode = i2603[3]
  request.r(i2603[4], i2603[5], 0, i2602, 'spriteSheet')
  var i2605 = i2603[6]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('TMPro.TMP_Sprite', i2605[i + 0]));
  }
  i2602.spriteInfoList = i2604
  var i2607 = i2603[7]
  var i2606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2607.length; i += 2) {
  request.r(i2607[i + 0], i2607[i + 1], 1, i2606, '')
  }
  i2602.fallbackSpriteAssets = i2606
  i2602.m_Version = i2603[8]
  i2602.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2603[9], i2602.m_FaceInfo)
  var i2609 = i2603[10]
  var i2608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.add(request.d('TMPro.TMP_SpriteCharacter', i2609[i + 0]));
  }
  i2602.m_SpriteCharacterTable = i2608
  var i2611 = i2603[11]
  var i2610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.add(request.d('TMPro.TMP_SpriteGlyph', i2611[i + 0]));
  }
  i2602.m_SpriteGlyphTable = i2610
  return i2602
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2614 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2615 = data
  i2614.name = i2615[0]
  i2614.hashCode = i2615[1]
  i2614.unicode = i2615[2]
  i2614.pivot = new pc.Vec2( i2615[3], i2615[4] )
  request.r(i2615[5], i2615[6], 0, i2614, 'sprite')
  i2614.id = i2615[7]
  i2614.x = i2615[8]
  i2614.y = i2615[9]
  i2614.width = i2615[10]
  i2614.height = i2615[11]
  i2614.xOffset = i2615[12]
  i2614.yOffset = i2615[13]
  i2614.xAdvance = i2615[14]
  i2614.scale = i2615[15]
  return i2614
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2620 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2621 = data
  i2620.m_Name = i2621[0]
  i2620.m_HashCode = i2621[1]
  i2620.m_ElementType = i2621[2]
  i2620.m_Unicode = i2621[3]
  i2620.m_GlyphIndex = i2621[4]
  i2620.m_Scale = i2621[5]
  return i2620
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2624 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2625 = data
  request.r(i2625[0], i2625[1], 0, i2624, 'sprite')
  i2624.m_Index = i2625[2]
  i2624.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2625[3], i2624.m_Metrics)
  i2624.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2625[4], i2624.m_GlyphRect)
  i2624.m_Scale = i2625[5]
  i2624.m_AtlasIndex = i2625[6]
  i2624.m_ClassDefinitionType = i2625[7]
  return i2624
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2627 = data
  var i2629 = i2627[0]
  var i2628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.add(request.d('TMPro.TMP_Style', i2629[i + 0]));
  }
  i2626.m_StyleList = i2628
  return i2626
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.TMP_Style' )
  var i2633 = data
  i2632.m_Name = i2633[0]
  i2632.m_HashCode = i2633[1]
  i2632.m_OpeningDefinition = i2633[2]
  i2632.m_ClosingDefinition = i2633[3]
  i2632.m_OpeningTagArray = i2633[4]
  i2632.m_ClosingTagArray = i2633[5]
  i2632.m_OpeningTagUnicodeArray = i2633[6]
  i2632.m_ClosingTagUnicodeArray = i2633[7]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2635 = data
  var i2637 = i2635[0]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2637[i + 0]) );
  }
  i2634.files = i2636
  i2634.componentToPrefabIds = i2635[1]
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2641 = data
  i2640.path = i2641[0]
  request.r(i2641[1], i2641[2], 0, i2640, 'unityObject')
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2643 = data
  var i2645 = i2643[0]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2645[i + 0]) );
  }
  i2642.scriptsExecutionOrder = i2644
  var i2647 = i2643[1]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2647[i + 0]) );
  }
  i2642.sortingLayers = i2646
  var i2649 = i2643[2]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2649[i + 0]) );
  }
  i2642.cullingLayers = i2648
  i2642.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2643[3], i2642.timeSettings)
  i2642.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2643[4], i2642.physicsSettings)
  i2642.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2643[5], i2642.physics2DSettings)
  i2642.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2643[6], i2642.qualitySettings)
  i2642.enableRealtimeShadows = !!i2643[7]
  i2642.enableAutoInstancing = !!i2643[8]
  i2642.enableDynamicBatching = !!i2643[9]
  i2642.lightmapEncodingQuality = i2643[10]
  i2642.desiredColorSpace = i2643[11]
  var i2651 = i2643[12]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( i2651[i + 0] );
  }
  i2642.allTags = i2650
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2655 = data
  i2654.name = i2655[0]
  i2654.value = i2655[1]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2659 = data
  i2658.id = i2659[0]
  i2658.name = i2659[1]
  i2658.value = i2659[2]
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2663 = data
  i2662.id = i2663[0]
  i2662.name = i2663[1]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2665 = data
  i2664.fixedDeltaTime = i2665[0]
  i2664.maximumDeltaTime = i2665[1]
  i2664.timeScale = i2665[2]
  i2664.maximumParticleTimestep = i2665[3]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2667 = data
  i2666.gravity = new pc.Vec3( i2667[0], i2667[1], i2667[2] )
  i2666.defaultSolverIterations = i2667[3]
  i2666.bounceThreshold = i2667[4]
  i2666.autoSyncTransforms = !!i2667[5]
  i2666.autoSimulation = !!i2667[6]
  var i2669 = i2667[7]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2669[i + 0]) );
  }
  i2666.collisionMatrix = i2668
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2673 = data
  i2672.enabled = !!i2673[0]
  i2672.layerId = i2673[1]
  i2672.otherLayerId = i2673[2]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2675 = data
  request.r(i2675[0], i2675[1], 0, i2674, 'material')
  i2674.gravity = new pc.Vec2( i2675[2], i2675[3] )
  i2674.positionIterations = i2675[4]
  i2674.velocityIterations = i2675[5]
  i2674.velocityThreshold = i2675[6]
  i2674.maxLinearCorrection = i2675[7]
  i2674.maxAngularCorrection = i2675[8]
  i2674.maxTranslationSpeed = i2675[9]
  i2674.maxRotationSpeed = i2675[10]
  i2674.baumgarteScale = i2675[11]
  i2674.baumgarteTOIScale = i2675[12]
  i2674.timeToSleep = i2675[13]
  i2674.linearSleepTolerance = i2675[14]
  i2674.angularSleepTolerance = i2675[15]
  i2674.defaultContactOffset = i2675[16]
  i2674.autoSimulation = !!i2675[17]
  i2674.queriesHitTriggers = !!i2675[18]
  i2674.queriesStartInColliders = !!i2675[19]
  i2674.callbacksOnDisable = !!i2675[20]
  i2674.reuseCollisionCallbacks = !!i2675[21]
  i2674.autoSyncTransforms = !!i2675[22]
  var i2677 = i2675[23]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2677[i + 0]) );
  }
  i2674.collisionMatrix = i2676
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2681 = data
  i2680.enabled = !!i2681[0]
  i2680.layerId = i2681[1]
  i2680.otherLayerId = i2681[2]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2683 = data
  var i2685 = i2683[0]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2685[i + 0]) );
  }
  i2682.qualityLevels = i2684
  var i2687 = i2683[1]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( i2687[i + 0] );
  }
  i2682.names = i2686
  i2682.shadows = i2683[2]
  i2682.anisotropicFiltering = i2683[3]
  i2682.antiAliasing = i2683[4]
  i2682.lodBias = i2683[5]
  i2682.shadowCascades = i2683[6]
  i2682.shadowDistance = i2683[7]
  i2682.shadowmaskMode = i2683[8]
  i2682.shadowProjection = i2683[9]
  i2682.shadowResolution = i2683[10]
  i2682.softParticles = !!i2683[11]
  i2682.softVegetation = !!i2683[12]
  i2682.activeColorSpace = i2683[13]
  i2682.desiredColorSpace = i2683[14]
  i2682.masterTextureLimit = i2683[15]
  i2682.maxQueuedFrames = i2683[16]
  i2682.particleRaycastBudget = i2683[17]
  i2682.pixelLightCount = i2683[18]
  i2682.realtimeReflectionProbes = !!i2683[19]
  i2682.shadowCascade2Split = i2683[20]
  i2682.shadowCascade4Split = new pc.Vec3( i2683[21], i2683[22], i2683[23] )
  i2682.streamingMipmapsActive = !!i2683[24]
  i2682.vSyncCount = i2683[25]
  i2682.asyncUploadBufferSize = i2683[26]
  i2682.asyncUploadTimeSlice = i2683[27]
  i2682.billboardsFaceCameraPosition = !!i2683[28]
  i2682.shadowNearPlaneOffset = i2683[29]
  i2682.streamingMipmapsMemoryBudget = i2683[30]
  i2682.maximumLODLevel = i2683[31]
  i2682.streamingMipmapsAddAllCameras = !!i2683[32]
  i2682.streamingMipmapsMaxLevelReduction = i2683[33]
  i2682.streamingMipmapsRenderersPerFrame = i2683[34]
  i2682.resolutionScalingFixedDPIFactor = i2683[35]
  i2682.streamingMipmapsMaxFileIORequests = i2683[36]
  i2682.currentQualityLevel = i2683[37]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2693 = data
  i2692.weight = i2693[0]
  i2692.vertices = i2693[1]
  i2692.normals = i2693[2]
  i2692.tangents = i2693[3]
  return i2692
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2695 = data
  i2694.xPlacement = i2695[0]
  i2694.yPlacement = i2695[1]
  i2694.xAdvance = i2695[2]
  i2694.yAdvance = i2695[3]
  return i2694
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

Deserializers.buildID = "b4293e9b-c450-44f9-bcba-b9a0ee94237f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

