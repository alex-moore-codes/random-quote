import Link from 'next/link';

export type QuoteBlockProps = {
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  withAuthor: boolean;
};

export default function QuoteBlock({
  quoteText,
  quoteAuthor,
  quoteGenre,
  withAuthor = false,
}: QuoteBlockProps) {
  return (
    <div>
      <div className="w-[713px] border-l-[8px] border-l-[#F7DF94] pl-[99px]">
        <p className="text-[36px] leading-[43.2px] selection:bg-[#F7DF94]">
          "{quoteText}"
        </p>
      </div>
      {withAuthor && (
        <Link href={`/${quoteAuthor}`}>
          <div className="group ml-[82px] mt-[109px] inline-block h-[151px] w-[672px] pl-[29px] pt-[50px] hover:cursor-pointer hover:bg-[#333333]">
            <p className="text-[24px] font-bold leading-[28.18px] text-[#4F4F4F] group-hover:text-[#F2F2F2]">
              {quoteAuthor}
            </p>
            <p className="mt-2 text-[14px] leading-[16.44px] text-[#828282]">
              {quoteGenre}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
