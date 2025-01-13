import { btnAnimationOnHover, fadeIn, slideIn } from '../../../utils/motion';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { motion } from 'framer-motion';
import { usersIcon } from '../../../assets';
export default function AboutHero() {
  return (
    <div className="hero min-h-screen bg-property-1">
      <div className="hero-overlay bg-black  bg-opacity-70"></div>
      <div className="hero-content text-white text-center ">
        <motion.div {...slideIn('up', 0.5, 2)} className="max-w-6xl">
          <motion.h1 {...fadeIn(2, 1.5)} className="mb-5 text-4xl md:text-5xl font-bold">
            Siyam Industrial Group is specialized in{' '}
            <motion.span
              className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text"
              {...fadeIn(2, 1.5)}
            >
              Developing Career Experts
            </motion.span>
          </motion.h1>
          <motion.p {...fadeIn(2, 1.5)} className="mb-5">
            core and complete cooling products, radiators, charge air coolers, condensers, and cooling modules for all
            types of applications. For over 30 years, we have distinguished ourselves by providing high quality
            products, with superior services, delivered on-time and at a competitive price.
          </motion.p>
          <motion.button
            {...btnAnimationOnHover()}
            className="btn text-white    bg-gradient-to-r from-[#0099F7] to-[#12F1E4] "
          >
            <Icon icon="lets-icons:video-fill" width="24" height="24" />
            Get Started
          </motion.button>
          <motion.div {...slideIn('down', 1, 1.5)} className="flex items-center justify-center mt-5">
            <img src={usersIcon} alt="user icons" className="" />
            <p className="text-white ml-2 text-2xl font-bold">+100k Users</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
