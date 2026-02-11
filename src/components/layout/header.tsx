import type { ReactNode } from "react";

interface HeaderRootProps {
  children: ReactNode;
}

export const HeaderRoot = ({ children }: HeaderRootProps) => {
  return <header>{children}</header>;
};

interface HeaderContentProps {
  children: ReactNode;
}

export const HeaderContent = ({ children }: HeaderContentProps) => {
  return (
    /*
    TODO: after making the sidebar, check how this header will look like.
  
    */
    <div className="flex items-center bg-[#1A1C2E] text-zinc-200 justify-between p-4 pt-2 pb-2">
      {children}
    </div>
  );
};
