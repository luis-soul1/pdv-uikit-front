import { FC } from 'react'

import usePdvPagination from '@Uikit/hooks/usePdvPagination'
import PdvPagination from '@Uikit/PdvPagination'

const PdvPaginationList: FC = () => {
  const pagination = usePdvPagination()

  return (
    <div className="border border-black p-4">
      <h2 className="mt-4">Default Paginación</h2>
      <PdvPagination className="mt-4 flex justify-center" count={12} page={pagination.page} onChange={pagination.onChange} />

      <h2 className="mt-8">Custom color Paginación</h2>
      <PdvPagination className="mt-4 flex justify-end" count={12} page={pagination.page} color="blue-400" onChange={pagination.onChange} />
    </div>
  )
}

export default PdvPaginationList
