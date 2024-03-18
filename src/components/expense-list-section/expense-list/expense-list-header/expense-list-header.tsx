import React from "react";
import { Dropdown, Menu, Button } from "antd";
import {
  EllipsisOutlined,
  UserOutlined,
  SettingOutlined,
  DeleteFilled,
  MoreOutlined,
} from "@ant-design/icons";
import "./expense-list-header.css";

export const ExpenseListHeader = ({
  listName,
  totalAmount,
}: {
  listName: string;
  totalAmount: string;
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
        <div className="total-amount">{totalAmount || "350.00$"}</div>
        <button className="filter-button">Filter</button>
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
