import HashLoader from 'react-spinners/HashLoader';
import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.LoaderBox}>
      <HashLoader color="#FC842D" size={80} speedMultiplier={1} />
    </div>
  );
};

export default Loader;
