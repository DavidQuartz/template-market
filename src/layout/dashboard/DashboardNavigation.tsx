import React, { useMemo, useCallback, FC, ReactNode, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import useMatchPath from '../../hooks/useMatchPath';
import useSidebar from '../../hooks/useSidebar';
import clsx from 'clsx';

interface DashboardNavigationProps {
  item?: boolean;
  subnav?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  preventDefault?: boolean;
  icon?: string;
  className?: string;
  href?: string;
  nestedHref?: string;
  depth?: string;
  children: ReactNode;
  open?: boolean;
}

const DashboardNavigation: FC<DashboardNavigationProps> = ({
  item,
  href,
  depth,
  subnav,
  onClick,
  children,
  className,
  preventDefault,
  icon,
  nestedHref = 'none',
  ...rest
}) => {
  const active = useMatchPath(href);
  const nestedActive = useMatchPath(nestedHref);
  const focus = useMemo(
    () => (active || nestedActive) && !subnav,
    [nestedActive, active, subnav],
  );
  const [sidebarActive, sidebarActions] = useSidebar();

  const Component = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => (!href ? 'p' : (props: any) => <Link to={href} {...props} />),
    [href],
  );

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (onClick) {
        onClick(event);
      }

      if (subnav) {
        return;
      }

      if (preventDefault) {
        return;
      }

      if (sidebarActive) {
        (
          sidebarActions as {
            on: () => void;
            off: () => void;
            toggle: () => void;
          }
        ).off();
      }
    },
    [subnav, onClick, sidebarActive, sidebarActions, preventDefault],
  );

  if (!item) {
    return (
      <nav className={clsx('flex-1 px-3 space-y-1', className)}>{children}</nav>
    );
  }

  return (
    <Component
      className={clsx(
        'group flex cursor-pointer items-center px-2 py-2 font-medium rounded-md text-sm',
        {
          'border-gradient': focus,
          'text-gray-900 border border-transparent': !focus,
          'pl-11': depth === '1',
          'h-10': !icon,
        },
        className,
      )}
      onClick={handleClick}
      {...rest}
    >
      {icon ? (
        <img
          src={icon}
          alt="dashboard icon"
          className="mr-3 h-5 w-5 text-blue-500"
        />
      ) : null}
      {children}
    </Component>
  );
};

export default DashboardNavigation;
