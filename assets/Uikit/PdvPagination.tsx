import { useState } from 'react'

import { Pagination, PaginationItem } from '@mui/material'
import { TColors } from './Colors/TColors'

type TPdvPagination = {
  count: number
  page: number
  className?: string
  color?: TColors
  onChange?: (event: React.ChangeEvent<unknown>, value: number) => void
}

const PdvPagination: React.FC<TPdvPagination> = (props) => {
  const { color = 'primary-color' } = props
  return (
    <div className={`${props.className}`}>
      {props.count > 1 && (
        <Pagination
          count={props?.count}
          page={props?.page}
          shape="rounded"
          onChange={props?.onChange}
          renderItem={(item) => {
            const style = item.selected ? { backgroundColor: `var(--${color})`, color: 'var(--white' } : {}
            return <PaginationItem style={style} sx={{ fontFamily: 'var(--primary-font)', fontSize: 14 }} {...item} />
          }}
        />
      )}
    </div>
  )
}

export default PdvPagination

export const usePdvPagination = () => {
  const [page, setPage] = useState(1)

  const onChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return { page, onChange }
}
