const getIncomesTransactionPeriodData = state => state.report.incomes;
const getExpensesTransactionPeriodData = state => state.report.expenses;

const getIncomeTotal = state => state.report.incomes.incomeTotal;
const getExpenseTotal = state => state.report.expenses.expenseTotal;

const getIncomesData = state => state.report.incomes.incomesData;
const getExpensesData = state => state.report.expenses.expensesData;

const transactionSelectors = {
  getIncomesTransactionPeriodData,
  getExpensesTransactionPeriodData,
  getIncomeTotal,
  getExpenseTotal,
  getIncomesData,
  getExpensesData,
};
export default transactionSelectors;
