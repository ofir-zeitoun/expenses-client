import { UserOutlined } from "@ant-design/icons";
import "./user-picture.css";

type Props = {
  creatorImageUrl?: string;
};

export const UserPicture = ({ creatorImageUrl }: Props) => {
  return creatorImageUrl ? (
    <img className="expense-icon" src={creatorImageUrl} alt="Creator" />
  ) : (
    <div className="user-icon-wrapper">
      <UserOutlined className="user-icon" />
    </div>
  );
};
