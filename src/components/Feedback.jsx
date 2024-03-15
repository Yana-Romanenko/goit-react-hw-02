
const Feedback = ({ feedback, total, persentOfPositive }) => {
   return ( 
    <>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {total}</p>
    <p>Positive: {persentOfPositive}%</p>
  </>
);
  }
  
  export default Feedback;