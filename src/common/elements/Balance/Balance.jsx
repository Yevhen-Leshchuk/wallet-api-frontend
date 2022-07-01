import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState, useRef } from 'react';
import { authSelectors, authOperations } from 'redux/auth';

import s from './Balance.module.scss';

const Balance = ({ inputStyle, btnStyle, balanceBoxStyle }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  let balance = useSelector(authSelectors.getBalance);

  const inputValue = useRef();

  useEffect(() => {
    dispatch(authOperations.getUser());

    setValue(
      (inputValue.current =
        parseFloat(
          balance && typeof balance === 'number' ? balance : 0
        ).toFixed(2) + ' €')
    );
  }, [dispatch, balance, value]);

  const setBalance = e => {
    e.preventDefault();
    const newBalance = e.target.balance.value.split(' ')[0];
    dispatch(authOperations.updateUserBalance(newBalance));
  };

  return (
    <div className={s.balanceBox} style={balanceBoxStyle}>
      <h2 className={s.balanceTitle}>Баланс:</h2>
      <form className={s.balanceForm} onSubmit={setBalance}>
        <input
          className={s.balanceFormInput}
          style={inputStyle}
          name="balance"
          type="text"
          placeholder="00.00 €"
          autoComplete="off"
          // defaultValue={
          //   parseFloat(
          //     balance && typeof balance === 'number' ? balance : 0
          //   ).toFixed(2) + ' €'
          // }
          defaultValue={value}
        />
        <button className={s.balanceFormBtn} style={btnStyle} type="submit">
          Подтвердить
        </button>
      </form>
    </div>
  );
};

export default Balance;
