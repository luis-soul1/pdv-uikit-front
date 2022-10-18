import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvPaginationApi from 'components/PdvPaginations/PdvPaginationApi'
import PdvPaginationList from 'components/PdvPaginations/PdvPaginationList'
import { NextPage } from 'next'

const PdvPagination: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvPagination'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvPaginationList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvPaginationApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvPagination
