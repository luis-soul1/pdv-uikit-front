import { FC } from 'react'

const PdvDateFieldApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TVariant = 'default' | 'outlined' | 'transparent'
  type TDateField = {
     name: Path<TFormValues>
    form: UseFormReturn<TFormValues>
    label?: string
    for?: string
    labelClassName?: string
    labelIcon?: TIconNames
    labelIconSize?: TIconSize
    labelIconcolor?: TColors
    withLabelIcon?: boolean
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
    variant?: TDateVariant
    options?: RegisterOptions
  }
`}
    </pre>
  )
}

export default PdvDateFieldApi
