import sprite from '../../images/svg/sprite.svg';
import s from './TransactionListItem.module.scss';

const IncomesListItem = () => {
  return (
    <>
      <li className={s.incListItem}>
        <ul className={s.incListItemBox}>
          <li className={s.incListItemDesc}>Моя зп</li>
          <li className={s.incListItemDate}>21.06.2022</li>
          <li className={s.incListItemCategory}>ЗП</li>
          <li className={s.incListItemPrice}> 2000.00 €</li>
          <li className={s.incListItemBtnBox}>
            <button type="submit" className={s.incListItemBtn}>
              <svg className={s.incListItemIcon}>
                <use xlinkHref={`${sprite}#delete`} />
              </svg>
            </button>
          </li>
        </ul>
      </li>

      <li className={s.incListItem}>
        <ul className={s.incListItemBox}>
          <li className={s.incListItemDesc}>% остаток на карте</li>
          <li className={s.incListItemDate}>12.06.2022</li>
          <li className={s.incListItemCategory}>Доп. доход</li>
          <li className={s.incListItemPrice}>317.29 €</li>
          <li className={s.incListItemBtnBox}>
            <button type="submit" className={s.incListItemBtn}>
              <svg className={s.incListItemIcon}>
                <use xlinkHref={`${sprite}#delete`} />
              </svg>
            </button>
          </li>
        </ul>
      </li>
    </>
  );
};

export default IncomesListItem;
