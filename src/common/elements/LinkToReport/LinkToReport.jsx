import { Link } from 'react-router-dom';
import sprite from '../../../images/svg/sprite.svg';
import s from './LinkToReport.module.scss';

const LinkToReport = () => {
  return (
    <div className={s.reportLinkBox}>
      <Link to="/report" alt="reportPage" className={s.reportLink}>
        <p className={s.reportLinkText}>Перейти к отчетам</p>
        <div className={s.reportLinkIconBox}>
          <svg className={s.reportLinkIcon}>
            <use xlinkHref={`${sprite}#chart`} />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default LinkToReport;
