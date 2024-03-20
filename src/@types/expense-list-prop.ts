import { Expense } from "./expense";

export type ExpenseLIstType = {
  expenseTotal: string;
  _id: string;
  name: string;
  creator: string;
  createdAt: string;
  expenses: Expense[];
};
