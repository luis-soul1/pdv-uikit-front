import { CSSProperties, FC } from 'react'

import { Iconly } from 'react-iconly'

import { TColors } from '@Uikit/Colors/TColors'
import { MuiIcons, muiSize } from 'assets/Uikit/Icons/MuiIcons'
import { TIconNames } from 'assets/Uikit/Icons/TIconNames'

export type TIconSize = 'small' | 'medium' | 'large' | 'xlarge' | number
export type TPdvIcon = {
  name: TIconNames
  size?: TIconSize
  set?: 'bold' | 'broken' | 'bulk' | 'curved' | 'light' | 'two-tone'
  color?: TColors
  style?: CSSProperties
  className?: string
}

export const PdvIcons: FC<TPdvIcon> = (props) => {
  const MuiIcon = MuiIcons[props.name]
  const muiStyles = {
    fontSize: typeof props.size === 'string' ? muiSize[props.size] ?? muiSize.medium : props.size,
    color: `var(--${props.color ?? 'gray-500'})`
  }

  const handleIcon = () => {
    if (props.name === 'ChevronRightCircle') return { name: 'ChevronLeftCircle', style: 'rotate-180' }
    return { name: props.name, style: '' }
  }

  return (
    <>
      {MuiIcon ? (
        <MuiIcon className={props.className} style={muiStyles} />
      ) : (
        <span className={`${handleIcon().style} ${props.className ?? ''}`} style={{ display: 'inline-block' }}>
          <Iconly
            name={handleIcon().name}
            set={`${props.set ?? 'light'}`}
            style={{ ...props.style, color: `var(--${props.color ?? 'gray-500'})` }}
            size={props.size ?? 'medium'}
          />
        </span>
      )}
    </>
  )
}
