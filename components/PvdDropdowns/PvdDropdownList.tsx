import { FC } from 'react'

import PdvDropdown from '@Uikit/PdvDropdown'

const PvdDropdownList: FC = () => {
  return (
    <div className="flex flex-col gap-4 border border-black p-4">
      <h1 className="text-black">Variants</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Contained</h4>
          <PdvDropdown title="Contained (Default)">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Outlined</h4>
          <PdvDropdown title="Outlined" variant="outlined">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Default</h4>
          <PdvDropdown title="Default" variant="default">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
      </div>

      <h1 className="text-black">Sizes</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Small</h4>
          <PdvDropdown title="Small" size="small">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Medium</h4>
          <PdvDropdown title="Medium (Default)">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Large</h4>
          <PdvDropdown title="Large" size="large">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
      </div>

      <h1 className="text-black">Rounded</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Small</h4>
          <PdvDropdown title="Small (Default)">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Medium</h4>
          <PdvDropdown title="Medium" rounded="medium">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Large</h4>
          <PdvDropdown title="Large" rounded="large">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
        <div className="col-span-4">
          <h4 className="mb-1 text-black">Full</h4>
          <PdvDropdown title="Full" rounded="full">
            <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
            <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
          </PdvDropdown>
        </div>
      </div>
      <div className="col-span-4">
        <h4 className="mb-1 text-black">None</h4>
        <PdvDropdown title="None" rounded="none">
          <PdvDropdown.Item onClick={() => console.info('test')}>Editar</PdvDropdown.Item>
          <PdvDropdown.Item onClick={() => console.info('test')}>Cambiar estado</PdvDropdown.Item>
        </PdvDropdown>
      </div>
    </div>
  )
}

export default PvdDropdownList
