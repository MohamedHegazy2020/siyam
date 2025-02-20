import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';
import { Suspense, useMemo } from 'react';

export interface Model3DProps {
  path: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export function Model3D({ path,  scale = 2 }: Model3DProps) {
  const { scene } = useGLTF(path);

  useFrame(() => {
    if (scene) scene.rotation.y += 0.001;
  });

  return (
    <>
      <ambientLight intensity={8} />
      <ambientLight intensity={5} />

      <primitive object={scene} scale={scale} position-y={-1} rotation-y={0} />
    </>
  );
}

export function Model3DCanvas({ path,  scale }: Model3DProps) {
  const memoizedModel3D = useMemo(
    () => <Model3D path={path}  scale={scale} />,
    [path, scale]
  );

  return (
    <div className="w-full h-full min-h-[50vh]">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-1,1, 5],
        }}
      >
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI } minPolarAngle={Math.PI / 5} />
        <Suspense fallback={<CanvasLoader />}>{memoizedModel3D}</Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
