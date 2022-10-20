import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvAlertApi from 'components/PdvAlerts/PdvAlertApi'
import PdvAlertList from 'components/PdvAlerts/PdvAlertList'

const PdvAlerts: NextPage = () => {
  return (
    <ComponentWrapper title={'Pdv Alert'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvAlertList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvAlertApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvAlerts
