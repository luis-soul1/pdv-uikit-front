import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvPillboxApi from 'components/PdvPillox/PdvPillboxApi'
import PdvPillboxList from 'components/PdvPillox/PdvPillboxList'

const PdvPillbox: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvPillbox'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvPillboxList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvPillboxApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvPillbox
