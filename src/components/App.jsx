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
    return JSON.parse(window.localStorage.getItem("feedback")) || initialFeedback;
  });

  const [totalFeedback, setTotalFeedback] = useState(() => {
    return feedback.good + feedback.neutral + feedback.bad;
  })

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(initialFeedback));
  }, [feedback]);

  const updateFeedback = (key) => {
    setFeedback({
      ...feedback,
      [key]: feedback[key] + 1,
    });

    setTotalFeedback(totalFeedback + 1);
  };

  const reset = () => {
    setFeedback(initialFeedback);
    setTotalFeedback(0);
  };


  const total = feedback.good + feedback.neutral + feedback.bad;

  const persentOfPositive = Math.round(((total - feedback.bad) / total) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} reset={reset} totalFeedback={totalFeedback}/>
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} total={total} persentOfPositive={persentOfPositive}/>
      )}
    </>
  );
};

export default App;