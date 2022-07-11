import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
import { ExpensesListItem } from 'components/TransactionListItem';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './TransactionList.module.scss';

const ExpensesList = () => {
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const expensesList = useSelector(transactionSelectors.getExpensesData);
  const reverseExpenses = expensesList?.map(expense => expense).reverse();

  const isAddExpenseItem = useSelector(
    transactionSelectors.getIsAddExpenseItem
  );
  const isDeleteExpenseItem = useSelector(
    transactionSelectors.getIsDeleteExpenseItem
  );

  useEffect(() => {
    dispatch(transactionOperations.getExpensesData());
  }, [dispatch, isAddExpenseItem, isDeleteExpenseItem]);

  return (
    <>
      {tabletMediaQuery && (
        <>
          <ul className={s.expListHeader}>
            <li className={s.expListHeaderItem} key={'Дата'}>
              Дата
            </li>
            <li className={s.expListHeaderItem} key={'Описание'}>
              Описание
            </li>
            <li className={s.expListHeaderItem} key={'Категория'}>
              Категория
            </li>
            <li className={s.expListHeaderItem} key={'Сумма'}>
              Сумма
            </li>
          </ul>
          <div className={s.expListBox}>
            <TransitionGroup component="ul" className={s.expListItemBox}>
              {reverseExpenses &&
                reverseExpenses.map(expense => (
                  <CSSTransition key={expense._id} timeout={500} classNames={s}>
                    <ExpensesListItem id={expense._id} {...expense} />
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </div>
        </>
      )}
    </>
  );
};

export default ExpensesList;
