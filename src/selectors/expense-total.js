export const getExpensesTotal = (expenses) => {
  let total = 0;

  if (expenses.length === 0) {
    return total;
  } else {
    expenses.forEach((expense) => {
      total = total + expense.amount;
    });
    return total;
  }
};
