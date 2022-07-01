import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import ProductForm from 'components/ProductForm';
import Balance from 'common/elements/Balance';
import LinkToReport from 'common/elements/LinkToReport';
import NavTransaction from 'common/elements/NavTransaction';
import { ExpensesList } from 'components/TransactionList';
import Brief from 'common/elements/Brief';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
import s from './ExpensesPage.module.scss';

const ExpensesPage = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const expenseCategories = useSelector(
    transactionSelectors.getExpensesCategories
  );
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(transactionOperations.getExpenseCategories());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }

    navigate('/');
  }, [isLoggedIn, navigate]);

  return (
    <div className={s.expensesBox}>
      {tabletMediaQuery && (
        <>
          <div className={s.balanceBox}>
            <Balance />
            <LinkToReport />
          </div>
          <NavTransaction />
        </>
      )}

      <div className={s.productFormBox}>
        <ProductForm expenseCategories={expenseCategories} />
        {tabletMediaQuery && <ExpensesList />}
      </div>
      {tabletMediaQuery && <Brief />}
    </div>
  );
};

export default ExpensesPage;
