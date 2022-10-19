import { FC } from 'react'

const PdvProgressBarApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Propiedades del componente:

 type TProgressBar = {
  percent: number
  type?: 'circle'
  className?: string
  color?: TColors
  strokeColor?: TColors
  width?: number
}
`}
    </pre>
  )
}

export default PdvProgressBarApi
