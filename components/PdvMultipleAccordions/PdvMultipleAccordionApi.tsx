import { FC } from 'react'

const PdvSMultipleAccordionApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

type TAccordion = {
  header: string | ReactElement
  content: string | ReactElement
  color?: TColors
  icon?: TIconNames
  iconColor?: TColors
  disabled?: boolean
  className?: string
  isOpen?: boolean
}

type TPdvMultipleAccordion = {
  className?: string
  accordions: TAccordion[]
  size?: 'small' | 'large'
  color?: TColors
}
`}
    </pre>
  )
}

export default PdvSMultipleAccordionApi
