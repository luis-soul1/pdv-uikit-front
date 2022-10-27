import { FC } from 'react'

import PdvLeftHeaderCard from '@Uikit/PdvLeftHeaderCard'

const PdvShadowList: FC = () => {
  return (
    <div className="w-full gap-4 border border-black p-4 py-20">
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <div>
          <PdvLeftHeaderCard className="mt-2 w-80 shadow-small" headerSize="half">
            <div className="p-3">
              <h6 className="text-purple-500">Shadow SM</h6>
              <p className="subtitle1">LEE401</p>
              <p className="subtitle1">12:00 - 13:00</p>
            </div>
          </PdvLeftHeaderCard>
        </div>
        <div>
          <PdvLeftHeaderCard className="mt-2 w-80 shadow-medium" headerSize="half">
            <div className="p-3">
              <h6 className="text-purple-500">Shadow MD</h6>
              <p className="subtitle1">LEE401</p>
              <p className="subtitle1">12:00 - 13:00</p>
            </div>
          </PdvLeftHeaderCard>
        </div>
        <div>
          <PdvLeftHeaderCard className="mt-2 w-80 shadow-large" headerSize="half">
            <div className="p-3">
              <h6 className="text-purple-500">Shadow LG</h6>
              <p className="subtitle1">LEE401</p>
              <p className="subtitle1">12:00 - 13:00</p>
            </div>
          </PdvLeftHeaderCard>
        </div>
      </div>
    </div>
  )
}

export default PdvShadowList
