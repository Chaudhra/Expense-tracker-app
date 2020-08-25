import expensesReducer from "../../reducers/expenses";
import { expenses } from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    id: "4",
    description: "Last months rent",
    note: "",
    amount: 1500,
    createdAt: 20000,
  };

  const action = {
    type: "ADD_EXPENSE",
    expense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense with vald id", () => {
  const amount = 9999;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount: amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense when id is invalid", () => {
  const amount = 9999;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount: amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]],
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
