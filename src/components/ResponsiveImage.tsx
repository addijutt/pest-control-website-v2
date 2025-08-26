// components/ResponsiveImage.tsx
import React from "react";

type ResponsiveImageProps = {
  alt: string;
  images: {
    src: string;
    width: number;
  }[];
  fallbackSrc: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  alt,
  images,
  fallbackSrc,
  width,
  height,
  sizes,
  className,
  loading = "lazy",
  fetchpriority = "auto",
}) => {
  const srcSet = images.map(img => `${img.src} ${img.width}w`).join(", "); 

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchpriority}
      decoding="async"
      onLoad={(e) => {
        // Optimize loading performance
        const img = e.target as HTMLImageElement;
        if (img.complete) {
          img.style.opacity = '1';
        }
      }}
      style={{
        opacity: loading === 'eager' ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    />
  );
};

export default ResponsiveImage;
