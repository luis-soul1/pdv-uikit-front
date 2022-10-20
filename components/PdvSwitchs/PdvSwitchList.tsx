import { FC, useState } from 'react'

import PdvSwitch from '@Uikit/PdvSwitch'

const PdvSwitchList: FC = () => {
  const [checked, setChecked] = useState(false)

  const [triggerOnChange, setTriggerOnChange] = useState('')

  const handleUncontrolled = (value: boolean) => {
    if (value) setTriggerOnChange(`fire endpoint, value is: ${value} `)
    if (!value) setTriggerOnChange(`fire endpoint, value is: ${value} `)
  }

  return (
    <div className="border border-black p-4">
      <h2 className="mt-4">Uncontrolled</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Simple</h4>
          <PdvSwitch />
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">With OnChange</h4>
          <PdvSwitch onChange={handleUncontrolled} /> <span className="pl-4">{triggerOnChange}</span>
        </div>
      </div>

      <h2 className="mt-4">Controlled</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Switch controlled</h4>
          <PdvSwitch checked={checked} onChange={(value) => setChecked(value)} />

          {checked && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus saepe natus corrupti quas a quae itaque esse praesentium
              distinctio nam tenetur, iusto ad, possimus reiciendis. Labore nesciunt nostrum eligendi consectetur?
            </p>
          )}
        </div>
      </div>

      <h2 className="mt-4">Customization</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Color</h4>
          <PdvSwitch color="blue-400" />
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Text color</h4>
          <PdvSwitch color="blue-400" suffixText={{ checkedColor: 'indigo-700', uncheckedColor: 'rose-400' }} />
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Text</h4>
          <PdvSwitch color="blue-400" suffixText={{ checkedText: 'Texto customizado desactivado', uncheckedText: 'Texto customizado activado' }} />
        </div>
      </div>

      <h2 className="mt-4">Text positions</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Right (Default)</h4>
          <PdvSwitch />
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Left</h4>
          <PdvSwitch suffixText={{ position: 'left' }} />
        </div>

        <div className="col-span-3">
          <h4 className="mt-4 mb-2">Both sides</h4>
          <PdvSwitch suffixText={{ position: 'both' }} />
        </div>
      </div>
    </div>
  )
}

export default PdvSwitchList
