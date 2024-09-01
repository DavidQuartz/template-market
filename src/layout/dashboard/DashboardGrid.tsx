import clsx from "clsx";
import { FC } from "react";

interface DashboardGridProps {
  className?: string;
  children: React.ReactNode;
  columns?: string;
  span?: string | boolean;
  item?: boolean;
  gap?: string;
}

const DashboardGrid: FC<DashboardGridProps> = ({
  className,
  children,
  columns = "grid-cols-12",
  span,
  item,
  gap = "gap-6 md:gap-8",
}) => {
  if (item) {
    return <div className={clsx("grid-item", span, className)}>{children}</div>;
  }

  const gridStyles = {
    gridAutoRows: "minmax(min-content, max-content)",
  };

  return (
    <div className={clsx(`grid`, columns, gap, className)} style={gridStyles}>
      {children}
    </div>
  );
};

export default DashboardGrid;
