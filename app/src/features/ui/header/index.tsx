import React from 'react';
import toucan_logo from '@/assets/logo/toucan_logo.webp';
import { BookSearchbar } from '@/features/books/book-search';
import { Image } from '../image';

export const Header: React.FC = (): JSX.Element => {
  return (
    <header className='fixed left-0 right-0 flex h-[80.5px] items-center justify-between border-b bg-white px-6 shadow-md md:justify-normal'>
      <Image src={toucan_logo} width={92} height={35.5} />
      <div className='md:flex md:w-full md:justify-center'>
        <BookSearchbar />
      </div>
    </header>
  );
};
