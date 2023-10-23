import cx from '@architecturex/utils.cx'
import config from './config'

type Props = {
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'warning' | 'light' | 'dark'
  variant: 'contained' | 'outlined' | 'text'
  shape: 'regular' | 'rounded' | 'circle' | 'square'
  size: 'small' | 'medium' | 'large' | 'xlarge'
  disabled: boolean
  fullWidth: boolean
  bold: boolean
  isLink: boolean
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
  xlarge: string
  link: {
    small: string
    medium: string
    large: string
    xlarge: string
  }
}

interface StylesMapping {
  color: Colors
  shape: ShapeStyles
  size: SizeStyles
  bold: string
  disabled: string
  fullWidth: string
  noDecoration: string
  margins: string
  cursor: string
}

const stylesMapping: StylesMapping = {
  color: config.components.button.palette,
  shape: {
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded-md',
    regular: 'rounded-lg'
  },
  size: {
    link: {
      small: 'px-2 py-2 text-xs',
      medium: 'px-6 py-3 text-sm',
      large: 'px-6 py-4 text-base',
      xlarge: 'px-8 py-5 text-lg'
    },
    small: 'px-2 py-1.5 text-xs',
    medium: 'px-6 py-2.5 text-sm',
    large: 'px-6 py-3.5 text-base',
    xlarge: 'px-8 py-4 text-lg'
  },
  bold: 'font-bold',
  disabled: 'opacity-50 cursor-not-allowed',
  fullWidth: 'w-full block text-center',
  noDecoration: 'hover:no-underline',
  margins: 'ml-0 ml-1 ml-2 ml-3 mr-0 mr-1 mr-2 mr-3',
  cursor: 'cursor-pointer'
}

export const getStyles = ({ color, variant, shape, size, disabled, fullWidth, bold, isLink }: Props) => {
  const classes: string[] = ['transition duration-300']

  classes.push(stylesMapping.color[color][variant])
  classes.push(stylesMapping.shape[shape])
  classes.push(stylesMapping.cursor)

  if (bold) {
    classes.push(stylesMapping.bold)
  }

  if (disabled) {
    classes.push(stylesMapping.disabled)
  }

  if (fullWidth) {
    classes.push(stylesMapping.fullWidth)
  }

  if (isLink) {
    classes.push(stylesMapping.size.link[size])
  } else {
    classes.push(stylesMapping.size[size])
  }

  return [...new Set(classes.join(' ').split(' '))].join(' ')
}

export const tailwindClasses = cx.extract(stylesMapping)
