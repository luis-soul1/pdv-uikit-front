import { NextPage } from 'next'

import PdvTabs from '@Uikit/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import RadioGroupFieldApi from 'components/PdvRadioGroupFields/PdvRadioGroupFieldApi'
import PdvRadioGroupFieldList from 'components/PdvRadioGroupFields/PdvRadioGroupFieldList'

const PdvRadioGroupFields: NextPage = () => {
  return (
    <ComponentWrapper title={'Radio Group field'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvRadioGroupFieldList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <RadioGroupFieldApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvRadioGroupFields
