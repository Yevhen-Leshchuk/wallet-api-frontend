import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { transactionOperations } from 'redux/transaction';
import Modal from 'common/elements/Modal';
import sprite from '../../images/svg/sprite.svg';
import s from './TransactionListItem.module.scss';

const IncomesListItem = ({ description, category, amount, date, _id }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onClick = () => {
    dispatch(transactionOperations.deleteIncomeItem(_id));
    dispatch(transactionOperations.getIncomesData());
  };

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
              onClick={toggleModal}
            >
              <svg className={s.incListItemIcon}>
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

export default IncomesListItem;
