import css from './Statistics.module.css';
import PropTypes from 'prop-types';
const shortid = require('shortid');

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.list}>
      <h2>Statistics: </h2>
      {Object.entries({ good, neutral, bad, total, positivePercentage }).map(([key, value]) => {
        if (key === 'positivePercentage') {
          return (
            <li key={shortid.generate()}>
              Positive feedback: <span>{value} %</span>
            </li>
          );
        }
        return (
          <li key={shortid.generate()}>
            {key}: <span>{value}</span>
          </li>
        );
      })}
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
