import { OrbitControls, Preload, useGLTF, useScroll } from '@react-three/drei';
import CanvasLoader from './Loader';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

import { slideIn } from '../../utils/motion';
import { isMobile } from 'react-device-detect';

// Configuration for lights and model positions
const SPOT_LIGHT_CONFIG = [
  {
    mobile: {
      position: [-2, -2, -1],
      intensity: 600,
    },
    desktop: {
      position: [-2, -2, -1],
      intensity: 500,
    },
  },
  {
    mobile: {
      position: [5, 1, 1],
      intensity: 600,
    },
    desktop: {
      position: [2, 2, 1],
      intensity: 500,
    },
  },
];

const MODEL_CONFIG = {
  mobile: {
    scale: 0.75,
    position: [0, 1, 0],
    rotation: [-0.01, -0.25, 0.0],
  },
  desktop: {
    scale: 1,
    position: [0, 1, 0],
    rotation: [-0.01, -0.25, 0.0],
  },
};

  
function Model1({ isMobile = false }) {
  const model1 = useGLTF('./GLB/PT-011/PT-011.glb'); // Ensure the path is correct
  const modelSettings = isMobile ? MODEL_CONFIG.mobile : MODEL_CONFIG.desktop;
  const scroll = useScroll();
  console.log(scroll);
  

  // Reference to the model
  const modelRef = useRef();

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
      <mesh>
        <hemisphereLight intensity={0.2} groundColor={'black'} />
        {SPOT_LIGHT_CONFIG.map((lightConfig, index) => (
          <spotLight
            key={index}
            position={isMobile ? lightConfig.mobile.position as [number, number, number] : lightConfig.desktop.position as [number, number, number]}
            angle={9}
            penumbra={4}
            intensity={isMobile ? lightConfig.mobile.intensity : lightConfig.desktop.intensity}
            castShadow
            shadow-mapSize={1024}
          />
        ))}

        <primitive
          ref={modelRef}
          object={model1.scene}
          scale={modelSettings.scale}
          position={modelSettings.position}
          rotation={modelSettings.rotation}
          animate={{ rotateY: [0, Math.PI * 2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </mesh>
    </>
  );
}

function Model1Canvas() {
  return (
    <div {...slideIn('up', 2, 2)} className="h-full ml-auto">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.2,
          far: 150,
          position: [-1, 3, 6],
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Model1 isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default Model1Canvas;
