import { FC } from 'react'

import PdvPillBox from '@Uikit/PdvPillBox'
import PdvTooltip from '@Uikit/PdvTooltip'

const PdvToolTipsList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h2 className="mt-4">Placement</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Top</h4>
          <PdvTooltip title="Place on top" placement="top">
            <PdvPillBox className="mt-2" borderType="rounded-md">
              Abril
            </PdvPillBox>
          </PdvTooltip>
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Bottom</h4>
          <PdvTooltip title="Place on bottom" placement="bottom" color="blue-600">
            <PdvPillBox className="mt-2" borderType="rounded-md" color="teal-500">
              Mayo
            </PdvPillBox>
          </PdvTooltip>
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Left</h4>
          <PdvTooltip title="Place on left" placement="left" color="orange-600" textColor="red-400">
            <PdvPillBox className="mt-2" borderType="rounded-md" color="orange-300">
              Junio
            </PdvPillBox>
          </PdvTooltip>
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Right</h4>
          <PdvTooltip title="Place on right" placement="right" color="green-600">
            <PdvPillBox className="mt-2" borderType="rounded-md" color="blue-300">
              Julio
            </PdvPillBox>
          </PdvTooltip>
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Arrow</h4>
          <PdvTooltip title="With arrow" placement="bottom" arrow>
            <PdvPillBox className="mt-2" borderType="rounded-md" color="indigo-300">
              Abril
            </PdvPillBox>
          </PdvTooltip>
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Controlled</h4>
          <PdvTooltip title="Controlled" placement="top" arrow open>
            <PdvPillBox className="mt-2" borderType="rounded-md" color="green-300">
              Abril
            </PdvPillBox>
          </PdvTooltip>
        </div>
      </div>
    </div>
  )
}

export default PdvToolTipsList
