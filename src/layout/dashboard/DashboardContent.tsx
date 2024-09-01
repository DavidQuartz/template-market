import { clsx } from "clsx";
import { FC, ReactNode } from "react";

interface DashboardContentProps {
  children: ReactNode;
  className?: string;
}

const DashboardContent: FC<DashboardContentProps> = ({
  children,
  className,
}) => {
  return (
    <main
      className={clsx(
        "flex-1 relative bg-slate-50 overflow-y-auto focus:outline-none",
        className
      )}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto p-3 md:p-10">{children}</div>
    </main>
  );
};

export default DashboardContent;
