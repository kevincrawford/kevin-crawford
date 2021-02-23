import ExpandableImage from '../../components/ExpandableImage'
const arrowSnapLibrary = () => {
  return (
    <>
      <section className='banner-snap'>
        <div className='container max-600 py-5'>
          <h1>Snap Design Pattern Library</h1>
          <h5 className='ovo mb-4'>"Styles &amp; Angular Patterns"</h5>
          <div>
            <strong>Company: </strong>Arrow Electronics
          </div>
          <div>
            <strong>Project Scope: </strong>Continuous
          </div>
          <div>
            <strong>Project Team: </strong>User Experience (3 members)
          </div>
          <div>
            <strong>Roles: </strong>Project Management, UX Research, UX Design, UI Development
          </div>
        </div>
      </section>
      <section className='container max-600 py-4'>
        <h5>Overview</h5>
        <p>
          Snap is a design pattern library created for Arrow Electronics to unify the user experience across products.
          The library consists of a collection of reusable interface elements organized in a way that allows developers
          to see their visual look, usage, behavior, and code.
        </p>
        <hr />
        <h5>Goals</h5>
        <ul>
          <li>Standardize application design and development across all products</li>
          <li>Deliver consistent user experiences across all products</li>
          <li>Document usage, descriptions, and code examples for reusable design element</li>
          <li>Deliver new products to market faster</li>
        </ul>
        <hr />
        <h5>Project Management</h5>
        <ul>
          <li>Use scrum agile methodology</li>
          <li>Create alignment with executive leadership on scheduling, budgeting, and resource allocations</li>
          <li>Work with product management and technical stakeholders to prioritize features</li>
          <li>Report progress and roadblocks to stakeholders</li>
        </ul>
        <ExpandableImage src='/img/snap-sprints.jpg' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/snap-patterns.jpg' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/snap-jira.png' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>UX Research</h5>
        <ul>
          <li>Audit the current state of existing applications</li>
          <li>Document and categorize common and unique interactive elements</li>
          <li>Facilitate whiteboard discovery and design sessions</li>
          <li>Define personas from user research</li>
          <li>Conduct usability testing on similar interactive elements as nessessary</li>
        </ul>
        <hr />
        <h5>UX Design</h5>
        <ul>
          <li>Facilitate group design sessions with users and stakeholders</li>
          <li>Write and prioritized user stories</li>
          <li>Write documentation for design patterns, css framework, and angular components</li>
          <li>Create wireframes and prototypes for reusable components</li>
          <li>Visual design for documentation application</li>
        </ul>
        <ExpandableImage src='/img/snap-pattern-documentation.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/snap-css-documentation.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/snap-angular-documentation.png' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>UI Development</h5>
        <ul>
          <li>HTML/CSS/Angular for reusable components</li>
          <li>UI development for documentation application</li>
          <li>Integrate UI testing automation using Jasmine &amp; Karma</li>
          <li>Develop API for documentation application using Node/Express/MongoDB</li>
        </ul>
        <hr />
      </section>
    </>
  )
}

export default arrowSnapLibrary
