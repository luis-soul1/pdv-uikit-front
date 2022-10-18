const UiPageComponents = () => {
  return <div>UiPageComponents</div>
}

export default UiPageComponents

// import PillBox from '@Uikit/PillBox'
// import { useForm } from 'react-hook-form'

// import colors from '@Uikit/colors/tailwindColors'
// import PdvAlert from '@Uikit/PdvAlert'
// import PdvCardContainer from '@Uikit/PdvCardContainer'
// import { PdvModal, PdvModalFooter } from '@Uikit/PdvModal'
// import PdvMultipleAccordion, { TAccordion } from '@Uikit/PdvMultipleAccordion'
// import PdvPagination, { usePdvPagination } from '@Uikit/PdvPagination'
// import PdvSimpleAccordion from '@Uikit/PdvSimpleAccordion'
// import PdvTabs from '@Uikit/PdvTabs/PdvTabs'
// import LeftHeaderCard from 'commons/LeftHeaderCard'
// import TopHeaderCard from 'commons/TopHeaderCard'
// import { useCopyToClipboard } from 'hooks/useCopyToClipboard'

// import InputField from '../forms/InputField'
// import SelectField from '../forms/SelectField'
// import { iconNames, PdvIcon, TIconNames } from '../Icons/PdvIcon'
// import PdvButton from '../PdvButton'

// export const PdvCardContainerView = () => {
//   const { clipboard } = useCopyToClipboard()

//   return (
//     <ComponentWrapper title={'Card container'}>
//       <pre className="whitespace-pre-wrap border p-4">
//         {`Propiedades del componente:

//   type TPdvCardContainer {
//     theme?: 'light' | 'dark' //Default theme='light
//     className?: string
//   }
// `}
//       </pre>

//       <PdvCardContainer className="mt-8 p-4">
//         <TypographyView />
//       </PdvCardContainer>

//       <PdvCardContainer className="mt-8 p-4" theme="dark">
//         <TypographyView />
//       </PdvCardContainer>

//       <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<PdvCardContainer className='mt-8'></PdvCardContainer>`)}>
//         Copiar código
//       </PdvButton>
//     </ComponentWrapper>
//   )
// }

// export const SimpleAccordionView = () => {
//   const { clipboard } = useCopyToClipboard()

//   return (
//     <ComponentWrapper title={'Acordion simple'}>
//       <pre className="whitespace-pre-wrap border p-4">
//         {`Propiedades del componente:

//   type TPdvSimpleAccordion = {
//     className?: string
//     header?: string | ReactElement
//     icon?: TIconNames | ReactElement
//     iconColor?: TColors
//     size?: 'small' | 'large'
//     color?: TColors
// }`}
//       </pre>

//       <h4 className="mt-8 text-indigo-700">Small Accordion</h4>
//       <PdvSimpleAccordion className="mt-2" header="Titulo">
//         <TypographyView />
//       </PdvSimpleAccordion>

//       <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<PdvSimpleAccordion header='Titulo'></PdvSimpleAccordion>`)}>
//         Copiar código
//       </PdvButton>

//       <h4 className="mt-8 text-indigo-700">Accordion con icono</h4>
//       <PdvSimpleAccordion className="mt-2" header="Titulo con icono" icon="Heart">
//         <TypographyView />
//       </PdvSimpleAccordion>

//       <PdvButton
//         className="ml-auto mt-4 block"
//         onClick={() => clipboard(`<PdvSimpleAccordion header='Titulo con icono' icon='Heart'></PdvSimpleAccordion>`)}
//       >
//         Copiar código
//       </PdvButton>

//       <h4 className="mt-8 text-indigo-700">Large Accordion y header con ReactElement</h4>
//       <PdvSimpleAccordion
//         size="large"
//         color="yellow-600"
//         className="mt-2"
//         header={
//           <div className="flex">
//             <PdvIcon name="Heart" color="white" className="mr-4" />
//             <p className="subtitle1 text-white">Header</p>
//           </div>
//         }
//       >
//         <TypographyView />
//       </PdvSimpleAccordion>

//       <PdvButton
//         className="ml-auto mt-4 block"
//         onClick={() => clipboard(`<PdvSimpleAccordion size='large' color='yellow-600' header='ReactElement'></PdvSimpleAccordion>`)}
//       >
//         Copiar código
//       </PdvButton>
//     </ComponentWrapper>
//   )
// }

// export const MultipleAccordionView = () => {
//   const { clipboard } = useCopyToClipboard()
//   const accordions: TAccordion[] = [
//     {
//       header: 'Header 1',
//       icon: 'Heart',
//       content: <TypographyView />
//     },
//     {
//       header: 'Header 2',
//       content: <TypographyView />
//     },
//     {
//       header: (
//         <div className="flex">
//           <PdvIcon name="Document" color="white" className="mr-4" />
//           <p className="subtitle1 text-white">Header 3 (Con ReactElement)</p>
//         </div>
//       ),
//       content: <TypographyView />
//     }
//   ]

//   return (
//     <ComponentWrapper title={'Acordion simple'}>
//       <pre className="whitespace-pre-wrap border p-4">
//         {`Propiedades del componente:

//   type TPdvSimpleAccordion = {
//     className?: string
//     header?: string | ReactElement
//     size?: 'small' | 'large'
//     color?: TColors
// }`}
//       </pre>

//       <h4 className="mt-8 text-indigo-700">Multiple Accordion</h4>
//       <PdvMultipleAccordion accordions={accordions} className="mt-2" />

//       <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<PdvMultipleAccordion accordions={accordions} />`)}>
//         Copiar código
//       </PdvButton>
//     </ComponentWrapper>
//   )
// }

// export const ModalView = () => {
//   const { clipboard } = useCopyToClipboard()
//   const [modal, setModal] = useState<string>('')

//   return (
//     <ComponentWrapper title={'Card container'}>
//       <pre className="whitespace-pre-wrap border p-4">
//         {`Propiedades del componente:

//   type TPdvModal {
//     open: boolean
//     title?: string
//     fullScreen?: boolean
//     size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
//     headerColor?: TColors
//     onClose?: () => void // Se ejecuta cuando se hace click fuera del modal
//     onSubmit?: () => void //Enento para formularios. Se ejecuta cuando usas un boton type='submit' dentro del children del modal
//   }

// Tambien puedes usar el componente PdvModalFooter para agregar llamados a la acción (botones):

//   type TPdvModalFooter = {
//     className?: string
//   }

//   <PdvModalFooter className='flex justify-end'>{children}</PdvModalFooter>
// `}
//       </pre>

//       <h4 className="mt-8 text-indigo-700">xs modal</h4>
//       <PdvButton className="mt-4" onClick={() => setModal('xs')}>
//         {'Abrir modal size="xs"'}
//       </PdvButton>
//       <PdvModal
//         open={modal === 'xs'}
//         size="xs"
//         title="Modal xs"
//         footer={
//           <PdvModalFooter className="flex justify-end">
//             <PdvButton size="small" className="mr-4" theme="black" variant="outlined" onClick={() => setModal('')}>
//               Cerrar
//             </PdvButton>
//             <PdvButton size="small" onClick={() => setModal('')}>
//               Aceptar
//             </PdvButton>
//           </PdvModalFooter>
//         }
//       >
//         <h5>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </h5>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </p>
//         <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<PdvModal open={false} size='xs' title='Titulo del modal'></PdvModal>`)}>
//           Copiar código
//         </PdvButton>
//       </PdvModal>

//       <h4 className="mt-8 text-indigo-700">sm modal (Default)</h4>
//       <PdvButton className="mt-4" onClick={() => setModal('sm')}>
//         {'Abrir modal size="sm"'}
//       </PdvButton>
//       <PdvModal
//         open={modal === 'sm'}
//         title="Modal sm"
//         footer={
//           <PdvModalFooter className="flex justify-end">
//             <PdvButton size="small" className="mr-4" theme="black" variant="outlined" onClick={() => setModal('')}>
//               Cerrar
//             </PdvButton>
//             <PdvButton size="small" onClick={() => setModal('')}>
//               Aceptar
//             </PdvButton>
//           </PdvModalFooter>
//         }
//       >
//         <h5>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </h5>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </p>

//         <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<PdvModal open={false} title='Titulo del modal'></PdvModal>`)}>
//           Copiar código
//         </PdvButton>
//       </PdvModal>

