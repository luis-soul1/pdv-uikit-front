import { FC } from 'react'

import useLoader from '@Uikit/hooks/useLoader'
import PdvButton from '@Uikit/PdvButton'
import PdvLoader from '@Uikit/PdvLoader'

const PdvLoaderList: FC = () => {
  const loader = useLoader()

  const onClick = () => {
    loader.setIsLoading(!loader.isLoading)
  }

  return (
    <div className="total-center relative h-20 border border-black p-4">
      <PdvButton onClick={onClick}>Show loader</PdvButton>
      <PdvLoader onClick={onClick} />
    </div>
  )
}

export default PdvLoaderList
