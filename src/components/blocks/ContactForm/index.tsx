import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const ContactForm = ({ inputsTransParent = false }: { inputsTransParent?: boolean }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]);

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

    inputRefs.current.forEach((input, index) => {
      tl.fromTo(
        input,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        `<${index * 0.4}`
      );
    });
  }, [inputsTransParent]);

  return (
    <form ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { label: 'Name', type: 'text', name: 'name' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Phone Number', type: 'tel', name: 'phone' },
        { label: 'Message', type: 'textarea', name: 'message' },
      ].map((input, index) => (
        <div key={index} className="flex flex-col">
          <label className="label font-semibold" htmlFor={input.name}>
            {input.label}
          </label>
          {input.type === 'textarea' ? (
            <textarea
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              rows={4}
              name={input.name}
              id={input.name}
              className={`textarea bg-primary input-bordered w-full ${inputsTransParent ? 'bg-transparent' : ''}`}
              placeholder={input.label}
            />
          ) : (
            <input
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              type={input.type}
              name={input.name}
              id={input.name}
              className={`input bg-primary input-bordered w-full ${inputsTransParent ? 'bg-transparent' : ''}`}
              placeholder={input.label}
            />
          )}
        </div>
      ))}

      <div className="mt-4">
        <button className="btn bg-gradient-linear-100 text-white border-2 w-full">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;

