import { Link } from 'react-router-dom';
import Balance from 'components/Balance';
import Tooltip from 'common/elements/Tooltip';
import NavTransaction from 'common/elements/NavTransaction';
import sprite from '../../images/svg/sprite.svg';
import s from './ExpensesPage.module.scss';

const ExpensesPage = () => {
  return (
    <div className={s.expensesBox}>
      {/* <div className={s.reportLinkBox}>
        <p className={s.reportLinkText}>Перейти к отчетам</p>
        <Link to="report" alt="reportPage" className={s.reportLinkIconBox}>
          <svg className={s.reportLinkIcon}>
            <use xlinkHref={`${sprite}#chart`} />
          </svg>
        </Link>
      </div>
      <Balance />
      <Tooltip />
      <NavTransaction /> */}
    </div>
  );
};

export default ExpensesPage;
