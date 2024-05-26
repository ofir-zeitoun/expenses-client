import { SortOrder } from "../../../@types/sortOrderTypes";
import { useExpenseLists } from "./useExpenseLists";

export const useExpenseListsWithStatus = (
  offset: number,
  limit: number,
  sortOrder: SortOrder
) => {
  const { data, isLoading, error } = useExpenseLists(offset, limit, sortOrder);

  return { data, isLoading, error };
};
