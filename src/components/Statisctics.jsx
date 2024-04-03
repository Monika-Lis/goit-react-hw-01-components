import PropTypes from 'prop-types';
import css from '../css/Statisctics.module.css';

var RandomColor = Math.floor(Math.random() * 16777215).toString(16);

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{ backgroundColor: '#' + RandomColor }}
          >
            <span className={css.label}>{stat.label}</span>
            <span key={stat.id} className={css.percentage}>
              {stat.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
