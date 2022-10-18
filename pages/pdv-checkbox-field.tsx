import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvCheckboxFieldApi from 'components/PdvCheckboxFields/PdvCheckboxFieldApi'
import PdvCheckboxFielddList from 'components/PdvCheckboxFields/PdvCheckboxFieldList'
import { NextPage } from 'next'

const PdvCheckboxField: NextPage = () => {
  return (
    <ComponentWrapper title={'Checkbox field'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvCheckboxFielddList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvCheckboxFieldApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvCheckboxField
