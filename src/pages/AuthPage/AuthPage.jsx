import AuthForm from 'components/AuthForm';
import Cabbage from '../../images/img/auth-page/auth_page-small_cabbage-tablet.png';
import s from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <div className={s.authBox}>
      <AuthForm />
      <div className={s.doubleCabbageBox}>
        <img src={Cabbage} className={s.doubleCabbageImg} alt="Cabbage" />
      </div>
    </div>
  );
};

export default AuthPage;
