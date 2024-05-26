// types.ts
export type NotificationType =
  | { type: "expense"; props: NotificationExpenseProps }
  | { type: "invitation"; props: NotificationInvitationProps };

export interface NotificationExpenseProps {
  id: string;
  avatarSrc: string;
  expenseDescription: string;
  listName: string;
  price: number;
}

export interface NotificationInvitationProps {
  id: string;
  avatarSrc: string;
  listName: string;
  responses: { accepted: boolean }[];
}
