import { ReactNode } from 'react';
import { fadeIn, slideIn } from '../../../utils/motion';
import styles from '../../../utils/styles';
import { motion } from 'framer-motion';

export interface ImageContentSectionProps {
  image: string;
  imageLast?: boolean;
  children: ReactNode;
  title: string;
  backgroundClassName?: string;
  introduction?: string;
}

export default function ImageContentSection({
  image,
  children,
  title,
  imageLast,
  backgroundClassName = 'bg-section-100',
  introduction,
}: ImageContentSectionProps) {
  return (
    <div
      className={
        styles.padding + '  grid grid-cols-1 md:grid-cols-2 gap-10 ' + ( backgroundClassName )
      }
    >
      <motion.div
        {...fadeIn(1, 1.5)}
        className={`flex  items-center justify-center  order-last  ${imageLast ? 'md:order-last' : 'md:order-first'} `}
      >
        <img src={image} alt={title} />
      </motion.div>
      <div className="flex flex-col gap-4">
        {introduction && (
          <motion.span
            {...fadeIn(1, 1.5)}
            className="text-transparent bg-gradient-to-r  from-[0%] to-[25%] from-secondary  to-primary bg-clip-text font-bebas  font-bold"
          >
            {introduction}
          </motion.span>
        )}
        <motion.h2 className="font-bold text-2xl md:text-3xl font-bebas text-primary" {...slideIn('left', 1.25, 1.25)}>
          {title}
        </motion.h2>
        <motion.div {...fadeIn(1.5, 2)} className="font-normal  ">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
