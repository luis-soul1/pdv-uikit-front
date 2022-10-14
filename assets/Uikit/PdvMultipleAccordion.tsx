import { FunctionComponent, ReactElement, useState } from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Collapse } from '@mui/material'

import { TColors } from './Colors/TColors'
import { PdvIcons } from './Icons/PdvIcons'
import { TIconNames } from './Icons/TIconNames'

export type TAccordion = {
  header: string | ReactElement
  content: string | ReactElement
  icon?: TIconNames | ReactElement
  iconColor?: TColors
}

type TPdvMultipleAccordion = {
  className?: string
  accordions: TAccordion[]
  size?: 'small' | 'large'
  color?: TColors
}

const PdvMultipleAccordion: FunctionComponent<TPdvMultipleAccordion> = (props) => {
  const [openAccordion, setOpenAccordion] = useState<number>(0)
  const iconStyle = 'col-span-1 text-white justify-self-end self-center'

  const handleAccordion = (index: number) => {
    if (index + 1 === openAccordion) return setOpenAccordion(0)
    setOpenAccordion(index + 1)
  }

  const setIcon = (accordion: TAccordion) => {
    if (!accordion.icon) return null
    if (typeof accordion.icon === 'string')
      return <PdvIcons name={accordion.icon ?? 'Document'} color={accordion.iconColor ?? 'white'} className="mr-2" />
    return accordion.icon
  }

  return (
    <>
      {props.accordions.map((accordion: TAccordion, index: number) => {
        const collapsedStyle = `${openAccordion === index + 1 ? 'rounded-t-md' : 'rounded-md'} ${props.size?.includes('large') ? 'h-14' : 'h-12'}`
        const isSelected = openAccordion === index + 1

        return (
          <div key={index} className={`w-full ${props.className} mt-2`}>
            <div
              className={`grid cursor-pointer grid-cols-12 px-2 md:px-4 ${collapsedStyle}`}
              style={{ backgroundColor: `var(--${props.color ?? 'indigo-700'})` }}
              onClick={() => handleAccordion(index)}
            >
              <div className="col-span-11 flex items-center text-white">
                {setIcon(accordion)}
                <p className="subtitle1 text-white">{accordion.header}</p>
              </div>
              {openAccordion ? <ArrowDropUpIcon className={iconStyle} /> : <ArrowDropDownIcon className={iconStyle} />}
            </div>
            <Collapse className={`${isSelected ? '' : '-mt-1'}`} in={isSelected}>
              {accordion.content}
            </Collapse>
          </div>
        )
      })}
    </>
  )
}

export default PdvMultipleAccordion
