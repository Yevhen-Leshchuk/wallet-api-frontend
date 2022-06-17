import ProductForm from 'components/ProductForm';
import Balance from 'common/elements/Balance';
import LinkToReport from 'common/elements/LinkToReport';
import NavTransaction from 'common/elements/NavTransaction';
import { ExpensesList } from 'components/TransactionList';
import Brief from 'common/elements/Brief';
import s from './ExpensesPage.module.scss';

const ExpensesPage = () => {
  return (
    <div className={s.expensesBox}>
      <div className={s.balanceBox}>
        <Balance />
        <LinkToReport />
      </div>
      <NavTransaction />
      <div className={s.productFormBox}>
        <ProductForm />
        <ExpensesList />
      </div>
      <Brief />
    </div>
  );
};

export default ExpensesPage;
