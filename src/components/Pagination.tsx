import Link from 'next/link';
import { FC } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type Props = {
  maxPageNumber: number;
  currentPageNumber: number;
  PER_PAGE: number;
  totalCount: number;
};

const Pagination: FC<Props> = ({ maxPageNumber, currentPageNumber, totalCount, PER_PAGE }) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className='flex justify-center items-center py-5 space-x-4'>
      <li>
        <Link href={`/blog/page/${prevPage}`}>
          <a>
            <button
              type='button'
              aria-label='pagination button'
              className={`flex justify-center items-center w-10 h-10 hover:bg-indigo-300 rounded-full transition-colors duration-150 ${
                currentPageNumber === 1 ? 'hidden' : ''
              }`}
            >
              <FaAngleLeft />
            </button>
          </a>
        </Link>
      </li>

      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>
            <a>
              <button
                type='button'
                aria-label='pagination button'
                className={`flex justify-center items-center w-10 h-10 hover:bg-indigo-300 rounded-full transition-colors duration-150 ${
                  currentPageNumber === number ? 'bg-indigo-400 text-white' : ''
                }`}
              >
                {number}
              </button>
            </a>
          </Link>
        </li>
      ))}
      <li>
        <Link href={`/blog/page/${nextPage}`}>
          <a>
            <button
              type='button'
              aria-label='pagination button'
              className={`flex justify-center items-center w-10 h-10 hover:bg-indigo-300 rounded-full transition-colors duration-150 ${
                currentPageNumber === maxPageNumber ? 'hidden' : ''
              }`}
            >
              <FaAngleRight />
            </button>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
