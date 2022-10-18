import { FC } from 'react'

import PdvPillBox from '@Uikit/PdvPillBox'

const PdvPillboxList: FC = () => {
  return (
    <div className="border border-black p-4">
      <div className="grid grid-cols-12">
        <h1 className="col-span-12">Border type</h1>
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">rounded (Default)</h4>
          <PdvPillBox>Abril</PdvPillBox>
        </div>
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">rounded-md</h4>
          <PdvPillBox className="mt-2" borderType="rounded-md" color="green-300">
            Abril
          </PdvPillBox>
        </div>
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">rounded-full</h4>
          <PdvPillBox className="mt-2" color="teal-500" borderType="rounded-full">
            Marzo
          </PdvPillBox>
        </div>

        <h1 className="col-span-12 mt-6">Sizes</h1>
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Small</h4>
          <PdvPillBox className="mt-2" size="small" color="orange-500" borderType="rounded">
            Mayo
          </PdvPillBox>
        </div>
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Medium (Default)</h4>
          <PdvPillBox className="mt-2" color="blue-500" borderType="rounded">
            Mayo
          </PdvPillBox>
        </div>
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Large</h4>
          <PdvPillBox className="mt-2" size="large" color="rose-500" borderType="rounded">
            Mayo
          </PdvPillBox>
        </div>

        <h1 className="col-span-12 mt-6">Custom</h1>
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Text color</h4>
          <PdvPillBox className="mt-2" color="orange-500" borderType="rounded" textColor="purple-200">
            Mayo
          </PdvPillBox>
        </div>
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Children React element</h4>
          <PdvPillBox className="mt-2" color="blue-500" borderType="rounded-full">
            <h1>React element text</h1>
          </PdvPillBox>
        </div>
      </div>
    </div>
  )
}

export default PdvPillboxList
