export type Expense = {
  creator: { name: string; photo: string };
  createdAt: Date;
  _id: string;
  creatorImageUrl: string;
  name: string;
  price: number;
  cause: string;
};
