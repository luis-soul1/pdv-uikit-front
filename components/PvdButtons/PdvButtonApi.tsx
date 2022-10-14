import { FC } from 'react'

const PdvButtonApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TVariant = 'contained' | 'outlined' | 'default'
  type TSize = 'small' | 'medium' | 'large'

  type TPdvButton = {
	className?: string
    variant?: TButtonVariant
    color?: TColors
    textColor?: TColors
    size?: TButtonSize
    asLink?: boolean
    href?: string
    type?: 'submit' | 'button' | 'reset'
    icon?: TIconNames
    iconPosition?: 'left' | 'right'
    iconSize?: TIconSize
    disabled?: boolean
    loading?: boolean
    onClick?: () => void
  }
`}
    </pre>
  )
}

export default PdvButtonApi
