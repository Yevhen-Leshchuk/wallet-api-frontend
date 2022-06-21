import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './Chart.module.scss';

const Chart = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className={s.chartBox}>
      <div className={s.chartBackgroundBox}>
        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Свинина</li>
          <li className={s.chartItemCount}>5000 €</li>
        </ul>

        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Говядина</li>
          <li className={s.chartItemCount}>4500 €</li>
        </ul>

        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Курица</li>
          <li className={s.chartItemCount}>3200 €</li>
        </ul>

        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Рыба</li>
          <li className={s.chartItemCount}>2100 €</li>
        </ul>

        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Панини</li>
          <li className={s.chartItemCount}>1800 €</li>
        </ul>

        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Кофе</li>
          <li className={s.chartItemCount}>1700 €</li>
        </ul>

        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Спагетти</li>
          <li className={s.chartItemCount}>1500 €</li>
        </ul>

        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Шоколад</li>
          <li className={s.chartItemCount}>800 €</li>
        </ul>

        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Маслины</li>
          <li className={s.chartItemCount}>500 €</li>
        </ul>

        <ul className={s.chartList}>
          <li className={s.chartItemTitle}>Зелень</li>
          <li className={s.chartItemCount}>300 €</li>
        </ul>
      </div>
    </div>
  );
};

export default Chart;
