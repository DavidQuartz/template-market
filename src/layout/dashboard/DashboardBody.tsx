import clsx from "clsx";
import { FC, ReactNode } from "react";

interface DashboardBodyProps {
  children: ReactNode;
  className?: string;
}

const DashboardBody: FC<DashboardBodyProps> = ({ children, className }) => {
  return (
    <div
      className={clsx("flex flex-col w-0 flex-1 overflow-hidden", className)}
    >
      {children}
    </div>
  );
};

export default DashboardBody;
