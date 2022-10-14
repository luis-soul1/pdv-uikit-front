import { FC } from 'react'

const PdvTimeFieldApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TVariant = 'default' | 'outlined' | 'transparent'
  type TTimeField = {
    name: Path<TFormValues>
    form: UseFormReturn<TFormValues>
    className?: string
    muiTimePickerProps?: Partial<TimePickerProps<TInputPropsDate, TDate>>
    disabled?: boolean
    errorClassName?: string
    labelPosition?: 'left' | 'top'
    options?: RegisterOptions
    label?: string
    for?: string
    labelClassName?: string
    labelIcon?: TIconNames
    labelIconSize?: TIconSize
    labelIconcolor?: TColors
    withLabelIcon?: boolean
    id?: string
    variant?: TVariant
    theme?: TColors
    icon?: TIconNames
    iconColor?: TColors
    iconPosition?: 'left' | 'right'
    inputProps?: InputBaseComponentProps
    controlFields?: ControllerRenderProps<Record<string, string>, string>
    value?: string
  }
`}
    </pre>
  )
}

export default PdvTimeFieldApi
