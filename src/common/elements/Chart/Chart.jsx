import s from './Chart.module.scss';

const Chart = () => {
  return (
    <div className={s.chartBox}>
      <ul className={s.chartList}>
        <li className={s.chartItemTitle}>Свинина</li>
        <li className={s.chartItemCount}>5000 €</li>
      </ul>

      <ul
        className={s.chartList}
        style={{
          backgroundColor: '#FED9BF',
          width: '73%',
        }}
      >
        <li className={s.chartItemTitle}>Говядина</li>
        <li className={s.chartItemCount}>4500 €</li>
      </ul>

      <ul
        className={s.chartList}
        style={{
          backgroundColor: '#FED9BF',
          width: '65%',
        }}
      >
        <li className={s.chartItemTitle}>Курица</li>
        <li className={s.chartItemCount}>3200 €</li>
      </ul>

      <ul
        className={s.chartList}
        style={{
          width: '60%',
        }}
      >
        <li className={s.chartItemTitle}>Рыба</li>
        <li className={s.chartItemCount}>2100 €</li>
      </ul>

      <ul
        className={s.chartList}
        style={{
          backgroundColor: '#FED9BF',
          width: '55%',
        }}
      >
        <li className={s.chartItemTitle}>Панини</li>
        <li className={s.chartItemCount}>1800 €</li>
      </ul>

      <ul
        className={s.chartList}
        style={{
          backgroundColor: '#FED9BF',
          width: '50%',
        }}
      >
        <li className={s.chartItemTitle}>Кофе</li>
        <li className={s.chartItemCount}>1700 €</li>
      </ul>

      <ul
        className={s.chartList}
        style={{
          width: '45%',
        }}
      >
        <li className={s.chartItemTitle}>Спагетти</li>
        <li className={s.chartItemCount}>1500 €</li>
      </ul>

      <ul
        className={s.chartList}
        style={{
          backgroundColor: '#FED9BF',
          width: '40%',
        }}
      >
        <li className={s.chartItemTitle}>Шоколад</li>
        <li className={s.chartItemCount}>800 €</li>
      </ul>

      <ul
        className={s.chartList}
        style={{
          backgroundColor: '#FED9BF',
          width: '35%',
        }}
      >
        <li className={s.chartItemTitle}>Маслины</li>
        <li className={s.chartItemCount}>500 €</li>
      </ul>

      <ul
        className={s.chartList}
        style={{
          width: '30%',
        }}
      >
        <li className={s.chartItemTitle}>Зелень</li>
        <li className={s.chartItemCount}>300 €</li>
      </ul>
    </div>
  );
};

export default Chart;
