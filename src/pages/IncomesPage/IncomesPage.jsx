import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductForm from 'components/ProductForm';
import Balance from 'common/elements/Balance';
import LinkToReport from 'common/elements/LinkToReport';
import NavTransaction from 'common/elements/NavTransaction';
import { IncomesList } from 'components/TransactionList';
import Brief from 'common/elements/Brief';
import Tooltip from 'common/elements/Tooltip';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
import { authSelectors } from 'redux/auth';
import s from './IncomesPage.module.scss';

const IncomesPage = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const balance = useSelector(authSelectors.getBalance);
  const incomesCategories = useSelector(
    transactionSelectors.getIncomesCategories
  );
  const briefList = useSelector(transactionSelectors.getIncomesMonthsStats);

  useEffect(() => {
    dispatch(transactionOperations.getIncomeCategories());
  }, [dispatch]);

  return (
    <div className={s.incomesBox}>
      {!balance && mobileMediaQuery && (
        <Tooltip style={{ position: 'absolute', top: '245px' }} />
      )}

      {tabletMediaQuery && (
        <>
          <div className={s.balanceBox}>
            <Balance />
            {!balance && <Tooltip />}
            <LinkToReport />
          </div>
          <NavTransaction />
        </>
      )}

      <div className={s.productFormBox}>
        <ProductForm incomesCategories={incomesCategories} />
        {tabletMediaQuery && <IncomesList />}
      </div>
      {tabletMediaQuery && <Brief briefList={briefList} />}
    </div>
  );
};

export default IncomesPage;
