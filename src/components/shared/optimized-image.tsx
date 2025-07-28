import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  priority?: boolean;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className,
  priority = false,
  width,
  height,
  ...props 
}: OptimizedImageProps) => {
  if (!src || !alt || src === 'undefined') {
    return null;
  }
  // Detectar si es una imagen crítica (above-the-fold)
  const isCritical = priority || src.includes('featured') || src.includes('portada');
  
  return (
    <div className="relative w-full my-6">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        className={`w-full h-auto rounded-lg shadow-md ${className || ''}`}
        priority={isCritical}
      />
    </div>
  );
};