//       <h4 className="mt-8 text-indigo-700">md modal</h4>
//       <PdvButton className="mt-4" onClick={() => setModal('md')}>
//         {'Abrir modal size="md"'}
//       </PdvButton>
//       <PdvModal
//         open={modal === 'md'}
//         size="md"
//         title="Modal md"
//         footer={
//           <PdvModalFooter className="flex justify-end">
//             <PdvButton size="small" className="mr-4" theme="black" variant="outlined" onClick={() => setModal('')}>
//               Cerrar
//             </PdvButton>
//             <PdvButton size="small" onClick={() => setModal('')}>
//               Aceptar
//             </PdvButton>
//           </PdvModalFooter>
//         }
//       >
//         <h5>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </h5>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </p>

//         <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<PdvModal open={false} size='md' title='Titulo del modal'></PdvModal>`)}>
//           Copiar código
//         </PdvButton>
//       </PdvModal>

//       <h4 className="mt-8 text-indigo-700">lg modal</h4>
//       <PdvButton className="mt-4" onClick={() => setModal('lg')}>
//         {'Abrir modal size="lg"'}
//       </PdvButton>
//       <PdvModal
//         open={modal === 'lg'}
//         size="lg"
//         title="Modal lg"
//         footer={
//           <PdvModalFooter className="flex justify-end">
//             <PdvButton size="small" className="mr-4" theme="black" variant="outlined" onClick={() => setModal('')}>
//               Cerrar
//             </PdvButton>
//             <PdvButton size="small" onClick={() => setModal('')}>
//               Aceptar
//             </PdvButton>
//           </PdvModalFooter>
//         }
//       >
//         <h5>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </h5>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </p>

//         <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<PdvModal open={false} size='lg' title='Titulo del modal'></PdvModal>`)}>
//           Copiar código
//         </PdvButton>
//       </PdvModal>

//       <h4 className="mt-8 text-indigo-700">xl modal</h4>
//       <PdvButton className="mt-4" onClick={() => setModal('xl')}>
//         {'Abrir modal size="xl"'}
//       </PdvButton>
//       <PdvModal
//         open={modal === 'xl'}
//         size="xl"
//         title="Modal xl"
//         footer={
//           <PdvModalFooter className="flex justify-end">
//             <PdvButton size="small" className="mr-4" theme="black" variant="outlined" onClick={() => setModal('')}>
//               Cerrar
//             </PdvButton>
//             <PdvButton size="small" onClick={() => setModal('')}>
//               Aceptar
//             </PdvButton>
//           </PdvModalFooter>
//         }
//       >
//         <h5>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </h5>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </p>

//         <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<PdvModal open={false} size='xl' title='Titulo del modal'></PdvModal>`)}>
//           Copiar código
//         </PdvButton>
//       </PdvModal>

//       <h4 className="mt-8 text-indigo-700">fullScreen modal </h4>
//       <PdvButton className="mt-4" onClick={() => setModal('fullScreen')}>
//         {'Abrir modal fullScreen'}
//       </PdvButton>
//       <PdvModal
//         fullScreen
//         open={modal === 'fullScreen'}
//         title="Modal fullScreen"
//         footer={
//           <PdvModalFooter className="flex justify-end">
//             <PdvButton size="small" className="mr-4" theme="black" variant="outlined" onClick={() => setModal('')}>
//               Cerrar
//             </PdvButton>
//             <PdvButton size="small" onClick={() => setModal('')}>
//               Aceptar
//             </PdvButton>
//           </PdvModalFooter>
//         }
//       >
//         <h5>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </h5>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
//           obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
//         </p>

//         <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<PdvModal fullScreen open={false} title='Titulo del modal'></PdvModal>`)}>
//           Copiar código
//         </PdvButton>
//       </PdvModal>
//     </ComponentWrapper>
//   )
// }

// export function IconsView() {
//   const { clipboard } = useCopyToClipboard()
//   const form = useForm()
//   const filterWord = form.watch('filter') ? form.watch('filter').toString().toLowerCase() : form.watch('filter')

//   const filteredIcon = useMemo(() => {
//     if (filterWord) {
//       return iconNames.filter((name: TIconNames) => name.toString().toLowerCase().includes(filterWord))
//     } else {
//       return iconNames
//     }
//   }, [filterWord])

//   return (
//     <ComponentWrapper title={'Iconos'}>
//       <pre className="whitespace-pre-wrap border p-4">
//         {`Propiedades del componente:

