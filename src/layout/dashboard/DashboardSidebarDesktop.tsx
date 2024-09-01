import { FC, ReactNode } from 'react';

interface DashboardSidebarDesktopProps {
  children: ReactNode;
  headerHeight: number;
}

const DashboardSidebarDesktop: FC<DashboardSidebarDesktopProps> = ({
  children,
  headerHeight,
}) => (
  <div
    className="hidden md:flex md:shrink-0 h-screen border"
    style={{ height: `calc(100vh - ${headerHeight})` }}
  >
    <div className="flex flex-col w-64 bg-customGray">
      <div className="flex-grow overflow-y-auto pb-3">{children}</div>
    </div>
  </div>
);

export default DashboardSidebarDesktop;
