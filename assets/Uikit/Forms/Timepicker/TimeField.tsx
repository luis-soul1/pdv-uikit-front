import { TimePickerProps, TimePicker } from '@mui/x-date-pickers'
import { Controller, FieldValues } from 'react-hook-form'

import { PdvIcons } from '@Uikit/Icons/PdvIcons'

import FormError from '../Error/FormError'
import Input, { disabledStyles, inputVariants, TInput } from '../Input/Input'
import LabelField, { TLabelField } from '../Label/LabelField'

type TTimepicker<TFormValues extends FieldValues> = {
  disabled?: boolean
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
            disabled={props.disabled}
            components={{
              OpenPickerIcon: () => <PdvIcons name="TimeCircle" color={props.disabled ? 'gray-200' : iconColor} />
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => {
              return (
                <div className={`inline-block ${props.className}`}>
                  <div className={`flex ${props?.labelPosition === 'left' ? 'flex-row gap-2' : 'flex-col gap-1'}`}>
                    <LabelField {...props} />
                    <div className={`${props?.disabled ? disabledStyles : ''}`}>
                      <div className={`flex items-center overflow-hidden ${props?.disabled ? disabledStyles : selectedVariant}`} ref={inputRef}>
                        <div className="mr-4">{InputProps?.endAdornment}</div>
                        <Input
                          name={props.name}
                          form={props.form}
                          id={props.id}
                          inputProps={{ ...inputProps, className: 'pl-0' }}
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
