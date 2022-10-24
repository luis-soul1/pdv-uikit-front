import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvInputFieldApi from 'components/PdvInputs/PdvInputFieldApi'
import PdvInputFieldList from 'components/PdvInputs/PdvInputFieldList'

const PdvInputs: NextPage = () => {
  return (
    <ComponentWrapper title={'Input field'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvInputFieldList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvInputFieldApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvInputs
