import { FC } from 'react'

import PdvSkeleton from '@Uikit/PdvSkeleton'

const PdvSkeletonList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h2 className="mt-4">Rows</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <h4 className="mt-4 mb-2">3 Rows</h4>
          <PdvSkeleton rows={3} />
        </div>

        <div className="col-span-6">
          <h4 className="mt-4 mb-2">10 Rows</h4>
          <PdvSkeleton rows={10} />
        </div>
      </div>

      <h2 className="mt-4">Variants</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Text (Default)</h4>
          <PdvSkeleton />
        </div>

        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Circular</h4>
          <PdvSkeleton variant="circular" width={40} height={40} />
        </div>

        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Rectangular</h4>
          <PdvSkeleton variant="rectangular" />
        </div>
      </div>

      <h2 className="mt-4">Animations</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Wave (Default)</h4>
          <PdvSkeleton rows={4} />
        </div>

        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Pulse</h4>
          <PdvSkeleton rows={4} animation="pulse" />
        </div>

        <div className="col-span-4">
          <h4 className="mt-4 mb-2">False</h4>
          <PdvSkeleton rows={4} animation={false} />
        </div>
      </div>

      <h2 className="mt-4">Width and Height</h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Circular (Default 30x30)</h4>
          <PdvSkeleton variant="circular" />
        </div>

        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Circular 80x80</h4>
          <PdvSkeleton variant="circular" width={80} height={80} />
        </div>

        <div className="col-span-4">
          <h4 className="mt-4 mb-2">Rectangular 80x80</h4>
          <PdvSkeleton variant="rectangular" width={80} height={80} />
        </div>
      </div>
    </div>
  )
}

export default PdvSkeletonList
