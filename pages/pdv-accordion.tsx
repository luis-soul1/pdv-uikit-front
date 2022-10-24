import { FC } from 'react'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvAccordionApi from 'components/PdvAccordions/PdvAccordionApi'
import PdvAccordionList from 'components/PdvAccordions/PdvAccordionList'

const PdvAccordions: FC = () => {
  return (
    <ComponentWrapper title={'Pdv Accordion'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvAccordionList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvAccordionApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvAccordions
