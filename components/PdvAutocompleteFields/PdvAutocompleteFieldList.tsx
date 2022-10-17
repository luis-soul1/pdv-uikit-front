import React, { FC } from 'react'

import { useForm } from 'react-hook-form'

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
      <div className="grid grid-cols-12 items-center gap-4">
        <AutocompleteField name="outlined_variant" className="col-span-4" form={form} autocompleteOptions={options} />
        <AutocompleteField name="default_variant" variant="default" className="col-span-4" form={form} autocompleteOptions={options} />
        <AutocompleteField name="transparent_variant" variant="transparent" className="col-span-4" form={form} autocompleteOptions={options} />
      </div>

      <h1 className="mt-6 mt-6 text-black">Disabled</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <AutocompleteField name="outlined_variant" className="col-span-4" form={form} autocompleteOptions={options} inputProps={{ disabled: true }} />
        <AutocompleteField
          name="default_variant"
          variant="default"
          className="col-span-4"
          form={form}
          autocompleteOptions={options}
          inputProps={{ disabled: true }}
        />
        <AutocompleteField
          name="transparent_variant"
          variant="transparent"
          className="col-span-4"
          form={form}
          autocompleteOptions={options}
          inputProps={{ disabled: true }}
        />
      </div>
    </div>
  )
}

export default PdvAutocompleteFieldList
