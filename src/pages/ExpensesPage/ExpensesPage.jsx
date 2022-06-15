import ProductForm from 'components/ProductForm';
import s from './ExpensesPage.module.scss';

const ExpensesPage = () => {
  return (
    <div className={s.expensesBox}>
      <ProductForm />
    </div>
  );
};

export default ExpensesPage;
