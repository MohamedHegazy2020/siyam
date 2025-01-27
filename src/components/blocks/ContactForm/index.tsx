import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const ContactForm = ({ inputsTransParent }: { inputsTransParent?: boolean }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart pause',
      },
    });

    tl.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
    tl.fromTo(
      nameRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      '<0.5'
    );

    tl.fromTo(
      emailRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      '<0.5'
    );
    tl.fromTo(
      phoneRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      '<0.5'
    );
    tl.fromTo(
      messageRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      '<0.5'
    );
    tl.fromTo(
      btnRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      '<0.5'
    );
  });

  return (
    <form ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="flex flex-col px-2  ">
        <label className="label font-semibold" htmlFor="name">
          Name
        </label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          className={`input bg-primary  input-bordered w-full ${inputsTransParent && 'bg-transparent'} `}
        />
      </div>
      <div className="flex flex-col px-2 ">
        <label className="label font-semibold" htmlFor="email">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          className={`input bg-primary  input-bordered w-full ${inputsTransParent && 'bg-transparent'}`}
        />
      </div>

      <div className="flex flex-col md:col-span-2 px-2">
        <label className="label font-semibold" htmlFor="phone">
          Phone Number
        </label>
        <input
          ref={phoneRef}
          type="tel"
          name="phone"
          id="phone"
          className={`input bg-primary input-bordered w-full ${inputsTransParent && 'bg-transparent'}`}
        />
      </div>

      <div className="flex flex-col md:col-span-2 px-2">
        <label className="label font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          ref={messageRef}
          rows={4}
          name="message"
          id="message"
          className={`textarea bg-primary input-bordered w-full ${inputsTransParent && 'bg-transparent'}`}
        />
      </div>
      <div className="  mt-4">
        <button ref={btnRef} className="btn bg-gradient-linear-100 text-white border-2 w-full ">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
