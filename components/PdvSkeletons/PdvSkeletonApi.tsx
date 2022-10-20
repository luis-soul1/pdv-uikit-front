import { FC } from 'react'

const PdvSkeletonApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvSkeleton = {
    rows?: number
    className?: string
    variant?: 'circular' | 'rectangular' | 'text'
    animation?: 'pulse' | 'wave' | false
    height?: number
    width?: number
  }
`}
    </pre>
  )
}

export default PdvSkeletonApi
