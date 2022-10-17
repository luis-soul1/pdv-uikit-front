import React, { FC } from 'react'

import { useForm } from 'react-hook-form'

import TimeField from '@Uikit/Forms/Timepicker/TimeField'

const PdvRadioGroupFieldList: FC = () => {
  const form = useForm()

  return (
    <div className="border border-black p-4">
      <h1 className="text-black">Variants</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <TimeField name="outlined_variant" label="Outlined variant" className="col-span-6" form={form} />
        <TimeField name="default_variant" variant="default" label="Default variant" className="col-span-6" form={form} />
      </div>

      <h1 className="mt-6 mt-6 text-black">Disabled</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <TimeField name="outlined_variant" label="Outlined variant" className="col-span-6" form={form} inputProps={{ disabled: true }} />
        <TimeField
          name="default_variant"
          variant="default"
          label="Default variant"
          className="col-span-6"
          form={form}
          inputProps={{ disabled: true }}
        />
      </div>
    </div>
  )
}

export default PdvRadioGroupFieldList
