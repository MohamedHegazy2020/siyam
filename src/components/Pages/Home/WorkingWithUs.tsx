import { Card } from 'react-daisyui';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import styles from '../../../utils/styles';

const WorkingWithUs = () => {
  return (
    <>
      <section className={'bg-section-200   ' + styles.padding}>
        <h2 className="font-bebas text-2xl text-center text-white ">working with us Means</h2>

        <div className=" grid grid-cols-1 place-content-center md:grid-cols-6 justify-center items-center mt-8 gap-4">
          <Card className="bg-white min-h-full max-w-full md:col-span-2 flex flex-col  items-center justify-around gap-5  p-5 md:p-10">
            <div className="flex justify-center items-center rounded-full bg-primary w-16 h-16">
              <Icon icon="material-symbols:manage-history" className="text-white" width="36" height="36" />
            </div>
            <h3 className="text-center text-sm md:text-lg font-bebas">On Time Delivery</h3>
            <p className="text-center text-sm md:text-base font-light">
              We ensure timely delivery of our products, maintaining efficiency and reliability in every shipment to
              meet your expectations.
            </p>
          </Card>
          <Card className="bg-white max-w-full md:col-span-2 min-h-full flex flex-col  items-center justify-around gap-5  p-5 md:p-10">
            <div className="flex justify-center items-center rounded-full bg-primary w-16 h-16">
              <Icon className="text-white" icon="solar:cup-star-outline" width="36" height="36" />
            </div>
            <h3 className="text-center text-sm md:text-lg font-bebas">Competitive Prices</h3>
            <p className="text-center text-sm md:text-base font-light">
              Our competitive pricing strategy offers exceptional value, providing high-quality products at affordable
              prices tailored to your needs.
            </p>
          </Card>
          <Card className="bg-white  min-h-full max-w-full md:col-span-2 flex flex-col  items-center justify-around gap-5  p-5 md:p-10">
            <div className="flex justify-center items-center rounded-full bg-primary w-16 h-16">
              <Icon icon="ri:customer-service-2-line" className="text-white" width="36" height="36" />
            </div>
            <h3 className="text-center text-sm md:text-lg font-bebas">Unique Customer Service</h3>
            <p className="text-center   text-sm md:text-base font-light">
              Our customer service stands out through personalized attention, fast responses, and dedicated support for
              every inquiry, ensuring your complete satisfaction.
            </p>
          </Card>
          <Card className="bg-white min-h-full max-w-full md:col-span-2 md:col-start-2 flex flex-col  items-center justify-around gap-5  p-5 md:p-10 ">
            <div className="flex justify-center items-center rounded-full bg-primary w-16 h-16">
              <Icon icon="solar:hand-stars-linear" className="text-white" width="36" height="36" />
            </div>
            <h3 className="text-center text-sm md:text-lg font-bebas">On Time Delivery</h3>
            <p className="text-center text-sm md:text-base font-light">
              We focus on building long-term relationships by addressing issues quickly and effectively, ensuring
              customer satisfaction with reliable solutions.
            </p>
          </Card>
          <Card className="bg-white min-h-full max-w-full md:col-span-2 flex flex-col  items-center justify-around gap-5  p-5 md:p-10">
            <div className="flex justify-center items-center rounded-full bg-primary w-16 h-16">
              <Icon icon="entypo:lab-flask" className="text-white" width="36" height="36" />
            </div>
            <h3 className="text-center text-sm md:text-lg font-bebas">On Time Delivery</h3>
            <p className="text-center text-sm md:text-base font-light">
              Our advanced testing laboratory ensures product quality through rigorous testing, meeting industry
              standards and exceeding customer expectations.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
};

export default WorkingWithUs;
