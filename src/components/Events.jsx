import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Events.css";

const Events = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // 3 items visible
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // 2 items visible
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // 1 item visible
    },
  };
  return (
    <div id="events">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={500} // Smooth transition duration
        removeArrowOnDeviceType={["tablet", "mobile"]}
        pauseOnHover={false} // Prevent pausing on hover
        centerMode={false} // Move items one by one in sequence
        slidesToSlide={1} // Move one item at a time
      >
        <div className="event event-img1">
          <div className="event-overlay">
            <div className="content">
              <h4>Custom Parties</h4>
              <div>$40</div>
              <p>We Manage Custom Parties</p>
            </div>
          </div>
        </div>
        <div className="event event-img2">
          <div className="event-overlay">
            <div className="content">
              <h4>Private Parties</h4>
              <div>$80</div>
              <p>We Manage Private Parties</p>
            </div>
          </div>
        </div>
        <div className="event event-img3">
          <div className="event-overlay">
            <div className="content">
              <h4>Birthday Parties</h4>
              <div>$120</div>
              <p>We Manage Birthday Parties</p>
            </div>
          </div>
        </div>
        <div className="event event-img4">
          <div className="event-overlay">
            <div className="content">
              <h4>Wedding Parties</h4>
              <div>$200</div>
              <p>We Manage Wedding Parties</p>
            </div>
          </div>
        </div>
      </Carousel>
      ;
      {/* <Carousel
        autoPlay // Enables auto-play
        interval={3000} // Time in ms (3 seconds)
        infiniteLoop // Allows infinite scrolling
        showThumbs={false} // Hides thumbnail navigation
        showStatus={false} // Hides the status indicator
        stopOnHover={false} // Keeps auto-play even when hovering
        transitionTime={500} // Slide transition duration in ms
      >
        <div className="event event-img1">
          <div className="event-overlay"></div>
        </div>
        <div className="event event-img2">
          <div className="event-overlay">
          </div>
        </div>
        <div className="event event-img3">
          <div className="event-overlay">
          </div>
        </div>
        <div className="event event-img4">
          <div className="event-overlay">
          </div>
        </div>
      </Carousel> */}
    </div>
  );
};

export default Events;
