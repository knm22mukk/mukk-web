import { NextPage } from 'next';
import SectionHeader from '@components/SectionHeader';

const about: NextPage = () => {
  return (
    <div>
      <SectionHeader
        subheading='ABOUT'
        title='Who Is MUKK?'
        description='このブログサイトでどんな情報を発信するかご紹介します'
      />
    </div>
  );
};

export default about;
