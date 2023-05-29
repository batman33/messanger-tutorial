"use client";

import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface MobileItemProps {
  active?: boolean;
  href: string;
  icon: any;
  label: string;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      onClick={handleClick}
      className={clsx(
        `group flex gap-x-3 text-3xl leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100`,
        active && "text-black bg-gray-100"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
