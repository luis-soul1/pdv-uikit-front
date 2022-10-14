import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvTabsApi from 'components/PdvTabs/PdvTabsApi'
import PdvTabsList from 'components/PdvTabs/PdvTabsList'

const PdvTabsPage: NextPage = () => {
  return (
    <ComponentWrapper title={'Pdv Tabs'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvTabsList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvTabsApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvTabsPage
