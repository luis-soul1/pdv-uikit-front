import PdvProgressBar from '@Uikit/PdvProgressBar'
import { FC } from 'react'

const PdvProgressBarList: FC = () => {
  return (
    <div className="border border-black p-4">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-6">
          <h4 className="mt-8 mb-2 text-indigo-700">Type: default</h4>
          <PdvProgressBar percent={100} />
        </div>
        <div className="col-span-6">
          <h4 className="mt-8 mb-2 text-indigo-700">Type: circle</h4>
          <PdvProgressBar className="mt-4" percent={100} type="circle" />
        </div>
      </div>

      <h4 className="mt-8 mb-2 text-indigo-700">Con custom color</h4>
      <PdvProgressBar percent={25} color="orange-700" strokeColor="orange-100" />

      <h4 className="mt-8 mb-2 text-indigo-700">Type: circle</h4>
      <PdvProgressBar className="mt-4" percent={80} type="circle" color="fuchsia-400" />
    </div>
  )
}

export default PdvProgressBarList
