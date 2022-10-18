import { FC } from 'react'

const PdvGalleryApi: FC = () => {
  return (
    <pre className="whitespace-pre-wrap border p-4">
      {`Propiedades del componente:

type TGallery = {
  className?: string
  vertical?: boolean
  slidesToShow?: number
  slidesToScroll?: number
  speed?: number
  swipe?: boolean
  verticalSwiping?: boolean
}
`}
    </pre>
  )
}

export default PdvGalleryApi
