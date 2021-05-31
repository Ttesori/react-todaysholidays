import Blurb from './Blurb';

export default function Aside() {
  return (
    <section className="tih-aside">
      <div className="container">
        <Blurb title="About This Site">
          <p>
            Today's Holidays uses <a href="https://todaysholidays.herokuapp.com">Today's Holidays API</a>, which aggregates data from several sources, including <a href="https://www.timeanddate.com/holidays/fun/" target="_blank" rel="noreferrer">Time and Date</a> and <a href="https://www.holidayscalendar.com/categories/weird/" target="_blank" rel="noreferrer">Holidays Calendar</a>.</p>
          <p>Notice we're missing a holiday? Fill out the Submit a Holiday form and we'll get it added!
        </p>
        </Blurb>
        <Blurb title="Submit a Holiday">
          <form name="form-submit-holiday" className="form-submit-holiday" method="post">
            <input type="hidden" name="form-name" value="form-submit-holiday" />
            <div className="form-fields">
              <label htmlFor="add-date" >Holiday Date</label>
              <input type="date" name="add-date" placeholder="Enter holiday date" className="form-control" />
            </div>
            <div className="form-fields">
              <label htmlFor="add-name">Holiday Name</label>
              <input type="text" name="add-name" className="form-control" placeholder="Enter holiday name" />
            </div>
            <div className="form-fields">
              <label htmlFor="add-info">Where can we find more info?</label>
              <input type="text" className="form-control" name="add-info" placeholder="Link to more information" />
            </div>
            <button className="btn btn-submit-holiday">Send Form</button>
          </form>
        </Blurb>
        <Blurb title="Weekly Holidays &mdash; Delivered!">
          <p>Want a digest of this week's holidays delivered directly to your inbox every Monday? Join the mailing list below &mdash; we send out the holidays and nothing else! </p>
          <form method="post" name="form-list" className="form-list form-fields">
            <input type="hidden" name="form-name" value="form-list" />
            <label htmlFor="list-email" className="label-email">Email</label>
            <input type="email" name="list-email" placeholder="Enter email address..." />
            <button className="btn btn-submit-list">Join List</button>
          </form>
        </Blurb>
      </div>

    </section>
  )
}

