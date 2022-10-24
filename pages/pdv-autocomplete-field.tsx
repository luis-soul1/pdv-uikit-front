import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvAutocompleteFieldApi from 'components/PdvAutocompleteFields/PdvAutocompleteFieldApi'
import PdvAutocompleteFieldList from 'components/PdvAutocompleteFields/PdvAutocompleteFieldList'

const PdvAutocomplete: NextPage = () => {
  return (
    <ComponentWrapper title={'select field'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvAutocompleteFieldList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvAutocompleteFieldApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvAutocomplete
