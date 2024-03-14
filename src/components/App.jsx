import { useState } from 'react'
import { useEffect } from "react";

import css from './App.module.css'
import Description from './Description'
import Feedback from './Feedback'
import Notification from './Notification'
import Options from './Options'


const feedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [obj, setObj] = useState(() => {
    return JSON.parse(window.localStorage.getItem("feedback")) || feedback;
  });

  const [totalFeedback, setTotalFeedback] = useState(() => {
    return obj.good + obj.neutral + obj.bad;
  })

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(obj));
  }, [obj]);

  const updateFeedback = (key) => {
    setObj({
      ...obj,
      [key]: obj[key] + 1,
    });

    setTotalFeedback(totalFeedback + 1);
  };

  const reset = () => {
    setObj(feedback);
    setTotalFeedback(0);
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} reset={reset} totalFeedback={totalFeedback}/>
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={obj} />
      )}
    </>
  );
};

export default App;