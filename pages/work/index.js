import { useRouter } from 'next/router'

const WorkPage = () => {
  const router = useRouter()
  const handleNav = (key) => {
    if (key && key !== router.pathname) router.push(`/work/${key}`)
  }
  return (
    <div className='container max-600 py-5 covers'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <div className='cover-item mb-4' onClick={() => handleNav('wheels-client-experience')}>
            <img src='/img/cover-wheels.jpg' className='img-fluid' />
            <p>Wheels Client Experience</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-6'>
          <div className='cover-item mb-4' onClick={() => handleNav('arrow-gridview')}>
            <img src='/img/cover-gridview.jpg' className='img-fluid' />
            <p>Arrow GridView</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-6'>
          <div className='cover-item mb-4' onClick={() => handleNav('arrow-snap-library')}>
            <img src='/img/cover-snap.jpg' className='img-fluid' />
            <p>Arrow Pattern Library</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-6'>
          <div className='cover-item mb-4' onClick={() => handleNav('arrow-ais-portal')}>
            <img src='/img/cover-portal.jpg' className='img-fluid' />
            <p>Arrow Customer Portal</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-6'>
          <div className='cover-item mb-4' onClick={() => handleNav('arrow-effective-ux')}>
            <img src='/img/cover-effective.jpg' className='img-fluid' />
            <p>Arrow Effective UX</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkPage
