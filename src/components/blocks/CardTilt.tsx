
import Tilt from 'react-parallax-tilt';

const CardTilt = ({ children }: { children: React.ReactNode }) => {
   
  return (
    <Tilt scale={1} className="w-full h-full  card shadow-2xl">
  
        {children}
     
    </Tilt>
  );
};

export default CardTilt;
