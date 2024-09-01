import { FC, ReactNode, ElementType } from 'react';
import clsx from 'clsx';

type ButtonVariants = 'primary' | 'outlined';

interface ButtonProps {
  loading?: boolean;
  children?: ReactNode;
  className?: string;
  variant: ButtonVariants;
  component?: ElementType;
  // All other props
  [x: string]: any;
}

/**
 * Button Component
 *
 * The `Button` component is a flexible, customizable button component that allows you to render
 * a button with various variants and components while having the ability to display a loading state.
 *
 * @component
 * @example
 * // Default usage
 * <Button variant="primary">Click here</Button>
 *
 * // Using with custom component
 * <Button variant="secondary" component="a" href="/some-link">Link Button</Button>
 *
 * // Displaying a loading spinner
 * <Button variant="primary" loading={true}>Loading button</Button>
 */
const Button: FC<ButtonProps> = ({
  loading,
  children,
  className,
  variant,
  component: Component = 'button',
  ...rest
}) => {
  return (
    <Component className={clsx(`btn btn-${variant}`, className)} {...rest}>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        children
      )}
    </Component>
  );
};

export default Button;
