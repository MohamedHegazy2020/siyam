import { ReactNode, useRef } from 'react';
import styles from '../../../utils/styles';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../../../utils/motion';
export interface ImageContentSubsectionProps {
  image: string;
  title: string;
  imageLast?: boolean;
  children: ReactNode;
}

export default function ImageContentSubsection({
  image,
  title,
  imageLast = false,
  children,
}: ImageContentSubsectionProps) {
  const ref = useRef(null);
 

  return (
    <>
      {' '}
      
        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 ${styles.padding} gap-10`}>
          <motion.div
            {...fadeIn(1, 1.5)}
            className={`${
              imageLast ? 'md:order-last' : 'md:order-first'
            } flex justify-center items-center order-last rounded-md relative `}
          >
            <img src={image} alt={title} className="w-full h-auto" />
          </motion.div>
          <div className="flex flex-col gap-4">
            <motion.h2
              {...slideIn('left', 1.25, 1.25)}
              className="font-bold text-2xl md:text-3xl font-bebas text-white"
            >
              {title}
            </motion.h2>
            {children}
          </div>
        </div>
     
    </>
  );
}
