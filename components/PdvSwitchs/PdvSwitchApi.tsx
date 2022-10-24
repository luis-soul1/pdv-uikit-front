import { FC } from 'react'

const PdvSwitchApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvSwitch = {
    children: React.ReactElement
    title: string
    placement: PdvTooltipPlacements
    textColor?: TColors
    color?: TColors
    arrow?: boolean
    onOpen?: (event: Event | React.SyntheticEvent<Element, Event>) => void
    onClose?: (event: Event | React.SyntheticEvent<Element, Event>) => void
    open?: boolean
  }
`}
    </pre>
  )
}

export default PdvSwitchApi
