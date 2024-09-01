import clsx from 'clsx';
import { FC, ReactNode, createElement } from 'react';

/**
 * Valid HTML text elements that this Text component can use.
 */
type TextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'small'
  | 'blockquote'
  | 'pre'
  | 'code';

/**
 * Props for Text component.
 *
 * @property {TextElement} component - The HTML text element to render.
 * @property {ReactNode[]} children - The content to render inside the component.
 * @property {string} className - Optional additional CSS classes to apply.
 */
interface SimpleTextProps {
  component?: TextElement;
  children: ReactNode;
  className?: string;
  truncate?: boolean;
}

/**
 * A flexible text component for rendering various HTML text elements.
 *
 * @example
 * <SimpleText component="h1" className="text-lg">Hi </SimpleText>
 * <SimpleText component="span" className="text-base">Test</SimpleText>
 *
 * @param {TextProps} props - The props for the component.
 * @returns {JSX.Element} The rendered text component.
 */
const SimpleText: FC<SimpleTextProps> = ({
  component = 'p',
  children,
  className,
  truncate,
}: SimpleTextProps): JSX.Element => {
  return createElement(
    component,
    { className: clsx(className, { truncate: truncate }) },
    children,
  );
};

export default SimpleText;
