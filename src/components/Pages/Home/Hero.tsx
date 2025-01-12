import Model1Canvas from '../../canvas/Model1';
import styles from '../../../utils/styles';
import { motion } from 'framer-motion';
import {  fadeIn } from '../../../utils/motion';

export default function Hero() {
  return (
    <>
      <motion.div layoutScroll className="relative w-full h-[200vh]">
        <div className={`absolute inset-0 top-[25%] translate-y-[-25%]   left-0 right-0  mx-auto ${styles.paddingX} `}>
          <motion.h1 
          {... fadeIn(1 ,2 )}
            className={` text-[80px] md:text-[240px] xl:text-[300px] bg-clip-text  text-center  uppercase font-sakana text-transparent bg-gradient-to-r from-primary to-secondary`}
          >
            siyam
          </motion.h1>
        </div>
        <Model1Canvas />
        <div className="">

        </div>
      </motion.div>
    </>
  );
}
