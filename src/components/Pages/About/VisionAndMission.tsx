import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { group1, group2 } from '../../../constants';
import ImageContentSection from '../../blocks/ImageContentSection';
export default function VisionAndMission() {
  return (
    <section>
      <div className="bg-section-200">
        <ImageContentSection image={group1} title="Our Mission" imageLast titleClassName="text-white">
          <p className="text-white">
            Our Mission is to add value to our customers, suppliers and employees by providing superior products and
            services on time and at a competitive price, whilst practicing honesty and fairness throughout our
            corporation.
          </p>
        </ImageContentSection>
        <ImageContentSection image={group2} title="Our Vision" titleClassName="text-white">
          <p className="text-white">
            Our vision is to become a leading developer and manufacturer of OE, customized, and aftermarket, core and
            complete radiators.
          </p>
        </ImageContentSection>
      </div>
      <div className="bg-section-100 grid grid-cols-1 md:grid-cols-8 gap-4 py-20 ">
        <div className="flex justify-center md:col-start-2 md:col-span-2  items-start">
          <div className="w-96  bg-vector-star bg-contain bg-no-repeat bg-center flex items-center justify-center">
            <Icon icon="solar:hand-stars-linear" className="text-white" width="36" height="36" />
          </div>
          <div className="px-4 flex flex-col gap-4">
            <h5 className='font-bold'>Customer Satisfaction</h5>
            <p>
              We believe that the improvement in the industry starts with developing the skills of the employees.
              Therefore, along developing products and technology, we continuously invest in developing the skills of
              our employees.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start md:col-span-2">
          <div className="w-96 bg-no-repeat bg-vector-star bg-contain bg-center flex items-center justify-center">
            <Icon icon="stash:people-group" className="text-white" width="36" height="36" />
          </div>
          <div className="px-4 flex flex-col gap-4">
            <h5 className='font-bold'>Developing People</h5>
            <p>
              We believe that the improvement in the industry starts with developing the skills of the employees.
              Therefore, along developing products and technology, we continuously invest in developing the skills of
              our employees.
            </p>
          </div>
        </div>{' '}
        <div className="flex justify-center items-start md:col-span-2">
          <div className="w-96 bg-no-repeat bg-vector-star bg-contain bg-center flex items-center justify-center">
            <Icon icon="lets-icons:lamp-light" className="text-white" width="36" height="36" />
          </div>
          <div className="px-4 flex flex-col gap-4">
            <h5 className='font-bold'>Continous Improvement</h5>
            <p>
              We believe that the improvement in the industry starts with developing the skills of the employees.
              Therefore, along developing products and technology, we continuously invest in developing the skills of
              our employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
