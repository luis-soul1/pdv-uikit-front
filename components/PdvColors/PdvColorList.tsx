import { FC } from 'react'

import colors from '@Uikit/Colors/tailwindColors'

const PdvColorList: FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4 border border-black p-4">
      {Object.entries(colors).map(([key, value], index) => {
        if (typeof value === 'object') {
          return null
        }
        return (
          <div key={index} className="col-span-1">
            <div className={`mx-auto mt-2 h-16 w-16 rounded-full shadow-xl`} style={{ backgroundColor: value }}></div>
            <p className={`body1 mt-2 text-center`}>{key}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PdvColorList
