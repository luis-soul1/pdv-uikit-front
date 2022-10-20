import { FC } from 'react'

const PdvAlertApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvAlert = {
    severity?: 'error' | 'info' | 'success' | 'warning'
    variant?: 'filled' | 'outlined' | 'standard'
    className?: string
    showIcon?: boolean
  }
`}
    </pre>
  )
}

export default PdvAlertApi
