import { useContext, useEffect } from 'react'

import { UseMutationResult, UseQueryResult } from 'react-query'

import { LoaderContext } from 'context/LoaderContext'
import { TParams } from 'models/IRequest'

const useLoader = <T, P>(request?: UseMutationResult<T, unknown, TParams<P>, unknown> | UseQueryResult<T, unknown>) => {
  const loader = useContext(LoaderContext)

  useEffect(() => {
    loader.isOpen !== request?.isLoading && request && loader.setIsOpen(request.isLoading)
  }, [request?.isLoading])

  useEffect(() => {
    if (request?.isError) throw request.error
  }, [request?.isError])

  return loader
}

export default useLoader
