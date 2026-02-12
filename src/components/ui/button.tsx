import {
  type ButtonHTMLAttributes,
  type ReactNode,
  type ElementType,
} from "react";

import { twMerge } from "tailwind-merge";

interface ButtonRootProps {
  children: ReactNode;
}

export const ButtonRoot = ({ children }: ButtonRootProps) => {
  return <div>{children}</div>;
};

const buttonVariants = {
  dashboard:
    "hover:bg-indigo-600 hover:cursor-pointer text-white p-4 w-full mt-4 rounded-md",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
}

export const Button = ({
  children,
  variant = "dashboard",
  className,
  ...props
}: ButtonProps) => {
  const classes = twMerge(
    "transition-colors font-medium",
    buttonVariants[variant],
    className,
  );

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

interface ButtonIconProps {
  icon: ElementType;
}

export const ButtonIcon = ({ icon: Icon }: ButtonIconProps) => {
  return <Icon className="text-zinc-200 absolute self-center ml-2" />;
};
