import { Expense } from "./expense";

export interface ExpenseListType {
  totalExpenses: number;
  _id: string;
  name: string;
  creator: string;
  createdAt: string;
  expenses: Expense[];
  users_ids: string[];
}

export interface ExpenseListHeaderProps {
  listId: string;
  listName: string;
  expenseTotal: string;
  onDelete: (id: string) => void;
}

export interface ExpenseListsResponse {
  data: ExpenseListType[];
  total: number;
}

export interface AddExpenseListVariables {
  name: string;
}
