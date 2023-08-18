
import React, { useState, useReducer } from "react";
import "../Styles/Booking.css";

// Reducer function to manage available times for each date
const timeReducer = (state, action) => {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      return { ...state, [action.date]: action.availableTimes };
    default:
      return state;
  }
};

function Booking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occ, setOcc] = useState("");

  // Initialize available times state using useReducer
  const [availableTimes, dispatch] = useReducer(timeReducer, {});

  // Update available times based on selected date
  const handleDateChange = (selectedDate) => {
    const selectedAvailableTimes = getAvailableTimesForDate(selectedDate);
    dispatch({
      type: "SET_AVAILABLE_TIMES",
      date: selectedDate,
      availableTimes: selectedAvailableTimes,
    });
    setDate(selectedDate);
    setTime("");
  };
  const getAvailableTimesForDate = (selectedDate) => {
    // to be fetched available times from backend
    
    return ["18:00", "19:00", "20:00"];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    console.log("submitted");
  };

  return (
    <div className="booking-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="date">Date of Visit:</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="time">Choose Time</label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Select Time</option>
              {availableTimes[date]?.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occ}
              onChange={(e) => setOcc(e.target.value)}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
          <div>
            <input
              disabled={!date || !time}
              type="submit"
              value="Make Your Reservation"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Booking;
