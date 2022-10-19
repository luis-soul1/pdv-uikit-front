import { NextPage } from 'next'
import React from 'react'

import ComponentWrapper from 'commons/ComponentWrapper'
import PdvTypographyList from 'components/PdvTypographies/PdvTypographyList'

const PdvTypographies: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvTypographies'}>
      <PdvTypographyList />
    </ComponentWrapper>
  )
}

export default PdvTypographies
