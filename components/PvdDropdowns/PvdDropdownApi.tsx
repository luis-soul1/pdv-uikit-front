import { FC } from 'react'

const PvdDropdownApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvDropdown = {
    title: string
    className?: string
    variant?: TButtonVariant
    color?: TColors
    size?: TButtonSize
    children: React.ReactElement<TItem>[] | React.ReactElement<TItem>
    onClick?: () => void
  }

  type TDropdownItems = {
    Item: React.FC<TItem>
  }
      `}
    </pre>
  )
}

export default PvdDropdownApi