//   type TPdvIcon = {
// 	name: TIconNames //Nombres disponibles
//     size?: 'small' | 'medium' | 'large' | 'xlarge' | number
//       set?: 'bold' | 'broken' | 'bulk' | 'curved' | 'light' | 'two-tone' //Estilo del icono => Default: light
//     color?: TColors
//     style?: CSSProperties
//     className?: string
//     asLink?: boolean
//     href?: string
//     onClick?: (e?: any) => void
//   }
// }`}
//       </pre>

//       <InputField
//         name={'filter'}
//         label={'Filtra por nombre o palabra clave'}
//         labelClassName="mt-4"
//         inputProps={{ placeholder: 'Filtra por nombre del icono', className: 'w-full' }}
//         form={form}
//       />

//       <p className="mt-4 font-bold">Hacer click en el icono para copiarlo en el portapapeles.</p>

//       <p className="mt-4 font-bold">Iconos de la libreria Iconly</p>
//       <div className="mt-8 grid grid-cols-12 gap-4">
//         {filteredIcon.map((name: TIconNames, index: number) => {
//           return (
//             <div
//               key={name + index}
//               className="col-span-2 mb-4 cursor-pointer rounded-2xl border border-gray-400 text-center"
//               onClick={() => clipboard(`<PdvIcon name='${name}' />`)}
//             >
//               <div className={'flex h-16 items-center justify-center'}>
//                 <PdvIcon name={name} color="gray-300" />
//               </div>
//               <p className={'mb-0 w-full truncate rounded-b-2xl bg-green-600 p-3 text-white'} title={name}>
//                 {name}
//               </p>
//             </div>
//           )
//         })}
//       </div>

//       <p className="mt-4 font-bold">Iconos de la libreria Ant Design</p>
//     </ComponentWrapper>
//   )
// }

// export const ColorsView = () => {
//   return (
//     <ComponentWrapper title={'Colores'}>
//       <h2 className="text-indigo-700">Colores principales</h2>
//       <div className="mb-6 grid grid-cols-12 gap-8">
//         {Object.entries(colors).map(([key, value], index) => {
//           if (typeof value === 'object') {
//             return null
//           }
//           return (
//             <div key={index} className="col-span-1">
//               <div className={`mx-auto mt-2 h-16 w-16 rounded-full shadow-xl`} style={{ backgroundColor: value }}></div>
//               <p className={`body1 mt-2 text-center`}>{key}</p>
//             </div>
//           )
//         })}
//       </div>

//       {/* <div className="grid grid-cols-12 gap-8">
//         {Object.entries(colors).map(([key, value], index) => {
//           if (typeof value === 'object') {
//             return (
//               <div key={index} className="col-span-12 mt-4">
//                 <h2 className="text-indigo-700">{key}</h2>
//                 <div className="mt-4 grid grid-cols-12 gap-8">
//                   {Object.entries(value).map(([colorKey, colorValue]) => {
//                     return (
//                       <div key={colorKey} className="col-span-1">
//                         <div className={`mx-auto mt-2 h-16 w-16 rounded-full shadow-xl`} style={{ backgroundColor: colorValue }}></div>
//                         <p className="body1 mt-2 text-center">
//                           {key}-{colorKey}
//                         </p>
//                       </div>
//                     )
//                   })}
//                 </div>
//               </div>
//             )
//           }
//           return null
//         })}
//       </div> */}
//     </ComponentWrapper>
//   )
// }

// export const TypographyView = () => {
//   return (
//     <ComponentWrapper title={'Tipografía'}>
//       <h1 className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. h1</h1>
//       <h2 className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. h2</h2>
//       <h3 className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. h3</h3>
//       <h4 className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. h4</h4>
//       <h5 className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. h5</h5>
//       <h6 className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. h6</h6>
//       <p className="subtitle1 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Subtitle1</p>
//       <p className="subtitle2 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Subtitle2</p>
//       <p className="body1 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. body1</p>
//       <p className="body2 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. body2</p>
//       <p className="microcopy mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. microcopy</p>
//     </ComponentWrapper>
//   )
// }

// export const PdvAlertView = () => {
//   const { clipboard } = useCopyToClipboard()

//   return (
//     <ComponentWrapper title={'Alert Box'}>
//       <pre className="whitespace-pre-wrap border p-4">
//         {`  Propiedades del componente:

