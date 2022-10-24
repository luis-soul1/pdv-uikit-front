import { FC, useState } from 'react'

import { PdvIcon } from '@Uikit/Icons/PdvIcon'
import PdvAccordion from '@Uikit/PdvAccordion'
import PdvSimpleAccordion from '@Uikit/PdvSimpleAccordion'
import PdvSwitch from '@Uikit/PdvSwitch'
import PdvTypographyList from 'components/PdvTypographies/PdvTypographyList'

const PdvAccordionList: FC = () => {
  const [controlPanel, setControlPanel] = useState(true)

  return (
    <div className="border border-black p-4">
      <h4 className="mt-8">Small Accordions</h4>
      <PdvAccordion className="mt-2">
        <PdvAccordion.Panel header="Titulo 1">
          <PdvTypographyList />
        </PdvAccordion.Panel>
        <PdvAccordion.Panel header="Titulo 2">
          <PdvTypographyList />
        </PdvAccordion.Panel>
      </PdvAccordion>

      <h4 className="mt-8">Accordion con icono</h4>
      <PdvAccordion className="mt-2">
        <PdvAccordion.Panel color="blue-400" header="Titulo con icono" icon="Heart">
          <PdvTypographyList />
        </PdvAccordion.Panel>
      </PdvAccordion>

      <h4 className="mt-8">Large Accordion y header con ReactElement</h4>
      <PdvAccordion className="mt-2">
        <PdvAccordion.Panel
          size="large"
          color="yellow-600"
          header={
            <div className="flex w-full justify-between gap-2">
              <div className=" flex gap-1">
                <PdvIcon name="Heart" color="white" />
                <p className="subtitle1 text-white">Header</p>
              </div>
              <PdvSwitch color="blue-400" checked />
            </div>
          }
        >
          <PdvTypographyList />
        </PdvAccordion.Panel>
      </PdvAccordion>

      <h4 className="mt-8">Controlled</h4>
      <PdvAccordion className="mt-2">
        <PdvAccordion.Panel header="Titulo" color="fuchsia-400" isOpen={controlPanel} onClick={() => setControlPanel((prev) => !prev)}>
          <PdvTypographyList />
        </PdvAccordion.Panel>
        <PdvTypographyList />
      </PdvAccordion>

      <h4 className="mt-8">Multiple Open</h4>
      <PdvAccordion className="mt-2" multipleOpen>
        <PdvAccordion.Panel header="Titulo 1" color="red-400">
          <PdvTypographyList />
        </PdvAccordion.Panel>
        <PdvAccordion.Panel header="Titulo 2" color="red-600">
          <PdvTypographyList />
        </PdvAccordion.Panel>
      </PdvAccordion>

      <h4 className="mt-8">Disabled</h4>
      <PdvSimpleAccordion className="mt-2" header="Titulo" color="fuchsia-400" disabled>
        <PdvTypographyList />
      </PdvSimpleAccordion>
    </div>
  )
}

export default PdvAccordionList
