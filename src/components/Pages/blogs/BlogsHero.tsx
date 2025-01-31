import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const BlogsHero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-blogs-hero bg-cover bg-center">
        <div className="hero-overlay bg-gradient-to-r from-[#525CEBBF] to-[#90CAF9BF] opacity-80"></div>
        <div className="hero-content h-full ">
          <div className="grid grid-cols-1 md:grid-cols-4  gap-8 md:gap-y-16">
            <div className=" flex flex-col items-center justify-center gap-4 md:col-span-2 md:col-start-2 ">
              <div className=" flex w-full justify-center items-center bg-vector-reactangle bg-contain bg-center bg-no-repeat p-10  ">
                <h1 className=" text-2xl text-white text-center  font-bold">15 July, 2025 At 04:45 pm</h1>
              </div>
              <h3 className="font-bebas text-3xl text-white">Don’t miss the upcoming events</h3>
              <div className="flex gap-4 md:gap-8 my-4">
                <div className="flex flex-col text-white justify-center text-2xl items-center">
                  <div className="bg-vector-polygon  bg-contain bg-center bg-no-repeat p-10">05</div>
                  <p>Days</p>
                </div>

                <div className="flex flex-col text-white justify-center text-2xl items-center">
                  <div className="bg-vector-polygon  bg-contain bg-center bg-no-repeat p-10">17</div>
                  <p>Hours</p>
                </div>

                <div className="flex flex-col text-white justify-center text-2xl items-center">
                  <div className="bg-vector-polygon  bg-contain bg-center bg-no-repeat p-10">28</div>
                  <p>Minutes</p>
                </div>

                <div className="flex flex-col text-white justify-center text-2xl items-center">
                  <div className="bg-vector-polygon  bg-contain bg-center bg-no-repeat p-10">14</div>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 md:col-span-4">
              <div className="bg-white flex p-4 rounded-lg drop-shadow-lg gap-4">
                <div className="flex justify-center items-center p-4">
                  <Icon className="text-primary" icon="tdesign:location" width="24" height="24" />
                </div>
                <div>
                  <h6 className="font-bebas text-black">Cairo</h6>
                  <p className="text-sm">Lorem, ipsum dolor.</p>
                </div>
              </div>
              <div className="bg-white flex  p-4 rounded-lg drop-shadow-lg gap-4">
                <div className="flex justify-center items-center p-4">
                  <Icon className="text-primary" icon="octicon:sponsor-tiers-16" width="24" height="24" />
                </div>
                <div>
                  <h6 className="font-bebas text-black">Sponsors</h6>
                  <p className="text-sm">Lorem, ipsum dolor.</p>
                </div>
              </div>{' '}
              <div className="bg-white flex  p-4 rounded-lg drop-shadow-lg gap-4">
                <div className="flex justify-center items-center p-4">
                  <Icon className="text-primary" icon="octicon:people-16" width="24" height="24" />
                </div>
                <div>
                  <h6 className="font-bebas text-black">+25 Speakers</h6>
                  <p className="text-sm">Lorem, ipsum dolor.</p>
                </div>
              </div>{' '}
              <div className="bg-white flex  p-4 rounded-lg drop-shadow-lg gap-4">
                <div className="flex justify-center items-center p-4">
                  <Icon className="text-primary" icon="ph-coffee" width="24" height="24" />
                </div>
                <div>
                  <h6 className="font-bebas text-black">Some Coffee</h6>
                  <p className="text-sm">Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsHero;
