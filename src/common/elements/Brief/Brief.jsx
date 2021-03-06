import PropTypes from 'prop-types';
import s from './Brief.module.scss';

const Brief = ({ briefList }) => {
  return (
    <div className={s.briefBox}>
      <h2 className={s.briefListItemHeader}>Сводка</h2>
      <ul className={s.briefList}>
        {briefList &&
          Object.entries(briefList)
            .filter(([key, value]) => value !== 'N/A')
            .map(([key, value]) => (
              <li className={s.briefListItem} key={key}>
                <p className={s.briefListItemText}>{key}</p>
                <p className={s.briefListItemCount}>{value}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

Brief.propTypes = {
  briefList: PropTypes.object,
};

export default Brief;
