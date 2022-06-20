import GoBackLink from 'common/elements/GoBackLink';
import CurrentPeriod from 'common/elements/CurrentPeriod';
import Balance from 'common/elements/Balance';
import Budget from 'common/elements/Budget';
import ReportNavTransaction from 'common/elements/ReportNavTransaction';
import ReportExpenses from 'components/ReportExpenses';
import Chart from 'common/elements/Chart';
import s from './ReportPage.module.scss';

const ReportPage = () => {
  return (
    <div className={s.reportPageBox}>
      <GoBackLink redirectTo="/expenses" />
      <CurrentPeriod />
      <Balance
        balanceBoxStyle={{ marginBottom: '30px' }}
        inputStyle={{
          width: '183px',
          borderRadius: '22px 22px 22px 22px',
        }}
        btnStyle={{ display: 'none' }}
      />
      <Budget />
      <ReportNavTransaction />
      <ReportExpenses />
      <Chart />
    </div>
  );
};

export default ReportPage;
