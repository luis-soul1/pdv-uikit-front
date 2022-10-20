import { FC } from 'react'

const PdvModalApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvModal = {
    open: boolean
    title?: string
    fullScreen?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg'
    headerColor?: TColors
    footer?: React.ReactElement
    noContainerSpacing?: boolean
    noHeader?: boolean
    onClose?: () => void
  }
`}
    </pre>
  )
}

export default PdvModalApi
