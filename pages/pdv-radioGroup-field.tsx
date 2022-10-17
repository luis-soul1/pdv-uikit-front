import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import RadioGroupFieldApi from 'components/PdvRadioGroupFields/PdvRadioGroupFieldApi'
import PdvRadioGroupFieldList from 'components/PdvRadioGroupFields/PdvRadioGroupFieldList'
import { NextPage } from 'next'

const PdvRadioGroupFields: NextPage = () => {
  return (
    <ComponentWrapper title={'Radio Qroup field'}>
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
