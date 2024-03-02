import css from "./Options.module.css";

const Options = ({onTrack, onReset, totalFeedback}) => {
    return (
      <div className="{css.buttonBox}">
        <button className="{css.button}" onClick={() => onTrack("good")}>Good</button>
        <button className="{css.button}" onClick={() => onTrack("neutral")}>Neutral</button>
        <button className="{css.button}" onClick={() => onTrack("bad")}>Bad</button>
        {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
      </div>
    );
  };
  
  export default Options;