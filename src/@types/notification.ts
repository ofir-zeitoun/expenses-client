// types.ts
export type NotificationType =
  | { type: "expense"; props: NotificationExpenseProps }
  | { type: "invitation"; props: NotificationInvitationProps };

export interface NotificationExpenseProps {
  avatarSrc: string;
  expenseDescription: string;
  listName: string;
  amount: number;
}

export interface NotificationInvitationProps {
  avatarSrc: string;
  listName: string;
  responses: { accepted: boolean }[];
}

export interface InvitationNotificationProps {
  avatarSrc: string;
  listName: string;
  responses: { accepted: boolean }[];
}

export interface NotificationExpenseProps {
  avatarSrc: string;
  expenseDescription: string;
  listName: string;
  amount: number;
}
