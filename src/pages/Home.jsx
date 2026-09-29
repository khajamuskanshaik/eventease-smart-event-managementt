import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

function Home() {
  const events = [
    {
      title: "AI Innovation Summit 2026",
      category: "Technology",
      date: "18",
      month: "OCT",
      location: "Hyderabad, India",
      attendees: "1.2K",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Web Development Workshop",
      category: "Workshop",
      date: "24",
      month: "OCT",
      location: "Vijayawada, India",
      attendees: "350",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "College Hackathon 2026",
      category: "Hackathon",
      date: "02",
      month: "NOV",
      location: "Tenali, India",
      attendees: "800",
      price: "₹299",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              Discover unforgettable experiences
            </div>

            <h1>
              Find Events.
              <br />
              <span>Create Memories.</span>
            </h1>

            <p className="hero-description">
              Discover amazing events happening around you or create
              unforgettable experiences for your community with EventEase.
            </p>

            <div className="hero-buttons">
              <a href="#events" className="primary-btn">
                Explore Events
                <ArrowRight size={18} />
              </a>

              <a href="/create-event" className="secondary-btn">
                Create an Event
              </a>
            </div>

            <div className="hero-trust">
              <div className="avatar-group">
                <span>👩🏻</span>
                <span>👨🏻</span>
                <span>👩🏽</span>
                <span>👨🏽</span>
              </div>

              <div>
                <div className="stars">★★★★★</div>
                <small>Trusted by 10,000+ event lovers</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card">
              <CalendarDays size={20} />
              <div>
                <strong>120+</strong>
                <small>Events this month</small>
              </div>
            </div>

            <div className="main-event-card">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"
                alt="Event"
              />

              <div className="main-event-info">
                <div className="event-date">
                  <strong>18</strong>
                  <span>OCT</span>
                </div>

                <div>
                  <span className="event-category">TECHNOLOGY</span>
                  <h3>AI Innovation Summit</h3>

                  <p>
                    <MapPin size={15} />
                    Hyderabad, India
                  </p>
                </div>
              </div>

              <div className="main-event-bottom">
                <span>🔥 1.2K attending</span>
                <button>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="search-section">
        <div className="search-box">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search events, workshops, concerts..."
          />

          <button>
            Search Events
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section">
        <div className="section-container">
          <span className="section-label">EXPLORE</span>

          <div className="section-heading">
            <div>
              <h2>Browse by Category</h2>
              <p>Find events based on what you love.</p>
            </div>

            <a href="#events" className="view-all">
              View All <ArrowRight size={17} />
            </a>
          </div>

          <div className="category-grid">
            <div className="category-card">
              <div>💻</div>
              <h3>Technology</h3>
              <p>120+ Events</p>
            </div>

            <div className="category-card">
              <div>💼</div>
              <h3>Business</h3>
              <p>85+ Events</p>
            </div>

            <div className="category-card">
              <div>🎵</div>
              <h3>Music</h3>
              <p>60+ Events</p>
            </div>

            <div className="category-card">
              <div>⚽</div>
              <h3>Sports</h3>
              <p>75+ Events</p>
            </div>

            <div className="category-card">
              <div>🎓</div>
              <h3>Workshops</h3>
              <p>100+ Events</p>
            </div>

            <div className="category-card">
              <div>🎭</div>
              <h3>Cultural</h3>
              <p>55+ Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events-section" id="events">
        <div className="section-container">
          <span className="section-label">DON'T MISS OUT</span>

          <div className="section-heading">
            <div>
              <h2>Featured Events</h2>
              <p>Discover events worth putting on your calendar.</p>
            </div>

            <a href="/create-event" className="outline-btn">
              Create an Event
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="events-grid">
            {events.map((event) => (
              <div className="event-card" key={event.title}>
                <div className="event-card-image">
                  <img src={event.image} alt={event.title} />

                  <span>{event.category}</span>
                </div>

                <div className="event-card-body">
                  <div className="date-box">
                    <strong>{event.date}</strong>
                    <small>{event.month}</small>
                  </div>

                  <div className="event-card-content">
                    <h3>{event.title}</h3>

                    <p>
                      <MapPin size={15} />
                      {event.location}
                    </p>

                    <div className="event-card-footer">
                      <span>
                        <Users size={15} />
                        {event.attendees} attending
                      </span>

                      <strong>{event.price}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-grid">
          <div>
            <strong>10K+</strong>
            <span>Active Users</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Events Hosted</span>
          </div>

          <div>
            <strong>50K+</strong>
            <span>Tickets Sold</span>
          </div>

          <div>
            <strong>4.9/5</strong>
            <span>Average Rating</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="section-container">
          <div className="center-heading">
            <span className="section-label">SIMPLE & SMART</span>

            <h2>
              Everything you need to
              <span> experience more.</span>
            </h2>

            <p>
              EventEase makes discovering and managing events simple,
              fast and enjoyable.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>Discover</h3>
              <p>
                Find exciting events based on your interests and location.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>Book Instantly</h3>
              <p>
                Reserve your spot in seconds with a smooth experience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>Manage Easily</h3>
              <p>
                Organizers can manage events and attendees in one place.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">04</div>
              <h3>Enjoy Safely</h3>
              <p>
                Secure registration tools make events easier and safer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <span className="section-label light">READY TO GET STARTED?</span>

          <h2>
            Your next great experience
            <br />
            is just a click away.
          </h2>

          <p>
            Discover events you'll love or bring your own event to life.
          </p>

          <div className="cta-buttons">
            <a href="#events" className="cta-primary">
              Explore Events
              <ArrowRight size={18} />
            </a>

            <a href="/create-event" className="cta-secondary">
              Create an Event
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="footer-logo">
              <CalendarDays size={22} />
              Event<span>Ease</span>
            </div>

            <p>
              Making every event easier, smarter and more memorable.
            </p>
          </div>

          <div>
            <h4>Platform</h4>
            <a href="#events">Browse Events</a>
            <a href="#events">Categories</a>
            <a href="#events">How it works</a>
          </div>

          <div>
            <h4>Organizers</h4>
            <a href="/create-event">Create Event</a>
            <a href="/">Dashboard</a>
            <a href="/">Analytics</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="/">About Us</a>
            <a href="/">Contact</a>
            <a href="/">Privacy</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 EventEase. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

export default Home;