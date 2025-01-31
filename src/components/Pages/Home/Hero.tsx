import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import styles from '../../../utils/styles';
import { Link } from 'react-router-dom';
import PrimaryGradientBtn from '../../blocks/Buttons/PrimaryGradientBtn';

export default function Hero() {
  return (
    <>
      <div className="flex bg-cover bg-center min-h-screen items-end bg-home-hero">
        <div
          className={
            'w-full rounded-t-lg bg-gradient-to-b from-[#000000] to-[#00000000] flex md:flex-row flex-col items-center justify-around ' +
            styles.paddingY
          }
        >
          <p className="text-white font-light text-sm uppercase font-montserrat text-wrap max-w-sm">
            Leaders In Manufacturing Engine Cooling Products
          </p>
          <div className="flex md:flex-row flex-col  gap-4 ">
            <PrimaryGradientBtn >Explore</PrimaryGradientBtn>
            <button className="btn btn-outline text-white" >More Info</button>
          </div>
          <div className="grid grid-flow-col gap-4 mt-6">
            <Link className="link link-hover text-white " to="#">
              <Icon icon="mingcute:facebook-fill" width="24" height="24" />
            </Link>
            <Link className="link link-hover text-white " to="#">
              <Icon icon="mingcute:instagram-fill" width="24" height="24" />{' '}
            </Link>
            <Link className="link link-hover text-white " to="#">
              <Icon icon="mingcute:youtube-fill" width="24" height="24" />
            </Link>
            <Link className="link link-hover text-white " to="#">
              <Icon icon="mingcute:tiktok-fill" width="24" height="24" />
            </Link>
            <Link className="link link-hover text-white " to="#">
              <Icon icon="prime:twitter" width="24" height="24" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
