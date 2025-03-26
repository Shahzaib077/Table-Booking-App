import emailjs from "@emailjs/browser";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import MyCalendar from "./MyCalendar";
import "./TableBook.css";

const TableBook = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    endTime: "",
    table: "",
    people: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [events, setEvents] = useState([]);
  const [btnChange, setBtnChange] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const tableNumbers = ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5"];

  // Pagination state
  const [currentDay, setCurrentDay] = useState(0);

  const totalDays = 7;

  const handleNext = () => {
    if (currentDay < totalDays - 1) {
      setCurrentDay((prevDay) => prevDay + 1);
    }
  };

  const handlePrevious = () => {
    if (currentDay > 0) {
      setCurrentDay((prevDay) => prevDay - 1);
    }
  };

  const timeSlots = [
    "11:00 AM - 12:00 PM",
    "01:00 PM - 02:00 PM",
    "03:00 PM - 04:00 PM",
    "05:00 PM - 06:00 PM",
    "07:00 PM - 08:00 PM",
    "09:00 PM - 10:00 PM",
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Input change function
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //Validation for time 11:00 AM to 10:00 PM
    if (name === "time") {
      const [hours, minutes] = value.split(":").map(Number);

      // Convert the time to minutes for comparison
      const timeInMinutes = hours * 60 + minutes;
      const minTime = 11 * 60; // 11:00 AM in minutes
      const maxTime = 22 * 60; // 10:00 PM in minutes

      if (timeInMinutes < minTime || timeInMinutes > maxTime) {
        alert("Please select a time between 11:00 AM and 10:00 PM.");
        return;
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    /*Validation for time that start time does not match with end time
      and in end time must be 30 Minutes gap */
    // if (name === "endTime") {
    //   const startTime = formData.time;
    //   const endTime = value;

    //   if (!startTime) {
    //     return;
    //   }

    //   const currentTime = new Date();
    //   let hours = currentTime.getHours();
    //   const minutes = String(currentTime.getMinutes()).padStart(2, "0");
    //   const ampm = hours >= 12 ? "PM" : "AM";
    //   hours = hours % 12 || 12; // Convert to 12-hour format
    //   const formattedTime = `${hours}:${minutes} ${ampm}`;

    //   const [startHours, startMinutes] = formattedTime.split(":").map(Number);
    //   const [endHours, endMinutes] = endTime.split(":").map(Number);

    //   // Convert time to total minutes for easier comparison
    //   const startTotalMinutes = startHours * 60 + startMinutes;
    //   const endTotalMinutes = endHours * 60 + endMinutes;

    //   // Validate that end time is not equal to start time and is at least 30 minutes greater
    //   if (endTotalMinutes <= startTotalMinutes) {
    //     alert("Please select a correct range.");
    //     setFormData({
    //       name: formData.name,
    //       email: formData.email,
    //       phone: formData.phone,
    //       date: formData.date,
    //       time: formData.time,
    //       endTime: "",
    //       people: formData.people,
    //       table: formData.table,
    //       message: formData.message,
    //     });
    //   } else if (endTotalMinutes < startTotalMinutes + 30) {
    //     alert("Please select minimum 30 minutes end time range.");
    //     setFormData({
    //       name: formData.name,
    //       email: formData.email,
    //       phone: formData.phone,
    //       date: formData.date,
    //       time: formData.time,
    //       endTime: "",
    //       people: formData.people,
    //       table: formData.table,
    //       message: formData.message,
    //     });
    //   }
    // }
  };

  //Form Submition function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex != null) {
      handleUpdateFormData(e);
      return;
    }

    const isDuplicateEmailPhone = submittedData.some(
      (data) => data.email === formData.email || data.phone === formData.phone
    );

    if (isDuplicateEmailPhone) {
      alert("Slot already booked with this Email or Phone...");
      return;
    }

    const isDuplicateDateTime = submittedData.some(
      (data) =>
        data.date === formData.date &&
        data.time === formData.time &&
        data.table === formData.table
    );

    if (isDuplicateDateTime) {
      alert(
        "This date and time or table is already booked. Please choose a different slot."
      );
      return;
    }

    setSubmittedData((prevData) => [...prevData, formData]);

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      endTime: "",
      people: "",
      table: "",
      message: "",
    });

    // Create a new event
    const newEvent = {
      title: `Booked by ${formData.name}`,
      start: new Date(`${formData.date}T${formData.time}`),
      end: new Date(`${formData.date}T${formData.endTime}`),
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      date: formData.date.toString(),
      time: formData.time.toString(),
      phone: formData.phone,
      people: formData.people,
      table: formData.table,
    };

    emailjs
      .send(
        "service_qtnm05k", // Replace with your EmailJS service ID
        "template_n2ya5pi", // Replace with your EmailJS template ID
        templateParams, // Pass form data
        "uDJ0bptZDOigs3PfE" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Booking confirmed! An email has been sent.");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  //Deleting table row
  const handleDeleteRow = (i) => {
    alert("Are you sure you want to delete your slot?");
    const filteredData = submittedData.filter((_, index) => i != index);
    setSubmittedData(filteredData);

    const filteredEvents = events.filter((_, index) => i !== index);
    setEvents(filteredEvents);
  };

  //Populate form with selected row
  const handleUpdateRow = (i) => {
    const getData = submittedData[i];
    setFormData(getData);
    setBtnChange(true);
    setEditIndex(i);
    console.log(editIndex);
  };

  //Update the selected row
  const handleUpdateFormData = () => {
    const currentData = [...submittedData];
    currentData[editIndex] = formData;
    setSubmittedData(currentData);

    // Update events state
    const updatedEvent = {
      title: `Booked by ${formData.name}`,
      start: new Date(`${formData.date}T${formData.time}`),
      end: new Date(`${formData.date}T${formData.endTime}`),
    };

    const currentEvents = [...events];
    currentEvents[editIndex] = updatedEvent;
    setEvents(currentEvents);

    setEditIndex(null);
    setBtnChange(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      endTime: "",
      people: "",
      table: "",
      message: "",
    });
  };
  console.log(submittedData);
  // console.log(submittedData[0].time);
  // console.log(submittedData[0].endTime);

  return (
    <div className="book-table-container" id="tableBook">
      <div className="book-table-title">
        <h2>book a table</h2>
        <p>
          <span>book your</span>
          <span style={{ color: "#ce1212", fontWeight: "500" }}>
            {" "}
            stay with us
          </span>
        </p>
      </div>
      <div className="book-main-section">
        <div className="book-img-container"></div>
        <div className="book-form-container">
          <form onSubmit={handleSubmit}>
            <div className="inputFields">
              <div className="fields">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fields">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your Email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fields">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="Your Phone"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fields">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  placeholder="Date"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fields">
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  placeholder="Time"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fields">
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  placeholder="Time"
                  onChange={handleChange}
                  required
                />
              </div>

              <select
                name="table"
                value={formData.table}
                onChange={handleChange}
                required
                style={{ border: "1px solid #ccc"}}
              >
                <option value="">Select Table</option>
                {tableNumbers.map((table) => (
                  <option key={table} value={table}>
                    {table}
                  </option>
                ))}
              </select>

              <div className="fields">
                <input
                  type="number"
                  name="people"
                  value={formData.people}
                  placeholder="# of People"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="message">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                cols="30"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {!btnChange ? (
              <button
                type="submit"
                className="bookBtn"
                onClick={() => scrollToSection("tableData")}
              >
                Book a Table
              </button>
            ) : (
              <button
                type="submit"
                className="bookBtn"
                onClick={() => scrollToSection("tableData")}
              >
                Update
              </button>
            )}
          </form>
        </div>
      </div>

      {/* Showing Booked Slots */}
      <div className="current-calendar">
        <div className="current-title">
          <h2>Current Bookings</h2>
        </div>
        <div className="bookings" id="tableData">
          {/* <p>{submittedData}</p> */}
          <div className="all-bookings">
            <MyCalendar events={events} />

            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <button
                onClick={handlePrevious}
                disabled={currentDay === 0}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor: currentDay === 0 ? "#f0f0f0" : "#007BFF",
                  color: currentDay === 0 ? "#999" : "#fff",
                  cursor: currentDay === 0 ? "not-allowed" : "pointer",
                }}
              >
                Previous
              </button>
              <span style={{ fontWeight: "bold" }}>Day {currentDay + 1}</span>
              <button
                onClick={handleNext}
                disabled={currentDay === totalDays - 1}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor:
                    currentDay === totalDays - 1 ? "#f0f0f0" : "#007BFF",
                  color: currentDay === totalDays - 1 ? "#999" : "#fff",
                  cursor:
                    currentDay === totalDays - 1 ? "not-allowed" : "pointer",
                }}
              >
                Next
              </button>
            </div>

            <div
              style={{
                width: "95%",
                overflowX: "auto",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                margin: "auto",
                marginBottom: "60px",
              }}
            >
              <table>
                <thead>
                  <tr className="slot-table">
                    <th>Table/TimeSlot</th>
                    {timeSlots.map((slot, i) => (
                      <th key={i}>{slot}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableNumbers.map((table, tableIndex) => (
                    <tr key={tableIndex}>
                      <td style={{ fontWeight: "bold" }}>{table}</td>
                      {timeSlots.map((slot, slotIndex) => {
                        // Extract start and end time from the slot
                        const startTime = slot
                          .slice(0, 5)
                          .split(" - ")
                          .toString();
                        const endTime = slot
                          .slice(11, 16)
                          .split(" - ")
                          .toString();

                        // Check if a booking exists for this table and time slot
                        const booking = submittedData.find(
                          (data) =>
                            data.table === table &&
                            data.time === startTime &&
                            data.endTime === endTime
                        )

                        return (
                          <td
                            key={slotIndex}
                            style={{
                              backgroundColor: booking ? "#84F7FF" : "#fff",
                              textAlign: "center",
                              fontWeight: booking ? "bold" : "normal",
                              cursor: booking ? "pointer" : "default",
                            }}
                          >
                            {booking ? booking.name : "Available"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
          </div>
          <div
            className="your-bookings"
            style={{
              width: "95%",
              overflowX: "auto",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              margin: "auto",
              marginBottom: "60px",
            }}
          >
            <table
              border="1"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
                textAlign: "center",
                overflow: "hidden",
                borderRadius: "15px",
              }}
            >
              <thead style={{ backgroundColor: "#84F7FF" }}>
                <tr style={{ fontSize: "13px", border: "1px solid gray" }}>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>End Time</th>
                  <th># of People</th>
                  <th>Table #</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              {submittedData.length > 0 && (
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr
                      key={index}
                      style={{
                        fontSize: "11.6px",
                        fontWeight: "400",
                        border: "1px solid gray",
                      }}
                    >
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.date}</td>
                      <td>{data.time}</td>
                      <td>{data.endTime}</td>
                      <td>{data.people}</td>
                      <td>{data.table}</td>
                      <td>{data.message}</td>
                      <td className="del-edit">
                        <span onClick={() => handleDeleteRow(index)}>
                          <FontAwesomeIcon icon={faRemove} />
                        </span>{" "}
                        <span
                          onClick={() => {
                            handleUpdateRow(index);
                            scrollToSection("tableBook");
                          }}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </span>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
              {submittedData.length === 0 && (
                <tbody style={{ border: "1px solid #CDCECF" }}>
                  <tr
                    style={{
                      fontSize: "11.6px",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    <td
                      style={{
                        border: "none",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                      colSpan={11}
                    >
                      No Data Found!
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBook;
