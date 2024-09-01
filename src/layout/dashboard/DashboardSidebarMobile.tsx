import { FC, ReactNode } from 'react';
import useSidebar from '../../hooks/useSidebar';
import { Transition } from '@headlessui/react';
import { XCircleOutline } from 'heroicons-react';
import Logo from '../../components/logo/Logo';

interface Actions {
  on: () => void;
  off: () => void;
  toggle: () => void;
}

interface DashboardSidebarMobileProps {
  children: ReactNode;
}

const DashboardSidebarMobile: FC<DashboardSidebarMobileProps> = ({
  children,
}) => {
  const [sidebarActive, sidebarActions] = useSidebar();

  return (
    <div className="md:hidden">
      <Transition
        show={sidebarActive as boolean}
        className="fixed inset-0 flex z-40"
      >
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0"
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75" />
        </Transition.Child>
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="relative flex-1 flex flex-col w-full bg-white"
        >
          <div className="shrink-0 h-20 flex border-b border-gray-300">
            <div className="flex flex-1 items-center px-6">
              <Logo className="w-24" />
            </div>
            <button
              onClick={(sidebarActions as Actions).toggle}
              className="flex items-center justify-center w-16 text-gray-500 focus:outline-none focus:text-gray-100 md:hidden"
              aria-label="Close sidebar"
            >
              <XCircleOutline
                className="h-6 w-6 text-gray-500"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </button>
          </div>
          <div className="flex-1 h-0 pt-3 pb-3 overflow-y-auto">
            {children}
            <div className="mx-6 my-3 border-b border-gray-100" />
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
};

export default DashboardSidebarMobile;
