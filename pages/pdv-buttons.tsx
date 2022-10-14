import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvButtonApi from 'components/PvdButtons/PdvButtonApi'
import PdvButtonList from 'components/PvdButtons/PdvButtonList'

const PdvButtons: NextPage = () => {
  return (
    <ComponentWrapper title={'Pdv buttons'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvButtonList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvButtonApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvButtons
