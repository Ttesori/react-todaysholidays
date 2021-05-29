import Blurb from './Blurb';

export default function Aside() {
  return (
    <section>
      <Blurb title="About This Site">
        <p>
          Today's Holidays uses <a href="https://todaysholidays.herokuapp.com">Today's Holidays API</a>, aggregated from several sources, including <a href="https://www.timeanddate.com/holidays/fun/">Time and Date</a> and <a href="https://www.holidayscalendar.com/categories/weird/">Holidays Calendar</a>. Notice we're missing a holiday? Fill out the Submit a Holiday form and we'll get it added!
        </p>
      </Blurb>
      <Blurb title="Submit a Holiday">
        <form netlify>
          <div className="form-fields">
            <label htmlFor="add-date">Holiday Date</label>
            <input type="date" id="add-date" placeholder="Enter holiday date" />
          </div>
          <div className="form-fields">
            <label htmlFor="add-name">Holiday Name</label>
            <input type="text" id="add-name" placeholder="Enter holiday name" />
          </div>
          <div className="form-fields">
            <label htmlFor="add-info">Where can we find more info?</label>
            <input type="text" id="add-info" placeholder="Link to more information" />
          </div>
          <button>Send Form</button>
        </form>
      </Blurb>
      <Blurb title="Connect with Us">
        <p>Want a digest of this week's holidays delivered directly to your inbox every Monday? Join the mailing list below &mdash; we send out the holidays and nothing else! </p>
        <div className="form-fields">
          <label htmlFor="list-email">Email</label>
          <input type="email" id="list-email" placeholder="Enter email address..." />
          <button>Join List</button>
        </div>
      </Blurb>
    </section>
  )
}

