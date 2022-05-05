type Props = {
  subheading: string;
  title: string;
  description: string;
};

const SectionHeader = ({ subheading, title, description }: Props) => {
  return (
    <div className='flex flex-col flex-wrap items-center mx-auto md:flex-row md:justify-center md:items-stretch'>
      <p className='mb-6 font-bold text-indigo-600 dark:text-white'>{subheading}</p>
      <h2 className='w-full text-3xl font-black tracking-wide text-center md:text-3xl lg:text-4xl'>
        {title}
      </h2>
      <p className='mt-4 max-w-xl text-sm font-medium leading-relaxed text-gray-500 dark:text-white md:text-base lg:text-lg'>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
