import { FC } from 'react'

import { useForm } from 'react-hook-form'

import InputField from '@Uikit/Forms/Input/InputField'
import TextAreaField from '@Uikit/Forms/TextArea/TextareaField'

const PdvInputFieldList: FC = () => {
  const form = useForm()

  return (
    <div className="border border-black p-4">
      <h1 className="text-black">Variants</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <InputField name="outlined_variant" label="Outlined variant" className="col-span-4" form={form} />
        <InputField name="default_variant" variant="default" label="Default variant" className="col-span-4" form={form} />
        <InputField name="transparent_variant" variant="transparent" label="Transparent variant" className="col-span-4" form={form} />
      </div>

      <h1 className="mt-4 text-black">Label Options</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <InputField name="Top_label" label="Top label (Default)" className="col-span-4" form={form} />
        <InputField name="left_label" label="Left label" labelPosition="left" className="col-span-4" form={form} />
        <InputField name="label_with_icon" label="With icon label" variant="default" className="col-span-4" form={form} withLabelIcon />
      </div>

      <h1 className="mt-4 text-black">Icon Options</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <InputField name="left_icon_outlined" label="Left icon (Default)" icon="Work" className="col-span-6" form={form} />
        <InputField name="right_icon_outlined" label="Right icon" icon="Document" iconPosition="right" className="col-span-6" form={form} />
        <InputField name="left_icon_default" variant="default" label="Left icon (Default)" icon="Work" className="col-span-6" form={form} />
        <InputField
          name="right_icon_default"
          variant="default"
          label="Right icon"
          icon="Document"
          iconPosition="right"
          className="col-span-6"
          form={form}
        />
        <InputField name="left_icon_transparent" variant="transparent" label="Left icon (Default)" icon="Work" className="col-span-6" form={form} />
        <InputField
          name="right_icon_transparent"
          variant="transparent"
          label="Right icon"
          icon="Document"
          iconPosition="right"
          className="col-span-6"
          form={form}
        />
      </div>

      <h1 className="mt-4 text-black">Disabled</h1>
      <div className="grid grid-cols-12 items-center gap-4">
        <InputField name="disabled_outlined" label="Left icon (Default)" className="col-span-4" form={form} inputProps={{ disabled: true }} />
        <InputField
          name="disabled_outlined"
          label="Right icon"
          iconPosition="right"
          className="col-span-4"
          form={form}
          inputProps={{ disabled: true }}
        />
        <InputField
          name="disabled_default"
          variant="default"
          label="Left icon (Default)"
          className="col-span-4"
          form={form}
          inputProps={{ disabled: true }}
        />
      </div>

      <h1 className="mt-4 text-black">Icon Options</h1>
      <div className="grid grid-cols-12 gap-4">
        <TextAreaField textareaProps={{ rows: 4 }} name="outlined_variant" label="Outlined variant" className="col-span-4" form={form} />
        <TextAreaField
          textareaProps={{ rows: 4 }}
          name="default_variant"
          variant="default"
          label="Default variant"
          className="col-span-4"
          form={form}
        />
        <TextAreaField
          textareaProps={{ rows: 4 }}
          name="transparent_variant"
          variant="transparent"
          label="Transparent variant"
          className="col-span-4"
          form={form}
        />
      </div>
    </div>
  )
}

export default PdvInputFieldList
