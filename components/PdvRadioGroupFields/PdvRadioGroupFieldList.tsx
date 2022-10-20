import { FC } from 'react'

import { useForm } from 'react-hook-form'

import RadioGroupField from '@Uikit/Forms/Radio/RadioGroupField'

const options = [
  { label: 'Option 1', value: 'action1' },
  { label: 'Option 2', value: 'action2' }
]

const PdvRadioGroupFieldList: FC = () => {
  const form = useForm({ defaultValues: { radio: 'action2' } })

  return (
    <div className="border border-black p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h1 className="text-black">Vertical (Default)</h1>
          <RadioGroupField name="radio" radioOptions={options} form={form} />
        </div>
        <div className="col-span-4">
          <h1 className="text-black">Horizontal</h1>
          <RadioGroupField name="radio" radioOptions={options} form={form} alignment="horizontal" />
        </div>
        <div className="col-span-4">
          <h1 className="text-black">With divider</h1>
          <RadioGroupField name="radio" radioOptions={options} form={form} divider />
        </div>

        <div className="col-span-4">
          <h1 className="text-black">Colors</h1>
          <RadioGroupField name="radio" radioOptions={options} color="blue-400" textColor="teal-500" form={form} />
        </div>
      </div>
    </div>
  )
}

export default PdvRadioGroupFieldList
