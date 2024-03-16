import buildUrl from 'cloudinary-build-url';

import { cloudinaryCloudName } from '@/constants/consts';

export type GenerateURLParamsType = {
  publicId: string;
  width?: string | number;
  aspect?: {
    width: number;
    height: number;
  };
  quality?: number;
};

/**
 *
 * @param publicId  string includes relative path from base without img extension(.jpeg,.avif ...) @example: 'blog/geometry'
 * @param quality image quality
 * @returns url for image uploaded in cloudinary
 */
export function generateBlurredCloudinaryImgURL({
  publicId,
  aspect = {
    width: 1200,
    height: 630,
  },
  width = 256,
  quality = 1,
}: GenerateURLParamsType) {
  return buildUrl(publicId, {
    cloud: {
      cloudName: cloudinaryCloudName,
    },
    transformations: {
      effect: {
        name: 'blur:1000',
      },
      quality,
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });
}

/**
 *
 * @param publicId  string includes relative path from base without img extension(.jpeg,.avif ...) @example: 'blog/geometry'
 * @returns url for image uploaded in cloudinary
 */
export function generateCloudinaryImgURL({
  publicId,
  aspect = {
    width: 1200,
    height: 630,
  },
  width = 256,
  quality = 100,
}: GenerateURLParamsType) {
  return buildUrl(publicId, {
    cloud: {
      cloudName: cloudinaryCloudName,
    },
    transformations: {
      quality: quality,
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });
}
