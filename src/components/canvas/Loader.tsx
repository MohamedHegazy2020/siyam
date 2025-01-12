import { Html, useProgress } from '@react-three/drei';
const Loader = () => {
  const { progress } = useProgress();
  return (
    <>
      <Html>
        <span className="animate-pulse h-5 w-5 bg-primary rounded-full"></span>
        <p className="text-xl font-bold text-white mt-4">{progress.toFixed(2)}%</p>
      </Html>
    </>
  );
};

export default Loader;
