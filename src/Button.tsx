import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import cx from '@architecturex/utils.cx'
import config from './config'
import { getStyles } from './styles'

interface Props extends ComponentPropsWithoutRef<'button'> {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  variant?: 'contained' | 'outlined' | 'text'
  shape?: 'regular' | 'rounded' | 'circle' | 'square'
  frontColor?: string
  hoverColor?: string
  href?: string
  target?: string
  fullWidth?: boolean
  disabled?: boolean
  bold?: boolean
  isLoading?: boolean
  loadingText?: string
  leftSpaces?: 0 | 1 | 2 | 3
  rightSpaces?: 0 | 1 | 2 | 3
}

const ButtonComponent: FC<Props> = ({
  color = config.components.button.defaultProps.color,
  shape = config.components.button.defaultProps.shape,
  size = config.components.button.defaultProps.size,
  variant = config.components.button.defaultProps.variant,
  href = '',
  target = '',
  disabled = false,
  isLoading = false,
  loadingText = '',
  fullWidth = false,
  bold = false,
  children,
  className = '',
  frontColor = '',
  hoverColor = '',
  rightSpaces = 0,
  leftSpaces = 0,
  ...btnProps
}) => {
  const classNames = getStyles({
    isLink: !!href,
    color,
    variant,
    shape,
    size,
    bold,
    disabled: isLoading || disabled,
    fullWidth
  })

  let buttonText: ReactNode[] | ReactNode | string = children

  if (isLoading) {
    buttonText = <span className="loading">{loadingText}...</span>
  }

  if (href) {
    const linkBtnProps: any = {
      href,
      target
    }

    return (
      <span
        data-component="LinkButton"
        className={cx.join(classNames, className, frontColor, hoverColor, `ml-${leftSpaces}`, `mr-${rightSpaces}`)}
        {...linkBtnProps}
        disabled={isLoading || disabled}
      >
        <a {...linkBtnProps} className="hover:no-underline">
          {buttonText}
        </a>
      </span>
    )
  }

  return (
    <button
      data-component="Button"
      className={cx.join(classNames, className, frontColor, hoverColor, `ml-${leftSpaces}`, `mr-${rightSpaces}`)}
      {...btnProps}
      disabled={isLoading || disabled}
    >
      {buttonText}
    </button>
  )
}

export default ButtonComponent
