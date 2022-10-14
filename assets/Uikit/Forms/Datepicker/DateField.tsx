import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Dayjs } from 'dayjs'
import { Controller, FieldValues } from 'react-hook-form'

import { PdvIcons } from '@Uikit/Icons/PdvIcons'

import FormError from '../Error/FormError'
import Input, { inputVariants, TInput, TVariant } from '../Input/Input'
import LabelField, { TLabelField } from '../Label/LabelField'

type TDatepicker<TFormValues extends FieldValues> = {
  className?: string
  viewType?: 'day' | 'month' | 'year'
  labelPosition?: 'left' | 'top'
  errorClassName?: string
  minDate?: Dayjs
  maxDate?: Dayjs
  disabled?: boolean
  shouldDisableYear?: (date: Dayjs) => boolean
  shouldDisableMonth?: (date: Dayjs) => boolean
  shouldDisableDate?: (date: Dayjs) => boolean
  variant?: TVariant
} & TInput<TFormValues> &
  TLabelField

const DateField = <TFormValues extends FieldValues>(props: TDatepicker<TFormValues>) => {
  const { viewType = 'day', variant = 'outlined' } = props
  const selectedVariant = variant ? inputVariants[variant] : inputVariants.outlined

  return (
    <Controller
      control={props.form.control}
      name={props.name}
      render={({ field }) => {
        return (
          <DatePicker
            {...field}
            views={[viewType]}
            shouldDisableYear={props?.shouldDisableYear}
            shouldDisableMonth={props?.shouldDisableMonth}
            shouldDisableDate={props?.shouldDisableDate}
            disabled={props?.disabled}
            minDate={props?.minDate}
            maxDate={props?.maxDate}
            components={{
              OpenPickerIcon: () => <PdvIcons name={props.icon ?? 'Calendar'} color={props.iconColor ?? 'primary-color'} />
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => {
              const disabledStyles = props?.disabled ? 'bg-gray-50 text-gray-400 border-gray-300 cursor-not-allowed' : ''

              return (
                <div className={`inline-block ${props.className}`}>
                  <div className={`flex gap-2 ${props?.labelPosition === 'left' ? 'flex-row gap-2' : 'flex-col gap-1'}`}>
                    <LabelField {...props} />
                    <div className={`${disabledStyles}`}>
                      <div className={`flex items-center overflow-hidden ${selectedVariant} ${disabledStyles}`} ref={inputRef}>
                        <div className="-ml-4 mr-4">{InputProps?.endAdornment}</div>
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

export default DateField
