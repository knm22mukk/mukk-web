import { NextPage } from 'next';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';

const contact: NextPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle='MUKK PAKK || お問い合わせ'
        pageDescription='包装資材営業マンむっくへのお問い合わせはこちらからお願いします。お問い合わせから2、3日以内にご連絡させていただきます。'
      />
      <SectionHeader
        subheading='CONTACT'
        title='What kind of products do I introduce?'
        description='このブログサイトでどんな情報を発信するかご紹介します'
      />
      <div className='container py-16'>
        <form className='flex flex-col p-8 mx-auto max-w-2xl'>
          <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500 dark:text-white'>
            お名前<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='name'
            className='py-1 px-3 w-full text-base leading-8 text-gray-700 bg-gray-100 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
          />

          <label htmlFor='email' className='mt-8 mb-2 font-light text-gray-500 dark:text-white'>
            メールアドレス<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='email'
            className='py-1 px-3 w-full text-base leading-8 text-gray-700 bg-gray-100 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
          />

          <label htmlFor='message' className='mt-8 mb-2 font-light text-gray-500 dark:text-white'>
            メッセージ<span className='text-red-500'>*</span>
          </label>
          <textarea
            name='message'
            className='py-1 px-3 w-full text-base leading-8 text-gray-700 bg-gray-100 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
          />

          <div className='pt-8 text-center'>
            <button className='btn'>送信する</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default contact;
