'use client';

import Link from 'next/link';

type RandomButtonProps = {
  onRandomize?: React.MouseEventHandler<HTMLButtonElement> | null;
};

export default function RandomButton({
  onRandomize = null,
}: RandomButtonProps) {
  return (
    <Link href={`/`} className="absolute right-[100px] top-[31px]">
      random
    </Link>
  );
}
