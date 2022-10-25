import { ReactElement } from 'react'

import { Box } from '@mui/system'

import { TColors } from './Colors/TColors'

type TheaderSize = 'small' | 'smallXl' | 'medium' | 'large' | 'half' | number

type TPdvLeftHeaderCard = {
  className?: string
  headerSize?: TheaderSize
  headerColor?: TColors
  title?: string | ReactElement
  titleColor?: TColors
  onClick?: () => void
}

const PdvLeftHeaderCard: React.FC<TPdvLeftHeaderCard> = (props) => {
  const columsSize = () => {
    if (typeof props.headerSize === 'number') return `${props.headerSize}px 1fr`
    if (!props.headerSize) return '18px 1fr'

    const dispatch: Record<TheaderSize, string> = {
      small: '14px 1fr',
      smallXl: '38px 1fr',
      medium: '65px 1fr',
      large: '95px 1fr',
      half: '1fr 1fr'
    }
    return dispatch[props.headerSize]
  }

  return (
    <div className={`inline-block rounded-xl ${props.className}`} onClick={props.onClick} style={{ boxShadow: 'var(--shadow-md)' }}>
      <Box display="grid" gridTemplateColumns={columsSize()} className={`h-full`}>
        <div className="total-center rounded-l-xl" style={{ backgroundColor: `var(--${props.headerColor ?? 'indigo-700'})` }}>
          {typeof props.title === 'string' ? (
            <p className="subtitle1" style={{ color: `var(--${props.titleColor ?? 'white'})` }}>
              {props.title}
            </p>
          ) : (
            props.title
          )}
        </div>
        <div className={`h-full rounded-r-xl bg-white`}>{props.children}</div>
      </Box>
    </div>
  )
}

export default PdvLeftHeaderCard
