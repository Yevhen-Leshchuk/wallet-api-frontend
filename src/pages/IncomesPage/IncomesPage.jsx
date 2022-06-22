import ProductForm from 'components/ProductForm';
import Balance from 'common/elements/Balance';
import LinkToReport from 'common/elements/LinkToReport';
import NavTransaction from 'common/elements/NavTransaction';
import { IncomesList } from 'components/TransactionList';
import Brief from 'common/elements/Brief';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './IncomesPage.module.scss';

const IncomesPage = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className={s.incomesBox}>
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
        <ProductForm />
        {tabletMediaQuery && <IncomesList />}
      </div>
      {tabletMediaQuery && <Brief />}
    </div>
  );
};

export default IncomesPage;
