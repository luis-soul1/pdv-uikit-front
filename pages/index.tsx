import type { NextPage } from 'next'

import PdvButton from '@Uikit/PdvButton'

const Home: NextPage = () => {
  return (
    <div className="total-center grid h-full w-full grid-cols-12 gap-4 p-8">
      <h1>Pagina en construcción...</h1>
      <PdvButton asLink href="/pdv-buttons">
        Ir al uikit
      </PdvButton>
    </div>
  )
}

export default Home
