import React from 'react';

type TitleProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ text, level = 1, className = '' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-${level === 1 ? '4xl' : level === 2 ? '3xl' : level === 3 ? '2xl' : level === 4 ? 'xl' : level === 5 ? 'lg' : 'base'} font-bold ${className}`}>
      {text}
    </Tag>
  );
};

export default Title;
