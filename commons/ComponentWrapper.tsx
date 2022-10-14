import { FC } from 'react'

type TComponentWrapper = { title: string }

const ComponentWrapper: FC<TComponentWrapper> = (props) => {
  return (
    <div className={'col-span-12 mb-8'}>
      <h1 className="mb-4 text-black">{props.title}</h1>
      {props.children}
    </div>
  )
}

export default ComponentWrapper
