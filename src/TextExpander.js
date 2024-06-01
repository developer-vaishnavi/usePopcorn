import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 20,
  expandButtonText = "Show text",
  collapseButtonText = "Collapse text",
  buttonColor = "green",
  expanded = false,
  children,
  className,
}) {
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((e) => !e)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
