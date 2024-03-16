import { Expense } from "./expense";

export type ListProps = {
  _id: string;
  name: string;
  createdByUserId: string;
  createdAt: string;
  expenses: Expense[];
};
