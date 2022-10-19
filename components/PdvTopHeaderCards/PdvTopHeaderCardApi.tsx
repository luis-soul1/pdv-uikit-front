import { FC } from 'react'

const PdvLeftHeaderCardApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Propiedades del componente:

 type TTopHeaderCard = {
  borderType?: 'rounded-t-none' | 'rounded-t-xl'
  className?: string
  headerColor: TColors
  title: string | ReactElement
  titleColor?: TColors
  onClick?: () => void
}
`}
    </pre>
  )
}

export default PdvLeftHeaderCardApi
