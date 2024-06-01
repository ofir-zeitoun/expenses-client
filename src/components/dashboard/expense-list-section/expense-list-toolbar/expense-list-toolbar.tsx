import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Input, Form } from "antd";
import "./expense-list-toolbar.css";
import { TabProps, ExpenseListToolbarProps } from "../../../../@types/toolbar-props";

const Tab = ({ label, onClick, isActive }: TabProps) => (
  <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

const ExpenseListToolbar = ({
  toggleSortOrder,
  onAddList,
}: ExpenseListToolbarProps) => {
  const [activeTab, setActiveTab] = useState<string>("Groups");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [form] = Form.useForm();

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    console.log(`Active tab is now: ${label}`);
  };

  const handleAddList = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onAddList(values.name);
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <>
      <header className="expense-list-toolbar">
        <nav className="tabs">
          {["Personal", "Groups"].map((tabLabel) => (
            <Tab
              key={tabLabel}
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
          <div
            className="add-list-button"
            onClick={() => setIsModalVisible(true)}
          >
            <PlusOutlined /> Add List
          </div>
        </div>
      </header>

      <Modal
        title="Add New List"
        visible={isModalVisible}
        onOk={handleAddList}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical" name="add_list_form">
          <Form.Item
            name="name"
            label="List Name"
            rules={[
              { required: true, message: "Please enter the name of the list" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ExpenseListToolbar;
