import React from "react";
import "./Alert.css";

const Alert = ({ variant = "info", title, message, onClose }) => {
  return (
    <div className={`alert alert-${variant}`}>
      <div className="alert-content">
        {title && <strong className="alert-title">{title}</strong>}
        {message && <p className="alert-message">{message}</p>}
      </div>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
