import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import Button from 'common/elements/Button';
import s from './AuthForm.module.scss';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(10, 'must  be no more than 10 characters long')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const AuthForm = () => {
  const btnEnter = nanoid();
  const btnAuth = nanoid();

  // const onSubmit = (values, { resetForm }) => {
  //   resetForm();
  // };

  return (
    <div className={s.formBox}>
      <p className={s.googleText}>Вы можете авторизоваться с помощью</p>
      <p className={s.googleText}>Google Account:</p>
      <button type="submit" className={s.buttonGoogle}>
        <div className={s.googleLogo}></div>
        <p className={s.btnText}>Google</p>
      </button>
      <p className={s.googleText}>Или зайти с помощью e-mail и пароля,</p>
      <p className={s.googleText}>предварительно зарегистрировавшись:</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={onSubmit}
      >
        <Form className={s.form} noValidate>
          <label className={s.label} htmlFor={null}>
            Электронная почта:
          </label>
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="your@email.com"
            id={null}
          />
          <p className={s.error}>
            <ErrorMessage name="email" />
          </p>

          <label className={s.label} htmlFor={null}>
            Пароль
          </label>
          <Field
            className={s.inputPassword}
            type="password"
            name="password"
            placeholder="Пароль"
            id={null}
          />
          <p className={s.errorPassword}>
            <ErrorMessage name="password" />
          </p>
        </Form>
      </Formik>
      <div>
        <Button text="войти" key={btnEnter} style={{ marginRight: '15px' }} />
        <Button text="регистрация" key={btnAuth} />
      </div>
    </div>
  );
};

export default AuthForm;
