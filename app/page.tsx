'use client';

import { useState } from 'react';
import QuoteBlock from './components/QuoteBlock';
import RandomButton from './components/RandomButton';

export type Result = {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: number;
};

export async function RandomQuote() {
  const res = await fetch(
    'https://quote-garden.onrender.com/api/v3/quotes/random',
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function () {
  let { data } = await RandomQuote();
  let quote: Result[] = data;

  return quote.map((item: Result) => (
    <main className="flex h-screen items-center justify-center">
      <RandomButton />
      <QuoteBlock
        quoteText={item.quoteText}
        quoteAuthor={item.quoteAuthor}
        quoteGenre={item.quoteGenre}
        withAuthor={true}
      />
    </main>
  ));
}
