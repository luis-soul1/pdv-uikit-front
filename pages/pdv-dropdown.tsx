import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PvdDropdownApi from 'components/PvdDropdowns/PvdDropdownApi'
import PvdDropdownList from 'components/PvdDropdowns/PvdDropdownList'

const PdvDropdown: NextPage = () => {
  return (
    <ComponentWrapper title={'Input field'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PvdDropdownList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PvdDropdownApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvDropdown
