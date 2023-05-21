import QuoteBlock from '../components/QuoteBlock';
import { Result } from '../page';

export default async function ({ params }: { params: { author: string } }) {
  async function AuthorQuotes() {
    const res = await fetch(
      `https://quote-garden.onrender.com/api/v3/quotes?author=` + params.author
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  let { data } = await AuthorQuotes();

  return (
    <main className="flex flex-col">
      <section className="mb-[101px] mt-[101px] flex flex-col items-center space-y-[140px]">
        <div className="w-[713px] pl-[99px]">
          <h1 className="leading[42.26px] text-[36px] font-bold text-[#333333]">
            {decodeURI(params.author)}
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-[140px]">
          {data.map((item: Result) => (
            <QuoteBlock
              quoteText={item.quoteText}
              quoteAuthor={item.quoteAuthor}
              quoteGenre={item.quoteGenre}
              withAuthor={false}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
