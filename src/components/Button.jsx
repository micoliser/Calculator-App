import React from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

function Button({ value, id, click }) {
  return (
    <div
      className="button"
      id={id}
      onClick={() => {
        return click(value);
      }}
    >
      {value === "delete" ? <BackspaceIcon /> : value}
    </div>
  );
}

export default Button;
