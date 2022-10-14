import type { AppProps } from 'next/app'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from 'react-query'

import PdvLoader from '@Uikit/PdvLoader'
import ComposeContext from 'context/ComposeContext'
import { LoaderContextProvider } from 'context/LoaderContext'
import 'assets/styles/index.scss'
import DashboardLayout from 'layouts/DashboardLayout'
import ErrorBoundary from 'layouts/ErrorBoundary'

import 'dayjs/locale/es-mx'

dayjs.locale('es-mx')

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <ComposeContext providers={[LoaderContextProvider]}>
          <SnackbarProvider maxSnack={3}>
            <PdvLoader />
            <ErrorBoundary>
              <DashboardLayout>
                <Component {...pageProps} />
              </DashboardLayout>
            </ErrorBoundary>
          </SnackbarProvider>
        </ComposeContext>
      </QueryClientProvider>
    </LocalizationProvider>
  )
}

export default MyApp
