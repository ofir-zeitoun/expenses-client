import {
  UserOutlined,
  SettingOutlined,
  DeleteFilled,
  MoreOutlined,
} from "@ant-design/icons";
import "./expense-list-header.css";
import { Dropdown } from "../../../../shared/dropdown";

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
      className: "menu-Remove",
      onClick: () => console.log("test logout"),
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
            items={items}
            placement="left"
            onChange={() => { }}
          >
            <MoreOutlined />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
