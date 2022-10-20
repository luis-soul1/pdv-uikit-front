const UiPageComponents = () => {
  return <div>UiPageComponents</div>
}

export default UiPageComponents

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
