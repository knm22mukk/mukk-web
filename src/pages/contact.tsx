import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import BreadCrumb from '@components/BreadCrumb';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';

const Contact: NextPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    fetch('/api/sendMail', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        msg: form.msg,
      }),
    })
      .then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
        } else {
          console.log(`Error: Status Code ${res.status}`);
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };

  return (
    <Layout>
      <SEO
        pageTitle='MUKK PAKK || お問い合わせ'
        pageDescription='包装資材営業マンむっくへのお問い合わせはこちらからお願いします。お問い合わせから2、3日以内にご連絡させていただきます。'
      />
      <BreadCrumb
        lists={[
          {
            title: 'お問い合わせ',
            to: '/contact',
          },
        ]}
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
              src='/images/mailbox.webp'
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

                <input
                  onChange={(e) => {
                    const val = e.currentTarget.value;
                    setForm((props) => ({
                      ...props,
                      name: val !== null ? val : '',
                    }));
                  }}
                  value={form.name}
                  type='text'
                  name='name'
                  className='formInput'
                />
                <label
                  htmlFor='email'
                  className='mt-8 mb-2 font-light text-gray-500 dark:text-white'
                >
                  メールアドレス<span className='text-red-500'>*</span>
                </label>
                <input
                  onChange={(e) => {
                    const val = e.currentTarget.value;
                    setForm((props) => ({
                      ...props,
                      email: val !== null ? val : '',
                    }));
                  }}
                  name='email'
                  type='text'
                  className='formInput'
                />
                <label
                  htmlFor='message'
                  className='mt-8 mb-2 font-light text-gray-500 dark:text-white'
                >
                  メッセージ<span className='text-red-500'>*</span>
                </label>
                <textarea
                  onChange={(e) => {
                    const val = e.currentTarget.value;
                    setForm((props) => ({
                      ...props,
                      msg: val !== null ? val : '',
                    }));
                  }}
                  name='text'
                  className='formInput'
                  rows={5}
                ></textarea>
                <input
                  onClick={async (e) => {
                    await handleSubmit(e);
                  }}
                  type='submit'
                  value='送信する'
                  className='mt-10 btn'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
