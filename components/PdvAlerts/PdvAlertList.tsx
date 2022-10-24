import { FC } from 'react'

import PdvAlert from '@Uikit/PdvAlert'

const PdvAlertList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h1>Severity</h1>
      <div className="mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <h4>Info</h4>
          <PdvAlert>This is an info alert — check it out! (Default)</PdvAlert>
        </div>
        <div className="col-span-6">
          <h4>Error</h4>
          <PdvAlert severity="error">This is an error alert — check it out!</PdvAlert>
        </div>
        <div className="col-span-6">
          <h4>Success</h4>
          <PdvAlert severity="success">This is an success alert — check it out!</PdvAlert>
        </div>
        <div className="col-span-6">
          <h4>Warning</h4>
          <PdvAlert severity="warning">This is an warning alert — check it out!</PdvAlert>
        </div>
      </div>

      <h1 className="mt-6">Variant</h1>
      <div className="mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <h4>Standard</h4>
          <PdvAlert severity="warning">This variant standard alert — check it out! (default)</PdvAlert>
        </div>
        <div className="col-span-6">
          <h4>Outlined</h4>
          <PdvAlert severity="success" variant="outlined">
            This variant standard alert — check it out! (default)
          </PdvAlert>
        </div>
        <div className="col-span-6">
          <h4>Filled</h4>
          <PdvAlert severity="error" variant="filled">
            <h1>This is an variant filled alert with react element — check it out!</h1>
          </PdvAlert>
        </div>
      </div>
    </div>
  )
}

export default PdvAlertList
