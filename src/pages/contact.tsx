import { NextPage } from 'next';
import Image from 'next/image';
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
        title='お気軽にお問い合わせください'
        description='ご連絡をいただいてから2、3日以内にご返信させていただきます'
      />
      <div className='container py-10'>
        <div className='flex flex-col justify-between mx-auto md:flex-row'>
          <div className='flex shrink-0 justify-center items-center mx-auto w-full max-w-md md:mx-0 md:w-1/3'>
            <Image
              src='/images/mailbox.png'
              width={300}
              height={300}
              alt='ContactUs'
              className='rounded-lg'
            />
          </div>
          <div className='mx-auto w-full md:order-first md:mx-0 md:mr-12 md:max-w-none lg:mr-16'>
            <div className='text-left'>
              <form className='flex flex-col p-8 mx-auto max-w-2xl'>
                <label
                  htmlFor='name'
                  className='mt-8 mb-2 font-light text-gray-500 dark:text-white'
                >
                  お名前<span className='text-red-500'>*</span>
                </label>
                <input type='text' name='name' className='formInput' />

                <label
                  htmlFor='email'
                  className='mt-8 mb-2 font-light text-gray-500 dark:text-white'
                >
                  メールアドレス<span className='text-red-500'>*</span>
                </label>
                <input type='text' name='email' className='formInput' />

                <label
                  htmlFor='message'
                  className='mt-8 mb-2 font-light text-gray-500 dark:text-white'
                >
                  メッセージ<span className='text-red-500'>*</span>
                </label>
                <textarea name='message' rows={7} className='formInput' />

                <div className='pt-8 text-center'>
                  <button className='btn'>送信する</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
