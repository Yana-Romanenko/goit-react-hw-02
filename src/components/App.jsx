import { useState } from 'react'
import { useEffect } from "react";

import css from './App.module.css'
import Description from './Description'
import Feedback from './Feedback'
import Notification from './Notification'
import Options from './Options'


const savedGoodClicks =
JSON.parse(window.localStorage.getItem("saved-good-clicks")) || 0;
const savedNeutralClicks =
JSON.parse(window.localStorage.getItem("saved-neutral-clicks")) || 0;
const savedBadClicks =
JSON.parse(window.localStorage.getItem("saved-bad-clicks")) || 0;

export default function App() {
const [feedbackType, setFeedbackTypes] = useState({
  good: savedGoodClicks,
  neutral: savedNeutralClicks,
  bad: savedBadClicks,
});

const updateFeedback = (key) => {
  setFeedbackTypes((prevFeedback) => ({
    ...prevFeedback,
    [key]: prevFeedback[key] + 1,
  }));
};

const totalFeedback =
  feedbackType.good + feedbackType.neutral + feedbackType.bad;

const resetFeedback = () => {
  setFeedbackTypes({
    good: 0,
    neutral: 0,
    bad: 0,
  });
};

const positivePercentage =
  totalFeedback > 0
    ? Math.round(
        ((feedbackType.good + feedbackType.neutral) / totalFeedback) * 100
      )
    : 0;

useEffect(() => {
  window.localStorage.setItem("saved-good-clicks", feedbackType.good);
}, [feedbackType.good]);

useEffect(() => {
  window.localStorage.setItem("saved-neutral-clicks", feedbackType.neutral);
}, [feedbackType.neutral]);

useEffect(() => {
  window.localStorage.setItem("saved-bad-clicks", feedbackType.bad);
}, [feedbackType.bad]);

return (
  <div className={css.box}>
    <Description
      title="Sip Happens Café"
      content="Please leave your feedback about our service by selecting one of the
      options below."
    />
    <Options
      onTrack={updateFeedback}
      onReset={resetFeedback}
      totalFeedback={totalFeedback}
    />
    <div className={css.container}>
      {totalFeedback > 0 ? (
        <div>
          {Object.keys(feedbackType).map((key) => (
            <Feedback
              key={key}
              value={feedbackType[key]}
              name={capitalize(key)}
            />
          ))}
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positivePercentage}%</p>
        </div>
      ) : (
        <Notification message="No feedback yet." />
      )}
    </div>
  </div>
);
}

function capitalize(string) {
return string[0].toUpperCase() + string.slice(1);
}