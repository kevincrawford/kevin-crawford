import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, Nav } from 'react-bootstrap'

const AppHeader = () => {
  const router = useRouter()
  const handleNav = (key) => {
    if (key && key !== router.pathname) router.push(`/${key}`)
  }
  return (
    <Navbar variant='dark' bg='dark' expand='md' fixed='top' collapseOnSelect={true} onSelect={handleNav}>
      <div className='container max-600'>
        <Link href='/'>
          <a className='navbar-brand' />
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link eventKey='work'>work</Nav.Link>
            <Nav.Link eventKey='resume'>resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default AppHeader
