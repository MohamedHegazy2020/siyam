/* eslint-disable @typescript-eslint/ban-ts-comment */
import {  PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { Suspense, useRef, useState } from 'react';
const Stars = () => {
 // @ts-ignore
  const ref = useRef<Points>(null);

  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.2 }));
  // @ts-ignore
  useFrame((state, delta) => {
    // @ts-ignore
    ref.current.rotation.x -= delta / 20;
    // @ts-ignore
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[1, 2, Math.PI / 8]}>
      {/* // @ts-ignore */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color="black" size={0.015} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0,0] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
