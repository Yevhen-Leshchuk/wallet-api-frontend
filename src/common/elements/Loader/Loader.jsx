import { FallingLines } from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.LoaderBox}>
      <FallingLines
        ariaLabel="loading-indicator"
        color="#FC842D"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
