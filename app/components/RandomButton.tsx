'use client';

import Link from 'next/link';
import { RandomQuote } from '../page';

type RandomButtonProps = {
  onRandomize: React.MouseEventHandler<HTMLButtonElement>;
};

export default function RandomButton({ onRandomize }: RandomButtonProps) {
  return (
    <Link href={`/`}>
      <button
        className="absolute right-[100px] top-[31px]"
        onClick={RandomQuote}
      >
        <p>random</p>
      </button>
    </Link>
  );
}
