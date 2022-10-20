import { FC } from 'react'

import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvSimpleAccordionApi from 'components/PdvSimpleAccordions/PdvSimpleAccordionApi'
import PdvSimpleAccordionList from 'components/PdvSimpleAccordions/PdvSimpleAccordionList'

const PdvSimpleAccordions: FC = () => {
  return (
    <ComponentWrapper title={'Pdv Simple Accordion'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvSimpleAccordionList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvSimpleAccordionApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvSimpleAccordions
