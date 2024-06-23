import React, { useState } from 'react';
import '../components_styling/RateSlider.css';
import { useEffect } from 'react';

function RatingSlider({ userName }) {
  const [moodScore, setMoodScore] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load the saved mood score from localStorage if it exists
    const savedMoodScore = localStorage.getItem('moodScore');
    if (savedMoodScore !== null) {
      const parsedScore = parseInt(savedMoodScore, 10);
      setMoodScore(parsedScore);
      updateMessage(parsedScore);
    }
  }, []);
  const updateMessage = (score) => {
    let newMessage = '';

    if (score >= 0 && score <= 4) {
      newMessage = `${userName}, you seem sad. You could complete any remaining tasks or chat with the community or maybe just do something that will make you feel better. Come back in some time and let us know your mood again!`;
    } else if (score === 5) {
      newMessage = `${userName}, you seem okay but could do better. Complete your daily tasks to feel more relaxed!`;
    } else if (score >= 6 && score <= 10) {
      newMessage = `${userName}, you seem happy. Just keep doing what you have planned out for the day!`;
    }

    setMessage(newMessage);
  };

  const handleSliderChange = (event) => {
    if (event && event.target) {
      const score = parseInt(event.target.value, 10);
      setMoodScore(score);
      updateMessage(score);
      // Save the mood score to localStorage
      localStorage.setItem('moodScore', score);
    }
  };

  return (
    <div className="rating-slider-container">
      <label htmlFor="mood-slider">Rate your mood</label>
      <input
        type="range"
        id="mood-slider"
        min="0"
        max="10"
        value={moodScore}
        onChange={handleSliderChange}
        list='mood-ticks'
      />
      <datalist id="mood-ticks">
        {[...Array(11).keys()].map(value => (
          <option key={value} value={value} label={value.toString()} />
        ))}
      </datalist>
      <div className="mood-score">Mood Score: {moodScore}</div>
      {message && <div className="mood-message">{message}</div>}
    </div>
  );
};

export default RatingSlider;
