import { ElementType, FC, ReactNode, useMemo } from 'react';
import clsx from 'clsx';

// Interfaces
interface Sizes {
  default: 'text-base';
  xs: 'text-xs';
  sm: 'text-sm';
  md: 'text-md';
  lg: 'text-lg';
  xl: 'text-xl';
  '2xl': 'text-2xl';
  '3xl': 'text-3xl';
}

type Weight = 'default' | 'bold' | 'light' | 'medium' | 'semibold';

interface Weights {
  default: 'font-normal';
  bold: 'font-bold';
  light: 'font-light';
  medium: 'font-medium';
  semibold: 'font-semibold';
}

interface Transforms {
  none: 'normal-case';
  uppercase: 'uppercase';
  lowercase: 'lowercase';
  capitalize: 'capitalize';
}

interface LineHeights {
  tight: 'leading-tight';
  snug: 'leading-snug';
  normal: 'leading-normal';
  relaxed: 'leading-relaxed';
  loose: 'leading-loos';
}

interface PrimaryShade {
  light: 'text-gray-500';
  default: 'text-gray-700';
  dark: 'text-gray-900';
  white: 'text-white';
  black: 'text-black';
  green: 'text-green-500';
}

interface SecondaryShade {
  default: 'text-cool-gray-500';
  dark: 'text-cool-gray-700';
  light: 'text-cool-gray-400';
}

interface PrimaryVariants {
  transform: Transforms;
  weight: Weights;
  size: Sizes;
  lineHeight: LineHeights;
  shade: PrimaryShade;
}

interface SecondaryVariants {
  transform: Transforms;
  weight: Weights;
  size: Sizes;
  lineHeight: LineHeights;
  shade: SecondaryShade;
}

type Variant = 'primary' | 'secondary';
type Size = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type LineHeight = 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
type Shade = 'light' | 'default' | 'dark' | 'white' | 'black' | 'green';
type Transform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

interface Variants {
  primary: PrimaryVariants;
  secondary: SecondaryVariants;
}

interface TextProps {
  component?: ElementType;
  lineHeight?: LineHeight;
  transform?: Transform;
  className?: string;
  children: ReactNode;
  truncate?: boolean;
  variant?: Variant;
  weight?: Weight;
  shade?: Shade;
  size: Size;
  [key: string]: unknown;
}

const sizes: Sizes = {
  default: 'text-base',
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
};

const weights: Weights = {
  default: 'font-normal',
  bold: 'font-bold',
  light: 'font-light',
  medium: 'font-medium',
  semibold: 'font-semibold',
};

const transforms: Transforms = {
  none: 'normal-case',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
};

const lineHeights: LineHeights = {
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loos',
};

const variants: Variants = {
  primary: {
    transform: transforms,
    weight: weights,
    size: sizes,
    lineHeight: lineHeights,
    shade: {
      light: 'text-gray-500',
      default: 'text-gray-700',
      dark: 'text-gray-900',
      white: 'text-white',
      black: 'text-black',
      green: 'text-green-500',
    },
  },
  secondary: {
    transform: transforms,
    weight: weights,
    size: sizes,
    lineHeight: lineHeights,
    shade: {
      default: 'text-cool-gray-500',
      dark: 'text-cool-gray-700',
      light: 'text-cool-gray-400',
    },
  },
};

const Text: FC<TextProps> = ({
  component: Component = 'p',
  lineHeight,
  transform,
  className,
  children,
  truncate,
  variant = 'primary',
  weight,
  shade,
  size,
  ...rest
}) => {
  /**
   * Generate classNames based on the provided props and variants.
   */
  const classNames = useMemo(() => {
    const params = { size, shade, weight, transform, lineHeight };
    const selectedVariant = (variants[variant] || variants.primary) as
      | PrimaryVariants
      | SecondaryVariants;

    return clsx(
      Object.keys(params)
        .map((name) => {
          const value = params[name as keyof typeof params];
          const modifier =
            selectedVariant[name as keyof typeof selectedVariant];

          if (modifier && modifier[value as keyof typeof modifier]) {
            return modifier[value as keyof typeof modifier];
          }

          if (modifier && 'default' in modifier) {
            return modifier['default'];
          }

          return null;
        })
        .filter((className) => {
          return !!className;
        }),
      {
        truncate: truncate,
      },
      className,
    );
  }, [
    size,
    shade,
    weight,
    variant,
    truncate,
    transform,
    lineHeight,
    className,
  ]);

  return (
    <Component {...rest} className={classNames}>
      {children}
    </Component>
  );
};

/**
 * Component for rendering Text with secondary styling.
 */
export const TextSecondary: FC<TextProps> = (props) => (
  <Text {...props} variant="secondary" />
);

export default Text;
