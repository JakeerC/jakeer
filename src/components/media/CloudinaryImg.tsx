'use client';
//! TODO : refact -> remove styled-jsx which is client comp
import { buildUrl } from 'cloudinary-build-url';
import clsx from 'clsx';
import Image from 'next/image';

import { cloudinaryCloudName } from '@/constants/consts';

type CloudinaryImgType = {
  publicId: string;
  height: string | number;
  width: string | number;
  alt: string;
  title?: string;
  className?: string;
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
  className,
  noStyle = false,
  mdx = false,
  style,
  aspect,
  ...rest
}: CloudinaryImgType) {
  const urlBlurred = buildUrl(publicId, {
    cloud: {
      cloudName: cloudinaryCloudName,
    },
    transformations: {
      effect: {
        name: 'blur:1000',
      },
      quality: 1,
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: cloudinaryCloudName,
    },
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });

  const aspectRatio = aspect ? aspect.height / aspect.width : undefined;

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
      <div
        style={{
          position: 'relative',
          height: 0,
          paddingTop: aspectRatio
            ? `${aspectRatio * 100}%`
            : `${(+height / +width) * 100}%`,
        }}
        className="img-blur"
      >
        <style jsx>{`
          .img-blur::before {
            content: '';
            position: absolute;
            inset: 0;
            filter: blur(20px);
            z-index: 0;
            background-image: url(${urlBlurred});
            background-position: center center;
            background-size: 100%;
          }
        `}</style>
        <div className="absolute left-0 top-0">
          <Image
            width={
              resizedToMaxWidth ? +Math.min(+width, RESIZE_MAX_WIDTH) : +width
            }
            height={
              resizedToMaxWidth
                ? +(RESIZE_MAX_WIDTH * +height) / +width
                : +height
            }
            src={url}
            alt={alt}
            title={title || alt}
          />
        </div>
      </div>
    </figure>
  );
}
