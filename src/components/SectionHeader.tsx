type Props = {
  subheading?: string;
  title: string;
  description: string;
};

const SectionHeader = ({ subheading, title, description }: Props) => {
  return (
    <div className='container'>
      <div className='flex flex-col flex-wrap items-center'>
        <p className='mb-6 font-bold text-indigo-600 dark:text-white'>{subheading}</p>
        <h2 className='w-full text-3xl font-black tracking-wide text-center lg:text-4xl'>
          {title}
        </h2>
        <p className='mt-4 text-base font-medium leading-relaxed text-gray-500 dark:text-white'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
