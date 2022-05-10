import { useEffect, useState, VFC } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ReturnToTop: VFC = () => {
  const [active, setActive] = useState<boolean>(false);

  const returnTop = (): void => {
    typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return (): void => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  const scrollWindow = (): void => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <button
      aria-label='トップに戻る'
      type='button'
      onClick={returnTop}
      className={`fixed right-10 bottom-10 p-4 bg-blue-400 text-white rounded-full hover:bg-blue-600 text-3xl ${
        active ? 'block' : 'hidden'
      }`}
    >
      <FaAngleDoubleUp />
    </button>
  );
};

export default ReturnToTop;
