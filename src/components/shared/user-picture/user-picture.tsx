import { Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./user-picture.css";

type Props = {
  creatorImageUrl?: string;
  creatorName?: string;
};

export const UserPicture = ({ creatorImageUrl, creatorName }: Props) => {
  return creatorImageUrl ? (
    <Tooltip title={creatorName}>
      <img className="user-icon" src={creatorImageUrl} alt={creatorName} />
    </Tooltip>
  ) : (
    <Tooltip title={creatorName}>
      <div className="user-icon-wrapper">
        <UserOutlined className="user-icon" />
      </div>
    </Tooltip>
  );
};
