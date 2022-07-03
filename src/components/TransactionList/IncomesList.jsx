import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
import { IncomesListItem } from 'components/TransactionListItem';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './TransactionList.module.scss';

const IncomesList = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');

  const dispatch = useDispatch();
  const incomesList = useSelector(transactionSelectors.getIncomesData);

  useEffect(() => {
    dispatch(transactionOperations.getIncomesData());
  }, [dispatch]);

  // console.log(incomesList);
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
            <ul className={s.incListItemBox}>
              {incomesList &&
                incomesList.map(income => (
                  <IncomesListItem key={income._id} {...income} />
                ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default IncomesList;
