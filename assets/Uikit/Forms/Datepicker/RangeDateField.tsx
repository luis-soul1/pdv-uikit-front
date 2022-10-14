import { FieldValues, Path, UseFormReturn } from 'react-hook-form'

import { PdvIcons } from '@Uikit/Icons/PdvIcons'

import DateField from './DateField'

type TRangeDateField<TFormValues extends FieldValues> = {
  nameFrom: Path<TFormValues>
  nameTo: Path<TFormValues>
  form: UseFormReturn<TFormValues>
}

const RangeDateField = <TFormValues extends FieldValues>(props: TRangeDateField<TFormValues>) => {
  return (
    <span className="relative inline-flex items-center rounded-md border bg-white px-4">
      <DateField name={props.nameFrom} form={props.form} className="w-36" viewType="day" variant="transparent" />
      <PdvIcons name="KeyArrowRight" color="primary-color" className="absolute left-[50%]" />
      <DateField name={props.nameTo} form={props.form} viewType="day" className="w-36 justify-self-end" variant="transparent" />
    </span>
  )
}

export default RangeDateField
