import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvIconApi from 'components/PdvIcons/PdvIconApi'
import PdvIconList from 'components/PdvIcons/PdvIconList'
import { FC } from 'react'

const PdvIcons: FC = () => {
  return (
    <ComponentWrapper title={'PdvPillbox'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvIconList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvIconApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvIcons
