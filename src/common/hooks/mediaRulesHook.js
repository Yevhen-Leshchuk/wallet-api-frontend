import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

useMediaQuery.propTypes = {
  style: PropTypes.string.isRequired,
};

export default useMediaQuery;

// после импорта в компоненте создается переменная следующего формата:
//   let isPageWideMobile = useMediaQuery("(min-width: 320px)");
// имя переменной произвольное, медиа-правило выставляетя самостоятельно
// Рендер компонента производится стандартно:
//   {isPageWideMobile && <p>Width 320</p>}