//             type TPdvAlert = {
//               className?: string
//               theme?: 'success' | 'info' | 'warning' | 'error'
//               size?: 'small' | 'large'
//               showIcon?: boolean
//             }
//         `}
//       </pre>
//       <div className="grid grid-cols-12 gap-8">
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: success con titulo en string</h4>
//           <PdvAlert theme="success" showIcon size="large" className="flex items-center">
//             Esta es una alerta
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='success' size='large' className='flex items-center'>Esta es una alerta</PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: info con titulo en string</h4>
//           <PdvAlert theme="info" showIcon size="large" className="flex items-center">
//             Esta es una alerta
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='info' showIcon size='large' className='flex items-center'>Esta es una alerta</PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: warning con titulo en string</h4>
//           <PdvAlert theme="warning" showIcon size="large" className="flex items-center">
//             Esta es una alerta
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='warning' showIcon size='large' className='flex items-center'>Esta es una alerta</PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: error con titulo en string</h4>
//           <PdvAlert theme="error" showIcon size="large" className="flex items-center">
//             Esta es una alerta
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='error' showIcon size='large' className='flex items-center'>Esta es una alerta</PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: success sin icono y titulo en en React element</h4>
//           <PdvAlert theme="success" size="large" className="flex items-center">
//             <h3 className="text-gray">Esta es una alerta</h3>
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='success' showIcon size='large' className='flex items-center'></PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: info con titulo en en React element</h4>
//           <PdvAlert theme="info" size="large" className="flex items-center">
//             <p className="text-gray">Esta es una alerta</p>
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='info' size='large' className='flex items-center'></PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: warning con titulo en en React element</h4>
//           <PdvAlert theme="warning" size="large" className="flex items-center">
//             <p className="text-gray">Esta es una alerta</p>
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='warning' size='large' className='flex items-center'></PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: error con titulo en en React element</h4>
//           <PdvAlert theme="error" size="large" className="flex items-center">
//             <p className="text-gray">Esta es una alerta</p>
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='error' size='large' className='flex items-center'></PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: success altura: small con titulo en string</h4>
//           <PdvAlert theme="success" size="small" className="flex items-center">
//             Esta es una alerta
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='success' size='small' className='flex items-center'>Esta es una alerta</PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: info altura: small con titulo en string</h4>
//           <PdvAlert theme="info" size="small" className="flex items-center">
//             Esta es una alerta
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='info' size='small' className='flex items-center'>Esta es una alerta</PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: warning altura: small con titulo en string</h4>
//           <PdvAlert theme="warning" size="small" className="flex items-center">
//             Esta es una alerta
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='warning' size='small' className='flex items-center'>Esta es una alerta</PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//         <div className="col-span-6">
//           <h4 className="mt-4 mb-2">Variante: error altura: small con titulo en string</h4>
//           <PdvAlert theme="error" size="small" className="flex items-center">
//             Esta es una alerta
//           </PdvAlert>

//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<PdvAlert theme='error' size='small' className='flex items-center'>Esta es una alerta</PdvAlert>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         {/* --------------------------------------------------------------------------------- */}
//       </div>
//     </ComponentWrapper>
//   )
// }

// export const TopHeaderCardView = () => {
//   const { clipboard } = useCopyToClipboard()

//   return (
//     <ComponentWrapper title={'Top header card'}>
//       <pre className="whitespace-pre-wrap border p-4">
//         {`Propiedades del componente:

//  type TTopHeaderCard = {
//   borderType?: 'rounded-t-none' | 'rounded-t-xl'
//   className?: string
//   headerColor: TColors
//   title: string | ReactElement
//   titleColor?: TColors
//   onClick?: () => void
// }
// `}
//       </pre>
//       <h4 className="mt-8 text-indigo-700">{'borderType="rounded-t-xl" y titulo en string'}</h4>
//       <TopHeaderCard className="mt-2" headerColor="indigo-700" title={'Abril'} titleColor="red-300">
//         <PdvButton theme="blue-400" className="m-2">
//           Ver informe
//         </PdvButton>
//       </TopHeaderCard>

//       <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<TopHeaderCard headerColor='indigo-700' title='Titulo'></TopHeaderCard>`)}>
//         Copiar código
//       </PdvButton>

//       <h4 className="mt-4 text-indigo-700">{'borderType="rounded-t-none" y titulo React element'}</h4>
//       <TopHeaderCard className="mt-2" borderType="rounded-t-none" headerColor="indigo-700" title={<p className="text-white">Titulo</p>}>
//         <PdvButton theme="blue-400" className="m-2">
//           Ver informe
//         </PdvButton>
//       </TopHeaderCard>

