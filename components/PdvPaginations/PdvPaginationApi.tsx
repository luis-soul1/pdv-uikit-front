import { FC } from 'react'

const PdvPaginationApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvPagination = {
    count: number
    page: number
    className?: string
    color?: TColors
    onChange?: (event: React.ChangeEvent<unknown>, value: number) => void
  }

  NOTA: usar el custom hook usePdvPagination para el manejo de las paginas.
`}
    </pre>
  )
}

export default PdvPaginationApi
