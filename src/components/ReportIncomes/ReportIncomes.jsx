import { useSelector } from 'react-redux';
import sprite from '../../images/svg/sprite.svg';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import ReportNavTransaction from 'common/elements/ReportNavTransaction';
import { reportSelectors } from 'redux/report';
import s from './ReportIncomes.module.scss';

const ReportIncomes = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const incomesData = useSelector(reportSelectors.getIncomesData);

  return (
    <div className={s.reportIncomesContainer}>
      {tabletMediaQuery && <ReportNavTransaction />}
      <div className={s.reportIncomesBox}>
        <ul className={s.reportIncomesList}>
          {incomesData &&
            Object.entries(incomesData).map(item => (
              <li className={s.reportIncomesItem} key={item[0]}>
                <p className={s.reportIncomesCount}>{item[1].total}</p>
                <div className={s.reportIncomesIconBox}>
                  <svg className={s.reportIncomesIcon}>
                    <use xlinkHref={`${sprite}#${item[0]}`} />
                  </svg>
                </div>
                <h2 className={s.reportIncomesTitle}>{item[0]}</h2>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ReportIncomes;
