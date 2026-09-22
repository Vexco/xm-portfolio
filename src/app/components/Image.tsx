import react from 'react'

interface CustImgProps {
  src: string;
  alt?: string;
  className?: string; // Rend la prop optionnelle
}

const basePath = process.env.NEXT_PUBLIC_PATH || '';

export default function CustImg({ src, alt, className }: CustImgProps) {
  // Nettoie uniquement le slash initial pour éviter le double slash "//"
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  const path = `${basePath}/${cleanSrc}`;

  return (
    <img src={path} alt={alt} className={className} />
  );
}