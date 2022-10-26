import { FC } from 'react'

const PdvSwitchApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvSwitch = {
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
`}
    </pre>
  )
}

export default PdvSwitchApi
