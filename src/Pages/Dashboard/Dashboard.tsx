import { Outlet } from 'react-router-dom';
import DashboardHome from './DashboardHome';
import useMatchPath from '../../hooks/useMatchPath';

const Dashboard = ({ ...props }) => {
  const isDashboardHomePath = useMatchPath('/');

  return isDashboardHomePath ? <DashboardHome /> : <Outlet {...props} />;
};

export default Dashboard;
