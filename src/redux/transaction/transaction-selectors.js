const getIncomesCategories = state => state.transaction.incomeCategories;
const getExpensesCategories = state => state.transaction.expenseCategories;

const transactionSelectors = { getIncomesCategories, getExpensesCategories };
export default transactionSelectors;
