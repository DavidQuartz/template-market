import { FC, Fragment, ReactNode } from 'react';

import DashboardSidebarDesktop from './DashboardSidebarDesktop';
import DashboardSidebarMobile from './DashboardSidebarMobile';

interface DashboardSidebarProps {
  children: ReactNode;
  headerHeight?: number;
}
const DashboardSidebar: FC<DashboardSidebarProps> = ({
  children,
  headerHeight = 0,
}) => (
  <Fragment>
    <DashboardSidebarMobile>{children}</DashboardSidebarMobile>
    <DashboardSidebarDesktop headerHeight={headerHeight}>
      {children}
    </DashboardSidebarDesktop>
  </Fragment>
);

export default DashboardSidebar;
