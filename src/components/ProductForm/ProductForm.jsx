import { useState } from 'react';
import GoBackLink from 'common/elements/GoBackLink';
import Calendar from 'common/elements/Calendar';
import sprite from '../../images/svg/sprite.svg';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './ProductForm.module.scss';

const ProductForm = ({ incomesCategories, expenseCategories }) => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');

  const [showCategory, setShowCategory] = useState(false);

  const handleShowCategory = () => {
    setShowCategory(!showCategory);
  };
  return (
    <>
      {mobileMediaQuery && <GoBackLink redirectTo="/mobile" />}

      <div className={s.productFormBox}>
        {tabletMediaQuery && <Calendar />}
        <form className={s.productForm} onSubmit={null}>
          <input
            placeholder="Описание товара"
            type="text"
            name="description"
            className={s.productFormDescInput}
            autoComplete="off"
            autoFocus
            value={null}
            onChange={null}
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
              value={null}
              onChange={null}
              onClick={null}
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
                      <li key={categorie} className={s.productFormListItem}>
                        {categorie}
                      </li>
                    ))}
                  {expenseCategories &&
                    expenseCategories.map(categorie => (
                      <li key={categorie} className={s.productFormListItem}>
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
              value={null}
              onChange={null}
              required
              autoComplete="off"
            />
            <div className={s.calculatorIconBox}>
              <svg className={s.calculatorIcon}>
                <use xlinkHref={`${sprite}#calculator`} />
              </svg>
            </div>
          </div>
        </form>
      </div>

      <button type="submit" className={s.buttonInput} onClick={() => null}>
        Ввод
      </button>

      <button type="submit" className={s.buttonClear} onClick={() => null}>
        Очистить
      </button>
    </>
  );
};

export default ProductForm;
