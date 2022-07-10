import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
import { IncomesListItem } from 'components/TransactionListItem';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './TransactionList.module.scss';

const IncomesList = () => {
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const incomesList = useSelector(transactionSelectors.getIncomesData);
  const reverseIncomes = incomesList?.map(income => income).reverse();

  const isAddIncomeItem = useSelector(transactionSelectors.getIsAddIncomeItem);
  const isDeleteIncomeItem = useSelector(
    transactionSelectors.getIsDeleteIncomeItem
  );

  useEffect(() => {
    dispatch(transactionOperations.getIncomesData());
  }, [dispatch, isAddIncomeItem, isDeleteIncomeItem]);

  return (
    <>
      {tabletMediaQuery && (
        <>
          <ul className={s.incListHeader}>
            <li className={s.incListHeaderItem} key={'Дата'}>
              Дата
            </li>
            <li className={s.incListHeaderItem} key={'Описание'}>
              Описание
            </li>
            <li className={s.incListHeaderItem} key={'Категория'}>
              Категория
            </li>
            <li className={s.incListHeaderItem} key={'Сумма'}>
              Сумма
            </li>
          </ul>
          <div className={s.incListBox}>
            <TransitionGroup component="ul" className={s.incListItemBox}>
              {reverseIncomes &&
                reverseIncomes.map(income => (
                  <CSSTransition key={income._id} timeout={500} classNames={s}>
                    <IncomesListItem id={income._id} {...income} />
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </div>
        </>
      )}
    </>
  );
};

export default IncomesList;
