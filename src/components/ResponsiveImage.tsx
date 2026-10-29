/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  srcSet?: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  width?: number | string;
  height?: number | string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  srcSet,
  fallbackSrc = '/assets/aistudio/unhas_6aede811.webp',
  alt,
  className = '',
  aspectRatioClass = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  width,
  height,
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Normalize path if someone accidentally passes /src/assets/...
  const cleanSrc = currentSrc.startsWith('/src/assets/')
    ? currentSrc.replace('/src/assets/', '/assets/')
    : currentSrc;

  // Immediate check if already cached in browser memory
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [cleanSrc]);

  const handleError = () => {
    if (!hasError && fallbackSrc && cleanSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
      setIsLoaded(true);
    }
  };

  return (
    <div className={`relative overflow-hidden w-full h-full ${aspectRatioClass}`}>
      {/* Background skeleton: only briefly rendered until image paints */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-[#1C1A1E] pointer-events-none z-0"
          aria-hidden="true"
        />
      )}

      <img
        ref={imgRef}
        src={cleanSrc}
        srcSet={hasError ? undefined : srcSet}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 relative z-10 ${
          isLoaded ? 'opacity-100' : 'opacity-90'
        } ${className}`}
        {...rest}
      />
    </div>
  );
};
