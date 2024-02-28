import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

type NextImageProps = {
  useSkeleton?: boolean;
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
  width: string | number;
  height: string | number;
} & ImageProps;

/**
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */

export default function NextImage({
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  ...rest
}: NextImageProps) {
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
      <Image
        className={clsx(
          imgClassName,
          // text-gray to hide alt text
          'bg-gray-400 text-gray-400 '
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        {...rest}
      />
    </figure>
  );
}
