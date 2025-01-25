import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';


// Configuration for lights and model positions

function Model2() {
  const model2 = useGLTF('./GLB/IC-052/IC-052.glb'); // Ensure the path is correct


  // Reference to the model

  // Update position based on scroll
  // useFrame(() => {
  //   if (modelRef.current&&scroll ) {
  //     const scrollY = scroll.offset; // Gets the scroll offset (0 to 1)

  //     console.log('Scroll Offset:', scrollY); // Debug: Check scroll offset

  //     // Move diagonally based on scroll
  //     const newX = modelSettings.position[0] + scrollY * 5; // Adjust multiplier for speed
  //     const newY = modelSettings.position[1] - scrollY * 5; // Move down

  //     console.log('New Position:', { newX, newY }); // Debug: Check calculated positions

  //     modelRef.current.position.set(newX, newY, modelSettings.position[2]); // Update model position
  //   }
  // });

  return (
    <>
      <ambientLight intensity={5} />
      <ambientLight intensity={2} />
      <primitive object={model2.scene} scale={2} position-y={-1} rotation-y={0} />
    </>
  );
}

function Model2Canvas() {
  return (
   
   <div className="w-full h-[500px] ">
      

   <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 5],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Model2  />
        </Suspense>
        <Preload all />
      </Canvas>

   </div>
 
  );
}

export default Model2Canvas;
