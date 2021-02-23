import Head from 'next/head'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kevin Crawford</title>
      </Head>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  )
}

export default AppLayout
