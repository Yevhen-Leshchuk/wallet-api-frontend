const getIncomesCategories = state => state.transaction.incomeCategories;
const getExpensesCategories = state => state.transaction.expenseCategories;

const getIncomesData = state => state.transaction.incomesData.incomes;
const getExpensesData = state => state.transaction.expensesData.expenses;

const getIncomesMonthsStats = state =>
  state.transaction.incomesData.monthsStats;
const getExpensesMonthsStats = state =>
  state.transaction.expensesData.monthsStats;

const transactionSelectors = {
  getIncomesCategories,
  getExpensesCategories,
  getIncomesData,
  getExpensesData,
  getIncomesMonthsStats,
  getExpensesMonthsStats,
};
export default transactionSelectors;
