
import Tilt from 'react-parallax-tilt';

const CardTilt = ({ children }: { children: React.ReactNode }) => {
   
  return (
    <Tilt scale={1} className="w-full h-full  card shadow-2xl">
      <div  className="w-full h-full">
        {children}
      </div>
    </Tilt>
  );
};

export default CardTilt;
