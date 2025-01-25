
const Contact = () => {
    return (
      <>
        <section className="bg-linear-[#CFDBE4,primary_90%]  text-white">
          <div className="grid grid-cols-1 md:grid-col-2 ">
            <div>
              <div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  <div className="flex flex-col px-2  ">
                    <label className="label font-semibold" htmlFor="name">
                      Name
                    </label>
                    <input type="text" name="name" id="name" className="input  input-bordered w-full " />
                  </div>
                  <div className="flex flex-col px-2 ">
                    <label className="label font-semibold" htmlFor="email">
                      Email
                    </label>
                    <input type="email" name="email" id="email" className="input  input-bordered w-full " />
                  </div>

                  <div className="flex flex-col md:col-span-2 px-2">
                    <label className="label font-semibold" htmlFor="phone">
                      Phone Number
                    </label>
                    <input type="tel" name="phone" id="phone" className="input  input-bordered w-full " />
                  </div>

                  <div className="flex flex-col md:col-span-2 px-2">
                    <label className="label font-semibold" htmlFor="message">
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
            <div></div>
          </div>
        </section>
      </>
    );
}

export default Contact;