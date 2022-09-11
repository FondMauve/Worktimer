import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const interval = setInterval(() => {
      var d = new Date()
      if (d.getHours() < 10) {
        setHours('0' + d.getHours())
      } else {
        setHours(d.getHours())
      }
      if (d.getMinutes() < 10) {
        setMinutes('0' + d.getMinutes())
      } else {
        setMinutes(d.getMinutes())
      }
      if (d.getSeconds() < 10) {
        setSeconds('0' + d.getSeconds())
      } else {
        setSeconds(d.getSeconds())
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex h-screen bg-gradient-to-tl from-red-500 via-purple-500 to-blue-500 dark:from-transparent dark:bg-black bg-move'>
      <div className='text-slate-200 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-tl dark:from-red-500 dark:via-purple-500 dark:to-blue-500 font-black m-auto text-5xl md:text-7xl lg:text-9xl'>
        <span>{hours}</span>
        <span className='px-2'>:</span>
        <span>{minutes}</span>
        <span className='px-2'>:</span>
        <span>{seconds}</span>
      </div>
    </div>
  );
}

export default App;
