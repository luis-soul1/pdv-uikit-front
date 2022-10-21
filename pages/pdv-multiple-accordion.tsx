import { FC } from 'react'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvSMultipleAccordionApi from 'components/PdvMultipleAccordions/PdvMultipleAccordionApi'
import PdvMultipleAccordionList from 'components/PdvMultipleAccordions/PdvMultipleAccordionList'

const PdvMultipleAccordions: FC = () => {
  return (
    <ComponentWrapper title={'Pdv Accordion'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvMultipleAccordionList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvSMultipleAccordionApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvMultipleAccordions
