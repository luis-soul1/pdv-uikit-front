import { FC, ReactElement, useState } from 'react'

import { Collapse } from '@mui/material'

import { TColors } from './Colors/TColors'
import { PdvIcon } from './Icons/PdvIcon'
import { TIconNames } from './Icons/TIconNames'

type TPdvSimpleAccordion = {
  className?: string
  header?: string | ReactElement
  icon?: TIconNames
  iconColor?: TColors
  size?: 'small' | 'large'
  color?: TColors
  isOpen?: boolean
  disabled?: boolean
}

const PdvSimpleAccordion: FC<TPdvSimpleAccordion> = (props) => {
  const { color = 'primary-color', iconColor = 'white', size = 'small' } = props
  const [openAccordion, setOpenAccordion] = useState<boolean>(props.isOpen ?? false)
  const iconStyle = 'col-span-1 text-white justify-self-end self-center'
  const collapsedStyle = ` ${props.isOpen || openAccordion ? 'rounded-t-md' : 'rounded-md'} ${size === 'large' ? 'min-h-[56px]' : 'min-h-[48px]'}`

  return (
    <div className={`w-full ${props.className}`}>
      <div
        className={`grid grid-cols-12 px-2 md:px-4 ${props?.disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${collapsedStyle}`}
        style={{ backgroundColor: `var(--${color})` }}
        onClick={() => !props?.disabled && setOpenAccordion((prev: boolean) => !prev)}
      >
        <div className="col-span-11 flex items-center text-white">
          {typeof props.header === 'string' ? (
            <div className="flex h-full items-center">
              {props.icon && <PdvIcon name={props.icon ?? 'Document'} color={iconColor} className="mr-2" />}
              <p className="subtitle1 text-white">{props.header}</p>
            </div>
          ) : (
            <>{props.header}</>
          )}
        </div>

        <PdvIcon name={openAccordion ? 'KeyArrowUpFill' : 'KeyArrowDownFill'} className={iconStyle} />
      </div>
      <Collapse in={props.isOpen ?? openAccordion}>{props.children}</Collapse>
    </div>
  )
}

export default PdvSimpleAccordion
