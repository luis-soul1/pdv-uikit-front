import { FC } from 'react'

const PdvRadioGroupFieldApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TRadioGroupField = {
    name: Path<TFormValues>
    form: UseFormReturn<TFormValues>
    defaultValue: string
    options?: RegisterOptions
    radioOptions: TRadio[]
    divider?: boolean
    alignment?: 'horizontal' | 'vertical'
    color?: TColors
    textColor?: TColors
  }
`}
    </pre>
  )
}

export default PdvRadioGroupFieldApi
