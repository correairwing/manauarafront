import React, { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
  level?: 2 | 3 | 4;
  color?: string;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, level = 2, color = 'text-black', className = '' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  let sizeClass = '';
  switch (level) {
    case 2:
      sizeClass = 'text-3xl';
      break;
    case 3:
      sizeClass = 'text-2xl';
      break;
    case 4:
      sizeClass = 'text-xl';
      break;
    default:
      sizeClass = 'text-3xl';
  }

  return (
    <Tag className={`${sizeClass} ${color} ${className}`}>
      {children}
    </Tag>
  );
};

export default Title;

