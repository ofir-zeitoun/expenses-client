import React from "react";
import "./notification.css";
import { NotificationExpense } from "./notification-expense";
import { NotificationInvitation } from "./notification-invitation";

type NotificationType =
  | { type: "expense"; props: NotificationExpenseProps }
  | { type: "invitation"; props: NotificationInvitationProps };

interface NotificationExpenseProps {
  avatarSrc: string;
  expenseDescription: string;
  listName: string;
  amount: number;
}

interface NotificationInvitationProps {
  avatarSrc: string;
  listName: string;
  responses: { accepted: boolean }[];
}

const notifications: NotificationType[] = [
  {
    type: "expense",
    props: {
      avatarSrc: "",
      expenseDescription: "Coffee",
      listName: "Office Expenses",
      amount: 100,
    },
  },
  {
    type: "expense",
    props: {
      avatarSrc: "",
      expenseDescription: "Groceries",
      listName: "Office Expenses",
      amount: 100,
    },
  },
  {
    type: "invitation",
    props: {
      avatarSrc: "",
      listName: "Project X",
      responses: [{ accepted: true }, { accepted: false }],
    },
  },
  {
    type: "expense",
    props: {
      avatarSrc: "",
      expenseDescription: "Utilities",
      listName: "Office Expenses",
      amount: 100,
    },
  },
];

export const Notification = () => (
  <div className="notifications-container">
    {notifications.map((notification, index) => {
      if (notification.type === "expense") {
        const { avatarSrc, expenseDescription, listName, amount } =
          notification.props;
        return (
          <div className="notification-item" key={index}>
            <NotificationExpense
              avatarSrc={avatarSrc}
              expenseDescription={expenseDescription}
              listName={listName}
              amount={amount}
            />
          </div>
        );
      } else if (notification.type === "invitation") {
        const { avatarSrc, listName, responses } = notification.props;
        return (
          <div className="notification-item" key={index}>
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