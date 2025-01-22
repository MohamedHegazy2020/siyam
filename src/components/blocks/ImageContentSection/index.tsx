import { ReactNode } from 'react';
import styles from '../../../utils/styles';

export interface ImageContentSectionProps {
  image: string;
  imageLast?: boolean;
  children: ReactNode;
  title: string;
  titleClassName?: string;
  backgroundClassName?: string;
  introduction?: string;
}

export default function ImageContentSection({
  image,
  children,
  title,
  imageLast,
  backgroundClassName,
  titleClassName,
  introduction,
}: ImageContentSectionProps) {
 



  return (
    <div className={backgroundClassName + ' ' + styles.padding}>
      <div  className={'  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-center '}>
        <div
          
          className={`flex items-center w-full   order-last  ${imageLast ? 'md:order-last' : 'md:order-first'} `}
        >
          <img className="w-full max-w-xl" src={image} alt={title} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          {introduction && (
            <span
             
              className="text-transparent bg-gradient-to-r  from-[0%] to-[25%] from-secondary  to-primary bg-clip-text font-bebas  font-bold"
            >
              {introduction}
            </span>
          )}
          <h2  className={titleClassName + ' font-bold text-2xl md:text-3xl font-bebas text-primary'}>
            {title}
          </h2>
          <div  className="font-light  ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
