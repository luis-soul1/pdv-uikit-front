import React, { FC } from 'react'

import { useForm } from 'react-hook-form'

import SelectField from '@Uikit/Forms/Select/SelectField'

const options = [
  { id: 1, title: 'Option 1' },
  { id: 2, title: 'Option 2' },
  { id: 3, title: 'Option 3' }
]
const defaultValues = {
  outlined_variant: '',
  default_variant: '',
  outlined_variant_multiple: [],
  default_variant_multiple: []
}

const PdvSelectFieldList: FC = () => {
  const form = useForm({ defaultValues })

  return (
    <div className="border border-black p-4">
      <h1 className="text-black">Simple select: Variants</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <SelectField
          name="outlined_variant"
          label="Outlined variant"
          className="col-span-6"
          optionLabel="title"
          optionValue="id"
          selectOptions={options}
          form={form}
        />
        <SelectField
          name="default_variant"
          variant="default"
          label="Default variant"
          className="col-span-6"
          optionLabel="title"
          optionValue="id"
          selectOptions={options}
          form={form}
        />
      </div>

      <h1 className="mt-6 text-black">Multiple select: Variants</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <SelectField
          name="outlined_variant_multiple"
          label="Outlined variant"
          className="col-span-6"
          optionLabel="title"
          optionValue="id"
          selectOptions={options}
          form={form}
          multiple
        />
        <SelectField
          name="default_variant_multiple"
          variant="default"
          label="Default variant"
          className="col-span-6"
          optionLabel="title"
          optionValue="id"
          selectOptions={options}
          form={form}
          multiple
        />
      </div>
    </div>
  )
}

export default PdvSelectFieldList
