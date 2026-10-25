/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  fallbackSrc = '/assets/aistudio/unhas_6aede811.png',
  alt,
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Normalize path if someone accidentally passes /src/assets/...
  const cleanSrc = currentSrc.startsWith('/src/assets/')
    ? currentSrc.replace('/src/assets/', '/assets/')
    : currentSrc;

  const handleError = () => {
    if (!hasError && fallbackSrc && cleanSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#141214] ${aspectRatioClass}`}>
      {/* Skeleton / Ambient backdrop during mobile load */}
      <div
        className={`absolute inset-0 bg-[#1C1A1E] transition-opacity duration-500 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      />

      <img
        src={cleanSrc}
        alt={alt}
        loading={loading}
        // @ts-expect-error - fetchPriority is modern HTML attribute supported in browsers
        fetchpriority={fetchPriority}
        decoding="async"
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-103'
        } ${className}`}
        referrerPolicy="no-referrer"
        {...rest}
      />
    </div>
  );
};
