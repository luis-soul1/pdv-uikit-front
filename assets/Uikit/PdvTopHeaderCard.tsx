import { FC, ReactElement } from 'react'
import { TColors } from './Colors/TColors'

type TPdvTopHeaderCard = {
  borderType?: 'rounded-t-none' | 'rounded-t-lg'
  className?: string
  headerColor?: TColors
  title: string | ReactElement
  titleColor?: TColors
  onClick?: () => void
}

const PdvTopHeaderCard: FC<TPdvTopHeaderCard> = (props) => {
  const borderStyle = !props.borderType || props.borderType === 'rounded-t-lg' ? 'rounded-t-lg py-2' : 'rounded-t-none py-1'
  return (
    <div
      className={`width-104 inline-block rounded-b-lg ${props.borderType ?? 'rounded-t-lg'} ${props.className ?? ''}`}
      onClick={props.onClick}
      style={{ boxShadow: 'var(--shadow-md)' }}
    >
      <div
        className={`flex w-full items-center justify-center text-white ${borderStyle}`}
        style={{ backgroundColor: `var(--${props.headerColor ?? 'indigo-700'})` }}
      >
        {typeof props.title === 'string' ? (
          <p className="subtitle1 text-center" style={{ color: `var(--${props.titleColor ?? 'white'})` }}>
            {props.title}
          </p>
        ) : (
          props.title
        )}
      </div>
      <div className={`rounded-b-lg bg-white`}>{props.children}</div>
    </div>
  )
}

export default PdvTopHeaderCard
