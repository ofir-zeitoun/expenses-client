import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./add-expense-item.css";

const AddExpenseItem = () => {
  return (
    <div className="add-expense-item">
      <div className="expense-icon-placeholder"></div>
      <div className="expense-details-placeholder">
        <div className="placeholder-line left"></div>
      </div>
      <div className="empty-placeholder"></div>
      <div className="expense-details-placeholder">
        <div className="placeholder-line right"></div>
        <div className="placeholder-line right small"></div>
      </div>
      <div className="add-expense-button-container">
        <Button
          type="primary"
          style={{
            backgroundColor: "var(--icon-muted-secondary)",
            color: "var(--background-primary)",
          }}
          shape="circle"
          icon={<PlusOutlined />}
        ></Button>
      </div>
    </div>
  );
};

export default AddExpenseItem;
