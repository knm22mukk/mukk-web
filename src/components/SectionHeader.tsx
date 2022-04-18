type Props = {
  subheading: string;
  title: string;
  description: string;
};

const SectionHeader = ({ subheading, title, description }: Props) => {
  return (
    <div className='container'>
      <div className='flex flex-col flex-wrap items-center py-20 mx-auto md:flex-row md:justify-center md:items-stretch'>
        <h5 className='mb-6 font-bold text-indigo-600'>{subheading}</h5>
        <h2 className='w-full text-4xl font-black tracking-wide text-center sm:text-5xl'>
          {title}
        </h2>
        <p className='mt-4 max-w-xl text-sm font-medium leading-relaxed text-gray-500 dark:text-white md:text-base lg:text-lg'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
