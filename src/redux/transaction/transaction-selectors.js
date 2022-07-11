const getIncomesCategories = state => state.transaction.incomeCategories;
const getExpensesCategories = state => state.transaction.expenseCategories;

const getIncomesData = state => state.transaction.incomesData.incomes;
const getExpensesData = state => state.transaction.expensesData.expenses;

const getIncomesMonthsStats = state =>
  state.transaction.incomesData.monthsStats;
const getExpensesMonthsStats = state =>
  state.transaction.expensesData.monthsStats;

const getIsAddIncomeItem = state => state.transaction.isAddIncomeItem;
const getIsDeleteIncomeItem = state => state.transaction.isDeleteIncomeItem;

const getIsAddExpenseItem = state => state.transaction.isAddExpenseItem;
const getIsDeleteExpenseItem = state => state.transaction.isDeleteExpenseItem;

const getTransactionError = state => state.transaction.error;

const transactionSelectors = {
  getIncomesCategories,
  getExpensesCategories,
  getIncomesData,
  getExpensesData,
  getIncomesMonthsStats,
  getExpensesMonthsStats,
  getIsAddIncomeItem,
  getIsDeleteIncomeItem,
  getIsDeleteExpenseItem,
  getIsAddExpenseItem,
  getTransactionError,
};
export default transactionSelectors;
