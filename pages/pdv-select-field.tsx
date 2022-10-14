import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvSelectFieldApi from 'components/PdvSelects/PdvSelectFieldApi'
import PdvSelectFieldList from 'components/PdvSelects/PdvSelectFieldList'

const PdvSelects: NextPage = () => {
  return (
    <ComponentWrapper title={'select field'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvSelectFieldList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvSelectFieldApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvSelects
