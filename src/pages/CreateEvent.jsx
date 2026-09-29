import { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  ImagePlus,
  Upload,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [attendees, setAttendees] = useState("");
  const [price, setPrice] = useState("Free");
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !eventName ||
      !description ||
      !category ||
      !date ||
      !time ||
      !location ||
      !attendees
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title: eventName,
      description,
      category,
      date,
      time,
      location,
      attendees,
      price,
      image,
    };

    const oldEvents =
      JSON.parse(localStorage.getItem("eventease-events")) || [];

    localStorage.setItem(
      "eventease-events",
      JSON.stringify([...oldEvents, newEvent])
    );

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="success-page">
        <div className="success-card">
          <div className="success-icon">
            <CheckCircle2 size={55} />
          </div>

          <h1>Event Created Successfully!</h1>

          <p>
            Your event has been successfully published on EventEase.
          </p>

          <div className="success-buttons">
            <a href="/" className="publish-btn">
              View Events
            </a>

            <button
              className="cancel-btn"
              onClick={() => {
                setSuccess(false);
                setEventName("");
                setDescription("");
                setCategory("");
                setDate("");
                setTime("");
                setLocation("");
                setAttendees("");
                setPrice("Free");
                setImage("");
              }}
            >
              Create Another Event
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="create-event-page">

      {/* HEADER */}

      <div className="create-event-header">
        <a href="/" className="back-home">
          <ArrowLeft size={16} />
          Back to Home
        </a>

        <span className="section-label">
          EVENT MANAGEMENT
        </span>

        <h1>Create Your Event</h1>

        <p>
          Bring your event to life and connect with your audience.
        </p>
      </div>


      {/* FORM */}

      <div className="create-event-container">

        <form
          className="event-form"
          onSubmit={handleSubmit}
        >

          {/* BASIC INFORMATION */}

          <div className="form-section">

            <div className="form-section-title">
              <div className="form-number">
                01
              </div>

              <div>
                <h2>Basic Information</h2>
                <p>
                  Tell people what your event is about.
                </p>
              </div>
            </div>


            <label>
              Event Name <span>*</span>
            </label>

            <input
              type="text"
              value={eventName}
              onChange={(e) =>
                setEventName(e.target.value)
              }
              placeholder="Example: AI Innovation Summit 2026"
            />


            <label>
              Event Description <span>*</span>
            </label>

            <textarea
              rows="5"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Describe your event, activities, speakers, and what attendees can expect..."
            />


            <label>
              Category <span>*</span>
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              <option value="">
                Select a category
              </option>

              <option value="Technology">
                Technology
              </option>

              <option value="Workshop">
                Workshop
              </option>

              <option value="Hackathon">
                Hackathon
              </option>

              <option value="Music">
                Music
              </option>

              <option value="Sports">
                Sports
              </option>

              <option value="Cultural">
                Cultural
              </option>

              <option value="Business">
                Business
              </option>
            </select>

          </div>


          {/* EVENT DETAILS */}

          <div className="form-section">

            <div className="form-section-title">
              <div className="form-number">
                02
              </div>

              <div>
                <h2>Event Details</h2>
                <p>
                  When and where will your event happen?
                </p>
              </div>
            </div>


            <div className="form-grid">

              <div>

                <label>
                  <CalendarDays size={15} />
                  Date <span>*</span>
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                />

              </div>


              <div>

                <label>
                  <Clock size={15} />
                  Time <span>*</span>
                </label>

                <input
                  type="time"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                />

              </div>

            </div>


            <label>
              <MapPin size={15} />
              Location <span>*</span>
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              placeholder="Example: Vignan University, Vadlamudi"
            />


            <label>
              <Users size={15} />
              Maximum Attendees <span>*</span>
            </label>

            <input
              type="number"
              min="1"
              value={attendees}
              onChange={(e) =>
                setAttendees(e.target.value)
              }
              placeholder="Example: 500"
            />


            <label>
              Ticket Price
            </label>

            <select
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
            >
              <option value="Free">
                Free
              </option>

              <option value="₹199">
                ₹199
              </option>

              <option value="₹299">
                ₹299
              </option>

              <option value="₹499">
                ₹499
              </option>

              <option value="₹999">
                ₹999
              </option>
            </select>

          </div>


          {/* IMAGE */}

          <div className="form-section">

            <div className="form-section-title">
              <div className="form-number">
                03
              </div>

              <div>
                <h2>Event Image</h2>
                <p>
                  Add an attractive image for your event.
                </p>
              </div>
            </div>


            <label className="upload-area">

              {image ? (
                <div className="image-preview">

                  <img
                    src={image}
                    alt="Event preview"
                  />

                  <div className="change-image">
                    <Upload size={18} />
                    Change Image
                  </div>

                </div>
              ) : (
                <>
                  <div className="upload-icon">
                    <ImagePlus size={32} />
                  </div>

                  <strong>
                    Upload Event Image
                  </strong>

                  <span>
                    PNG, JPG or WEBP
                  </span>

                  <div className="choose-image">
                    <Upload size={16} />
                    Choose Image
                  </div>
                </>
              )}

              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImage}
              />

            </label>

          </div>


          {/* BUTTONS */}

          <div className="form-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                window.history.back()
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="publish-btn"
            >
              <CheckCircle2 size={18} />
              Publish Event
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CreateEvent;