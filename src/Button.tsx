import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import getStyles from './styles'

interface Props extends ComponentPropsWithoutRef<'button'> {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
  variant?: 'contained' | 'outlined' | 'text'
  shape?: 'regular' | 'rounded' | 'circle' | 'square'
  href?: string
  target?: string
  fullWidth?: boolean
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
}

const ButtonComponent: FC<Props> = ({
  color = 'primary',
  shape = 'regular',
  size = 'medium',
  variant = 'contained',
  href = '',
  target = '',
  disabled = false,
  isLoading = false,
  loadingText = '',
  fullWidth = false,
  children,
  ...btnProps
}) => {
  const classNames = getStyles({
    color,
    variant,
    shape,
    size,
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
        className={classNames}
        {...linkBtnProps}
        disabled={isLoading || disabled}
      >
        <a {...linkBtnProps}>{buttonText}</a>
      </span>
    )
  }

  return (
    <button
      data-component="Button"
      className={classNames}
      {...btnProps}
      disabled={isLoading || disabled}
    >
      {buttonText}
    </button>
  )
}

export default ButtonComponent
