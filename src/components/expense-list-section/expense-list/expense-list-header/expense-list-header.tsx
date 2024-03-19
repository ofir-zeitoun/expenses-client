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
}: {
  listName: string;
  expenseTotal: string;
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
      style: { color: "red" },
      onClick: () => console.log("test logout"),
    },
  ];

  return (
    <div className="expense-list-header">
      <h2 className="list-name">{listName || "List"}</h2>
      <div className="list-header-actions">
        <div className="total-amount">{expenseTotal + "$" || "350.00$"}</div>
        {/* TODO: */}
        {/* <button className="filter-button transparent">Filter</button> */}
        <button className="sort-button">Sort</button>
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
