import { AiOutlineCheck } from 'react-icons/ai';
import SectionHeader from '@components/SectionHeader';

const Features = () => {
  return (
    <section className='container pt-16'>
      <div className='flex flex-col flex-wrap items-center mx-auto max-w-screen-lg md:flex-row md:justify-center md:items-stretch'>
        <SectionHeader
          subheading='FEATURES'
          title='MUKK PACKの思いとは？'
          description='このブログを作成した経緯や特徴をご紹介'
        />
        <div className='py-16 px-4 mx-auto sm:max-w-xl md:px-24 md:max-w-full lg:py-20 lg:px-8 lg:max-w-screen-xl'>
          <div className='grid gap-8 gap-x-10 lg:grid-cols-2'>
            <div className='mx-auto max-w-md sm:text-center'>
              <div className='flex justify-center items-center mb-4 w-16 h-16 bg-indigo-50 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
                <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
              </div>
              <h4 className='mb-3 text-2xl font-bold leading-5'>早く多くの情報を</h4>
              <p className='mb-3 text-sm'>
                包装資材の市場環境も早いスピードで変化しています。新商品や世の中の流れに応じた市場環境の情報を多くかつスピード感を持ってご紹介します。
              </p>
            </div>
            <div className='max-w-md sm:mx-auto sm:text-center'>
              <div className='flex justify-center items-center mb-4 w-16 h-16 bg-indigo-50 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
                <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
              </div>
              <h4 className='mb-3 text-2xl font-bold leading-5'>SNSでも発信してます</h4>
              <p className='mb-3 text-sm'>
                このブログサイトだけではなく、SNSでも発信しています。良ければページ下部にあるアイコンからフォローをお願いします。特にInstagramに力を入れています。
              </p>
            </div>
            <div className='max-w-md sm:mx-auto sm:text-center'>
              <div className='flex justify-center items-center mb-4 w-16 h-16 bg-indigo-50 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
                <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
              </div>
              <h4 className='mb-3 text-2xl font-bold leading-5'>個別に商品提案も</h4>
              <p className='mb-3 text-sm'>
                商品に関することやお探しのアイテムがありましたら、商品のご紹介もさせていただきます。お問い合わせやご質問等ございましたらお気軽にお問合せフォームよりご連絡ください。
              </p>
            </div>
            <div className='max-w-md sm:mx-auto sm:text-center'>
              <div className='flex justify-center items-center mb-4 w-16 h-16 bg-indigo-50 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
                <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
              </div>
              <h4 className='mb-3 text-2xl font-bold leading-5'>プログラミング学習として</h4>
              <p className='mb-3 text-sm'>
                私のプログラミング学習のアウトプットとしてイチから全て私が作成しました。素人のため至らぬ点もあるかと思います。改善点がありましたら、お問合せフォームからご連絡をいただけますと幸いです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
