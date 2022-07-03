import { useDispatch } from 'react-redux';
import { transactionOperations } from 'redux/transaction';
import sprite from '../../images/svg/sprite.svg';
import s from './TransactionListItem.module.scss';

const IncomesListItem = ({ description, category, amount, date, _id }) => {
  const dispatch = useDispatch();

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
            <button
              type="submit"
              className={s.incListItemBtn}
              onClick={() => {
                dispatch(transactionOperations.deleteIncomeItem(_id));
                dispatch(transactionOperations.getIncomesData());
              }}
            >
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
