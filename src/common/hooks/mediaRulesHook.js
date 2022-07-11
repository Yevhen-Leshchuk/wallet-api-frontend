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
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

useMediaQuery.propTypes = {
  style: PropTypes.string.isRequired,
};

export default useMediaQuery;
