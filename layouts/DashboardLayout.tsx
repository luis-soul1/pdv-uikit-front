import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

const InputList = [
  { title: 'PdvButtons', href: '/pdv-buttons' },
  { title: 'PdvDropdown', href: '/pdv-dropdown' },
  { title: 'PdvSwitch', href: '/pdv-switch' },
  { title: 'InputField', href: '/pdv-input-field' },
  { title: 'AutocompleteField', href: '/pdv-autocomplete-field' },
  { title: 'SelectField', href: '/pdv-select-field' },
  { title: 'DateField', href: '/pdv-date-field' },
  { title: 'TimeField', href: '/pdv-time-field' },
  { title: 'RadioGroupField', href: '/pdv-radioGroup-field' },
  { title: 'CheckboxField', href: '/pdv-checkbox-field' }
]

const NavigationList = [
  { title: 'PdvTabs', href: '/pdv-tabs' },
  { title: 'PdvPagination', href: '/pdv-pagination' }
]

const DataDiaplayList = [
  { title: 'PdvDataTable', href: '/pdv-data-table' },
  { title: 'PdvPillBox', href: '/pdv-pillbox' },
  { title: 'PdvTooltip', href: '/pdv-tooltip' },
  { title: 'PdvIcon', href: '/pdv-icons' }
]

const FeedbackList = [
  { title: 'PdvModal', href: '/pdv-modal' },
  { title: 'PdvAlert', href: '/pdv-alert' }
]

const SurfacesList = [
  { title: 'PdvSimpleAccordion', href: '/pdv-simple-accordion' },
  { title: 'PdvMultipleAccordion', href: '/pdv-multiple-accordion' }
]

const customList = [
  { title: 'PdvGallery', href: '/pdv-gallery' },
  { title: 'PdvLeftHeaderCard', href: '/pdv-left-header-card' },
  { title: 'PdvTopHeaderCard', href: '/pdv-top-header-card' },
  { title: 'PdvProgressBar', href: '/pdv-progress-bar' }
]

const assetsList = [
  { title: 'PdvTypography', href: '/pdv-typography' },
  { title: 'PdvColors', href: '/pdv-colors' },
  { title: 'PdvCardContainer', href: '/pdv-card-container' },
  { title: 'PdvSkeleton', href: '/pdv-skeleton' },
  { title: 'PdvLoader', href: '/pdv-loader' },
  { title: 'PdvDivider', href: '/pdv-divider' }
]

const DashboardLayout: FC = (props) => {
  const { pathname } = useRouter()

  return (
    <div className="h-screen bg-white px-8 pb-8">
      <div className="flex items-center justify-between py-2">
        <h4>UIKIT</h4>
      </div>
      <hr />
      <div className="mt-8 grid grid-cols-[200px_1fr]" style={{ height: 'calc(100vh - 100px)' }}>
        <div className="overflow-auto border-r border-gray-200" style={{ height: 'calc(100vh - 100px)' }}>
          <h5 className="my-2">Input</h5>
          {InputList.map((option) => {
            return (
              <Link key={option.title} href={option.href} passHref>
                <p
                  className={`subtitle1  my-1 cursor-pointer rounded-l-2xl py-2 pl-4 ${
                    pathname === option.href ? 'bg-black text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {option.title}
                </p>
              </Link>
            )
          })}
          <h5 className="my-2">Navigation</h5>
          {NavigationList.map((option) => {
            return (
              <Link key={option.title} href={option.href} passHref>
                <p
                  className={`subtitle1  my-1 cursor-pointer rounded-l-2xl py-2 pl-4 ${
                    pathname === option.href ? 'bg-black text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {option.title}
                </p>
              </Link>
            )
          })}
          <h5 className="my-2">Data display</h5>
          {DataDiaplayList.map((option) => {
            return (
              <Link key={option.title} href={option.href} passHref>
                <p
                  className={`subtitle1  my-1 cursor-pointer rounded-l-2xl py-2 pl-4 ${
                    pathname === option.href ? 'bg-black text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {option.title}
                </p>
              </Link>
            )
          })}
          <h5 className="my-2">Feedback</h5>
          {FeedbackList.map((option) => {
            return (
              <Link key={option.title} href={option.href} passHref>
                <p
                  className={`subtitle1  my-1 cursor-pointer rounded-l-2xl py-2 pl-4 ${
                    pathname === option.href ? 'bg-black text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {option.title}
                </p>
              </Link>
            )
          })}
          <h5 className="my-2">Surfaces</h5>
          {SurfacesList.map((option) => {
            return (
              <Link key={option.title} href={option.href} passHref>
                <p
                  className={`subtitle1  my-1 cursor-pointer rounded-l-2xl py-2 pl-4 ${
                    pathname === option.href ? 'bg-black text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {option.title}
                </p>
              </Link>
            )
          })}

          <h5 className="my-2">Custom</h5>
          {customList.map((option) => {
            return (
              <Link key={option.title} href={option.href} passHref>
                <p
                  className={`subtitle1  my-1 cursor-pointer rounded-l-2xl py-2 pl-4 ${
                    pathname === option.href ? 'bg-black text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {option.title}
                </p>
              </Link>
            )
          })}

          <h5 className="my-2">Assets</h5>
          {assetsList.map((option) => {
            return (
              <Link key={option.title} href={option.href} passHref>
                <p
                  className={`subtitle1  my-1 cursor-pointer rounded-l-2xl py-2 pl-4 ${
                    pathname === option.href ? 'bg-black text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {option.title}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="overflow-auto px-8" style={{ height: 'calc(100vh - 100px)' }}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
