import { useState } from 'react';
import GoBackLink from 'common/elements/GoBackLink';
import Button from 'common/elements/Button';
import sprite from '../../images/svg/sprite.svg';
import s from './ProductForm.module.scss';

const ProductForm = () => {
  const [showCategory, setShowCategory] = useState(false);

  const handleShowCategory = () => {
    setShowCategory(!showCategory);
  };
  return (
    <>
      <GoBackLink redirectTo="/mobile" />
      <div className={s.productFormBox}>
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
                  <li className={s.productFormListItem}>Транспорт</li>
                  <li className={s.productFormListItem}>Одежда</li>
                  <li className={s.productFormListItem}>Продукты</li>
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
      <Button text="Ввод" style={{ marginRight: '15px' }} />
      <Button text="Очистить" />
    </>
  );
};

export default ProductForm;
