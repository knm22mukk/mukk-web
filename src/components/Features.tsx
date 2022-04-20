import { AiOutlineCheck } from 'react-icons/ai';
import SectionHeader from '@components/SectionHeader';

const Features = () => {
  return (
    <div className='container'>
      <div className='flex flex-col flex-wrap items-center mx-auto max-w-screen-lg md:flex-row md:justify-center md:items-stretch'>
        <SectionHeader
          subheading='BLOG'
          title='What kind of products do I introduce?'
          description='このブログサイトでどんな情報を発信するかご紹介します'
        />
        <div className='py-16 px-4 mx-auto sm:max-w-xl md:px-24 md:max-w-full lg:py-20 lg:px-8 lg:max-w-screen-xl'>
          <div className='grid gap-8 gap-x-10 lg:grid-cols-2'>
            <div className='max-w-md sm:mx-auto sm:text-center'>
              <div className='flex justify-center items-center mb-4 w-16 h-16 bg-indigo-50 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
                <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
              </div>
              <h6 className='mb-3 text-2xl font-bold leading-5'>A slice of heaven</h6>
              <p className='mb-3 text-sm'>
                Disrupt inspire and think tank, social entrepreneur but preliminary thinking think
                tank compelling. Inspiring, invest synergy capacity building, white paper; silo,
                unprecedented challenge B-corp problem-solvers.
              </p>
            </div>
            <div className='max-w-md sm:mx-auto sm:text-center'>
              <div className='flex justify-center items-center mb-4 w-16 h-16 bg-indigo-50 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
                <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
              </div>
              <h6 className='mb-3 text-2xl font-bold leading-5'>A slice of heaven</h6>
              <p className='mb-3 text-sm'>
                Disrupt inspire and think tank, social entrepreneur but preliminary thinking think
                tank compelling. Inspiring, invest synergy capacity building, white paper; silo,
                unprecedented challenge B-corp problem-solvers.
              </p>
            </div>
            <div className='max-w-md sm:mx-auto sm:text-center'>
              <div className='flex justify-center items-center mb-4 w-16 h-16 bg-indigo-50 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
                <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
              </div>
              <h6 className='mb-3 text-2xl font-bold leading-5'>A slice of heaven</h6>
              <p className='mb-3 text-sm'>
                Disrupt inspire and think tank, social entrepreneur but preliminary thinking think
                tank compelling. Inspiring, invest synergy capacity building, white paper; silo,
                unprecedented challenge B-corp problem-solvers.
              </p>
            </div>
            <div className='max-w-md sm:mx-auto sm:text-center'>
              <div className='flex justify-center items-center mb-4 w-16 h-16 bg-indigo-50 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
                <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
              </div>
              <h6 className='mb-3 text-2xl font-bold leading-5'>A slice of heaven</h6>
              <p className='mb-3 text-sm'>
                Disrupt inspire and think tank, social entrepreneur but preliminary thinking think
                tank compelling. Inspiring, invest synergy capacity building, white paper; silo,
                unprecedented challenge B-corp problem-solvers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
