import { AiOutlineCheck } from 'react-icons/ai';
import SectionHeader from '@components/SectionHeader';

const Features = () => {
  return (
    <section className='py-8 bg-white dark:bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex flex-col flex-wrap items-center md:flex-row md:justify-center md:items-stretch'>
          <SectionHeader
            subheading='FEATURES'
            title='MUKK PACKの思いとは？'
            description='このブログを作成した経緯や特徴をご紹介'
          />
          <div className='py-16'>
            <div className='grid gap-8 md:grid-cols-2'>
              <div className='max-w-md text-center'>
                <div className='flex justify-center items-center mx-auto mb-4 w-20 h-20 bg-indigo-50 rounded-full'>
                  <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
                </div>
                <h3 className='mb-3 text-2xl font-bold leading-5'>早く多くの情報を</h3>
                <p className='mb-3 text-sm'>
                  包装資材の市場環境も早いスピードで変化しています。新商品や世の中の流れに応じた市場環境の情報を多くかつスピード感を持ってご紹介します。
                </p>
              </div>
              <div className='max-w-md text-center'>
                <div className='flex justify-center items-center mx-auto mb-4 w-20 h-20 bg-indigo-50 rounded-full'>
                  <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
                </div>
                <h3 className='mb-3 text-2xl font-bold leading-5'>SNSでも発信してます</h3>
                <p className='mb-3 text-sm'>
                  このブログサイトだけではなく、SNSでも発信しています。良ければページ下部にあるアイコンからフォローをお願いします。特にInstagramに力を入れています。
                </p>
              </div>
              <div className='max-w-md text-center'>
                <div className='flex justify-center items-center mx-auto mb-4 w-20 h-20 bg-indigo-50 rounded-full'>
                  <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
                </div>
                <h3 className='mb-3 text-2xl font-bold leading-5'>個別に商品提案も</h3>
                <p className='mb-3 text-sm'>
                  商品に関することやお探しのアイテムがありましたら、商品のご紹介もさせていただきます。お問い合わせやご質問等ございましたらお気軽にお問合せフォームよりご連絡ください。
                </p>
              </div>
              <div className='max-w-md text-center'>
                <div className='flex justify-center items-center mx-auto mb-4 w-20 h-20 bg-indigo-50 rounded-full'>
                  <AiOutlineCheck className='w-12 h-12 text-indigo-600' />
                </div>
                <h3 className='mb-3 text-2xl font-bold leading-5'>プログラミング学習として</h3>
                <p className='mb-3 text-sm'>
                  私のプログラミング学習のアウトプットとしてイチから全て私が作成しました。素人のため至らぬ点もあるかと思います。改善点がありましたら、お問合せフォームからご連絡をいただけますと幸いです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
