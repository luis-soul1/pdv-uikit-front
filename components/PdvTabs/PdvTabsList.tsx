import { FC } from 'react'

import PdvTabs from '@Uikit/PdvTabs'

const PdvTabsList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h1>Tabs width</h1>
      <h5 className="mb-2">Full width</h5>
      <PdvTabs className="mb-6" color="teal-400" tabsWidth="full">
        <PdvTabs.Tab tabText="Tab 1" tabKey="1-tab">
          <h4 className="text-red-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Tab 2" tabKey="2-tab">
          <h4 className="text-teal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
      </PdvTabs>

      <h5 className="mb-2">Auto width</h5>
      <PdvTabs className="mb-6" color="rose-400">
        <PdvTabs.Tab tabText="Tab 1" tabKey="1-tab">
          <h4 className="text-red-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Tab 2" tabKey="2-tab">
          <h4 className="text-teal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
      </PdvTabs>

      <h1 className="mt-4">Tabs height</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h5 className="mb-2">large</h5>
          <PdvTabs className="mb-6" color="green-400" tabsHeight="large">
            <PdvTabs.Tab tabText="Tab 1" tabKey="1-tab">
              <h4 className="text-red-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores,
                optio minus dolor quis soluta molestias, non pariatur harum esse corrupti!
              </h4>
            </PdvTabs.Tab>
            <PdvTabs.Tab tabText="Tab 2" tabKey="2-tab">
              <h1>Tab2</h1>
            </PdvTabs.Tab>
          </PdvTabs>
        </div>
        <div className="col-span-4">
          <h5 className="mb-2">Medium (Default)</h5>
          <PdvTabs className="mb-6" color="orange-400" tabsHeight="medium">
            <PdvTabs.Tab tabText="Tab 1" tabKey="1-tab">
              <h4 className="text-red-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores,
                optio minus dolor quis soluta molestias, non pariatur harum esse corrupti!
              </h4>
            </PdvTabs.Tab>
            <PdvTabs.Tab tabText="Tab 2" tabKey="2-tab">
              <h4 className="text-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores,
                optio minus dolor quis soluta molestias, non pariatur harum esse corrupti!
              </h4>
            </PdvTabs.Tab>
          </PdvTabs>
        </div>
        <div className="col-span-4">
          <h5 className="mb-2">Small</h5>
          <PdvTabs className="mb-6" color="purple-200" tabsHeight="small">
            <PdvTabs.Tab tabText="Tab 1" tabKey="1-tab">
              <h1>tab1</h1>
            </PdvTabs.Tab>
            <PdvTabs.Tab tabText="Tab 2" tabKey="2-tab">
              <h1>tab2</h1>
            </PdvTabs.Tab>
          </PdvTabs>
        </div>
      </div>

      <h5 className="mb-2">Tabs with icons</h5>
      <PdvTabs className="mb-6" color="black" tabsWidth="full">
        <PdvTabs.Tab tabText="Tab 1" tabKey="1-tab" icon="Work" iconSize={20}>
          <h4 className="text-red-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Tab 2" tabKey="2-tab" icon="Activity" iconSize={20}>
          <h4 className="text-teal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
      </PdvTabs>

      <h5 className="mb-2">Tabs with tootips</h5>
      <PdvTabs className="mb-6" color="sky-200" tabsWidth="full">
        <PdvTabs.Tab
          tabText="Tab 1"
          tabKey="1-tab"
          icon="Work"
          iconSize={20}
          tooltip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio minus dolor quis soluta molestias, non pariatur harum esse corrupti!"
        >
          <h4 className="text-red-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Tab 2" tabKey="2-tab" icon="Activity" iconSize={20}>
          <h4 className="text-teal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
      </PdvTabs>

      <h5 className="mb-2">Tabs disabled</h5>
      <PdvTabs className="mb-6" color="blue-400" tabsWidth="full">
        <PdvTabs.Tab
          tabText="Tab 1"
          tabKey="1-tab"
          icon="Work"
          iconSize={20}
          tooltip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio minus dolor quis soluta molestias, non pariatur harum esse corrupti!"
        >
          <h4 className="text-red-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
        <PdvTabs.Tab tabText="Tab 2" tabKey="2-tab" icon="Activity" iconSize={20} tooltip="Disabled tab tool tip" disabled>
          <h4 className="text-teal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus at quibusdam culpa quisquam maxime ad odio sequi maiores, optio
            minus dolor quis soluta molestias, non pariatur harum esse corrupti!
          </h4>
        </PdvTabs.Tab>
      </PdvTabs>
    </div>
  )
}

export default PdvTabsList
