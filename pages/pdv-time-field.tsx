import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvTimeFieldApi from 'components/PdvTimeFields/PdvTimeFieldApi'
import PdvTimeFieldList from 'components/PdvTimeFields/PdvTimeFieldList'

const PdvTimeFields: NextPage = () => {
  return (
    <ComponentWrapper title={'Time field'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvTimeFieldList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvTimeFieldApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvTimeFields
