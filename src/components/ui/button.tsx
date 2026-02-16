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
