'use client';

import React from 'react';
import classNames from 'classnames';
import { NavigationRowLinkProps } from '@/components/ui/NavigationRowLink/types';

export const NavigationRowLink: React.FC<NavigationRowLinkProps> = ({
  title,
  href,
  variant,
  onClick,
}) => {
  const handleClick = () => {
    const sectionElement = document.querySelector(href);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }
  };
  const navlinkClasses = classNames(
    'btn-transition cursor-pointer font-inter font-normal text-grey transition hover:text-lightGray focus:text-lightGray',
    {
      'hover:text-purple-light focus:text-purple-light':
        variant === 'mobile-menu',
    },
  );

  return (
    <li onClick={onClick} className={navlinkClasses}>
      <a onClick={handleClick}>{title}</a>
    </li>
  );
};