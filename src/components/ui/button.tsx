import {
  type ButtonHTMLAttributes,
  type ReactNode,
  type ElementType,
} from "react";

interface ButtonRootProps {
  children: ReactNode;
}

export const ButtonRoot = ({ children }: ButtonRootProps) => {
  return <div>{children}</div>;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "dashboard";
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className="hover:cursor-pointer">
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
