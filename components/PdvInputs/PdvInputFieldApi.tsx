import { FC } from 'react'

const PdvInputFieldApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TVariant = 'default' | 'outlined' | 'transparent'
  type TInputField = {
    id?: string
    variant?: TVariant
    theme?: TColors
    icon?: TIconNames
    iconColor?: TColors
    withLabelIcon?: boolean
    iconPosition?: 'left' | 'right'
    inputProps?: InputBaseComponentProps
    controlFields?: ControllerRenderProps<Record<string, string>, string>
    value?: string
    errorClassName?: string
    labelPosition?: 'left' | 'top'
    className?: string
    name: Path<TFormValues>
    form: UseFormReturn<TFormValues>
    options?: RegisterOptions
  }
`}
    </pre>
  )
}

export default PdvInputFieldApi
