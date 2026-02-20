import type { ReactNode } from 'react';

interface SideBarRootProps {
  children: ReactNode;
}

export const SideBarRoot = ({ children }: SideBarRootProps) => {
  return (
    <div className="bg-[#1A1C2E] h-dvw w-80 p-6 border-[#2C2F4B] border-2">
      {children}
    </div>
  );
};

interface SideBarHeaderRootProps {
  children: ReactNode;
}

export const SideBarHeaderRoot = ({ children }: SideBarHeaderRootProps) => {
  return <div className="ml-4">{children}</div>;
};

interface SideBarTitleProps {
  children: ReactNode;
}

export const SideBarTitle = ({ children }: SideBarTitleProps) => {
  return <h1 className="text-slate-50 font-semibold text-2xl">{children}</h1>;
};

interface SideBarSubTitleProps {
  children: ReactNode;
}

export const SideBarSubTitle = ({ children }: SideBarSubTitleProps) => {
  return <p className="text-slate-400 text-sm">{children}</p>;
};

interface SideBarContentProps {
  children: ReactNode;
}

export const SideBarContent = ({ children }: SideBarContentProps) => {
  return <div className="flex items-center">{children}</div>;
};

interface SideBarContentWrapperProps {
  children: ReactNode;
}

export const SideBarContentWrapper = ({
  children,
}: SideBarContentWrapperProps) => {
  return <div className="">{children}</div>;
};

interface SideBarFooterProps {
  children: ReactNode;
}

export const SideBarFooter = ({ children }: SideBarFooterProps) => {
  return <div>{children}</div>;
};

interface SideBarLabelProps {
  children: ReactNode;
}

export const SideBarLabel = ({ children }: SideBarLabelProps) => {
  return <p className="text-xs text-slate-400 ml-4 mt-10">{children}</p>;
};
