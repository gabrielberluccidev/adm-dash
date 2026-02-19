import {
  type ButtonHTMLAttributes,
  type ReactNode,
  // type ElementType,
} from 'react';

import { twMerge } from 'tailwind-merge';

interface ButtonRootProps {
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
}

const buttonVariants = {
  dashboard: `hover:bg-indigo-600 hover:cursor-pointer 
    text-white p-4 w-full mt-4 rounded-md text-start flex items-center gap-2`,
  filter: `hover:cursor-pointer border-slate-700 border-1
    text-white p-4 w-40 mt-4 rounded-md text-start flex items-center gap-2`,
  add: `hover:cursor-pointer bg-indigo-600 rounded-md
    text-white p-4 w-40 mt-4 text-start flex items-center gap-2`,
};

export const ButtonRoot = ({
  children,
  variant = 'dashboard',
  className,
}: ButtonRootProps) => {
  const classes = twMerge(
    'transition-colors font-medium',
    buttonVariants[variant],
    className,
  );
  return <div className={classes}>{children}</div>;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="hover:cursor-pointer" {...props}>
      {children}
    </button>
  );
};
