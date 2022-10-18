import { NextPage } from 'next'
import React from 'react'

import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
import ComponentWrapper from 'commons/ComponentWrapper'
import PdvGalleryApi from 'components/PdvGalleries/PdvGalleryApi'
import PdvGalleryList from 'components/PdvGalleries/PdvGalleryList'

const PdvGalleries: NextPage = () => {
  return (
    <ComponentWrapper title={'PdvGallery'}>
      <PdvTabs color="black" tabsHeight="large" tabsWidth="full">
        <PdvTabs.Tab tabText="Component" tabKey="component-tab">
          <PdvGalleryList />
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Api" tabKey="api-tab">
          <PdvGalleryApi />
        </PdvTabs.Tab>
      </PdvTabs>
    </ComponentWrapper>
  )
}

export default PdvGalleries
