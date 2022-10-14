import { SyntheticEvent, ReactElement } from 'react'
import { InputBaseComponentProps } from '@mui/material/InputBase'

import Autocomplete from '@mui/material/Autocomplete'
import { AutocompleteValue, UseAutocompleteProps } from '@mui/material/useAutocomplete'
import { Controller, FieldValues, Path, PathValue, RegisterOptions, UseFormReturn } from 'react-hook-form'

import { ForwardedInput, TVariant } from '../Input/Input'
import { TColors } from '@Uikit/Colors/TColors'

export type TOption = {
  label: string
  value: string
}
export type TAutocomplete<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  form: UseFormReturn<TFormValues>
  autocompleteOptions: TOption[]
  freeSolo?: boolean
  clearOnBlur?: boolean
  loading?: boolean
  loadingText?: string | ReactElement
  options?: RegisterOptions
  inputProps?: InputBaseComponentProps
  variant?: TVariant
  iconColor?: TColors
  onInputChange?: UseAutocompleteProps<TFormValues, boolean, boolean, boolean>['onInputChange']
}

const AutocompleteField = <TFormValues extends FieldValues>(props: TAutocomplete<TFormValues>) => {
  const { iconColor = 'primary-color' } = props

  return (
    <Controller
      name={props.name}
      control={props.form.control}
      rules={props.options}
      render={({ field }) => {
        const { value, onChange: controllerOnChange, ...restFields } = field
        const onChange = (
          event: SyntheticEvent<Element, Event>,
          value: AutocompleteValue<TOption, PathValue<TFormValues, Path<TFormValues>>, undefined, true>
        ) => {
          controllerOnChange(value)
          if (props?.options?.onChange) props.options.onChange(value)
        }
        return (
          <Autocomplete
            id={props.name}
            value={value}
            onChange={(e, value) => onChange(e, value)}
            {...restFields}
            onInputChange={props?.onInputChange}
            freeSolo={Boolean(props?.freeSolo)}
            loading={Boolean(props?.loading)}
            loadingText="Cargando..."
            clearOnBlur={Boolean(props?.clearOnBlur)}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            noOptionsText="No se encontraron resultados"
            getOptionLabel={(option) => option.label}
            options={props.autocompleteOptions}
            sx={{ '&.Mui-focused .MuiInput-root': { border: 0 } }}
            renderInput={({ InputProps: { ref: anchorListRef }, inputProps: muiInputProps }) => (
              <div ref={anchorListRef} className="shadow-16 mt-4 max-w-xs">
                <ForwardedInput
                  id={props.name}
                  icon="Search"
                  iconColor={iconColor}
                  inputProps={{ ...muiInputProps, disabled: props?.inputProps?.disabled }}
                  variant={props?.variant}
                />
              </div>
            )}
          />
        )
      }}
    />
  )
}
export default AutocompleteField
