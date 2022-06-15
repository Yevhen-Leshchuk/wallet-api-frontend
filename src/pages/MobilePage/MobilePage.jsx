import LinkToReport from 'common/elements/LinkToReport';
import Balance from 'common/elements/Balance';
import Tooltip from 'common/elements/Tooltip';
import Calendar from 'common/elements/Calendar';
import { ExpensesList } from 'components/TransactionList';
import NavTransaction from 'common/elements/NavTransaction';
import s from './MobilePage.module.scss';

const MobilePage = () => {
  return (
    <div className={s.mobileBox}>
      <LinkToReport />
      <Balance />
      <Tooltip />
      <Calendar />
      <ExpensesList />
      <NavTransaction />
    </div>
  );
};

export default MobilePage;
