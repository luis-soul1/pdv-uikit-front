import { FC } from 'react'

import PdvButton from '@Uikit/PdvButton'
import PdvTopHeaderCard from '@Uikit/PdvTopHeaderCard'

const PdvTopHeaderCardList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h4 className="mt-8 text-indigo-700">{'borderType="rounded-t-xl" y titulo en string'}</h4>
      <PdvTopHeaderCard className="mt-2" headerColor="indigo-700" title={'Abril'} titleColor="red-300">
        <PdvButton color="blue-400" className="m-2">
          Ver informe
        </PdvButton>
      </PdvTopHeaderCard>

      <h4 className="mt-4 text-indigo-700">{'borderType="rounded-t-none" y titulo React element'}</h4>
      <PdvTopHeaderCard className="mt-2" borderType="rounded-t-none" headerColor="indigo-700" title={<p className="text-white">Titulo</p>}>
        <PdvButton color="blue-400" className="m-2">
          Ver informe
        </PdvButton>
      </PdvTopHeaderCard>
    </div>
  )
}

export default PdvTopHeaderCardList
