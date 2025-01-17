import { ReactNode } from 'react';

interface PrimaryBtnProps {
    children: ReactNode;
    rounded?: boolean
}

export default function PrimaryBtn({ children ,rounded }: PrimaryBtnProps) {
  return (
    <>
      <button
     
        className={`btn text-white   bg-gradient-to-r from-[#0099F7] to-[#12F1E4] ${rounded && 'rounded-full '}`}
      >
        {children}
      </button>
    </>
  );
}
