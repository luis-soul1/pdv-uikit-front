import { FC } from 'react'

const PdvSelectFieldApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TVariant = 'default' | 'outlined' | 'transparent'
  type TSelectField = {
    name: Path<TFormValues>
    form: UseFormReturn<TFormValues>
    optionValue: keyof TSelectOptions
    optionLabel: keyof TSelectOptions
    selectOptions: TSelectOptions[]
    options?: RegisterOptions
    id?: string
    variant?: 'default' | 'outlined'
    value?: string[] | string
    multiple?: boolean
    disabled?: boolean
    errorClassName?: string
    labelPosition?: 'left' | 'top'
    className?: string
  }
`}
    </pre>
  )
}

export default PdvSelectFieldApi
