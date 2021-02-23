import ExpandableImage from '../../components/ExpandableImage'

const arrowGridView = () => {
  return (
    <>
      <section className='banner-gridview'>
        <div className='container max-600 py-5'>
          <h1>Arrow GridView</h1>
          <h5 className='ovo mb-4'>"Streamline Quote Process"</h5>
          <div>
            <strong>Company: </strong>Arrow Electronics
          </div>
          <div>
            <strong>Project Scope: </strong>6 Months
          </div>
          <div>
            <strong>Project Team: </strong>User Experience (3 members)
          </div>
          <div>
            <strong>Roles: </strong>UX Research, UX Design, UI Development
          </div>
        </div>
      </section>
      <section className='container max-600 py-4'>
        <h5>Overview</h5>
        <p>
          The Arrow Portal provides the ability for representatives to quote computing solutions for over 40 suppliers
          using a common data model. Each supplier has its own process requiring unique information to be entered on
          quotes. Due to usability and design challenges the team was facing from the large amount of data and fields on
          the screen, a data grid solution was proposed and executed.
        </p>
        <ExpandableImage src='/img/gridview-main.png' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>Goals</h5>
        <ul>
          <li>Create custom data grid views based on unique processes</li>
          <li>Steamline searching, filtering, and comparing quotes</li>
          <li>Allow inline editing without leaving the data grid view</li>
        </ul>
        <hr />
        <h5>UX Research</h5>
        <ul>
          <li>Conduct task analysis for 40+ suppliers</li>
          <li>Facilitate UX discovery sessions with 20+ users</li>
          <li>Research existing solutions for large data grids</li>
          <li>Usability test existing quote solution</li>
        </ul>
        <ExpandableImage src='/img/gridview-concept-testing-01.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/gridview-concept-testing-02.png' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>UX Design</h5>
        <ul>
          <li>Facilitate whiteboard design sessions with users</li>
          <li>Write and prioritized user stories</li>
          <li>Create wireframes and prototypes using Axure</li>
          <li>Usability test prototype iterations</li>
          <li>Produce interaction guidelines and product documentation</li>
        </ul>
        <ExpandableImage src='/img/gridview-iteration-01.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/gridview-multi-line-01.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/gridview-multi-line-02.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/gridview-multi-line-03.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/gridview-documentation.png' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>UI Development</h5>
        <ul>
          <li>UI development for application using Angular</li>
          <li>Assist in data cache solution using Spring Boot</li>
          <li>Assist in API development using Javascript</li>
          <li>Integrate UI testing automation using Jasmine &amp; Karma</li>
        </ul>
        <hr />
      </section>
    </>
  )
}

export default arrowGridView
