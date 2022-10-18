import { FC } from 'react'

const PdvPillboxApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvPillBox = {
    className?: string
    borderType?: 'rounded' | 'rounded-md' | 'rounded-full'
    color?: TColors
    textColor?: TColors
    size?: 'micro' | 'small' | 'medium' | 'large'
    onClick?: () => void
  }
`}
    </pre>
  )
}

export default PdvPillboxApi
