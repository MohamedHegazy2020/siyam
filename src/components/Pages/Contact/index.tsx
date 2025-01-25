import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <section className=" bg-[#CFDBE4] font-light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
            <div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="flex flex-col px-2  ">
                  <label className="label " htmlFor="name">
                    Name
                  </label>
                  <input type="text" name="name" id="name" className="input  input-bordered w-full " />
                </div>
                <div className="flex flex-col px-2 ">
                  <label className="label " htmlFor="email">
                    Email
                  </label>
                  <input type="email" name="email" id="email" className="input  input-bordered w-full " />
                </div>

                <div className="flex flex-col md:col-span-2 px-2">
                  <label className="label " htmlFor="phone">
                    Phone Number
                  </label>
                  <input type="tel" name="phone" id="phone" className="input  input-bordered w-full " />
                </div>

                <div className="flex flex-col md:col-span-2 px-2">
                  <label className="label " htmlFor="message">
                    Message
                  </label>
                  <textarea rows={4} name="message" id="message" className="textarea  input-bordered w-full " />
                </div>
                <div className="flex justify-center  px-2 mt-4">
                  <button className="btn bg-gradient-to-r from-primary to-info w-full ">Send</button>
                </div>
              </form>
            </div>
          </div>
          <div className=" w-full h-full p-6">
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
            </GoogleMapReact>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
