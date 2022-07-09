import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
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
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [action, setAction] = useState('');

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    navigate('/expenses');
  }, [isLoggedIn, navigate]);

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
      {/* <p className={s.googleText}>Вы можете авторизоваться c помощью</p>
      <p className={s.googleText}>Google Account:</p>
      <button
        type="submit"
        className={s.buttonGoogle}
        onClick={() => dispatch(authOperations.googleLogIn())}
      >
        <div className={s.googleLogo}></div>
        <p className={s.btnText}>Google</p>
      </button> */}
      <div className={s.logoBox}>
        <svg className={s.logoIcon}>
          <use xlinkHref={`${sprite}#cabbage`} />
        </svg>
      </div>
      {/* <p className={s.googleText}>Зайдите c помощью e-mail и пароля,</p>
      <p className={s.googleText}>предварительно зарегистрировавшись:</p> */}

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
