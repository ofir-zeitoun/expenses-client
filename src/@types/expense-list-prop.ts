import { Expense } from "./expense";

export type ExpenseLIstType = {
  totalExpenses: string;
  _id: string;
  name: string;
  creator: string;
  createdAt: string;
  expenses: Expense[];
};
