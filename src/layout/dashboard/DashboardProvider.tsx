/* eslint-disable no-unused-vars */
import { FC, ReactNode, useMemo } from 'react';
import useBooleanState from '../../hooks/useBooleanState';
import DashboardContext, { initialState } from '../../context/DashboardContext';
import Dashboard from './Dashboard';

interface DashboardProviderProps {
  props?: { [key: string]: any };
  children: ReactNode;
}

const DashboardProvider: FC<DashboardProviderProps> = (props) => {
  const menu = useBooleanState();
  const sidebar = useBooleanState();
  const messages = useBooleanState();
  const notifications = useBooleanState();

  const value = useMemo(
    () => ({
      ...initialState,
      notifications,
      messages,
      sidebar,
      menu,
    }),
    [notifications, messages, sidebar, menu],
  );

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <DashboardContext.Provider value={value}>
      <Dashboard {...props} />
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
