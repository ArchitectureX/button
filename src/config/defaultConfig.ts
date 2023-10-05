type ButtonStyleConfig = {
  contained: string
  outlined: string
  text: string
}

type ButtonPaletteConfig = {
  primary: ButtonStyleConfig
  secondary: ButtonStyleConfig
  success: ButtonStyleConfig
  danger: ButtonStyleConfig
  info: ButtonStyleConfig
  warning: ButtonStyleConfig
  light: ButtonStyleConfig
  dark: ButtonStyleConfig
}

export type Configuration = {
  components: {
    button: {
      defaultProps: {
        color:
          | 'primary'
          | 'secondary'
          | 'success'
          | 'danger'
          | 'info'
          | 'warning'
          | 'light'
          | 'dark'
        variant: 'contained' | 'outlined' | 'text'
        shape: 'regular' | 'rounded' | 'circle' | 'square'
        size: 'small' | 'medium' | 'large'
      }
      palette: ButtonPaletteConfig
    }
  }
}

const config: Configuration = {
  components: {
    button: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
        shape: 'regular',
        size: 'medium'
      },
      palette: {
        primary: {
          contained: 'bg-eden hover:bg-elephant text-white',
          outlined:
            'bg-white hover:bg-elephant text-elephant border border-elephant hover:border-elephant hover:text-white',
          text: 'bg-white hover:bg-elephant text-elephant'
        },
        secondary: {
          contained: 'bg-emerald hover:bg-forest text-white',
          outlined:
            'bg-white hover:bg-forest text-forest border border-forest hover:border-forest hover:text-white',
          text: 'bg-white hover:bg-forest text-forest'
        },
        success: {
          contained: 'bg-pastel hover:bg-emerald text-white',
          outlined:
            'bg-white hover:bg-emerald text-emerald border border-emerald hover:border-emerald hover:text-white',
          text: 'bg-white hover:bg-emerald text-emerald'
        },
        danger: {
          contained: 'bg-cinnabar hover:bg-thunderbird text-white',
          outlined:
            'bg-white hover:bg-thunderbird text-thunderbird border border-thunderbird hover:border-thunderbird hover:text-white',
          text: 'bg-white hover:bg-thunderbird text-thunderbird'
        },
        info: {
          contained: 'bg-blue-500 hover:bg-blue-600 text-white',
          outlined:
            'bg-white hover:bg-blue-600 text-blue-600 border border-blue-600 hover:border-blue-600 hover:text-white',
          text: 'bg-white hover:bg-blue-600 text-blue-600'
        },
        warning: {
          contained: 'bg-orange hover:bg-fire text-white',
          outlined:
            'bg-white hover:bg-fire text-fire border border-fire hover:border-fire hover:text-white',
          text: 'bg-white hover:bg-fire text-fire'
        },
        light: {
          contained: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
          outlined:
            'bg-white hover:bg-gray-100 text-gray-900 border border-gray-100 hover:border-gray-200 hover:text-white',
          text: 'bg-white hover:bg-gray-100 text-gray-900'
        },
        dark: {
          contained: 'bg-gray-900 hover:bg-gray-800 text-gray-100',
          outlined:
            'bg-white hover:bg-gray-900 text-gray-900 border border-gray-900 hover:border-gray-800 hover:text-white',
          text: 'bg-white hover:bg-gray-900 text-gray-100'
        }
      }
    }
  }
}

export default config
