import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../../components'

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root
