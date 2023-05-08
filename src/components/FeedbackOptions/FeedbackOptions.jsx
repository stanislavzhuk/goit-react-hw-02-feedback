import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const shortid = require('shortid');

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttons = Object.entries(options);
  
  return (
    <div className={css.container}>
      {buttons.map(([name]) => (
        <button
          key={shortid.generate()}
          className={css.button}
          type="button"
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};