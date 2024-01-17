import React from 'react';
import book from '@/assets/images/book.png';
import { Book } from './book.interface';
import { replaceDashByComma } from './book-list.utils';
import { Image } from '@/features/ui';

interface BookCardProps {
  item: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ item }) => {
  const { authors, title } = item;
  const allAuthors = replaceDashByComma(authors);
  const getAuthorLabel = allAuthors.includes(',') ? 'Authors' : 'Author';
  return (
    <div className='bg-toucan_primary_yellow/90 flex flex-col items-center gap-4 rounded-xl border-black px-8 py-6 shadow-md shadow-black md:flex-row md:py-4'>
      <Image variant='card' src={book} width={150} />
      <div className='flex flex-col gap-4'>
        <h1 className='text-md font-bold md:text-lg'>{title}</h1>
        <div className=' space-y-2'>
          <h2 className='italic underline'>{getAuthorLabel}:</h2>
          <div className='flex gap-2 '>
            <h3>{allAuthors}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
