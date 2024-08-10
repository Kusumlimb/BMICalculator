import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (e) => {
    e.preventDefault(); // Prevent form submission and page reload

    if (weight === 0 || height === 0) {
      alert('Please enter valid weight and height');
      return;
    }

    const calculatedBmi = (weight / (height * height)) * 703;
    setBmi(calculatedBmi.toFixed(1));

    if (calculatedBmi < 25) {
      setMessage("You're underweight");
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setMessage("You have a healthy weight");
    } else {
      setMessage("You're overweight");
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label htmlFor="weight">weight (lbs):</label>
            <input
              type="text"
              id="weight"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="height">height (feet):</label>
            <input
              type="text"
              id="height"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
