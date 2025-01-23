import { factory100, factory200, factory300 } from '../../../constants';
import styles from '../../../utils/styles';

const ContactSection = () => {
  return (
    <section className={'bg-gradient-radial grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 ' + styles.padding}>
      <div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex flex-col px-2  ">
            <label className="label font-semibold" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" id="name" className="input bg-primary input-bordered w-full " />
          </div>
          <div className="flex flex-col px-2 ">
            <label className="label font-semibold" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="email" className="input bg-primary input-bordered w-full " />
          </div>

          <div className="flex flex-col md:col-span-2 px-2">
            <label className="label font-semibold" htmlFor="phone">
              Phone Number
            </label>
            <input type="tel" name="phone" id="phone" className="input bg-primary input-bordered w-full " />
          </div>

          <div className="flex flex-col md:col-span-2 px-2">
            <label className="label font-semibold" htmlFor="message">
              Message
            </label>
            <textarea rows={4} name="message" id="message" className="textarea bg-primary input-bordered w-full " />
          </div>
          <div className="flex justify-center  px-2 mt-4">
            <button className="btn bg-gradient-to-r from-primary to-info w-full ">Send</button>
          </div>
        </form>
      </div>
      <div className=" bg-vector-200 bg-no-repeat bg-center bg-contain md:p-6  ">
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-4 ">
          {/* Main card on the left */}
          <div className="max-w-xs md:col-span-2">
            <div className="flex flex-col justify-between  p-4 border border-blue-400 rounded-lg bg-white shadow-md gap-3  ">
              <span className=" badge text-blue-600 badge-info bg-opacity-30 text-sm font-semibold uppercase">
                Popular
              </span>
              <h2 className="text-lg font-bold ">Design for how people think</h2>
              <p className="text-gray-600 text-sm ">
                Aliquam euismod condimentum elementum ultricies volutpat sit non.
              </p>
              <button className="mt-4 px-4 py-2 btn-info border border-info bg-white btn-outline text-info  rounded-md hover:text-white focus:outline-none">
                Take Lesson
              </button>
            </div>
          </div>

          {/* Images on the right */}

          <div className="  pt-6 max-w-xs  md:col-span-2 flex items-end ">
            <img
              src={factory100} // Replace with your image URL
              alt="Example 1"
              className="w-full md:w-3/4 object-cover"
            />
          </div>
          <div className=" md:pb-4 md:col-span-3 flex justify-end md:w-full  ">
            <img
              src={factory200} // Replace with your image URL
              alt="Example 2"
              className="w-full  object-cover"
            />
          </div>
          <div className=" max-w-xs md:col-span-2 ">
            <img
              src={factory300} // Replace with your image URL
              alt="Example 3"
              className="w-full  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
