import { FC } from 'react'

const PdvSimpleAccordionApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvSimpleAccordion = {
    className?: string
    header?: string | ReactElement
    icon?: TIconNames
    iconColor?: TColors
    size?: 'small' | 'large'
    color?: TColors
    isOpen?: boolean
  }
`}
    </pre>
  )
}

export default PdvSimpleAccordionApi
