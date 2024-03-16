import { Expense } from "./expense";

export type ExpenseList = {
  id: string;
  name: string;
  createdByUserId: string;
  createdAt: string;
  expenses: Expense[];
};
