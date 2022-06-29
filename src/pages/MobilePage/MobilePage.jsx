import { useDispatch, useSelector } from 'react-redux';
import LinkToReport from 'common/elements/LinkToReport';
import Balance from 'common/elements/Balance';
import Tooltip from 'common/elements/Tooltip';
import Calendar from 'common/elements/Calendar';
import { ExpensesList } from 'components/TransactionList';
import NavTransaction from 'common/elements/NavTransaction';
import {
  ExpensesListItem,
  IncomesListItem,
} from 'components/TransactionListItem';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import { authSelectors } from 'redux/auth';
import s from './MobilePage.module.scss';

const MobilePage = () => {
  let balance = useSelector(authSelectors.getBalance);
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  console.log(balance);

  return (
    <div className={s.mobileBox}>
      <LinkToReport />
      <Balance />
      {!balance && <Tooltip />}
      <Calendar />
      <ExpensesList />

      {mobileMediaQuery && (
        <ul className={s.expListItemBox}>
          <ExpensesListItem />
          <IncomesListItem />
        </ul>
      )}
      <NavTransaction />
    </div>
  );
};

export default MobilePage;
