import Image from 'next/image';
import { FC } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { siteMetaData } from '@data/siteMetaData';

const AboutMe: FC = () => {
  return (
    <div className='container pt-16'>
      <div className='text-center'>
        <Image
          src='/images/logo300x300.webp'
          alt='MukkImage'
          width={300}
          height={300}
          className='w-48 h-48'
        />
        <div className='flex justify-center pt-6 space-x-4'>
          <a
            href={siteMetaData.twitter}
            aria-label='twitterへのリンク'
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 text-3xl font-bold  hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 duration-300'
          >
            <FaTwitter />
          </a>
          <a
            href={siteMetaData.facebook}
            aria-label='facebookへのリンク'
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 text-3xl font-bold  hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 duration-300'
          >
            <FaFacebook />
          </a>
          <a
            href={siteMetaData.instagram}
            aria-label='instagramへのリンク'
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 text-3xl font-bold  hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 duration-300'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className='py-8 mx-auto max-w-lg font-medium'>
        <p className='pt-4'>
          ようこそ。
          <br />
          包装資材営業マンのむっくです。
          <br />
          私のブログサイトを見に来ていだきありがとうございます。
        </p>
        <p className='pt-4'>
          私は包装資材の業界に携わってから約8年が経過しました。
          <br />
          様々な商品が新たに発売していく中で商品情報や、市場の情報をいち早く多く届けたいと思いこのブログサイトを作成しました。
        </p>
        <p className='pt-4'>このブログから何か新しい気づきや発見をお届けできれば嬉しいです。</p>
        <p className='pt-4'>
          何かお気づきのことがございましたら、お問い合わせページからお問い合わせいただくか
          <br />
          SNSよりDMをお送りください。
          <br />
          SNSのフォローもよろしくお願いいたします。
          <br />
        </p>
        <p className='pt-4'>是非ゆっくり見ていってください。</p>
      </div>
    </div>
  );
};

export default AboutMe;
