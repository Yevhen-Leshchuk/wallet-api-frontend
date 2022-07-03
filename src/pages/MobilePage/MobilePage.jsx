import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
import LinkToReport from 'common/elements/LinkToReport';
import Balance from 'common/elements/Balance';
import Tooltip from 'common/elements/Tooltip';
import Calendar from 'common/elements/Calendar';
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
  const incomesList = useSelector(transactionSelectors.getIncomesData);
  const expensesList = useSelector(transactionSelectors.getExpensesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperations.getIncomesData());
    dispatch(transactionOperations.getExpensesData());
  }, [dispatch]);

  return (
    <div className={s.mobileBox}>
      <LinkToReport />
      <Balance />
      {!balance && <Tooltip />}
      <Calendar />

      {mobileMediaQuery && (
        <ul className={s.expListItemBox}>
          {expensesList &&
            expensesList.map(expense => (
              <ExpensesListItem key={expense._id} {...expense} />
            ))}
          {incomesList &&
            incomesList.map(income => (
              <IncomesListItem key={income._id} {...income} />
            ))}
        </ul>
      )}
      <NavTransaction />
    </div>
  );
};

export default MobilePage;
