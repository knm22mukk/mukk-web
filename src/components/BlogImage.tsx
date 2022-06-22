import Image from 'next/image';
import { FC } from 'react';

type Props = {
  baseImageUrl: string;
  title: string;
  width?: number;
  height?: number;
  textSize?: number;
  className: string;
};

const BlogImage: FC<Props> = ({
  baseImageUrl,
  title,
  width = 1280,
  height = 720,
  textSize = 62,
  className,
}) => {
  return (
    <Image
      alt={title}
      src={`${baseImageUrl}?w=${width}&h=${height}&txt=${title}&txt-size=${textSize}&txt-color=ffffff&txt-align=middle,center&txt-font=Futura%20Condensed%20Medium&txt-fit=max`}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default BlogImage;
