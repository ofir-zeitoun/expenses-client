import React from 'react';

interface AlertPopupProps {
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ExpenseAlertPopup: React.FC<AlertPopupProps> = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p className="popup-message">{message}</p>
        <div className="popup-buttons">
          <button className="popup-button confirmation" onClick={onConfirm}>Yes</button>
          <button className="popup-button cancellation" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseAlertPopup;
