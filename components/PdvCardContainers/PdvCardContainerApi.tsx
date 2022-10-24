import { FC } from 'react'

const PdvCardContainerApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

type TPdvCardContainer = {
  theme?: 'light' | 'dark'
  className?: string
}
`}
    </pre>
  )
}

export default PdvCardContainerApi
