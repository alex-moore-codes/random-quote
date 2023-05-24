'use client';

import Link from 'next/link';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

type RandomButtonProps = {
  onRandomize?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function RandomButton({ onRandomize }: RandomButtonProps) {
  return onRandomize ? (
    <button
      onClick={onRandomize}
      className="absolute right-[100px] top-[31px] flex space-x-[11px]"
    >
      <span>random</span>
      <ArrowPathIcon className="h-6 w-6" />
    </button>
  ) : (
    <Link
      href="/"
      className="absolute right-[100px] top-[31px] flex space-x-[11px]"
    >
      <span>random</span>
      <ArrowPathIcon className="h-6 w-6" />
    </Link>
  );
}
