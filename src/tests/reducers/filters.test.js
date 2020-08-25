import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = "Rent";
  const action = {
    type: "SET_TEXT_FILTER",
    text: text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe("Rent");
});

test("should set startDate filter", () => {
  const endDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate: endDate,
  };
  const state = filtersReducer(undefined, action);
  // moment is an object so we use .toEqual to compare
  expect(state.startDate).toEqual(endDate);
});

test("should set endDate filter", () => {
  const startDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate: startDate,
  };
  const state = filtersReducer(undefined, action);
  // moment is an object so we use .toEqual to compare
  expect(state.endDate).toEqual(startDate);
});
