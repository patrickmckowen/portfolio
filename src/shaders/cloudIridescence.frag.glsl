precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

// Cloud controls
uniform float uNoiseScale;
uniform float uCloudDensity;
uniform float uCloudSoftness;
uniform float uDriftSpeed;
uniform float uLayerSeparation;

// Iridescence controls
uniform float uHueOffset;
uniform float uHueRange;
uniform float uSaturation;
uniform float uBrightness;
uniform float uFresnelPower;
uniform float uFresnelIntensity;

// Light controls
uniform vec2 uLightPosition;
uniform float uWarmShift;
uniform float uCoolShift;
uniform float uMouseInfluence;

// Output controls
uniform float uDesaturation;
uniform float uDarkOverlay;

varying vec2 vUv;

//
// Simplex 3D noise - Ashima Arts
//
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

// Fractal brownian motion - layered noise
float fbm(vec3 p, int octaves) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  float maxValue = 0.0;

  for (int i = 0; i < 6; i++) {
    if (i >= octaves) break;
    value += amplitude * snoise(p * frequency);
    maxValue += amplitude;
    amplitude *= 0.5;
    frequency *= 2.0;
  }

  return value / maxValue;
}

// HSL to RGB conversion
vec3 hsl2rgb(float h, float s, float l) {
  vec3 rgb = clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return l + s * (rgb - 0.5) * (1.0 - abs(2.0 * l - 1.0));
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  vec2 uvAspect = vec2(uv.x * aspect, uv.y);

  float time = uTime * uDriftSpeed;

  // Light source position (mix between fixed position and mouse)
  vec2 lightPos = mix(uLightPosition, uMouse, uMouseInfluence);

  // Distance and angle from light source
  vec2 lightDelta = uvAspect - vec2(lightPos.x * aspect, lightPos.y);
  float lightDist = length(lightDelta);
  float lightAngle = atan(lightDelta.y, lightDelta.x);

  // === Layer 1: Large-scale cloud forms ===
  vec3 noisePos1 = vec3(uvAspect * uNoiseScale, time * 0.3);
  float cloud1 = fbm(noisePos1, 4);

  // === Layer 2: Medium detail clouds (offset for depth) ===
  vec3 noisePos2 = vec3(
    uvAspect * uNoiseScale * 1.8 + vec2(3.7, 1.2),
    time * 0.4 + 10.0
  );
  float cloud2 = fbm(noisePos2, 3);

  // === Layer 3: Fine wispy detail ===
  vec3 noisePos3 = vec3(
    uvAspect * uNoiseScale * 3.2 + vec2(-2.1, 5.3),
    time * 0.5 + 20.0
  );
  float cloud3 = fbm(noisePos3, 3);

  // Combine cloud layers with separation control
  float cloudBase = cloud1 * 0.55 + cloud2 * 0.30 + cloud3 * 0.15;

  // Add parallax-like layer separation
  float layerOffset = uLayerSeparation * 0.05;
  vec3 noisePosParallax = vec3(
    (uvAspect + lightDelta * layerOffset) * uNoiseScale * 1.4,
    time * 0.35 + 5.0
  );
  float cloudParallax = fbm(noisePosParallax, 3);
  cloudBase = mix(cloudBase, cloudParallax, uLayerSeparation * 0.3);

  // Map cloud density
  float cloudShape = smoothstep(
    0.5 - uCloudDensity * 0.5,
    0.5 - uCloudDensity * 0.5 + uCloudSoftness,
    cloudBase * 0.5 + 0.5
  );

  // Cloud "thickness" for iridescence intensity
  float thickness = cloudShape * (cloudBase * 0.5 + 0.5);

  // === Iridescent color mapping ===

  // Base hue from noise value + angular position (simulates thin-film interference)
  float hue = uHueOffset +
    thickness * uHueRange * 0.5 +
    lightAngle * 0.05 * uFresnelIntensity;

  // Fresnel-like shift: warm near light, cool away
  float fresnelFactor = pow(clamp(lightDist * 1.5, 0.0, 1.0), uFresnelPower);
  hue += mix(uWarmShift, uCoolShift, fresnelFactor) * 0.15;

  // Add fine-grained hue variation from noise detail
  hue += cloud3 * 0.08 * uHueRange;

  // Wrap hue to [0, 1]
  hue = fract(hue);

  // Saturation: stronger in cloud body, softer at edges
  float sat = uSaturation * (0.5 + thickness * 0.5);

  // Lightness: slightly brighter near light source
  float lightInfluence = 1.0 - fresnelFactor * 0.2;
  float lit = uBrightness * lightInfluence;

  // Convert to RGB
  vec3 color = hsl2rgb(hue, sat, lit);

  // === Subtle iridescent shimmer ===
  float shimmer = snoise(vec3(uvAspect * uNoiseScale * 5.0, time * 0.8)) * 0.03;
  color += shimmer * sat;

  // === Glow near light source ===
  float glow = exp(-lightDist * lightDist * 4.0) * 0.15;
  vec3 warmGlow = hsl2rgb(fract(uHueOffset + uWarmShift * 0.1), 0.3, 0.9);
  color += glow * warmGlow;

  // === Cloud alpha/density ===
  float alpha = cloudShape;

  // Background: soft gradient
  float bgGrad = 0.5 + 0.5 * (1.0 - fresnelFactor);
  vec3 bgColor = hsl2rgb(
    fract(uHueOffset + 0.5),
    uSaturation * 0.15,
    uBrightness * 0.85
  );

  // Blend cloud color with background
  vec3 finalColor = mix(bgColor, color, alpha);

  // === Desaturation control ===
  float luminance = dot(finalColor, vec3(0.299, 0.587, 0.114));
  finalColor = mix(finalColor, vec3(luminance), uDesaturation);

  // === Dark overlay for text legibility ===
  finalColor *= (1.0 - uDarkOverlay);

  gl_FragColor = vec4(finalColor, 1.0);
}
