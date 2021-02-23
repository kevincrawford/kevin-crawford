import ExpandableImage from '../../components/ExpandableImage'

const arrowAisPortal = () => {
  return (
    <>
      <section className='banner-ais'>
        <div className='container max-600 py-5'>
          <h1>Arrow Customer Portal</h1>
          <h5 className='ovo mb-4'>"360&deg; View"</h5>
          <div>
            <strong>Company: </strong>Arrow Electronics
          </div>
          <div>
            <strong>Project Scope: </strong>2 Months
          </div>
          <div>
            <strong>Project Team: </strong>User Experience (3 members), UI Developer (1 member)
          </div>
          <div>
            <strong>Roles: </strong>UX Research, UX Design, UI Development
          </div>
        </div>
      </section>
      <section className='container max-600 py-4'>
        <h5>Overview</h5>
        <p>
          A new company division required a customer portal as soon as possible. A small team of UX and UI members
          worked with with Senior IT to get the portal off the ground quickly.
        </p>
        <ExpandableImage src='/img/arrow-portal-main.png' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>Goals</h5>
        <ul>
          <li>Complete an initial release within 2 months</li>
          <li>Provide users with a 360&deg; view of their orders</li>
          <li>Develop application as a reusable template for other business units</li>
        </ul>
        <hr />
        <h5>UX Research</h5>
        <ul>
          <li>Facilitate discovery sessions with 30+ users</li>
          <li>Conduct interviews with SMEs and stakeholders</li>
          <li>Define personas from user research</li>
          <li>Prioritize features for MVP release</li>
        </ul>
        <ExpandableImage src='/img/arrow-portal-discovery-01.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/arrow-portal-discovery-02.png' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>UX Design</h5>
        <ul>
          <li>Facilitate whiteboard design sessions with users and stakeholders</li>
          <li>Write and prioritized user stories</li>
          <li>Create wireframes and prototypes</li>
          <li>Visual design for dashboard and components using Photoshop and Sketch</li>
        </ul>
        <ExpandableImage src='/img/arrow-portal-user-story.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/arrow-portal-trello.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/arrow-portal-sketch.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/arrow-portal-iteration-2-01.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/arrow-portal-iteration-2-02.png' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>UI Development</h5>
        <ul>
          <li>UI development for customer portal application using Angular</li>
          <li>Data visualization using HighCharts and custom SVG/Javascript</li>
          <li>Integrate UI testing automation using Jasmine &amp; Karma</li>
        </ul>
        <hr />
        <h5>Results</h5>
        <p>
          Our goal was ambitious. We aimed to release a fully-functioning portal system in three two-week sprints. This
          included the ability to log in, view a dashboard of all open order counts broken down by current status, and
          select an order to view high-level information.
        </p>
        <p>
          User feedback was overwhelmingly positive. It is regarded one of the most successful initial releases by Arrow
          ECS IT.
        </p>
        <hr />
      </section>
    </>
  )
}

export default arrowAisPortal
