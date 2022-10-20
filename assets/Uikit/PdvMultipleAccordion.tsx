import { FunctionComponent, ReactElement, useState } from 'react'

import { TColors } from './Colors/TColors'
import { TIconNames } from './Icons/TIconNames'
import PdvSimpleAccordion from './PdvSimpleAccordion'

export type TAccordion = {
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
  defaultOpen?: number
}

const PdvMultipleAccordion: FunctionComponent<TPdvMultipleAccordion> = (props) => {
  const [openAccordion, setOpenAccordion] = useState<number>(props.defaultOpen ?? 0)

  const handleAccordion = (index: number) => {
    if (index + 1 === openAccordion) return setOpenAccordion(0)
    setOpenAccordion(index + 1)
  }

  return (
    <div className={props?.className ?? ''}>
      {props.accordions.map((accordion: TAccordion, index: number) => {
        const isSelected = openAccordion === index + 1

        return (
          <div key={index} className="mt-1" onClick={() => !accordion.isOpen && !accordion?.disabled && handleAccordion(index)}>
            <PdvSimpleAccordion
              className={`${accordion.className}`}
              header={accordion.header}
              icon={accordion.icon}
              iconColor={accordion.iconColor}
              size={props.size}
              color={accordion.color ?? props.color}
              isOpen={accordion.isOpen ?? isSelected}
              disabled={accordion.disabled}
            >
              {accordion.content}
            </PdvSimpleAccordion>
          </div>
        )
      })}
    </div>
  )
}

export default PdvMultipleAccordion
