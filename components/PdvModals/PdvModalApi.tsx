import { FC } from 'react'

const PdvModalApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvModal = {
    open: boolean
    title?: string
    fullScreen?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    headerColor?: TColors
    footer?: React.ReactElement
    noContainerSpacing?: boolean
    onClose?: () => void // Se ejecuta cuando se hace click fuera del modal
  }
`}
    </pre>
  )
}

export default PdvModalApi
