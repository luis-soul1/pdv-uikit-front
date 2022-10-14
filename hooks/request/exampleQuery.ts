import { useMutation, useQuery, useQueryClient } from 'react-query'

import useLoader from 'hooks/useLoader'
import { IExample } from 'models/IExample'
import { TParams } from 'models/IRequest'
import { apiClient } from 'utils/ApiClient'

const endpoints = {
  to_dos: 'todos'
}

//Request para traer listados => response: []
export const useExampleQueries = (queryParam?: string) => {
  const endpoint = endpoints.to_dos
  const list = useQuery([endpoint, queryParam], () => apiClient.getAll<IExample>(endpoint), { select: (data) => data })
  useLoader(list) //Si no necesitas que el Loader se renderice, borra esta linea

  return list
}

//Request para traer un item => response: {}
export const useExampleQuery = (id: string) => {
  const endpoint = endpoints.to_dos
  const item = useQuery([endpoint, id], () => apiClient.getOne<IExample>(endpoint), { select: (data) => data })
  useLoader(item) //Si no necesitas que el Loader se renderice, borra esta linea

  return item
}

//Request para hacer fetch a demanda => response: []
export const useExampleFetch = () => {
  const query = useQueryClient()
  const loader = useLoader()

  //Usa apiClient.getOne para traer 1 item o apiClient.getAll para traer varios items
  const getExample = async (id?: string) => {
    const endpoint = `${endpoints.to_dos}/${id ?? ''}`
    loader.setIsOpen(true) //Si no necesitas que el Loader se renderice, borra esta linea
    const response = await query.fetchQuery(endpoint, () => apiClient.getOne<IExample>(endpoint))
    loader.setIsOpen(false) //Si no necesitas que el Loader se renderice, borra esta linea
    return response
  }

  return getExample
}

//Hook para hacer request tipo: POST, PUT, PATCH, DELETE
export const useExampleMutation = () => {
  return useMutation((params: TParams<IExample>) =>
    apiClient.mutation<IExample, IExample>(`${endpoints.to_dos}/${params.id ?? ''}`, params.method, params.body)
  )
}
