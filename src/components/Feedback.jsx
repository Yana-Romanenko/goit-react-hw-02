
const Feedback = ({ feedback, total, percentOfPositive }) => {
   return ( 
    <>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {total}</p>
    <p>Positive: {percentOfPositive}%</p>
  </>
);
  }
  
  export default Feedback;