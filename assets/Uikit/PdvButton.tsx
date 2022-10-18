import Router from 'next/router'
import { FC, ReactElement, ElementType } from 'react'

import LoadingButton from '@mui/lab/LoadingButton'
import { Button, CircularProgress } from '@mui/material'

import { TColors } from './Colors/TColors'
import { PdvIcon, TIconSize } from './Icons/PdvIcon'
import { TIconNames } from './Icons/TIconNames'

export type TButtonVariant = 'contained' | 'outlined' | 'default'
export type TButtonSize = 'small' | 'medium' | 'large'
type TPdvButton = {
  className?: string
  variant?: TButtonVariant
  color?: TColors
  textColor?: TColors
  size?: TButtonSize
  asLink?: boolean
  href?: string
  type?: 'submit' | 'button' | 'reset'
  icon?: TIconNames | ReactElement
  iconPosition?: 'left' | 'right'
  iconSize?: TIconSize
  disabled?: boolean
  loading?: boolean
  component?: ElementType
  onClick?: () => void
}

const disabledStyles = 'cursor-not-allowed opacity-50 bg-gray-200 text-gray-600 border-none'
const structure = `normal-case transition duration-200`
const sx = {
  borderStyle: 'solid',
  borderRadius: '8px',
  paddingLeft: 2,
  paddingRight: 2
}

const PdvButton: FC<TPdvButton> = (props) => {
  const {
    children,
    className,
    variant = 'contained',
    asLink,
    href,
    iconSize,
    loading,
    iconPosition = 'left',
    disabled = false,
    color = 'primary-color',
    textColor,
    ...rest
  } = props

  const selectedTextColor = () => {
    if (variant === 'contained') return textColor ? `var(--${textColor})` : 'var(--white)'
    return textColor ? `var(--${textColor})` : `var(--${props.color})`
  }

  const style = () => {
    return {
      backgroundColor: variant === 'contained' ? `var(--${color})` : 'var(--transparent)',
      color: selectedTextColor(),
      border: variant === 'outlined' ? `1px solid var(--${color})` : 'none'
    }
  }

  const setIcon = () => {
    if (!props.icon) return
    if (typeof props.icon === 'string') {
      const selectedColor = variant !== 'contained' ? color : 'white'
      return <PdvIcon name={props.icon} color={props.disabled ? 'gray-500' : selectedColor} size={props.iconSize ?? 'medium'} />
    }
    return props.icon
  }

  const onClick = () => {
    asLink && Router.push(href ?? '')
    props?.onClick && props.onClick()
  }

  if (loading) {
    return (
      <LoadingButton
        loading={loading}
        className={`${className ?? ''} ${structure} ${disabled ? disabledStyles : ''}`}
        {...rest}
        loadingIndicator={<CircularProgress className="text-white" size={14} />}
        sx={sx}
        style={{ ...style() }}
        disabled={disabled}
      >
        <span className="invisible">{children}</span>
      </LoadingButton>
    )
  }

  return (
    <span className={`${props?.disabled ? 'cursor-not-allowed' : ''}`}>
      <Button
        className={`${className ?? ''} ${structure} ${disabled ? disabledStyles : 'hover:opacity-70'}`}
        {...rest}
        sx={sx}
        style={{ ...style() }}
        disabled={disabled}
        onClick={onClick}
      >
        <div className="total-center gap-1.5">
          {iconPosition === 'left' && setIcon()}
          <h6 className={`flex items-center ${props.size?.includes('small') ? 'subtitle2' : 'subtitle1'}`}>{children}</h6>
          {iconPosition === 'right' && setIcon()}
        </div>
      </Button>
    </span>
  )
}

export default PdvButton
