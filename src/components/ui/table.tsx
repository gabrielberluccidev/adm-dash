import type { ReactNode, ThHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TableRootProps {
  children: ReactNode;
}

export const TableRoot = ({ children }: TableRootProps) => {
  return <div className="bg-[#1A1C2E]">{children}</div>;
};

interface TableContentProps {
  children: ReactNode;
}

export const TableContent = ({ children }: TableContentProps) => {
  return <table>{children}</table>;
};

interface TableCaptionProps {
  children: ReactNode;
}

export const TableCaption = ({ children }: TableCaptionProps) => {
  return <caption>{children}</caption>;
};

interface TableHeaderProps {
  children: ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  return <thead className=" bg=[#171828] ">{children}</thead>;
};

interface TableRowProps {
  children: ReactNode;
}

export const TableRow = ({ children }: TableRowProps) => {
  return <tr>{children}</tr>;
};

interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export const TableHead = ({ children, ...props }: TableHeadProps) => {
  return (
    <th className="text-slate-400 p-8 align-middle " {...props}>
      {children}
    </th>
  );
};

interface TableBodyProps {
  children: ReactNode;
}

export const TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};

const tableDataVariants = {
  default: 'text-slate-400',
  productName: 'text-slate-50',
  inStock: 'bg-[#192C36] rounded-full text-[#10B880] whitespace-nowrap',
  outOfStock: 'bg-red-500 rounded-full whitespace-nowrap',
  category: 'bg-[#1E293B] text-slate-200 rounded-full whitespace-nowrap',
};

interface TableDataProps {
  children: ReactNode;
  variant?: keyof typeof tableDataVariants;
  className?: string;
}

export const TableData = ({
  children,
  variant = 'default',
  className,
}: TableDataProps) => {
  const classes = twMerge(
    'text-center pr-8 pl-8',
    tableDataVariants[variant],
    className,
  );
  return (
    <td className="p-8">
      <span className={classes}>{children}</span>
    </td>
  );
};

interface TableFooterProps {
  children: ReactNode;
}

export const TableFooter = ({ children }: TableFooterProps) => {
  return <tfoot>{children}</tfoot>;
};

interface TableTitleProps {
  children: ReactNode;
}

export const TableTitle = ({ children }: TableTitleProps) => {
  return <h1 className="text-slate-50 text-2xl">{children}</h1>;
};

interface TableSubTitleProps {
  children: ReactNode;
}

export const TableSubTitle = ({ children }: TableSubTitleProps) => {
  return <h3 className="text-slate-400">{children}</h3>;
};

interface TableTitleWrapperProps {
  children: ReactNode;
}

export const TableTitleWrapper = ({ children }: TableTitleWrapperProps) => {
  return <div className="p-4">{children}</div>;
};

interface TableHeaderWrapperProps {
  children: ReactNode;
}

export const TableHeaderWrapper = ({ children }: TableHeaderWrapperProps) => {
  return (
    <div className="flex justify-between border border-gray-400 rounded-md items-center">
      {children}
    </div>
  );
};
