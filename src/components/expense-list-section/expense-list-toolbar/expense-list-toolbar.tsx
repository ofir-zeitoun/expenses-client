import React, { useState } from "react";
import "./expense-list-toolbar.css";

interface TabProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

const Tab: React.FC<TabProps> = ({ label, onClick, isActive }) => (
  <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

interface ExpenseListToolbarProps {
  toggleSortOrder: () => void;
}

const ExpenseListToolbar = ({ toggleSortOrder }: ExpenseListToolbarProps) => {
  const [activeTab, setActiveTab] = useState<string>("Groups");

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    console.log(`Active tab is now: ${label}`);
  };

  return (
    <header className="expense-list-toolbar">
      <nav className="tabs">
        {["Personal", "Groups"].map((tabLabel, index) => (
          <Tab
            key={index}
            label={tabLabel}
            isActive={activeTab === tabLabel}
            onClick={() => handleTabClick(tabLabel)}
          />
        ))}
      </nav>

      <div className="toolbar-action">
        <button className="toolbar-sort" onClick={toggleSortOrder}>
          Sort
        </button>
        <div className="add-list-button">
          <span>+</span> Add List
        </div>
      </div>
    </header>
  );
};

export default ExpenseListToolbar;
