import { useState } from 'react'

import { styled } from '@mui/material/styles'
import MUISwitch from '@mui/material/Switch'

import { TColors } from './Colors/TColors'

type TSwitchProps = {
  suffixText?: {
    checkedText?: string
    checkedColor?: TColors
    uncheckedText?: string
    uncheckedColor?: TColors
    position?: 'left' | 'right' | 'both'
  }
  disabled?: boolean
  checked?: boolean
  onChange?: (checked: boolean) => void
  color?: TColors
}

const Switch: React.FC<TSwitchProps> = (props) => {
  const [checked, setChecked] = useState(props?.checked ?? false)
  const { suffixText, color = 'primary-color', ...restProps } = props
  const textPosition = suffixText?.position ?? 'right'
  const isBoth = textPosition === 'both'

  const switchText = {
    checked: {
      text: suffixText?.checkedText || 'Activado',
      color: suffixText?.checkedColor || color
    },
    unchecked: {
      text: suffixText?.uncheckedText || 'Desactivado',
      color: suffixText?.uncheckedColor || 'gray-400'
    }
  }

  const onChange = () => {
    const updatedValue = !checked
    props.onChange && props.onChange(updatedValue)
    setChecked(updatedValue)
  }

  const SwitchText = ({ position = 'left' }: { position: 'left' | 'right' }) => {
    const color = () => {
      if (isBoth) return `var(--${position === 'left' ? switchText.unchecked.color : switchText.checked.color})`
      return `var(--${checked ? switchText.checked.color : switchText.unchecked.color})`
    }

    const text = () => {
      if (isBoth) return position === 'left' ? switchText.unchecked.text : switchText.checked.text
      return checked ? switchText.checked.text : switchText.unchecked.text
    }

    return (
      <span className={`subtitle1 font-semibold`} style={{ color: color() }}>
        {text()}
      </span>
    )
  }

  return (
    <div className="flex items-center gap-4">
      {textPosition === 'left' && <SwitchText position="left" />}

      <MUISwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...restProps} checked={checked} onChange={onChange} />

      {textPosition === 'right' && <SwitchText position="right" />}
    </div>
  )
}

const PdvSwitch = styled((props: TSwitchProps) => <Switch {...props} />)(({ theme, color = 'primary-color' }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: `var(--${color})`,
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: 'var(--gray-300)'
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: 'var(--gray-300)',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}))

export default PdvSwitch
