import { FC } from 'react'

const PdvIconApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

type TIconSize = 'small' | 'medium' | 'large' | 'xlarge' | number
type TPdvIcon = {
  name: TIconNames
  size?: TIconSize
  set?: 'bold' | 'broken' | 'bulk' | 'curved' | 'light' | 'two-tone'
  color?: TColors
  style?: CSSProperties
  className?: string
}
`}
    </pre>
  )
}

export default PdvIconApi
