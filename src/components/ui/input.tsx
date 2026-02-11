import {
  type ElementType,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

interface InputRootProps {
  children: ReactNode;
}

export const InputRoot = ({ children }: InputRootProps) => {
  return <div>{children}</div>;
};

interface InputIconProps {
  icon: ElementType;
}

export const InputIcon = ({ icon: Icon }: InputIconProps) => {
  return <Icon className="text-zinc-200 absolute self-center ml-2" />;
};

export const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="text-zinc-200 bg-[#151724] p-2 w-150 rounded-sm pl-10 shadow-slate-700 border-slate-950 shadow-2xl"
      {...props}
    ></input>
  );
};
