'use client'; // Must be first line

import { Environment, OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

type GLTFResult = ReturnType<typeof useGLTF>;

function Model() {
  const group = useRef<THREE.Group>(null!);
  const gltf = useGLTF("/assets/model.glb") as GLTFResult;

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.4;
      group.current.position.y = Math.sin(performance.now() / 1000) * 0.03;
      group.current.position.x = Math.cos(performance.now() / 1200) * 0.02;
    }
  });

  return (
    <primitive 
      ref={group} 
      object={gltf.scene} 
      onPointerEnter={() => {
        if (group.current) {
          group.current.rotation.x += 0.1;
        }
      }}
    />
  );
}
useGLTF.preload("/assets/model.glb");

export default function Hero3D() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 hero-gradient" />
      
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
  <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] animate-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
    Vignam — Text to Simulations
  </h1>
  <p className="text-base md:text-lg opacity-80 animate-slide-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards] transform transition-all duration-700">
    Explore pre-built scientific simulations with stunning 3D visuals. Real-time rendering with a metallic finish powered by environment lighting.
  </p>
  <div className="flex gap-3 animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
    <a 
      href="#video" 
      className="px-5 py-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95"
    >
      Watch Demo
    </a>
    <a 
      href="#features" 
      className="px-5 py-3 rounded-2xl border border-gradient-to-r from-purple-400 to-pink-400 hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:shadow-purple-500/30 hover:scale-105 active:scale-95"
    >
      Learn More
    </a>
  </div>
</div>


          <div className="h-[360px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm shadow-2xl animate-scale-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            <Canvas camera={{ position: [2.5, 1.5, 2.5], fov: 45 }}>
              <Suspense fallback={null}>
                <Stage intensity={0.6} environment={null}>
                  <Model />
                </Stage>
                <Environment files="/assets/environment.exr" />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <ambientLight intensity={0.2} />
              </Suspense>
              <OrbitControls 
                enablePan={false} 
                enableZoom={false} 
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}