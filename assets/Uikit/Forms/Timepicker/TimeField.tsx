import { TimePicker } from '@mui/x-date-pickers'
import { Controller, FieldValues } from 'react-hook-form'

import { PdvIcon } from '@Uikit/Icons/PdvIcon'

import FormError from '../Error/FormError'
import Input, { disabledStyles, inputVariants, TInput } from '../Input/Input'
import LabelField, { TLabelField } from '../Label/LabelField'

type TTimepicker<TFormValues extends FieldValues> = {
  errorClassName?: string
  labelPosition?: 'left' | 'top'
  className?: string
} & TInput<TFormValues> &
  TLabelField

const TimeField = <TFormValues extends FieldValues>(props: TTimepicker<TFormValues>) => {
  const { iconColor = 'primary-color', variant = 'outlined' } = props
  const selectedVariant = variant ? inputVariants[variant] : inputVariants.outlined

  return (
    <Controller
      control={props.form.control}
      name={props.name}
      render={({ field }) => {
        return (
          <TimePicker
            {...field}
            disabled={props?.inputProps?.disabled}
            components={{
              OpenPickerIcon: () => <PdvIcon name="TimeCircle" color={props?.inputProps?.disabled ? 'gray-200' : iconColor} />
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => {
              return (
                <div className={`inline-block ${props.className}`}>
                  <div className={`flex ${props?.labelPosition === 'left' ? 'flex-row gap-2' : 'flex-col gap-1'}`}>
                    <LabelField {...props} />
                    <div className={`${props?.inputProps?.disabled ? disabledStyles : ''}`}>
                      <div
                        className={`flex items-center overflow-hidden ${props?.inputProps?.disabled ? disabledStyles : selectedVariant}`}
                        ref={inputRef}
                      >
                        <div className="mr-4">{InputProps?.endAdornment}</div>
                        <Input
                          name={props.name}
                          form={props.form}
                          id={props.id}
                          inputProps={{ ...inputProps, className: `p-0 mt-px ${props?.inputProps?.className ?? ''}` }}
                          variant="transparent"
                        />
                      </div>
                    </div>
                  </div>
                  <FormError errorClassName={props.errorClassName} name={props.name} errors={props.form?.formState?.errors} />
                </div>
              )
            }}
          />
        )
      }}
    />
  )
}

export default TimeField
