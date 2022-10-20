import { NextPage } from 'next'

import ComponentWrapper from 'commons/ComponentWrapper'
import PdvColorList from 'components/PdvColors/PdvColorList'

const PdvColors: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvColors'}>
      <PdvColorList />
    </ComponentWrapper>
  )
}

export default PdvColors
