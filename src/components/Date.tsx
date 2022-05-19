import { format, parseISO } from 'date-fns';
import { VFC } from 'react';

type Props = {
  dateString: string;
};

const Date: VFC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'yyyy年 MM月 dd日')}</time>;
};

export default Date;
