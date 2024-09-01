import clsx from "clsx";
import { FC, ReactNode } from "react";

interface DashboardSectionProps {
  children: ReactNode;
  className?: string;
}

const DashboardSection: FC<DashboardSectionProps> = ({
  children,
  className,
}) => {
  return (
    <section className={clsx("px-6 md:px-8 my-6 md:my-8", className)}>
      {children}
    </section>
  );
};

export default DashboardSection;
