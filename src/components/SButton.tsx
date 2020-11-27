import React from "react";
interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const SButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="s-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default SButton;
