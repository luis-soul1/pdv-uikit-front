import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

const NavigationList = [{ title: 'PdvTabs', href: '/pdv-tabs' }]

const DataDiaplayList = [{ title: 'PdvDataTable', href: '/pdv-data-table' }]

const InputList = [
  { title: 'PdvButtons', href: '/pdv-buttons' },
  { title: 'InputField', href: '/pdv-input-field' },
  { title: 'SelectField', href: '/pdv-select-field' },
  { title: 'DateField', href: '/pdv-date-field' },
  { title: 'TimeField', href: '/pdv-time-field' },
  { title: 'CheckboxField', href: '/pdv-checkbox-field' },
  { title: 'RadioGroupField', href: '/pdv-radioGroup-field' },
  { title: 'AutocompleteField', href: '/pdv-autocomplete-field' }
]

const DashboardLayout: FC = (props) => {
  const { pathname } = useRouter()

  return (
    <div className="h-screen bg-white px-8 pb-8">
      <div className="flex items-center justify-between py-2">
        <h4>UIKIT</h4>
      </div>
      <hr />
      <div className="mt-8 grid grid-cols-[170px_1fr]" style={{ height: 'calc(100vh - 100px)' }}>
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
        </div>

        <div className="overflow-auto px-8" style={{ height: 'calc(100vh - 100px)' }}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
