// types.ts
export type NotificationType =
  | { type: "expense"; props: NotificationExpenseProps }
  | { type: "invitation"; props: NotificationInvitationProps };

export interface NotificationExpenseProps {
  id: string;
  avatarSrc: string;
  expenseDescription: string;
  listName: string;
  amount: number;
}

export interface NotificationInvitationProps {
  id: string;
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
