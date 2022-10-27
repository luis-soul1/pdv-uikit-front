import { NextPage } from 'next'

import ComponentWrapper from 'commons/ComponentWrapper'
import PdvShadowList from 'components/PdvShadows/PdvShadowList'

const PdvColors: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvShadows'}>
      <PdvShadowList />
    </ComponentWrapper>
  )
}

export default PdvColors
