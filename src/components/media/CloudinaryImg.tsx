import clsx from 'clsx';
import Image from 'next/image';

import { generateCloudinaryImgURL } from '@/lib/helper';

type CloudinaryImgType = {
  publicId: string;
  height: string | number;
  width: string | number;
  alt: string;
  title?: string;
  className?: string;
  imgClassName?: string;
  noStyle?: boolean;
  aspect?: {
    width: number;
    height: number;
  };
  mdx?: boolean;
} & React.ComponentPropsWithoutRef<'figure'>;

export default function CloudinaryImg({
  publicId,
  height,
  width,
  alt,
  title,
  imgClassName,
  className,
  noStyle = false,
  mdx = false,
  style,
  aspect,
  ...rest
}: CloudinaryImgType) {
  const url = generateCloudinaryImgURL({ publicId, aspect, width });
  const aspectRatio = aspect ? aspect.width / aspect.height : undefined;

  const RESIZE_MAX_WIDTH = 1000;
  const resizedToMaxWidth = mdx && +width >= RESIZE_MAX_WIDTH;

  return (
    <figure
      className={clsx(className, {
        'overflow-hidden rounded shadow dark:shadow-none': !noStyle,
        'mx-auto w-full': mdx && +width <= 800,
      })}
      style={{
        ...(mdx && +width <= 800 ? { maxWidth: width } : {}),
        ...style,
      }}
      {...rest}
    >
      <Image
        width={resizedToMaxWidth ? +Math.min(+width, RESIZE_MAX_WIDTH) : +width}
        height={
          resizedToMaxWidth ? +(RESIZE_MAX_WIDTH * +height) / +width : +height
        }
        className={clsx(
          'bg-slate-800 before:blur-md',
          aspectRatio ? `aspect-[${aspectRatio.toString()}] ` : '',
          imgClassName
        )} //! TODO : refact if breaks, may break as we are using dynamic
        src={url}
        alt={alt}
        title={title || alt}
      />
    </figure>
  );
}
