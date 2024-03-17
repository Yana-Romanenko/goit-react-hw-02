import { useState } from 'react'
import { useEffect } from "react";

import css from './App.module.css'
import Description from './Description'
import Feedback from './Feedback'
import Notification from './Notification'
import Options from './Options'


const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(window.localStorage.getItem("feedback")) || feedback;
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (key) => {
    setFeedback({
      ...feedback,
      [key]: feedback[key] + 1,
    });
  };

  const reset = () => {
    setFeedback(initialFeedback);
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  const persentOfPositive = Math.round(((feedback.good + feedback.neutral) / total) * 100);;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} reset={reset} totalFeedback={total}/>
      {total === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} total={total} persentOfPositive={persentOfPositive}/>
      )}
    </>
  );
};

export default App;