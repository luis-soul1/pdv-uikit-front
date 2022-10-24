import { FC } from 'react'

import PdvCardContainer from '@Uikit/PdvCardContainer'
import PdvTypographyList from 'pages/pdv-typography'

const PdvCardContainerList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h1>Light</h1>
      <PdvCardContainer className="mt-2 p-4">
        <PdvTypographyList />
      </PdvCardContainer>

      <h1 className="mt-6">Dark</h1>
      <PdvCardContainer className="mt-2 p-4" theme="dark">
        <PdvTypographyList />
      </PdvCardContainer>
    </div>
  )
}

export default PdvCardContainerList
