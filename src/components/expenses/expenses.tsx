import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import fetchExpenses from "./fetch-expenses";
import { ExpenseItem } from "./expense-item";
import "./expenses.css";

export const Expenses = () => {
  const { getAccessTokenSilently } = useAuth0();

  const {
    data: expenses,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      return fetchExpenses(token);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      {expenses?.map((item) => (
        <ExpenseItem key={item._id} item={item} />
      ))}
    </div>
  );
};
