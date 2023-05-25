'use client';

import { useEffect, useState } from 'react';
import QuoteBlock from './components/QuoteBlock';
import RandomButton from './components/RandomButton';
import QuoteLoading from './components/QuoteLoading';

export type Result = {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: number;
};

export default function () {
  const [quote, setQuote] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getQuote() {
    setIsLoading(true);
    const response = await fetch(
      'https://quote-garden.onrender.com/api/v3/quotes/random'
    );

    if (!response.ok) {
      throw new Error('Response from API not ok.');
    } else {
      const json = await response.json();
      const { data } = json;
      setIsLoading(false);
      setQuote(data);
    }
  }

  useEffect(() => {
    getQuote();
  }, []);

  console.log(quote);

  return (
    <main className="flex h-screen items-center justify-center">
      <RandomButton onRandomize={getQuote} />
      {quote.map((item: Result) =>
        isLoading ? (
          <QuoteLoading />
        ) : (
          <QuoteBlock
            key={item._id}
            quoteText={item.quoteText}
            quoteAuthor={item.quoteAuthor}
            quoteGenre={item.quoteGenre}
            withAuthor={true}
          />
        )
      )}
    </main>
  );
}
