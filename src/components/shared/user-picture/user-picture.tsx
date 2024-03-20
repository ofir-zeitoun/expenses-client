import { UserOutlined } from "@ant-design/icons";
import "./user-picture.css";
const UserPicture = ({ creatorImageUrl }: { creatorImageUrl?: string }) => {
  return creatorImageUrl ? (
    <img className="expense-icon" src={creatorImageUrl} alt="Creator" />
  ) : (
    <div className="user-icon-wrapper">
      <UserOutlined className="user-icon" />
    </div>
  );
};

export default UserPicture;
