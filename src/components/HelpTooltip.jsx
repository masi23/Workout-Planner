import { useState } from "react";

const HelpTooltip = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(!open);
    event.target.focus();
  };
  const handleBlur = (event) => {
    setOpen(false);
  };
  return (
    <div className="tooltip-wrapper">
      <button
        className="help-tooltip-btn"
        onClick={(event) => handleClick(event)}
        onBlur={(event) => handleBlur(event)}
      >
        ?
      </button>
      {open && <div className="tooltip-popup">{text}</div>}
    </div>
  );
};

export default HelpTooltip;
