import type { ElementType, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardRootProps {
  children: ReactNode;
}

export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div className="w-80 p-6 bg-[#1A1C2E] rounded-xl border h-40">
      {children}
    </div>
  );
};

interface CardValueProps {
  children: ReactNode;
}

export const CardValue = ({ children }: CardValueProps) => {
  return <h1 className="text-slate-50 text-2xl">{children}</h1>;
};

interface CardDescriptionProps {
  children: ReactNode;
}

export const CardDescription = ({ children }: CardDescriptionProps) => {
  return <p className="text-slate-50">{children}</p>;
};

const cardIconVariants = {
  emerald: 'text-emerald-500',
};

interface CardIconProps {
  icon: ElementType;
  variant?: keyof typeof cardIconVariants;
  className?: string;
}

export const CardIcon = ({
  icon: Icon,
  variant = 'emerald',
  className,
}: CardIconProps) => {
  const classes = twMerge(cardIconVariants[variant], className);

  return <Icon className={classes} />;
};

const cardComparisonVariants = {
  profit: `text-emerald-500 `,
  loss: `text-red-500`,
};

interface CardComparisonProps {
  children: ReactNode;
  icon: ElementType;
  className?: string;
  variant?: keyof typeof cardComparisonVariants;
}

export const CardComparison = ({
  children,
  icon: Icon,
  variant = 'profit',
  className,
}: CardComparisonProps) => {
  const classes = twMerge(cardComparisonVariants[variant], className);

  return (
    <div className="flex gap-2">
      <span className={classes}>{children}</span>
      <Icon className={classes} />
    </div>
  );
};

interface CardWrapperProps {
  children: ReactNode;
}

export const CardWrapper = ({ children }: CardWrapperProps) => {
  return <div className="flex gap-20 mb-2">{children}</div>;
};
