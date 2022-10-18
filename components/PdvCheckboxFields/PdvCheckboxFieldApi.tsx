import { FC } from 'react'

const PdvCheckboxFieldApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TRadioGroupField = {
    name: Path<TFormValues>
    form: UseFormReturn<TFormValues>
    options?: RegisterOptions
    className?: string
    controlFields?: ControllerRenderProps<Record<string, string>, string>
    inputProps?: InputHTMLAttributes<HTMLInputElement>
    label?: string
    labelClassName?: string
    id?: string
  }
`}
    </pre>
  )
}

export default PdvCheckboxFieldApi
