import cx from '@architecturex/utils.cx'

type Props = {
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'warning' | 'light' | 'dark'
  variant: 'contained' | 'outlined' | 'text'
  shape: 'regular' | 'rounded' | 'circle' | 'square'
  size: 'small' | 'medium' | 'large'
  disabled: boolean
  fullWidth: boolean
}

type ButtonVariant = 'contained' | 'outlined' | 'text'

type ColorStyles = {
  [variant in ButtonVariant]: string
}

type Colors = {
  primary: ColorStyles
  secondary: ColorStyles
  success: ColorStyles
  danger: ColorStyles
  info: ColorStyles
  warning: ColorStyles
  light: ColorStyles
  dark: ColorStyles
}

type ShapeStyles = {
  square: string
  rounded: string
  regular: string
  circle: string
}

type SizeStyles = {
  small: string
  medium: string
  large: string
}

interface StylesMapping {
  color: Colors
  shape: ShapeStyles
  size: SizeStyles
  disabled: string
  fullWidth: string
}

const stylesMapping: StylesMapping = {
  color: {
    primary: {
      contained: 'bg-eden hover:bg-elephant text-white',
      outlined:
        'bg-white hover:bg-elephant text-elephant border border-elephant hover:border-elephant',
      text: 'bg-white hover:elephant text-elephant'
    },
    secondary: {
      contained: 'bg-emerald hover:forest text-white',
      outlined: 'bg-white hover:forest text-forest border border-forest hover:border-forest',
      text: 'bg-white hover:bg-forest text-forest'
    },
    success: {
      contained: 'bg-pastel hover:bg-emerald text-white',
      outlined: 'bg-white hover:bg-emerald text-emerald border border-emerald hover:border-emerald',
      text: 'bg-white hover:bg-emerald text-emerald'
    },
    danger: {
      contained: 'bg-cinnabar hover:bg-thunderbird text-white',
      outlined:
        'bg-white hover:bg-thunderbird text-thunderbird border border-thunderbird hover:border-thunderbird',
      text: 'bg-white hover:bg-thunderbird text-thunderbird'
    },
    info: {
      contained: 'bg-blue-500 hover:bg-blue-600 text-white',
      outlined:
        'bg-white hover:g-blue-600 text-blue-600 border border-blue-600 hover:border-blue-600',
      text: 'bg-white hover:bg-blue-600 text-blue-600'
    },
    warning: {
      contained: 'bg-orange hover:bg-fire text-white',
      outlined: 'bg-white hover:bg-fire text-fire border border-fire hover:border-fire',
      text: 'bg-white hover:bg-fire text-fire'
    },
    light: {
      contained: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
      outlined:
        'bg-white hover:bg-gray-100 text-gray-900 border border-gray-100 hover:border-gray-200',
      text: 'bg-white hover:bg-gray-100 text-gray-900'
    },
    dark: {
      contained: 'bg-gray-900 hover:bg-gray-800 text-gray-100',
      outlined:
        'bg-white hover:bg-gray-900 text-gray-100 border border-gray-900 hover:border-gray-800',
      text: 'bg-white hover:bg-gray-900 text-gray-100'
    }
  },
  shape: {
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded-md',
    regular: 'rounded-lg'
  },
  size: {
    small: 'px-2 py-1 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base'
  },
  disabled: 'opacity-50 cursor-not-allowed',
  fullWidth: 'w-full'
}

export const getStyles = ({ color, variant, shape, size, disabled, fullWidth }: Props) => {
  const classes: string[] = []

  classes.push(stylesMapping.color[color][variant])
  classes.push(stylesMapping.shape[shape])
  classes.push(stylesMapping.size[size])

  if (disabled) {
    classes.push(stylesMapping.disabled)
  }

  if (fullWidth) {
    classes.push(stylesMapping.fullWidth)
  }

  return [...new Set(classes.join(' ').split(' '))].join(' ')
}

export const tailwindClasses = cx.extract(stylesMapping)
