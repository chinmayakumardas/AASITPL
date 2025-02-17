// src/components/ui/typography.js

import React from 'react';

const Typography = ({ variant = 'body', children, className = '' }) => {
  const variants = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    body: 'text-base',
    small: 'text-sm text-gray-600',
  };

  const classNames = variants[variant] || variants.body;

  return <p className={`${classNames} ${className}`}>{children}</p>;
};

export default Typography;
