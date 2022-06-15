import sprite from '../../images/svg/sprite.svg';
import s from './TransactionListItem.module.scss';

const ExpensesListItem = () => {
  return (
    <>
      <li className={s.expListItem}>
        <ul className={s.expListItemBox}>
          <li className={s.expListItemDesc}>Пиво</li>
          <li className={s.expListItemDate}>14.06.2022</li>
          <li className={s.expListItemCategory}>Продукты</li>
          <li className={s.expListItemPrice}>- 20 €</li>
          <li className={s.expListItemIconBox}>
            <svg className={s.expListItemIcon}>
              <use xlinkHref={`${sprite}#delete`} />
            </svg>
          </li>
        </ul>
      </li>

      <li className={s.expListItem}>
        <ul className={s.expListItemBox}>
          <li className={s.expListItemDesc}>Пиво</li>
          <li className={s.expListItemDate}>14.06.2022</li>
          <li className={s.expListItemCategory}>Продукты</li>
          <li className={s.expListItemPrice}>- 20 €</li>
          <li className={s.expListItemIconBox}>
            <svg className={s.expListItemIcon}>
              <use xlinkHref={`${sprite}#delete`} />
            </svg>
          </li>
        </ul>
      </li>

      <li className={s.expListItem}>
        <ul className={s.expListItemBox}>
          <li className={s.expListItemDesc}>Пиво</li>
          <li className={s.expListItemDate}>14.06.2022</li>
          <li className={s.expListItemCategory}>Продукты</li>
          <li className={s.expListItemPrice}>- 20 €</li>
          <li className={s.expListItemIconBox}>
            <svg className={s.expListItemIcon}>
              <use xlinkHref={`${sprite}#delete`} />
            </svg>
          </li>
        </ul>
      </li>

      <li className={s.expListItem}>
        <ul className={s.expListItemBox}>
          <li className={s.expListItemDesc}>Пиво</li>
          <li className={s.expListItemDate}>14.06.2022</li>
          <li className={s.expListItemCategory}>Продукты</li>
          <li className={s.expListItemPrice}>- 20 €</li>
          <li className={s.expListItemIconBox}>
            <svg className={s.expListItemIcon}>
              <use xlinkHref={`${sprite}#delete`} />
            </svg>
          </li>
        </ul>
      </li>
    </>
  );
};

export default ExpensesListItem;
