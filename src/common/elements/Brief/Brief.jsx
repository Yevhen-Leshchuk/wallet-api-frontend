import s from './Brief.module.scss';

const Brief = () => {
  return (
    <div className={s.briefBox}>
      <ul className={s.briefList}>
        <li
          className={s.briefListItem}
          style={{
            justifyContent: 'center',
          }}
        >
          <p
            className={s.briefListText}
            style={{
              fontWeight: '700',
              textTransform: 'uppercase',
              color: '#000000',
            }}
          >
            Сводка
          </p>
        </li>
        <li className={s.briefListItem}>
          <p className={s.briefListText}>Январь</p>
          <p className={s.briefListText}>10.000</p>
        </li>
        <li className={s.briefListItem}>
          <p className={s.briefListText}>Февраль</p>
          <p className={s.briefListText}>18.000</p>
        </li>
        <li className={s.briefListItem}>
          <p className={s.briefListText}>Март</p>
          <p className={s.briefListText}>15.000</p>
        </li>
        <li className={s.briefListItem}>
          <p className={s.briefListText}>Апрель</p>
          <p className={s.briefListText}>22.000</p>
        </li>
        <li className={s.briefListItem}>
          <p className={s.briefListText}>Май</p>
          <p className={s.briefListText}>08.000</p>
        </li>
        <li className={s.briefListItem}>
          <p className={s.briefListText}>Январь</p>
          <p className={s.briefListText}>10.000</p>
        </li>
      </ul>
    </div>
  );
};

export default Brief;
