import { FC, useMemo } from 'react'

import { useForm } from 'react-hook-form'

import InputField from '@Uikit/Forms/Input/InputField'
import { MuiIconsList } from '@Uikit/Icons/MuiIcons'
import { PdvIcon } from '@Uikit/Icons/PdvIcon'
import { iconNames, TIconNames } from '@Uikit/Icons/TIconNames'
import { useCopyToClipboard } from 'hooks/useCopyToClipboard'

const PdvIconList: FC = () => {
  const { clipboard } = useCopyToClipboard()
  const form = useForm()
  const filterWord = form.watch('filter') ? form.watch('filter').toString().toLowerCase() : form.watch('filter')

  const filteredIcon = useMemo(() => {
    const icons = [...iconNames, ...Object.keys(MuiIconsList)] as TIconNames[]
    if (!filterWord) return icons
    return icons.filter((name: TIconNames) => name.toString().toLowerCase().includes(filterWord)) as TIconNames[]
  }, [filterWord])

  return (
    <div className="border border-black p-4">
      <InputField
        name={'filter'}
        label={'Filtra por nombre o palabra clave'}
        labelClassName="mt-4"
        inputProps={{ placeholder: 'Filtra por nombre del icono', className: 'w-full' }}
        form={form}
      />

      <p className="mt-4 font-bold">Hacer click en el icono para copiarlo en el portapapeles.</p>

      <p className="mt-4 font-bold">Iconos de la libreria Iconly</p>
      <div className="mt-8 grid grid-cols-12 gap-4">
        {filteredIcon.map((name: TIconNames, index: number) => {
          return (
            <div
              key={name + index}
              className="col-span-2 mb-4 cursor-pointer rounded-2xl border border-gray-400 text-center"
              onClick={() => clipboard(`<PdvIcon name='${name}' />`)}
            >
              <div className={'flex h-16 items-center justify-center'}>
                <PdvIcon name={name} color="gray-300" />
              </div>
              <p className={'mb-0 w-full truncate rounded-b-2xl bg-green-600 p-3 text-white'} title={name}>
                {name}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PdvIconList
