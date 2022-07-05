import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import BreadCrumb from '@components/BreadCrumb';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import SectionHeader from '@components/SectionHeader';

const Contact: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [buttonText, setbuttonText] = useState('送信する');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setbuttonText('送信中...');
    fetch('/api/sendMail', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        msg: msg,
      }),
    })
      .then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
          setName('');
          setEmail('');
          setMsg('');
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          setbuttonText('送信する');
        } else {
          console.log(`Error: Status Code ${res.status}`);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setbuttonText('再送信する');
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
              {showSuccessMessage && (
                <p className='my-2 text-sm font-semibold text-green-500'>
                  ありがとうございます！お問い合わせは正常に送信されました！
                </p>
              )}
              {showFailureMessage && (
                <p className='text-red-500'>
                  エラーにより送信できませんでした。もう一度お願いいたします。
                </p>
              )}
              <form className='flex flex-col p-8 mx-auto max-w-2xl'>
                <label
                  htmlFor='name'
                  className='mt-8 mb-2 font-light text-gray-500 dark:text-white'
                >
                  お名前<span className='text-red-500'>*</span>
                </label>

                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
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
                    setEmail(e.target.value);
                  }}
                  value={email}
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
                    setMsg(e.target.value);
                  }}
                  value={msg}
                  name='text'
                  className='formInput'
                  rows={5}
                ></textarea>
                <div className='text-center'>
                  <input
                    onClick={async (e) => {
                      await handleSubmit(e);
                    }}
                    type='submit'
                    value={buttonText}
                    className='mt-10 cursor-pointer btn'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
