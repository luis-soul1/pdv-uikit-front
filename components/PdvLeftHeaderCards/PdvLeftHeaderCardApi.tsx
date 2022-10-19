import { FC } from 'react'

const PdvLeftHeaderCardApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Propiedades del componente:
type TLeftHeaderCard = {
  className?: string
  headerSize?: 'small' | 'medium' | 'large' | 'extra-large' | 'half'
  headerColor?: TColors
  title?: string | ReactElement
  titleColor?: TColors
  onClick?: () => void
}
        `}
    </pre>
  )
}

export default PdvLeftHeaderCardApi
