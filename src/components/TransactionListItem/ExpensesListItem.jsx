import sprite from '../../images/svg/sprite.svg';
import s from './TransactionListItem.module.scss';

const ExpensesListItem = ({ description, category, amount, date, _id }) => {
  return (
    <>
      <li className={s.expListItem} key={_id}>
        <ul className={s.expListItemBox}>
          <li className={s.expListItemDesc} key={description}>
            {description}
          </li>
          <li className={s.expListItemDate} key={date}>
            {date}
          </li>
          <li className={s.expListItemCategory} key={category}>
            {category}
          </li>
          <li className={s.expListItemPrice} key={amount}>
            {`- ${amount}`}
          </li>
          <div className={s.expListItemBtnBox}>
            <button type="submit" className={s.expListItemBtn}>
              <svg className={s.expListItemIcon}>
                <use xlinkHref={`${sprite}#delete`} />
              </svg>
            </button>
          </div>
        </ul>
      </li>
    </>
  );
};

export default ExpensesListItem;
