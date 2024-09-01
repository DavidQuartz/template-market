import { useRef, useEffect, FC } from 'react';
import useSidebar from '../../hooks/useSidebar';
import { Logo } from '../logo';
import { Menu } from 'heroicons-react';
import search from '/images/icons/search.svg';

interface Actions {
  on: () => void;
  off: () => void;
  toggle: () => void;
}

interface HeaderProps {
  setHeaderHeight: (height: number) => void;
}

const Header: FC<HeaderProps> = ({ setHeaderHeight }) => {
  const [, sidebarActions] = useSidebar();

  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);
  return (
    <header className="bg-white border-b" ref={headerRef}>
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="flex items-center shrink-0">
            <Logo className="w-14" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-customGray border border-gray-300 rounded-md py-2 px-4 sm:pr-12 pl-10 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Creative OS"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <img src={search} alt="search" />
            </span>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hidden sm:block">
              ⌘+K
            </span>
          </div>
        </div>
        {/* Hamburger Icon (visible only on small screens) */}
        <div
          className="flex-shrink-0 md:hidden"
          role="button"
          onClick={(sidebarActions as Actions).toggle}
        >
          <Menu
            className="w-8 h-8 text-gray-700"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
