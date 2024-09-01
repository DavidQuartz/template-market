import React from 'react';

interface AvatarProps {
  src: string;
  alt?: string;
  size?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'w-16 h-16',
  className = '',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${size} ${className}`}
    />
  );
};

export default Avatar;
