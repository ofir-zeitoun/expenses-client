import { ExpenseItem } from "./expense-item";
import { ExpenseLIstType } from "../../../@types/expense-list-prop";
import { ExpensesHeader } from "./expenses-header";
import { ExpenseListHeader } from "./expense-list-header";
import "./expense-list.css";

export const ExpenseList = ({ list }: { list: ExpenseLIstType }) => {
  {
    /* TODO: */
  }
  // const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  // const [currentPage, setCurrentPage] = useState(1);
  // const {
  //   data: expenses,
  //   isLoading,
  //   error,
  // } = useExpenses(token, (currentPage - 1) * 10, 10, sortOrder);

  // const toggleSortOrder = () => {
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="expenses-list">
      <ExpenseListHeader
        listName={list.name}
        expenseTotal={list.expenseTotal.toFixed(2)}
      />
      {/* TODO: */}
      {/* <Button
        icon={
          sortOrder === "asc" ? (
            <SortAscendingOutlined />
          ) : (
            <SortDescendingOutlined />
          )
        }
        onClick={toggleSortOrder}
      >
        Sort
      </Button> */}
      <ExpensesHeader />
      <div className="sperated-expenses-list" />
      {list.expenses?.map((expense, index) => (
        <ExpenseItem
          key={expense._id}
          expense={expense}
          className={index % 2 === 0 ? "expense-item even" : "expense-item odd"}
        />
      ))}
      <div>
        {/* TODO */}
        {/* <Button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button onClick={() => setCurrentPage((p) => p + 1)}>Next</Button> */}
      </div>
    </div>
  );
};
