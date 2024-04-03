import { NotificationExpense } from "./notification-expense";
import { NotificationInvitation } from "./notification-invitation";
import { NotificationType } from "../../../../@types/notification";
import "./notification.css";

const notifications: NotificationType[] = [
  {
    type: "expense",
    props: {
      id: "12341",
      avatarSrc: "",
      expenseDescription: "Coffee",
      listName: "Office Expenses",
      amount: 100,
    },
  },
  {
    type: "invitation",
    props: {
      id: "12349",
      avatarSrc: "",
      listName: "Project X",
      responses: [{ accepted: true }, { accepted: false }],
    },
  },
  {
    type: "expense",
    props: {
      id: "12342",
      avatarSrc: "",
      expenseDescription: "Groceries",
      listName: "Office Expenses",
      amount: 100,
    },
  },
  {
    type: "invitation",
    props: {
      id: "12343",
      avatarSrc: "",
      listName: "Project X",
      responses: [{ accepted: true }, { accepted: false }],
    },
  },
  {
    type: "expense",
    props: {
      id: "12344",
      avatarSrc: "",
      expenseDescription: "Utilities",
      listName: "Office Expenses",
      amount: 100,
    },
  },
  {
    type: "invitation",
    props: {
      id: "12347",
      avatarSrc: "",
      listName: "Project X",
      responses: [{ accepted: true }, { accepted: false }],
    },
  },
  {
    type: "invitation",
    props: {
      id: "12327",
      avatarSrc: "",
      listName: "Project Y",
      responses: [{ accepted: true }, { accepted: false }],
    },
  },
  {
    type: "expense",
    props: {
      id: "22341",
      avatarSrc: "",
      expenseDescription: "Coffee",
      listName: "Office Expenses",
      amount: 100,
    },
  },
  {
    type: "invitation",
    props: {
      id: "22349",
      avatarSrc: "",
      listName: "Project X",
      responses: [{ accepted: true }, { accepted: false }],
    },
  },
  {
    type: "expense",
    props: {
      id: "22342",
      avatarSrc: "",
      expenseDescription: "Groceries",
      listName: "Office Expenses",
      amount: 100,
    },
  },
  {
    type: "invitation",
    props: {
      id: "22343",
      avatarSrc: "",
      listName: "Project X",
      responses: [{ accepted: true }, { accepted: false }],
    },
  },
  {
    type: "expense",
    props: {
      id: "32344",
      avatarSrc: "",
      expenseDescription: "Utilities",
      listName: "Office Expenses",
      amount: 100,
    },
  },
];

export const Notification = () => (
  <div className="notifications-container">
    {notifications.map((notification) => {
      if (notification.type === "expense") {
        const { id, avatarSrc, expenseDescription, listName, amount } =
          notification.props;
        return (
          <div className="notification-item" key={id}>
            <NotificationExpense
              id={id}
              avatarSrc={avatarSrc}
              expenseDescription={expenseDescription}
              listName={listName}
              amount={amount}
            />
          </div>
        );
      } else if (notification.type === "invitation") {
        const { id, avatarSrc, listName, responses } = notification.props;
        return (
          <div className="notification-item" key={id}>
            <NotificationInvitation
              avatarSrc={avatarSrc}
              listName={listName}
              responses={responses}
            />
          </div>
        );
      }
      return null;
    })}
  </div>
);
