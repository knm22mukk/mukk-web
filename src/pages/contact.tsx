import { NextPage } from 'next';
import SectionHeader from '@components/SectionHeader';

const contact: NextPage = () => {
  return (
    <div>
      <SectionHeader
        subheading='CONTACT'
        title='What kind of products do I introduce?'
        description='このブログサイトでどんな情報を発信するかご紹介します'
      />
    </div>
  );
};

export default contact;
