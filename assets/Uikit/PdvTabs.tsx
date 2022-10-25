import { useState, Children, cloneElement, useEffect } from 'react'

import { TColors } from '@Uikit/Colors/TColors'
import { PdvIcon } from '@Uikit/Icons/PdvIcon'
import { TIconNames } from '@Uikit/Icons/TIconNames'
import PdvButton, { TButtonSize } from '@Uikit/PdvButton'
import PdvTooltip, { PdvTooltipPlacements } from '@Uikit/PdvTooltip'

type TPdvTabs = {
  children: React.ReactElement<TTab>[] | React.ReactElement<TTab>
  tabsWidth?: 'full' | 'auto'
  tabsHeight?: TButtonSize
  className?: string
  color: TColors
  defaultSelectedTab?: string | number
}

type TPdvTab = {
  Tab: React.FC<TTab>
}

const PdvTabs: React.FC<TPdvTabs> & TPdvTab = (props) => {
  const { tabsWidth = 'auto', tabsHeight } = props
  const firstTab = Children.toArray(props.children)[0] as React.ReactElement<TTab>

  const [selectedTab, setSelectedTab] = useState<string | number>(props.defaultSelectedTab ?? firstTab.props.tabKey)
  const changeActiveTab = (tabKey: string | number) => setSelectedTab(tabKey)

  let selectedTabContent: React.ReactNode | undefined = undefined

  useEffect(() => {
    if (props.defaultSelectedTab) changeActiveTab(props.defaultSelectedTab)
  }, [props.defaultSelectedTab])

  return (
    <div className={props.className ?? ''}>
      <div className={`overflow-hidden rounded-xl bg-gray-25  ${tabsWidth === 'full' ? 'w-full p-1' : 'inline whitespace-nowrap'}`}>
        <div className={`slider items-center rounded-xl `}>
          <div className={`flex gap-2 ${tabsWidth === 'full' ? 'w-full' : ''} items-center rounded-xl bg-gray-25 p-2`}>
            {Children.map(props.children, (child: React.ReactElement<TTab>) => {
              const { children, ...restTabProps } = child.props as TTab

              if (selectedTab === restTabProps.tabKey) selectedTabContent = children

              const onTabClick = () => {
                changeActiveTab(restTabProps.tabKey)
                restTabProps?.onClick && restTabProps.onClick()
              }

              const tabProps = {
                ...restTabProps,
                isSelected: selectedTab === restTabProps.tabKey,
                onClick: onTabClick,
                color: restTabProps.color ? restTabProps.color : props.color,
                tabsWidth,
                tabsHeight
              }

              if (child && child.type === Tab)
                return <div className={`${props.tabsWidth === 'full' ? 'w-full grow' : ''} `}>{cloneElement(child, tabProps)}</div>
            })}
          </div>
        </div>
      </div>
      <div className="mt-4">{selectedTabContent && selectedTabContent}</div>
    </div>
  )
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
  tooltipColor?: TColors
  tooltipTextColor?: TColors
  onClick?: () => void
}

const Tab: React.FC<TTab> = (props) => {
  const selectedVariant = props.isSelected ? 'contained' : 'default'
  const selectedTheme = selectedVariant.includes('default') ? 'gray-500' : props.color ?? 'primary-color'

  return (
    <TooltipWrapper text={props.tooltip} placement={props.tooltipPlacement} color={props.tooltipColor} textColor={props.tooltipTextColor}>
      <PdvButton
        asLink={props.asLink}
        href={props.href}
        color={selectedTheme}
        variant={selectedVariant}
        size={props.tabsHeight ?? 'medium'}
        className={`${props.tabsHeight?.includes('small') ? 'px-4' : 'px-10'} ${props.tabsWidth === 'full' ? 'w-full' : ''} ${
          props.isSelected ? 'shadow-md' : ''
        }`}
        onClick={props.onClick}
        icon={props?.icon && <PdvIcon name={props.icon} color={props.isSelected ? 'white' : 'gray-500'} size={props?.iconSize} />}
        disabled={props.disabled}
      >
        {props.tabText}
      </PdvButton>
    </TooltipWrapper>
  )
}

PdvTabs.Tab = Tab

type TooltipWrapperProps = {
  children: React.ReactElement
  text?: string
  placement?: PdvTooltipPlacements
  color?: TColors
  textColor?: TColors
}

const TooltipWrapper = (props: TooltipWrapperProps) => {
  const { placement = 'top' } = props
  if (!props.text) return <>{props.children}</>

  return (
    <PdvTooltip title={props.text} placement={placement} color={props.color ?? 'gray-25'} textColor={props.textColor ?? 'gray-500'}>
      <span className="subtitle2">{props.children}</span>
    </PdvTooltip>
  )
}

export default PdvTabs
