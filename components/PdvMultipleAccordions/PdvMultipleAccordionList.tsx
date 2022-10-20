import { FC } from 'react'

import { PdvIcon } from '@Uikit/Icons/PdvIcon'
import PdvMultipleAccordion, { TAccordion } from '@Uikit/PdvMultipleAccordion'
import PdvTypographyList from 'components/PdvTypographies/PdvTypographyList'

const PdvMultipleAccordionList: FC = () => {
  const accordions: TAccordion[] = [
    {
      header: 'Header 1',
      icon: 'Heart',
      content: <PdvTypographyList />
    },
    {
      header: 'Header 2 with custom color',
      icon: 'Activity',
      iconColor: 'indigo-700',
      color: 'blue-300',
      content: <PdvTypographyList />
    },
    {
      header: 'Header 3 disabled',
      content: <PdvTypographyList />,
      disabled: true
    },
    {
      header: 'Header 4 controlled',
      content: <PdvTypographyList />,
      isOpen: true
    },
    {
      header: (
        <div className="flex">
          <PdvIcon name="Document" color="white" className="mr-4" />
          <p className="subtitle1 text-white">Header 5 (Con ReactElement)</p>
        </div>
      ),
      content: <PdvTypographyList />
    }
  ]

  return (
    <div className="border border-black p-4">
      <PdvMultipleAccordion accordions={accordions} className="mt-2" defaultOpen={1} />
    </div>
  )
}

export default PdvMultipleAccordionList
