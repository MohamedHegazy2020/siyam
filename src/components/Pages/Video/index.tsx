import { video } from '../../../constants';
import VideoPlayer from '../../blocks/VideoPlayer';

const Video = () => {
  return (
    <>
      <section className="h-screen  bg-cover bg-no-repeat bg-center  flex flex-col items-center justify-center">
        <VideoPlayer src={video} />
      </section>
    </>
  );
};

export default Video;
