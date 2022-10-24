import { FC, useState } from 'react'

import PdvButton from '@Uikit/PdvButton'
import PdvModal from '@Uikit/PdvModal'

const PdvModalList: FC = () => {
  const [modal, setModal] = useState<string>('')

  return (
    <div className="grid grid-cols-12 gap-4 border border-black p-4">
      <div className="col-span-4">
        <h4 className="mt-8">xs modal</h4>
        <PdvButton className="mt-4" onClick={() => setModal('xs')}>
          {'Abrir modal size="xs"'}
        </PdvButton>
        <PdvModal open={modal === 'xs'} size="xs" title="Modal xs">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </p>
        </PdvModal>
      </div>
      <div className="col-span-4">
        <h4 className="mt-8">sm modal (Default)</h4>
        <PdvButton className="mt-4" onClick={() => setModal('sm')}>
          {'Abrir modal size="sm"'}
        </PdvButton>
        <PdvModal open={modal === 'sm'} title="Modal sm">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </p>
        </PdvModal>
      </div>
      <div className="col-span-4">
        <h4 className="mt-8">md modal</h4>
        <PdvButton className="mt-4" onClick={() => setModal('md')}>
          {'Abrir modal size="md"'}
        </PdvButton>
        <PdvModal open={modal === 'md'} size="md" title="Modal md">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </p>
        </PdvModal>
      </div>
      <div className="col-span-4">
        <h4 className="mt-8">lg modal</h4>
        <PdvButton className="mt-4" onClick={() => setModal('lg')}>
          {'Abrir modal size="lg"'}
        </PdvButton>
        <PdvModal open={modal === 'lg'} size="lg" title="Modal lg">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </p>
        </PdvModal>
      </div>
      <div className="col-span-4">
        <h4 className="mt-8">fullScreen modal </h4>
        <PdvButton className="mt-4" onClick={() => setModal('fullScreen')}>
          {'Abrir modal fullScreen'}
        </PdvButton>
        <PdvModal fullScreen open={modal === 'fullScreen'} title="Modal fullScreen">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
            obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
          </p>
        </PdvModal>
      </div>
    </div>
  )
}

export default PdvModalList
