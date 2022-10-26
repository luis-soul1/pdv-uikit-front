import { FC } from 'react'

import PdvButton from '@Uikit/PdvButton'

const PdvButtonList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h1 className="text-black">Variants</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h5 className="mb-2">Contained (Default)</h5>

          <PdvButton>Button text</PdvButton>
          <PdvButton className="mt-2 block" color="teal-500">
            Button text
          </PdvButton>
          <PdvButton className="mt-2 block" color="blue-400">
            Button text
          </PdvButton>
        </div>

        <div className="col-span-4">
          <h5 className="mb-2">Outlined</h5>

          <PdvButton className="mt-2 block" color="gray-700" variant="outlined">
            Button text
          </PdvButton>
          <PdvButton className="mt-2 block" color="teal-500" variant="outlined">
            Button text
          </PdvButton>
          <PdvButton className="mt-2 block" color="blue-400" variant="outlined">
            Button text
          </PdvButton>
        </div>

        <div className="col-span-4">
          <h5 className="mb-2">Default</h5>

          <PdvButton className="mt-2 block" color="indigo-700" variant="default">
            Button text
          </PdvButton>
          <PdvButton className="mt-2 block" color="teal-500" variant="default">
            Button text
          </PdvButton>
          <PdvButton className="mt-2 block" color="blue-400" variant="default">
            Button text
          </PdvButton>
        </div>
      </div>

      <h1 className="mt-8 text-black">Sizes</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h6 className="my-2">Small</h6>
          <PdvButton color="orange-400" size="small">
            Button text
          </PdvButton>
        </div>
        <div className="col-span-4">
          <h6 className="my-2">Medium (Default)</h6>
          <PdvButton color="rose-500">Button text</PdvButton>
        </div>
        <div className="col-span-4">
          <h6 className="my-2">Large</h6>
          <PdvButton color="blue-400" size="large">
            Button text
          </PdvButton>
        </div>
      </div>

      <h1 className="mt-8 text-black">Rounded</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <h6 className="my-2">small</h6>
          <PdvButton color="blue-400" rounded="small">
            Button text
          </PdvButton>
        </div>
        <div className="col-span-3">
          <h6 className="my-2">Medium (Default)</h6>
          <PdvButton color="rose-500">Button text</PdvButton>
        </div>
        <div className="col-span-3">
          <h6 className="my-2">Large</h6>
          <PdvButton color="orange-400" rounded="large">
            Button text
          </PdvButton>
        </div>
        <div className="col-span-3">
          <h6 className="my-2">Full</h6>
          <PdvButton color="orange-400" rounded="full">
            Button text
          </PdvButton>
        </div>
      </div>

      <h1 className="mt-8 text-black">With icons</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h6 className="my-2">Left icon (Default)</h6>
          <PdvButton color="black" icon="SmileFace">
            Button text
          </PdvButton>
        </div>
        <div className="col-span-4">
          <h6 className="my-2">Icon Color</h6>
          <PdvButton color="black" icon="SmileFace" iconColor="sky-800">
            Button text
          </PdvButton>
        </div>
        <div className="col-span-4">
          <h6 className="my-2">Right and large icon</h6>
          <PdvButton color="sky-700" variant="outlined" icon="Document" iconPosition="right" iconSize="large">
            Button text
          </PdvButton>
        </div>
        <div className="col-span-4">
          <h6 className="my-2">Loading</h6>
          <PdvButton color="purple-800" rounded="large" loading>
            Button text
          </PdvButton>
        </div>
      </div>
      <h4 className="mb-2 mt-8 text-black">Disabled button</h4>
      <div className="gap 4 grid grid-cols-12">
        <div className="col-span-6">
          <PdvButton disabled>Button text</PdvButton>
        </div>
        <div className="col-span-6">
          <PdvButton disabled icon="Activity">
            Button text
          </PdvButton>
        </div>
      </div>

      <h4 className="mb-2 mt-8 text-black">Aslink button</h4>
      <PdvButton asLink href="/pdv-input-field">
        Button text
      </PdvButton>
    </div>
  )
}

export default PdvButtonList
