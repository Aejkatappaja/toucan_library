import React from 'react';
import book from '@/assets/images/book.png';
import { Book } from './book.interface';
import { Image } from '@/features/ui';

interface BookCardProps {
  item: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ item }) => {
  const { authors, title } = item;

  const authorsLabel = authors.includes(',') ? 'Authors' : 'Author';
  return (
    <div className='flex flex-col items-center gap-4 rounded-xl border-black bg-white px-8 py-6 shadow-md shadow-black md:flex-row md:py-4'>
      <Image variant='card' src={book} width={120} />
      <div className='flex flex-col gap-4'>
        <h1 className='text-md font-bold'>{title}</h1>
        <div className=' space-y-2'>
          <h2 className='italic underline'>{authorsLabel}:</h2>
          <div className='flex gap-2 '>
            <h3>{authors}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
