import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvLoaderApi from 'components/PdvLoaders/PdvLoaderApi'
import PdvLoaderList from 'components/PdvLoaders/PdvLoaderList'

const PdvLoaders: NextPage = () => {
  return (
    <ComponentWrapper title={'Input field'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvLoaderList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvLoaderApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvLoaders
