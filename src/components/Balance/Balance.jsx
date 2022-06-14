import s from './Balance.module.scss';

const Balance = () => {
  return (
    <div className={s.balanceBox}>
      <h2 className={s.balanceTitle}>Баланс:</h2>
      <form className={s.balanceForm}>
        <input
          className={s.balanceFormInput}
          name="balance"
          type="text"
          placeholder="00.00 €"
        />
        <button className={s.balanceFormBtn} type="submit">
          Подтвердить
        </button>
      </form>
    </div>
  );
};

export default Balance;
