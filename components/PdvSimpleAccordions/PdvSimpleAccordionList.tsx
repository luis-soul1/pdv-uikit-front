import { FC } from 'react'

import { PdvIcon } from '@Uikit/Icons/PdvIcon'
import PdvSimpleAccordion from '@Uikit/PdvSimpleAccordion'
import PdvTypographyList from 'components/PdvTypographies/PdvTypographyList'

const PdvSimpleAccordionList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h4 className="mt-8">Small Accordion</h4>
      <PdvSimpleAccordion className="mt-2" header="Titulo">
        <PdvTypographyList />
      </PdvSimpleAccordion>

      <h4 className="mt-8">Accordion con icono</h4>
      <PdvSimpleAccordion className="mt-2" color="blue-400" header="Titulo con icono" icon="Heart">
        <PdvTypographyList />
      </PdvSimpleAccordion>

      <h4 className="mt-8">Large Accordion y header con ReactElement</h4>
      <PdvSimpleAccordion
        size="large"
        color="yellow-600"
        className="mt-2"
        header={
          <div className="flex">
            <PdvIcon name="Heart" color="white" className="mr-4" />
            <p className="subtitle1 text-white">Header</p>
          </div>
        }
      >
        <PdvTypographyList />
      </PdvSimpleAccordion>

      <h4 className="mt-8">Controlled</h4>
      <PdvSimpleAccordion className="mt-2" header="Titulo" color="fuchsia-400" isOpen>
        <PdvTypographyList />
      </PdvSimpleAccordion>

      <h4 className="mt-8">Disabled</h4>
      <PdvSimpleAccordion className="mt-2" header="Titulo" color="fuchsia-400" disabled>
        <PdvTypographyList />
      </PdvSimpleAccordion>
    </div>
  )
}

export default PdvSimpleAccordionList
