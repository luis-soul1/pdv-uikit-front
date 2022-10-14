import { FC } from 'react'

import { useForm } from 'react-hook-form'

import DateField from '@Uikit/Forms/Datepicker/DateField'
import RangeDateField from '@Uikit/Forms/Datepicker/RangeDateField'

const PdvDateFieldList: FC = () => {
  const form = useForm()

  return (
    <div className="border border-black p-4">
      <h1 className="text-black">Variants</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <DateField name="outlined_variant" label="Outlined variant" className="col-span-4" form={form} />
        <DateField name="default_variant" variant="default" label="Default variant" className="col-span-4" form={form} />
        <DateField name="transparent_variant" variant="transparent" label="Transparent variant" className="col-span-4" form={form} />
      </div>

      <h1 className="mt-6 text-black">Date modes</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <DateField name="disabled_year" label="Disabled year" className="col-span-4" form={form} />
        <DateField name="disabled_month" label="Disabled month" className="col-span-4" form={form} />
        <DateField name="disabled_date" label="Disabled date" className="col-span-4" form={form} />
      </div>

      <h1 className="mt-6 text-black">Range date field</h1>
      <RangeDateField nameFrom="start-date" nameTo="end-date" form={form} />
    </div>
  )
}

export default PdvDateFieldList
