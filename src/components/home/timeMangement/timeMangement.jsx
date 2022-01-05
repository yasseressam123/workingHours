import React, { useState, useEffect } from "react";
import "../home.css";
import axios from "axios";

const TimeMangement = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setUserData({ ...data });
      });
  }, []);
  const [amount, setAmount] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [startBreak, setStartBreak] = useState(0);
  const [endBreak, setEndBreak] = useState(0);

  const handleStartTime = (event) => {
    console.log("hh", event.target.value);
    setStartTime(event.target.value);
  };
  const handleEndTime = (event) => {
    if (startTime < event.target.value) {
      console.log("yes");
      let cal =
        Number(event.target.value.split(":")[0]) +
        Number(event.target.value.split(":")[1] / 60) -
        (Number(startTime.split(":")[0]) +
          Number(startTime.split(":")[1] / 60));
      cal = cal.toFixed(2);
      setAmount(cal);
    }
    console.log("hh", event.target.value);
    setEndTime(event.target.value);
  };
  const handleStartBreak = (event) => {
    setStartBreak(event.target.value);
  };
  const handleEndBreak = (event) => {
    setEndBreak(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let workingHours = {
      startTime: startTime,
      endTime: endTime,
      break: {
        startTime: startBreak,
        endTime: endBreak,
      },
      totalWorkingHours: amount,
    };
    console.log("working", workingHours);
    let userId = localStorage.getItem("userId");
    let data = [...userData.data];
    data.push(workingHours);
    axios
      .put(`http://localhost:3000/users/${userId}/`, {
        ...userData,
        data : [...data]
      })
      .then((resp) => {
        console.log(resp.data);
        alert("Done")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="time-mangment">
        <div className="row">
          <div>
            <p>Expected Hours : 8:00hr</p>
            <p>Amount of hours : {amount}hr</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Start Time</label>
              <input type="time" required onChange={handleStartTime}></input>
            </div>
            <div className="break">
              <label htmlFor="">Break</label>
              <div>
                <label htmlFor="">from</label>
                <input type="time" onChange={handleStartBreak} />
              </div>
              <div>
                <label htmlFor="">to</label>
                <input type="time" onChange={handleEndBreak} />
              </div>
            </div>
            <div>
              <label htmlFor="">End Time</label>
              <input type="time" required onChange={handleEndTime}></input>
            </div>
            <div className="d-flex justify-content-end my-2">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TimeMangement;
