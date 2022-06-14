import LinkToReport from 'common/elements/LinkToReport';
import Balance from 'components/Balance';
import Tooltip from 'common/elements/Tooltip';
import NavTransaction from 'common/elements/NavTransaction';
import s from './MobilePage.module.scss';

const MobilePage = () => {
  return (
    <div className={s.mobileBox}>
      <LinkToReport />
      <Balance />
      <Tooltip />
      <NavTransaction />
    </div>
  );
};

export default MobilePage;
