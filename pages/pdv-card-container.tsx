import { FC } from 'react'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvCardContainerApi from 'components/PdvCardContainers/PdvCardContainerApi'
import PdvCardContainerList from 'components/PdvCardContainers/PdvCardContainerList'

const PdvCardContainer: FC = () => {
  return (
    <ComponentWrapper title={'Input field'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvCardContainerList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvCardContainerApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvCardContainer
