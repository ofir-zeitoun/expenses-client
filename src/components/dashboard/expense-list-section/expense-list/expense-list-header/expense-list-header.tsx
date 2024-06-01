import { Dropdown, message } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  DeleteFilled,
  MoreOutlined,
} from "@ant-design/icons";
import "./expense-list-header.css";

export const ExpenseListHeader = ({
  listId,
  listName,
  expenseTotal,
  onDelete,
}: {
  listId: string;
  listName: string;
  expenseTotal: string;
  onDelete: (id: string) => void;
}) => {
  const items = [
    {
      key: "invite",
      icon: <UserOutlined />,
      label: "Invite",
    },
    {
      key: "permissions",
      icon: <SettingOutlined />,
      label: "Permissions",
    },
    {
      key: "delete",
      icon: <DeleteFilled />,
      label: "Remove List",
      className: "menu-remove",
      onClick: () => {
        if (!listId) {
          message.error("Invalid list ID");
          return;
        }
        onDelete(listId);
      },
    },
  ];

  return (
    <div className="expense-list-header">
      <div className="list-name-and-price">
        <h2 className="list-name">{listName || "List"}</h2>
      </div>

      <div className="list-header-actions">
        <div className="total-price">{expenseTotal + "$" || "0"}</div>
        <div className="list-options-icon">
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <MoreOutlined />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
