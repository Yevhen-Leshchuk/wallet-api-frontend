import GoBackLink from 'common/elements/GoBackLink';
import CurrentPeriod from 'common/elements/CurrentPeriod';
import Balance from 'common/elements/Balance';
import Budget from 'common/elements/Budget';
import ReportNavTransaction from 'common/elements/ReportNavTransaction';
import ReportIncomes from 'components/ReportIncomes';
import Chart from 'common/elements/Chart';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import s from './ReportIncomesPage.module.scss';

const ReportIncomesPage = () => {
  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  const tabletMediaQuery = useMediaQuery('(min-width: 768px)');
  const desktopMediaQuery = useMediaQuery('(min-width: 1280px)');

  return (
    <div className={s.reportIncomesPageBox}>
      <div className={s.goBackBox}>
        <GoBackLink redirectTo="/incomes" />
      </div>
      <CurrentPeriod style={{ order: '3' }} />
      {mobileMediaQuery && (
        <Balance
          balanceBoxStyle={{ marginBottom: '30px' }}
          inputStyle={{
            width: '183px',
            borderRadius: '22px 22px 22px 22px',
          }}
          btnStyle={{ display: 'none' }}
        />
      )}

      {tabletMediaQuery && !desktopMediaQuery && (
        <Balance
          balanceBoxStyle={{
            marginBottom: '0px',
            order: '2',
            marginRight: '80px',
          }}
          inputStyle={{
            width: '125px',
            borderRadius: '22px 22px 22px 22px',
          }}
          btnStyle={{ display: 'none' }}
        />
      )}

      {desktopMediaQuery && (
        <Balance
          balanceBoxStyle={{
            marginBottom: '0px',
            order: '2',
            marginRight: '225px',
          }}
          inputStyle={{
            width: '125px',
            borderRadius: '22px 22px 22px 22px',
          }}
          btnStyle={{ display: 'block' }}
        />
      )}

      <Budget />
      {mobileMediaQuery && <ReportNavTransaction />}
      <ReportIncomes />
      <Chart />
    </div>
  );
};

export default ReportIncomesPage;
