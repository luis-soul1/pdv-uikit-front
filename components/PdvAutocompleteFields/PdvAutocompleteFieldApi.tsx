import { FC } from 'react'

const PdvAutocompleteFieldApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TVariant = 'default' | 'outlined' | 'transparent'
  type TOption = {
    label: string
    value: string
  }
  type TAutocompleteField = {
    name: Path<TFormValues>
    form: UseFormReturn<TFormValues>
    autocompleteOptions: TOption[]
    freeSolo?: boolean
    clearOnBlur?: boolean
    loading?: boolean
    loadingText?: string | ReactElement
    options?: RegisterOptions
    inputProps?: InputBaseComponentProps
    onInputChange?: UseAutocompleteProps<TFormValues, boolean, boolean, boolean>['onInputChange']
  }
`}
    </pre>
  )
}

export default PdvAutocompleteFieldApi
