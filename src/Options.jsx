import css from "./Options.module.css";

const Options = ({updateFeedback, reset, totalFeedback}) => {
    return (
      <div className="{css.buttonBox}">
        <button className="{css.button}" onClick={() => updateFeedback("good")}>Good</button>
        <button className="{css.button}" onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button className="{css.button}" onClick={() => updateFeedback("bad")}>Bad</button>
        {totalFeedback > 0 && <button onClick={reset}>Reset</button>}
      </div>
    );
  };
  
  export default Options;