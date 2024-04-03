import PropTypes from 'prop-types';

var RandomColor = Math.floor(Math.random() * 16777215).toString(16);

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            key={stat.id}
            className="item"
            style={{ backgroundColor: '#' + RandomColor }}
          >
            <span className="label">{stat.label}</span>
            <span key={stat.id} className="percentage">
              {stat.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
