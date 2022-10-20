import { FC } from 'react'

import PdvDivider from '@Uikit/PdvDivider'

const PdvDividerList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h1 className="text-black">Orientation</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <h4 className="text-black">Horizontal (default)</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate tenetur culpa cumque est illo praesentium unde vel incidunt
            beatae rem repellendus debitis totam aliquam eum temporibus, excepturi quaerat porro.
          </p>
          <PdvDivider />
        </div>
        <div className="col-span-6">
          <h4 className="text-black">Vertical</h4>
          <div className="h-20">
            <PdvDivider orientation="vertical" />
          </div>
        </div>
      </div>
      <h1 className="mt-6 text-black">Variant</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h4 className="text-black">Fullwidth (Default)</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate tenetur culpa cumque est illo praesentium unde vel incidunt
            beatae rem repellendus debitis totam aliquam eum temporibus, excepturi quaerat porro.
          </p>
          <PdvDivider />
        </div>
        <div className="col-span-4">
          <h4 className="text-black">Inset</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate tenetur culpa cumque est illo praesentium unde vel incidunt
            beatae rem repellendus debitis totam aliquam eum temporibus, excepturi quaerat porro.
          </p>
          <div className="h-20">
            <PdvDivider variant="inset" />
          </div>
        </div>
        <div className="col-span-4">
          <h4 className="text-black">Middle</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate tenetur culpa cumque est illo praesentium unde vel incidunt
            beatae rem repellendus debitis totam aliquam eum temporibus, excepturi quaerat porro.
          </p>
          <div className="h-20">
            <PdvDivider variant="middle" />
          </div>
        </div>
      </div>

      <h1 className="mt-6 text-black">Text align</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h4 className="text-black">Center (Default)</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate tenetur culpa cumque est illo praesentium unde vel incidunt
            beatae rem repellendus debitis totam aliquam eum temporibus, excepturi quaerat porro.
          </p>
          <div className="h-20">
            <PdvDivider>Text</PdvDivider>
          </div>
        </div>
        <div className="col-span-4">
          <h4 className="text-black">Center (Default)</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate tenetur culpa cumque est illo praesentium unde vel incidunt
            beatae rem repellendus debitis totam aliquam eum temporibus, excepturi quaerat porro.
          </p>
          <div className="h-20">
            <PdvDivider textAlign="left">Text</PdvDivider>
          </div>
        </div>
        <div className="col-span-4">
          <h4 className="text-black">Center (Default)</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate tenetur culpa cumque est illo praesentium unde vel incidunt
            beatae rem repellendus debitis totam aliquam eum temporibus, excepturi quaerat porro.
          </p>
          <div className="h-20">
            <PdvDivider textAlign="right">Text</PdvDivider>
          </div>
        </div>
      </div>

      <h1 className="mt-6 text-black">Custom</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <h4 className="text-black">Light</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate tenetur culpa cumque est illo praesentium unde vel incidunt
            beatae rem repellendus debitis totam aliquam eum temporibus, excepturi quaerat porro.
          </p>
          <PdvDivider light />
        </div>
        <div className="col-span-6">
          <h4 className="text-black">ClassName</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate tenetur culpa cumque est illo praesentium unde vel incidunt
            beatae rem repellendus debitis totam aliquam eum temporibus, excepturi quaerat porro.
          </p>
          <div className="h-20">
            <PdvDivider className="mt-8 h-8 bg-blue-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PdvDividerList
