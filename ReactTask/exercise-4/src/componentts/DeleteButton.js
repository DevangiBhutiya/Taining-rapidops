// DeleteButton.js
import React from "react";
import { EuiButtonIcon } from "@elastic/eui";

const DeleteButton = ({ onDelete }) => {
  return (
    <EuiButtonIcon
      iconType="trash"
      color="danger"
      aria-label="Delete"
      onClick={onDelete}
    />
  );
};

export default DeleteButton;
