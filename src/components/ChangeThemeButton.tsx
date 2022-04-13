import { useTheme } from 'next-themes';
import { useEffect, useState, VFC } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ChangeThemeButton: VFC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      area-label='ChangeThemeButton'
      type='button'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='flex items-center px-3 text-3xl'
    >
      {mounted && <>{theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}</>}
    </button>
  );
};

export default ChangeThemeButton;
