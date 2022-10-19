import PdvLeftHeaderCard from '@Uikit/PdvLeftHeaderCard'
import { FC } from 'react'

const PdvLeftHeaderCardList: FC = () => {
  return (
    <div className="border border-black p-4">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6">
          <h4 className="mt-8 text-indigo-700">{'Header size "small"'}</h4>
          <PdvLeftHeaderCard className="mt-2 w-full">
            <div className="p-3">
              <h6 className="text-purple-500">LEE401</h6>
              <p className="subtitle1">LEE401</p>
              <p className="subtitle1">12:00 - 13:00</p>
            </div>
          </PdvLeftHeaderCard>
        </div>
        <div className="col-span-6">
          <h4 className="mt-8 text-indigo-700">{'Header size "medium" y titulo'}</h4>
          <PdvLeftHeaderCard className="mt-2 w-full" title="45" headerSize="medium">
            <div className="p-3">
              <h6 className="text-purple-500">LEE401</h6>
              <p className="subtitle1">LEE401</p>
              <p className="subtitle1">12:00 - 13:00</p>
            </div>
          </PdvLeftHeaderCard>
        </div>
        <div className="col-span-6">
          <h4 className="mt-8 text-indigo-700">{'Header size "large", titulo con color'}</h4>
          <PdvLeftHeaderCard className="mt-2 w-full" title="45" titleColor="red-500" headerSize="large" headerColor="green-400">
            <div className="p-3">
              <h6 className="text-purple-500">LEE401</h6>
              <p className="subtitle1">LEE401</p>
              <p className="subtitle1">12:00 - 13:00</p>
            </div>
          </PdvLeftHeaderCard>
        </div>
        <div className="col-span-6">
          <h4 className="mt-8 text-indigo-700">{'Header size "large" y titulo conmo React Element'}</h4>
          <PdvLeftHeaderCard className="mt-2 w-full" headerSize="half" title={<h6 className="text-white">Puntaje NEM</h6>}>
            <div className="p-6">
              <h1 className="hi__md text-center text-orange-600">564</h1>
            </div>
          </PdvLeftHeaderCard>
        </div>
      </div>
    </div>
  )
}

export default PdvLeftHeaderCardList