//       <PdvButton
//         className="ml-auto mt-4 block"
//         onClick={() => clipboard(`<TopHeaderCard headerColor='indigo-700' title={<p className='text-white'>Titulo</p>}></TopHeaderCard>`)}
//       >
//         Copiar código
//       </PdvButton>
//     </ComponentWrapper>
//   )
// }

// export const LeftHeaderCardView = () => {
//   const { clipboard } = useCopyToClipboard()

//   return (
//     <ComponentWrapper title={'Top header card'}>
//       <pre className="whitespace-pre-wrap border p-4">
//         {`Propiedades del componente:
// type TLeftHeaderCard = {
//   className?: string
//   headerSize?: 'small' | 'medium' | 'large' | 'extra-large' | 'half'
//   headerColor?: TColors
//   title?: string | ReactElement
//   titleColor?: TColors
//   onClick?: () => void
// }
//         `}
//       </pre>
//       <div className="grid grid-cols-12 gap-8">
//         <div className="col-span-6">
//           <h4 className="mt-8 text-indigo-700">{'Header size "small"'}</h4>
//           <LeftHeaderCard className="mt-2 w-full">
//             <div className="p-3">
//               <h6 className="text-purple-500">LEE401</h6>
//               <p className="subtitle1">LEE401</p>
//               <p className="subtitle1">12:00 - 13:00</p>
//             </div>
//           </LeftHeaderCard>
//           <PdvButton className="ml-auto mt-4 block" onClick={() => clipboard(`<LeftHeaderCard className='mt-2'></LeftHeaderCard>`)}>
//             Copiar código
//           </PdvButton>
//         </div>
//         <div className="col-span-6">
//           <h4 className="mt-8 text-indigo-700">{'Header size "medium" y titulo'}</h4>
//           <LeftHeaderCard className="mt-2 w-full" title="45" headerSize="medium">
//             <div className="p-3">
//               <h6 className="text-purple-500">LEE401</h6>
//               <p className="subtitle1">LEE401</p>
//               <p className="subtitle1">12:00 - 13:00</p>
//             </div>
//           </LeftHeaderCard>
//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() => clipboard(`<LeftHeaderCard className='mt-2 w-full' title='45' headerSize='medium'></LeftHeaderCard>`)}
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         <div className="col-span-6">
//           <h4 className="mt-8 text-indigo-700">{'Header size "large", titulo con color'}</h4>
//           <LeftHeaderCard className="mt-2 w-full" title="45" titleColor="red-500" headerSize="large" headerColor="green-400">
//             <div className="p-3">
//               <h6 className="text-purple-500">LEE401</h6>
//               <p className="subtitle1">LEE401</p>
//               <p className="subtitle1">12:00 - 13:00</p>
//             </div>
//           </LeftHeaderCard>
//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() =>
//               clipboard(
//                 `<LeftHeaderCard className='mt-2 w-full' title='45' titleColor='red-500' headerSize='large' headerColor='green-400'></LeftHeaderCard>`
//               )
//             }
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//         <div className="col-span-6">
//           <h4 className="mt-8 text-indigo-700">{'Header size "large" y titulo conmo React Element'}</h4>
//           <LeftHeaderCard className="mt-2 w-full" headerSize="half" title={<h6 className="text-white">Puntaje NEM</h6>}>
//             <div className="p-6">
//               <h1 className="hi__md text-center text-orange-600">564</h1>
//             </div>
//           </LeftHeaderCard>
//           <PdvButton
//             className="ml-auto mt-4 block"
//             onClick={() =>
//               clipboard(
//                 `<LeftHeaderCard className='mt-2 w-full' headerSize='half' title={<h6 className='text-white'>Puntaje NEM</h6>}></LeftHeaderCard>`
//               )
//             }
//           >
//             Copiar código
//           </PdvButton>
//         </div>
//       </div>
//     </ComponentWrapper>
//   )
// }

// const ComponentWrapper = (props: PropsWithChildren<{ title: string }>) => {
//   return (
//     <div className={'col-span-12 mb-8'}>
//       <h3 className="mb-4 text-indigo-700">{props.title}</h3>
//       {props.children}
//     </div>
//   )
// }
