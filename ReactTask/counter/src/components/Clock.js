import React, { Component } from "react";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
  
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export class Clock extends Component {
  constructor(props) {
    const date = new Date();
    super(props);
    this.state = {
      hours: date
        .getHours()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 }),
      minutes: date
        .getMinutes()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 }),
      seconds: date
        .getSeconds()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 }),
      day: weekday[date.getUTCDay()],
      month: months[date.getMonth()],
      date: date.getDate(),
      year: date.getFullYear(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      let date = new Date();
      this.setState({
        hours: date
          .getHours()
          .toLocaleString("en-US", { minimumIntegerDigits: 2 }),
        minutes: date
          .getMinutes()
          .toLocaleString("en-US", { minimumIntegerDigits: 2 }),
        seconds: date
          .getSeconds()
          .toLocaleString("en-US", { minimumIntegerDigits: 2 }),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  render() {
    return (
      <div>
        <h1>Clock using class components</h1>
        <p>
          {this.state.month} {this.state.date} {this.state.year}
        </p>
        <p>{this.state.day}</p>
        <h1>
          {this.state.hours} : {this.state.minutes} : {this.state.seconds}
        </h1>
        <span>{this.state.hours >= 12 ? " PM" : " AM"}</span> 
      </div>
    );
  }
}

export default Clock;
