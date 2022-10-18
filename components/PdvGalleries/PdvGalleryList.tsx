import PdvGallery, { PdvGalleryItem } from '@Uikit/PdvGallery'
import PdvLeftHeaderCard from '@Uikit/PdvLeftHeaderCard'
import PdvProgressBar from '@Uikit/PdvProgressBar'
import PdvTopHeaderCard from '@Uikit/PdvTopHeaderCard'
import { FC } from 'react'

const PdvGalleryList: FC = () => {
  return (
    <div className="border border-black p-4">
      <h1 className="col-span-12">Lista de variantes del PDV gallery</h1>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-6">
          <h4 className="mt-8 text-indigo-700">Gallery horizontal</h4>
          <PdvGallery>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center px-3 py-12">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center p-3">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center px-3 py-12">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center p-3">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center p-3">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center px-3 py-12">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center p-3">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center p-3">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center px-3 py-12">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvTopHeaderCard headerColor="indigo-700" title={'Abril'}>
                <div className="total-center p-3">
                  <PdvProgressBar percent={80} type="circle" />
                </div>
              </PdvTopHeaderCard>
            </PdvGalleryItem>
          </PdvGallery>
        </div>
        <div className="col-span-6">
          <h4 className="mt-8 text-indigo-700">Gallery vertical</h4>
          <PdvGallery vertical slidesToShow={2}>
            <PdvGalleryItem>
              <PdvLeftHeaderCard className="w-full" title="45" headerSize="medium">
                <div className="p-3">
                  <h6 className="text-purple-500">LEE401</h6>
                  <p className="subtitle1">LEE401</p>
                  <p className="subtitle1">12:00 - 13:00</p>
                </div>
              </PdvLeftHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvLeftHeaderCard className="w-full" title="45" headerSize="medium">
                <div className="p-3">
                  <h6 className="text-purple-500">LEE401</h6>
                  <p className="subtitle1">LEE401</p>
                  <p className="subtitle1">12:00 - 13:00</p>
                </div>
              </PdvLeftHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvLeftHeaderCard className="w-full" title="45" headerSize="medium">
                <div className="p-3">
                  <h6 className="text-purple-500">LEE401</h6>
                  <p className="subtitle1">LEE401</p>
                  <p className="subtitle1">12:00 - 13:00</p>
                </div>
              </PdvLeftHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvLeftHeaderCard className="w-full" title="45" headerSize="medium">
                <div className="p-3">
                  <h6 className="text-purple-500">LEE401</h6>
                  <p className="subtitle1">LEE401</p>
                  <p className="subtitle1">12:00 - 13:00</p>
                </div>
              </PdvLeftHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvLeftHeaderCard className="w-full" title="45" headerSize="medium">
                <div className="p-3">
                  <h6 className="text-purple-500">LEE401</h6>
                  <p className="subtitle1">LEE401</p>
                  <p className="subtitle1">12:00 - 13:00</p>
                </div>
              </PdvLeftHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvLeftHeaderCard className="w-full" title="45" headerSize="medium">
                <div className="p-3">
                  <h6 className="text-purple-500">LEE401</h6>
                  <p className="subtitle1">LEE401</p>
                  <p className="subtitle1">12:00 - 13:00</p>
                </div>
              </PdvLeftHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvLeftHeaderCard className="w-full" title="45" headerSize="medium">
                <div className="p-3">
                  <h6 className="text-purple-500">LEE401</h6>
                  <p className="subtitle1">LEE401</p>
                  <p className="subtitle1">12:00 - 13:00</p>
                </div>
              </PdvLeftHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvLeftHeaderCard className="w-full" title="45" headerSize="medium">
                <div className="p-3">
                  <h6 className="text-purple-500">LEE401</h6>
                  <p className="subtitle1">LEE401</p>
                  <p className="subtitle1">12:00 - 13:00</p>
                </div>
              </PdvLeftHeaderCard>
            </PdvGalleryItem>
            <PdvGalleryItem>
              <PdvLeftHeaderCard className="w-full" title="45" headerSize="medium">
                <div className="p-3">
                  <h6 className="text-purple-500">LEE401</h6>
                  <p className="subtitle1">LEE401</p>
                  <p className="subtitle1">12:00 - 13:00</p>
                </div>
              </PdvLeftHeaderCard>
            </PdvGalleryItem>
          </PdvGallery>
        </div>
      </div>
    </div>
  )
}

export default PdvGalleryList
