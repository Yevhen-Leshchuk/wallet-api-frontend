import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import GoBackLink from 'common/elements/GoBackLink';
import Calendar from 'common/elements/Calendar';
import sprite from '../../images/svg/sprite.svg';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import { dateSelectors } from 'redux/date';
import { transactionOperations } from 'redux/transaction';
import { authSelectors } from 'redux/auth';
import s from './ProductForm.module.scss';

const ProductForm = ({ incomesCategories, expenseCategories }) => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const date = useSelector(dateSelectors.getSelectedDate);
  const balance = useSelector(authSelectors.getBalance);
  const location = useLocation();
  const activeLocation = location.pathname;

  const [showCategory, setShowCategory] = useState(false);
  const [categoryItem, setCategoryItem] = useState('');

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleShowCategory = () => {
    setShowCategory(!showCategory);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      default:
        return;
    }
  };

  const handleCategoryItem = event => {
    event.preventDefault();

    setCategoryItem(event.target.innerText);
    setShowCategory(!showCategory);
  };

  const formHandler = event => {
    event.preventDefault();
    const formRef = event.target;
    const formData = new FormData(formRef);
    const formValues = {};

    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const submittedformData = {
      ...formValues,
      date: date,
    };

    const amount = Number(submittedformData.amount);

    if (activeLocation === '/expenses') {
      if (amount > balance) {
        return;
        //Вставить нотификашку -"транзакция превышает баланс!"
      }
      dispatch(transactionOperations.addExpense(submittedformData));
      dispatch(transactionOperations.getExpensesData());
    } else if (activeLocation === '/incomes') {
      dispatch(transactionOperations.addIncome(submittedformData));
      dispatch(transactionOperations.getIncomesData());
    }

    resetForm();
  };

  const resetForm = () => {
    setDescription('');
    setCategoryItem('');
    setAmount('');
  };

  return (
    <>
      {mobileMediaQuery && <GoBackLink redirectTo="/mobile" />}

      <div className={s.productFormBox}>
        {tabletMediaQuery && <Calendar />}
        <form className={s.productForm} onSubmit={formHandler}>
          <input
            placeholder="Описание товара"
            type="text"
            name="description"
            className={s.productFormDescInput}
            autoComplete="off"
            autoFocus
            value={description}
            onChange={handleChange}
            required
          />
          <label className={s.productFormCategoryLabel}>
            <input
              placeholder="Категория товара"
              type="text"
              name="category"
              className={s.productFormCategoryInput}
              autoComplete="off"
              autoFocus
              value={categoryItem}
              onChange={handleChange}
              required
            />
            {!showCategory ? (
              <button
                type="button"
                className={s.arrowDownIconBox}
                onClick={handleShowCategory}
              >
                <svg className={s.arrowDownIcon}>
                  <use xlinkHref={`${sprite}#arrow-down`} />
                </svg>
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className={s.arrowUpIconBox}
                  onClick={handleShowCategory}
                >
                  <svg className={s.arrowUpIcon}>
                    <use xlinkHref={`${sprite}#arrow-up`} />
                  </svg>
                </button>
                <ul className={s.productFormListBox} id="categories">
                  {incomesCategories &&
                    incomesCategories.map(categorie => (
                      <li
                        key={categorie}
                        className={s.productFormListItem}
                        onClick={handleCategoryItem}
                      >
                        {categorie}
                      </li>
                    ))}
                  {expenseCategories &&
                    expenseCategories.map(categorie => (
                      <li
                        key={categorie}
                        className={s.productFormListItem}
                        onClick={handleCategoryItem}
                      >
                        {categorie}
                      </li>
                    ))}
                </ul>
              </>
            )}
          </label>

          <div className={s.productAmountBox}>
            <input
              className={s.productAmountInput}
              placeholder="00.00 €"
              type="number"
              name="amount"
              value={amount}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className={s.calculatorIconBox}>
              <svg className={s.calculatorIcon}>
                <use xlinkHref={`${sprite}#calculator`} />
              </svg>
            </div>
          </div>

          <div className={s.buttonInputBox}>
            <button type="submit" className={s.buttonInput}>
              Ввод
            </button>
            <button type="button" className={s.buttonClear} onClick={resetForm}>
              Очистить
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
