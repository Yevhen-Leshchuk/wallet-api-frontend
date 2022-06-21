import sprite from '../../images/svg/sprite.svg';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import ReportNavTransaction from 'common/elements/ReportNavTransaction';
import s from './ReportIncomes.module.scss';

const ReportIncomes = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className={s.reportIncomesContainer}>
      {tabletMediaQuery && <ReportNavTransaction />}
      <div className={s.reportIncomesBox}>
        <ul className={s.reportIncomesList}>
          <li className={s.reportIncomesItem}>
            <p className={s.reportIncomesCount}>45000.00</p>
            <div className={s.reportIncomesIconBox}>
              <svg className={s.reportIncomesIcon}>
                <use xlinkHref={`${sprite}#salary`} />
              </svg>
            </div>
            <h2 className={s.reportIncomesTitle}>ЗП</h2>
          </li>

          <li className={s.reportIncomesItem}>
            <p className={s.reportIncomesCount}>1500.00</p>
            <div className={s.reportIncomesIconBox}>
              <svg className={s.reportIncomesIcon}>
                <use xlinkHref={`${sprite}#card`} />
              </svg>
            </div>
            <h2 className={s.reportIncomesTitle}>Доп. доход</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportIncomes;
