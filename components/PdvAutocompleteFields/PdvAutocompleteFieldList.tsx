import React, { FC } from 'react'

import { useForm } from 'react-hook-form'

import TimeField from '@Uikit/Forms/Timepicker/TimeField'
import AutocompleteField from '@Uikit/Forms/Autocomplete/AutocompleteField'

const options = [
  { label: 'Eliud', value: '4' },
  { label: 'Luis', value: '3' },
  { label: 'Adam', value: '2' },
  { label: 'Jorge', value: '1' }
]

const PdvAutocompleteFieldList: FC = () => {
  const form = useForm()

  return (
    <div className="border border-black p-4">
      <h1 className="text-black">Variants</h1>
      <div className="grid grid-cols-12 items-center gap-4"></div>
      <AutocompleteField name="default_variant" form={form} autocompleteOptions={options} />

      <h1 className="mt-6 mt-6 text-black">Disabled</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <TimeField name="outlined_variant" label="Outlined variant" className="col-span-6" form={form} disabled />
        <TimeField name="default_variant" variant="default" label="Default variant" className="col-span-6" form={form} disabled />
      </div>
    </div>
  )
}

export default PdvAutocompleteFieldList
