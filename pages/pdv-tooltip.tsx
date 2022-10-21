import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvToolTipsApi from 'components/PdvToolTips/PdvToolTipsApi'
import PdvToolTipsList from 'components/PdvToolTips/PdvToolTipsList'

const PdvTooltip: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvTolltip'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvToolTipsList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvToolTipsApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvTooltip
