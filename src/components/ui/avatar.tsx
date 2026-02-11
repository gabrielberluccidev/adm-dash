import type { ReactNode } from "react";

interface AvatarRootProps {
  children: ReactNode;
}

export const AvatarRoot = ({ children }: AvatarRootProps) => {
  return <div className="flex gap-6 items-center">{children}</div>;
};

interface AvatarUserWrapperProps {
  children: ReactNode;
}

export const AvatarUserWrapper = ({ children }: AvatarUserWrapperProps) => {
  return <div>{children}</div>;
};

interface AvatarNameProps {
  children: ReactNode;
}

export const AvatarName = ({ children }: AvatarNameProps) => {
  return <div className="text-white">{children}</div>;
};

interface AvatarRoleProps {
  children: ReactNode;
}

export const AvatarRole = ({ children }: AvatarRoleProps) => {
  return <div className="text-gray-400">{children}</div>;
};

interface AvatarImageProps {
  src: string;
  alt: string;
}

export const AvatarImage = ({ src, alt }: AvatarImageProps) => {
  return <img className="w-10 h-10" src={src} alt={alt} />;
};
