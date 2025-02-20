import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useMemo } from 'react';

const ContactForm = ({ inputsTransParent = false }: { inputsTransParent?: boolean }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]);
  const labelRefs = useRef<(HTMLLabelElement)[]>([]);

  const inputFields = useMemo(() => [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Phone Number', type: 'tel', name: 'phone' },
    { label: 'Message', type: 'textarea', name: 'message' },
  ], []);

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
        `<${index * 0.2}`
      );

      const label = labelRefs.current[index];
      if (label) {
        tl.fromTo(
          label,
          {
            opacity: 0,
            y: -50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          `<${index * 0.2}`
        );
      }
    });
  }, [inputsTransParent]);

  return (
    <form ref={formRef} className="grid grid-cols-1 gap-4">
      {inputFields.map((input, index) => (
        <div key={input.name} className="flex flex-col">
          <label
            ref={(el) => {
              if (el) labelRefs.current[index] = el;
            }}
            className="label font-semibold"
            htmlFor={input.name}
          >
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

