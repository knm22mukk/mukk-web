import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

type Props = {
  lists: Array<Lists>;
};

type Lists = {
  title: string;
  to: string;
};

const BreadCrumb = ({ lists }: Props): JSX.Element => {
  return (
    <div className='container py-2'>
      <ol className='flex overflow-x-auto font-bold whitespace-nowrap' aria-label='breadcrumb'>
        <li className='flex items-center'>
          <Link href='/'>
            <a className='text-sm hover:text-indigo-600 underline md:text-base'>ホーム</a>
          </Link>
          <FaChevronRight aria-hidden='true' className='mx-2 text-xs' />
        </li>
        {lists.map(({ title, to }, index) => (
          <li className='flex items-center' key={index}>
            {lists.length - 1 !== index ? (
              <>
                <Link href={to}>
                  <a className='text-sm hover:text-indigo-600 underline md:text-base'>{title}</a>
                </Link>
                <FaChevronRight aria-hidden='true' className='mx-2 text-xs' />
              </>
            ) : (
              <span className='text-sm md:text-base' aria-current='page'>
                {title}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BreadCrumb;
