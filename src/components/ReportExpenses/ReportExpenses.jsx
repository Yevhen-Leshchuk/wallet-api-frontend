import sprite from '../../images/svg/sprite.svg';
import s from './ReportExpenses.module.scss';

const ReportExpenses = () => {
  return (
    <div className={s.reportExpensesBox}>
      <ul className={s.reportExpensesList}>
        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>5000.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#prodacts`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Продукты</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>200.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#cocktail`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Алкоголь</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>800.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#kite`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Развлечение</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>900.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#hands-holding-heart`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Здоровье</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>2000.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#car`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Транспорт</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>1500.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#couch`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Всё для дома</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>800.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#tools`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Техника</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>2200.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#invoice`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>коммуналка, связь</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>1800.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#clay`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Спорт, хобби</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>2400.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#book`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Образование</h2>
        </li>

        <li className={s.reportExpensesItem}>
          <p className={s.reportExpensesCount}>3000.00</p>
          <div className={s.reportExpensesIconBox}>
            <svg className={s.reportExpensesIcon}>
              <use xlinkHref={`${sprite}#ufo`} />
            </svg>
          </div>
          <h2 className={s.reportExpensesTitle}>Прочее</h2>
        </li>
      </ul>
    </div>
  );
};

export default ReportExpenses;
