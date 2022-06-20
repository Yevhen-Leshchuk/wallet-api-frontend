import s from './Balance.module.scss';

const Balance = ({ inputStyle, btnStyle, balanceBoxStyle }) => {
  return (
    <div className={s.balanceBox} style={balanceBoxStyle}>
      <h2 className={s.balanceTitle}>Баланс:</h2>
      <form className={s.balanceForm}>
        <input
          className={s.balanceFormInput}
          style={inputStyle}
          name="balance"
          type="text"
          placeholder="00.00 €"
          autoComplete="off"
        />
        <button className={s.balanceFormBtn} style={btnStyle} type="submit">
          Подтвердить
        </button>
      </form>
    </div>
  );
};

export default Balance;
