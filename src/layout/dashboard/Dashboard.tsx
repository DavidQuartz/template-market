import { FC, ReactNode } from 'react';

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: FC<DashboardProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Dashboard;
