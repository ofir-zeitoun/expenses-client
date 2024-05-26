import { Dropdown } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  DeleteFilled,
  MoreOutlined,
} from "@ant-design/icons";
import "./expense-list-header.css";

export const ExpenseListHeader = ({
  listName,
  expenseTotal,
  toggleSortOrder,
}: {
  listName: string;
  expenseTotal: string;
  toggleSortOrder: () => void;
}) => {
  const items = [
    {
      key: "invite",
      icon: <UserOutlined />,
      label: "Invite",
    },
    {
      key: "Permissions",
      icon: <SettingOutlined />,
      label: "Permissions ",
    },
    {
      key: "delete",
      icon: <DeleteFilled />,
      label: "Remove List",
      className: "menu-Remove",
      onClick: () => console.log("test logout"),
    },
  ];

  return (
    <div className="expense-list-header">
      <h2 className="list-name">{listName || "List"}</h2>
      <div className="list-header-actions">
        <div className="total-price">{expenseTotal + "$" || "0"}</div>
        <button className="sort-button" onClick={toggleSortOrder}>
          Sort
        </button>
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
