import { Link } from 'react-router-dom';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import sprite from '../../../images/svg/sprite.svg';
import s from './GoBackLink.module.scss';

const GoBackLink = ({ redirectTo = '/', alt = 'mobilePage' }) => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className={s.goBackLinkBox}>
      <Link to={redirectTo} alt={alt} className={s.goBackLink}>
        <svg className={s.goBackLinkIcon}>
          <use xlinkHref={`${sprite}#backspace`} />
        </svg>
        {tabletMediaQuery && (
          <p className={s.goBackText}>Вернуться на главную</p>
        )}
      </Link>
    </div>
  );
};

export default GoBackLink;
