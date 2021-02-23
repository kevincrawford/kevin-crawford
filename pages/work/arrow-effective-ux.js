import ExpandableImage from '../../components/ExpandableImage'

const arrowEffectiveUx = () => {
  return (
    <>
      <section className='banner-principles'>
        <div className='container max-600 py-5'>
          <h1>
            Principles for Effective
            <br />
            Project UX and UI
          </h1>
          <h5 className='ovo mb-4'>"Presentation"</h5>
          <div>
            <strong>Company: </strong>Arrow Electronics
          </div>
          <div>
            <strong>Project Scope: </strong>1 weeks
          </div>
          <div>
            <strong>Roles: </strong>UX Research, Leadership, Presentation
          </div>
        </div>
      </section>
      <section className='container max-600 py-4'>
        <h5>Overview</h5>
        <p>
          Arrow leadership asked the newly formed User Experience team to provide perspective on how UX can be
          effectively integrated into the software development lifecycle and to clarify responsibilities, deliverables,
          and collaboration of team members including Analysts, User Experience, and User Interface Designers.
        </p>
        <ExpandableImage src='/img/lecture-01.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/lecture-02.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/lecture-03.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/lecture-04.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/lecture-06.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/lecture-07.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/lecture-08.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/lecture-09.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/lecture-10.png' alt='Research' cls='img-fluid expandable mb-3' />
        <ExpandableImage src='/img/lecture-12.png' alt='Research' cls='img-fluid expandable mb-3' />
        <hr />
        <h5>Results</h5>
        <ul>
          <li>Introductions lead to many new friendships across our project teams</li>
          <li>The teams gained a better understaing of UX involvement beyond design</li>
          <li>Improvement in collaboration, morale, and gained many UX advocates in IT</li>
        </ul>
        <hr />
      </section>
    </>
  )
}

export default arrowEffectiveUx
