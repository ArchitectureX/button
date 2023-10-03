const classes: string[] = []

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
      contained: 'bg-blue-500 hover:bg-blue-600 text-white',
      outlined:
        'bg-white hover:bg-blue-500 text-blue-500 border border-blue-500 hover:border-blue-600',
      text: 'bg-white hover:bg-blue-500 text-blue-500'
    },
    secondary: {
      contained: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
      outlined:
        'bg-white hover:bg-gray-300 text-gray-800 border border-gray-300 hover:border-gray-400',
      text: 'bg-white hover:bg-gray-300 text-gray-800'
    },
    success: {
      contained: 'bg-green-300 hover:bg-green-400 text-green-800',
      outlined:
        'bg-white hover:bg-green-300 text-green-800 border border-green-300 hover:border-green-400',
      text: 'bg-white hover:bg-green-300 text-green-800'
    },
    danger: {
      contained: 'bg-red-300 hover:bg-red-400 text-red-800',
      outlined: 'bg-white hover:bg-red-300 text-red-800 border border-red-300 hover:border-red-400',
      text: 'bg-white hover:bg-red-300 text-red-800'
    },
    info: {
      contained: 'bg-blue-300 hover:bg-blue-400 text-blue-800',
      outlined:
        'bg-white hover:bg-blue-300 text-blue-800 border border-blue-300 hover:border-blue-400',
      text: 'bg-white hover:bg-blue-300 text-blue-800'
    },
    warning: {
      contained: 'bg-yellow-300 hover:bg-yellow-400 text-yellow-800',
      outlined:
        'bg-white hover:bg-yellow-300 text-yellow-800 border border-yellow-300 hover:border-yellow-400',
      text: 'bg-white hover:bg-yellow-300 text-yellow-800'
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

const getStyles = ({ color, variant, shape, size, disabled, fullWidth }: Props) => {
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

export default getStyles
