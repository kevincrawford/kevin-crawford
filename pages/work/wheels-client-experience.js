import ExpandableImage from '../../components/ExpandableImage'

const wheelsClientExperience = () => {
  return (
    <>
      <section className='banner-wheels'>
        <div className='container max-600 py-5'>
          <h1>Wheels Client Experience Research Project</h1>
          <h5 className='ovo mb-4'>"Understanding the daily life of our customers"</h5>
          <div>
            <strong>Company: </strong>Wheels Inc.
          </div>
          <div>
            <strong>Project Scope: </strong>10 Months
          </div>
          <div>
            <strong>Project Team: </strong>User Experience &amp; Design (4 members)
          </div>
          <div>
            <strong>Roles: </strong>UX Research, User Observation, Usability Testing, UX Analysis
          </div>
        </div>
      </section>
      <section className='container max-600 py-4'>
        <h5>Overview</h5>
        <p>
          Use foundational research to developed a nuanced understanding of Wheels customers behavior and created robust
          models of their activities, styles of use and interactions.
        </p>
        <hr />
        <h5>Goals</h5>
        <ul>
          <li>Understand Wheels' client user roles and activities</li>
          <li>Build an objective research body to inform design strategy of the next generation of our tools</li>
          <li>Discover best sources of product innovation by observing ways users cope with incomplete solutions</li>
        </ul>
        <hr />
        <h5>UX Research</h5>
        <ul>
          <li>User interview and observation planning</li>
          <li>50+ site interviews and observations at client locations</li>
          <li>85+ hours of videotape research footage</li>
          <li>Usability testing of core features</li>
        </ul>
        <ExpandableImage src='/img/research.jpg' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>UX Analysis</h5>
        <ul>
          <li>Transcribe raw research data</li>
          <li>User task analysis</li>
          <li>User typology mapping</li>
          <li>Generate persona definitions</li>
        </ul>
        <ExpandableImage src='/img/task-notes.png' alt='Analysis' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>UX Findings</h5>
        <ul>
          <li>5 major user typologies</li>
          <li>6 major modes of fleet management activities</li>
          <li>4 key UX bottlenecks</li>
          <li>2 unused or underutilized features</li>
          <li>9 areas of opportunities for innovation</li>
        </ul>
        <ExpandableImage src='/img/persona.jpg' alt='Persona' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/analysis.jpg' alt='Analysis' cls='img-fluid expandable mb-3' />
        <div className='row no-gutters'>
          <div className='col-sm-12 col-md-6'>
            <ExpandableImage src='/img/task-map-key.jpg' alt='Task Map' cls='img-fluid expandable mb-3' />
          </div>
          <div className='col-sm-12 col-md-6'>
            <ExpandableImage src='/img/task-map-1.jpg' alt='Task Map' cls='img-fluid expandable mb-3' />
          </div>
          <div className='col-sm-12 col-md-6'>
            <ExpandableImage src='/img/task-map-2.jpg' alt='Task Map' cls='img-fluid expandable mb-3' />
          </div>
          <div className='col-sm-12 col-md-6'>
            <ExpandableImage src='/img/task-map-3.jpg' alt='Task Map' cls='img-fluid expandable mb-3' />
          </div>
          <div className='col-sm-12 col-md-6'>
            <ExpandableImage src='/img/task-map-4.jpg' alt='Task Map' cls='img-fluid expandable mb-3' />
          </div>
          <div className='col-sm-12 col-md-6'>
            <ExpandableImage src='/img/task-map-5.jpg' alt='Task Map' cls='img-fluid expandable mb-3' />
          </div>
          <div className='col-sm-12 col-md-6'>
            <ExpandableImage src='/img/task-map-6.jpg' alt='Task Map' cls='img-fluid expandable mb-3' />
          </div>
          <div className='col-sm-12 col-md-6'>
            <ExpandableImage src='/img/task-map-7.jpg' alt='Task Map' cls='img-fluid expandable mb-3' />
          </div>
        </div>
        <hr />
        <h5>Results</h5>
        <ul>
          <li>The discovery of 4 key UX bottlenecks lead to feature redesigns with UX improvements up to 500%</li>
          <li>Successfully sunsetted 2 underutilized features freeing up valuable support and development resources</li>
          <li>Customer insights lead to the designs for 2 industry award winning products</li>
        </ul>
      </section>
    </>
  )
}

export default wheelsClientExperience
