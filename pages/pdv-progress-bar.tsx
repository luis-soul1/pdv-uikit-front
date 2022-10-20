import { NextPage } from 'next'
import React from 'react'

import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvProgressBarApi from 'components/PdvProgressBars/PdvProgressBarApi'
import PdvProgressBarList from 'components/PdvProgressBars/PdvProgressBarList'

const PdvProgressBars: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvProgressBar'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvProgressBarList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvProgressBarApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvProgressBars
