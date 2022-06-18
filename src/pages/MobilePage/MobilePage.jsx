import LinkToReport from 'common/elements/LinkToReport';
import Balance from 'common/elements/Balance';
import Tooltip from 'common/elements/Tooltip';
import Calendar from 'common/elements/Calendar';
import { ExpensesList } from 'components/TransactionList';
import NavTransaction from 'common/elements/NavTransaction';
import { ExpensesListItem } from 'components/TransactionListItem';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './MobilePage.module.scss';

const MobilePage = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className={s.mobileBox}>
      <LinkToReport />
      <Balance />
      <Tooltip />
      <Calendar />
      <ExpensesList />

      {mobileMediaQuery && (
        <ul className={s.expListItemBox}>
          <ExpensesListItem />
        </ul>
      )}
      <NavTransaction />
    </div>
  );
};

export default MobilePage;
