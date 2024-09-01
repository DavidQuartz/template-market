import clsx from "clsx";
import { FC, ReactNode } from "react";

interface HeadingProps {
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
}

const variants = {
  h1: "text-4xl font-bold mt-0 leading-9 tracking-tight text-gray-900",
  h2: "text-2xl font-semibold leading-7 text-gray-900 sm:text-3xl sm:truncate",
  h3: "text-lg leading-6 font-medium text-gray-900",
  h4: "text-base font-semibold mt-0",
};

const Heading: FC<HeadingProps> = ({
  className = "",
  variant = "h1",
  children,
}) => {
  const HeadingTag = variant;

  const rootClass = clsx(
    {
      [variants[variant]]: true,
    },
    className
  );

  return <HeadingTag className={rootClass}>{children}</HeadingTag>;
};

export default Heading;
