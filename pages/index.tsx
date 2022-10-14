import type { NextPage } from 'next'

import { useForm } from 'react-hook-form'

import InputField from '@Uikit/Forms/Input/InputField'
import PdvButton from '@Uikit/PdvButton'
import { useExampleMutation } from 'hooks/request/exampleQuery'
import useMutationAlert from 'hooks/useMutationAlert'
import { IExample } from 'models/IExample'

const Home: NextPage = () => {
  // Ejemplos de como usar los custos hooks detinados a hacer requests y como usar react hook form
  //const toDosQueries = useExampleQueries()
  //const toDoQuery = useExampleQuery('1')
  const toDoMutation = useExampleMutation()
  useMutationAlert(toDoMutation)
  const createForm = useForm()
  const updateForm = useForm()

  const createTodo = (body: IExample) => {
    toDoMutation.mutate(
      { body, method: 'POST' },
      {
        onSuccess: () => console.info('to_do creado'), // Esta funcion se ejecuta si la respuesta es satisfactoria
        onError: () => console.info('error al crear to_do') // Esta funcion se ejecuta si la respuesta es un error
      }
    )
  }

  const editTodo = (body: IExample) => {
    toDoMutation.mutate(
      { body, id: '1', method: 'PUT' },
      {
        onSuccess: () => console.info('to_do editado'), // Esta funcion se ejecuta si la respuesta es satisfactoria
        onError: () => console.info('error al editar to_do') // Esta funcion se ejecuta si la respuesta es un error
      }
    )
  }

  const deleteTodo = () => {
    toDoMutation.mutate(
      { id: '1', method: 'DELETE' },
      {
        onSuccess: () => console.info('to_do eliminado'), // Esta funcion se ejecuta si la respuesta es satisfactoria
        onError: () => console.info('error al eliminar to_do') // Esta funcion se ejecuta si la respuesta es un error
      }
    )
  }

  return (
    <div className="grid h-screen w-screen grid-cols-12 gap-4 p-8">
      <div className="col-span-6 overflow-auto">
        <h2 className="mb-8">To-Do list</h2>

        {/* {toDosQueries.isSuccess && toDosQueries.data.response.map((toDo) => <p key={toDo.id}>{toDo.title}</p>)} */}
      </div>
      <div className="col-span-6">
        {/* <div>
          <h3>Todo detail</h3>
          <p>userId: {toDoQuery.data?.response.id}</p>
          <p>Title: {toDoQuery.data?.response.title}</p>
        </div> */}

        <hr className="my-8" />

        <h2 className="mt-4">Crear To do</h2>
        <form onSubmit={createForm.handleSubmit(createTodo)}>
          <InputField
            variant="outlined"
            name="title"
            icon="Search"
            iconPosition="right"
            label="Titulo"
            className="mt-8"
            options={{ required: 'Este campo es requerido' }}
            errorClassName="text-black"
            form={createForm}
          />
          <InputField
            name="userId"
            icon="Folder"
            iconPosition="right"
            label="Contenido"
            className="mt-4"
            inputProps={{ className: 'w-full', placeholder: 'Ingresa tu nombre' }}
            options={{ required: 'Este campo es requerido' }}
            form={createForm}
          />
          <PdvButton type="submit" className="mt-4">
            Crear To do
          </PdvButton>
        </form>

        <h2 className="mt-4">Editar To do</h2>
        <form onSubmit={updateForm.handleSubmit(editTodo)}>
          <InputField
            name="title"
            label="Titulo"
            className="mt-8"
            inputProps={{ placeholder: 'Ingresa tu nombre' }}
            options={{ required: 'Este campo es requerido' }}
            errorClassName="text-black"
            form={updateForm}
          />
          <InputField
            name="userId"
            label="Contenido"
            className="mt-4 w-20"
            inputProps={{ placeholder: 'Ingresa tu nombre' }}
            options={{ required: 'Este campo es requerido' }}
            form={updateForm}
          />
          <PdvButton type="submit" className="mt-4">
            Editar To do
          </PdvButton>
        </form>

        <h2 className="mt-4">Eliminar To do</h2>
        <PdvButton className="mt-4" onClick={deleteTodo}>
          Borrar To do
        </PdvButton>
      </div>
    </div>
  )
}

export default Home
