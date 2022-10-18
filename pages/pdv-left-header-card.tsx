import { NextPage } from 'next'
import React from 'react'

import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvLeftHeaderCardApi from 'components/PdvLeftHeaderCards/PdvLeftHeaderCardApi'
import PdvLeftHeaderCardList from 'components/PdvLeftHeaderCards/PdvLeftHeaderCardList'

const PdvLeftHeaderCards: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvLeftHeaderCards'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvLeftHeaderCardList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvLeftHeaderCardApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvLeftHeaderCards
