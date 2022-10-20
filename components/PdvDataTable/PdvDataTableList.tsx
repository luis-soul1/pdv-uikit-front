import { FC } from 'react'

import { PdvIcon } from '@Uikit/Icons/PdvIcon'
import PdvDatatable, { IColumns } from '@Uikit/PdvDatatable'
import PdvPillBox from '@Uikit/PdvPillBox'
import { demoData } from 'utils/demoData'

export interface ITeachingType {
  id: number
  code: string
  name: string
  description: string | null
  type_teaching_level_id?: unknown
  TypesTeachingsCategories?: unknown
  active: boolean
}

const PdvDataTableList: FC = () => {
  const columns: IColumns<ITeachingType>[] = [
    {
      name: 'Código',
      dataIndex: 'code'
    },
    {
      name: 'Nombre',
      dataIndex: 'name',
      render: (value) => value,
      filterable: true,
      width: '20px'
    },
    {
      name: 'Descripción',
      dataIndex: 'description',
      render: (value) => value,
      filterable: true
    },
    {
      name: 'Status',
      dataIndex: 'active',
      align: 'center',
      width: '100%',
      render: (value) => {
        const text = value ? 'Activo' : 'Desactivado'
        const textColor = value ? 'teal-600' : 'gray-400'
        const bgColor = value ? 'esmerald-100' : 'gray-100'
        const icon = value ? 'TickSquare' : 'Hide'

        return (
          <PdvPillBox color={bgColor} textColor={textColor} borderType="rounded-md">
            <div className="flex items-center justify-center">
              <PdvIcon name={icon} color={textColor} className="mr-2" />
              <span className="subtitle2" style={{ color: `var(--${textColor})` }}>
                {text}
              </span>
            </div>
          </PdvPillBox>
        )
      }
    }
  ]

  return <PdvDatatable className="my-4" dataSource={demoData} columns={columns} />
}

export default PdvDataTableList
