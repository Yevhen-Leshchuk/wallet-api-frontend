import { IncomesListItem } from 'components/TransactionListItem';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './TransactionList.module.scss';

const IncomesList = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {tabletMediaQuery && (
        <>
          <ul className={s.incListHeader}>
            <li className={s.incListHeaderItem}>Дата</li>
            <li className={s.incListHeaderItem}>Описание</li>
            <li className={s.incListHeaderItem}>Категория</li>
            <li className={s.incListHeaderItem}>Сумма</li>
          </ul>
          <div className={s.incListBox}>
            <ul className={s.incListItemBox}>
              <IncomesListItem />
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default IncomesList;
