import sprite from '../../images/svg/sprite.svg';
import s from './TransactionListItem.module.scss';

const IncomesListItem = ({ description, category, amount, date, _id }) => {
  return (
    <>
      <li className={s.incListItem} key={_id}>
        <ul className={s.incListItemBox}>
          <li className={s.incListItemDesc} key={description}>
            {description}
          </li>
          <li className={s.incListItemDate} key={date}>
            {date}
          </li>
          <li className={s.incListItemCategory} key={category}>
            {category}
          </li>
          <li className={s.incListItemPrice} key={amount}>
            {amount}
          </li>
          <div className={s.incListItemBtnBox}>
            <button type="submit" className={s.incListItemBtn}>
              <svg className={s.incListItemIcon}>
                <use xlinkHref={`${sprite}#delete`} />
              </svg>
            </button>
          </div>
        </ul>
      </li>
    </>
  );
};

export default IncomesListItem;
