import React from 'react';
import useBookList from './use-book-list';
import { BookCard } from './book-item.component';
import { Loader } from '@/features/ui';

export const BookList: React.FC = (): JSX.Element => {
  const { data, isLoading } = useBookList();
  console.log(data);

  const results = data.length;
  const results_label = results > 1 ? 'Résultats' : 'Résultat';
  const displayResult = `${results} ${results_label}`;

  return (
    <section className='bg-toucan grid min-h-screen grid-cols-1 gap-8 border-black px-6 pb-12 pt-32 md:grid-cols-2'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className='cols-span-1 text-center font-bold md:col-span-2'>
            {displayResult}
          </h1>
          {data?.map((item) => {
            return <BookCard key={item.bookID} item={item} />;
          })}
        </>
      )}
    </section>
  );
};
