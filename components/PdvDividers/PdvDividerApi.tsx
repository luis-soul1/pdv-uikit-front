import { FC } from 'react'

const PdvDividerApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvDivider = {
    className?: string
    light?: boolean
    orientation?: 'horizontal' | 'vertical'
    flexItem?: boolean
    variant?: 'fullWidth' | 'inset' | 'middle'
    textAlign?: 'center' | 'left' | 'right'
  }
`}
    </pre>
  )
}

export default PdvDividerApi
