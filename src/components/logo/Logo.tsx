import logo from '/images/logo.png';
import { FC } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <img
      src={logo}
      alt=" logo"
      title="Click to go home"
      className={className || 'w-100'}
    />
  );
};

export default Logo;
