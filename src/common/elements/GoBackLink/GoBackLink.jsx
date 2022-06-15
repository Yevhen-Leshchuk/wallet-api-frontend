import { Link } from 'react-router-dom';
import sprite from '../../../images/svg/sprite.svg';
import s from './GoBackLink.module.scss';

const GoBackLink = ({ redirectTo = '/', alt = 'mobilePage' }) => {
  return (
    <div className={s.goBackLinkBox}>
      <Link to={redirectTo} alt={alt} className={s.goBackLink}>
        <svg className={s.goBackLinkIcon}>
          <use xlinkHref={`${sprite}#backspace`} />
        </svg>
      </Link>
    </div>
  );
};

export default GoBackLink;
