import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import sprite from '../../images/svg/sprite.svg';
import s from './AuthForm.module.scss';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'password" length must be at least 8 characters long')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const AuthForm = () => {
  const [action, setAction] = useState('');

  const dispatch = useDispatch();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const onSubmit = (values, { resetForm }) => {
    if (action === 'register') {
      dispatch(authOperations.register(values));
    } else if (action === 'login') {
      dispatch(authOperations.logIn(values));
    }
    resetForm();
  };

  return (
    <div className={s.formBox}>
      <div className={s.logoBox}>
        <svg className={s.logoIcon}>
          <use xlinkHref={`${sprite}#cabbage`} />
        </svg>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={s.form} noValidate>
          <label className={s.label} htmlFor={emailInputId}>
            Электронная почта:
          </label>
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="your@email.com"
            id={emailInputId}
          />
          <p className={s.error}>
            <ErrorMessage name="email" />
          </p>

          <label className={s.label} htmlFor={passwordInputId}>
            Пароль
          </label>
          <Field
            className={s.inputPassword}
            type="password"
            name="password"
            placeholder="Пароль"
            id={passwordInputId}
          />
          <p className={s.errorPassword}>
            <ErrorMessage name="password" />
          </p>
          <div>
            <button
              type="submit"
              className={s.buttonEnter}
              onClick={() => setAction('login')}
            >
              Войти
            </button>

            <button
              type="submit"
              className={s.buttonAuth}
              onClick={() => setAction('register')}
            >
              Регистрация
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
