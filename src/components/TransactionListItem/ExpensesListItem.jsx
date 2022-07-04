import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { transactionOperations } from 'redux/transaction';
import Modal from 'common/elements/Modal';
import sprite from '../../images/svg/sprite.svg';
import s from './TransactionListItem.module.scss';

const ExpensesListItem = ({ description, category, amount, date, _id }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onClick = () => {
    dispatch(transactionOperations.deleteExpenseItem(_id));
    dispatch(transactionOperations.getExpensesData());
  };

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
            <button
              type="submit"
              className={s.expListItemBtn}
              onClick={toggleModal}
            >
              <svg className={s.expListItemIcon}>
                <use xlinkHref={`${sprite}#delete`} />
              </svg>
            </button>
          </div>
        </ul>
      </li>
      {showModal && (
        <Modal onClose={toggleModal} onClick={onClick} text="Вы уверены?" />
      )}
    </>
  );
};

export default ExpensesListItem;
