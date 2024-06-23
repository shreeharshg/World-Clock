// src/WorldClock.js
import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import './WorldClock.css';


const timeZones = [
  { name: 'New York', zone: 'America/New_York' },
  { name: 'London', zone: 'Europe/London' },
  { name: 'Tokyo', zone: 'Asia/Tokyo' },
  { name: 'Sydney', zone: 'Australia/Sydney' },
  { name: 'Mumbai', zone: 'Asia/Kolkata' },
  // Add more time zones as needed
];

const WorldClock = () => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      timeZones.forEach(tz => {
        newTimes[tz.name] = moment().tz(tz.zone).format('HH:mm:ss');
      });
      setTimes(newTimes);
    };

    updateTimes();
    const intervalId = setInterval(updateTimes, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="world-clock">
      {timeZones.map(tz => (
        <div key={tz.name} className="clock">
          <h2>{tz.name}</h2>
          <p>{times[tz.name]}</p>
        </div>
      ))}
    </div>
  );
};

export default WorldClock;
