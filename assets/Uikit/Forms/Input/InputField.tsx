import { FieldValues } from 'react-hook-form'

import FormError from 'assets/Uikit/Forms/Error/FormError'
import Input, { TInput } from 'assets/Uikit/Forms/Input/Input'
import LabelField, { TLabelField } from 'assets/Uikit/Forms/Label/LabelField'

export type TInputField<TFormValues extends FieldValues> = {
  errorClassName?: string
  labelPosition?: 'left' | 'top'
  className?: string
} & TLabelField &
  TInput<TFormValues>

const InputField = <TFormValues extends FieldValues>(props: TInputField<TFormValues>) => {
  return (
    <div className={`inline-block ${props.className}`}>
      <div className={`flex ${props?.labelPosition === 'left' ? 'flex-row gap-2' : 'flex-col gap-1'}`}>
        <LabelField {...props} />
        <Input {...props} inputProps={{ ...props.inputProps }} />
      </div>
      <FormError errorClassName={props.errorClassName} name={props.name} errors={props.form?.formState?.errors} />
    </div>
  )
}

export default InputField
