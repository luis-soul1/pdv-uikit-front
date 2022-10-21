import { NextPage } from 'next'
import React from 'react'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvTopHeaderCardApi from 'components/PdvTopHeaderCards/PdvTopHeaderCardApi'
import PdvTopHeaderCardList from 'components/PdvTopHeaderCards/PdvTopHeaderCardList'

const PdvTopHeaderCards: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvTopHeaderCards'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvTopHeaderCardList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvTopHeaderCardApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvTopHeaderCards
