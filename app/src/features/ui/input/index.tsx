import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  htmlFor: string;
  placeholder: string;
  type: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  htmlFor,
  placeholder,
  type,
}) => {
  return (
    <div className='relative'>
      <label
        htmlFor={htmlFor}
        className='absolute flex py-[0.8rem] pl-4 text-center '
      >
        <FaMagnifyingGlass className='text-toucan_primary_green/60' />
      </label>
      <input
        placeholder={placeholder}
        name={htmlFor}
        onChange={onChange}
        type={type}
        className='rounded-xl border-2 py-[9px] pl-10 text-sm font-semibold tracking-wide outline-none outline duration-300 placeholder:font-semibold placeholder:text-[#909090ae] focus:bg-toucan_light_green/30 focus:shadow-inner md:w-96'
      />
    </div>
  );
};
