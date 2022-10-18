import { FC } from 'react'

import { useForm } from 'react-hook-form'

import CheckboxField from '@Uikit/Forms/Checkbox/CheckboxField'

type TFormValues = {
  checkbox1: boolean
  checkbox2: boolean
}

const PdvCheckboxFielddList: FC = () => {
  const form = useForm<TFormValues>({ defaultValues: { checkbox1: true, checkbox2: false } })

  return (
    <div className="border border-black p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h1 className="text-black">Default</h1>
          <CheckboxField name="checkbox1" label="Option 1" form={form} />
        </div>

        <div className="col-span-4">
          <h1 className="text-black">Custom colors</h1>
          <CheckboxField name="checkbox2" label="Option 1" color="orange-500" labelColor="blue-700" form={form} />
        </div>
      </div>
    </div>
  )
}

export default PdvCheckboxFielddList
