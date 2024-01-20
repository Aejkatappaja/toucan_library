import React from 'react';
import { Image } from '../image';
import book from '@/assets/images/book.png';

export const Loader: React.FC = (): JSX.Element => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-8 border-2 md:w-screen'>
      <Image src={book} className='animate-spin-slow' width={150} />
      <h1 className='text-lg font-semibold text-[#404040]'>
        Chargement des données...
      </h1>
    </div>
  );
};
