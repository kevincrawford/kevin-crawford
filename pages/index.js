import Head from 'next/head'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <img className='kevin' src='/kevin-crawford.svg' alt='Kevin Crawford' />
      </main>
    </>
  )
}

export default HomePage
