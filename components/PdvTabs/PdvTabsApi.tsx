import { FC } from 'react'

const PdvTabsApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Component props:

  type TPdvTabs = {
	children: React.ReactElement<TTab>[] | React.ReactElement<TTab>
    tabsWidth?: 'full' | 'auto'
    tabsHeight?: TButtonSize
    className?: string
    color: TColors
    defaultSelectedTab?: string | number
  }

  type TTab = {
  tabText: string
    icon?: TIconNames
    iconSize?: number
    isTabHidden?: boolean
    href?: string
    asLink?: boolean
    isSelected?: boolean
    tabKey: string | number
    tabsWidth?: 'full' | 'auto'
    tabsHeight?: TButtonSize
    color?: TColors
    children?: React.ReactNode[] | React.ReactNode
    disabled?: boolean
    tooltip?: string
    tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
    onClick?: () => void
}
`}
    </pre>
  )
}

export default PdvTabsApi
