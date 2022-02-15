import React, { useState, MouseEvent } from "react";
import styled from "styled-components";

export enum ButtonType {
  Number,
  Operation,
}

type Props = {
  handleDisplay: (label: string) => any;
  display?: string;
  type?: ButtonType;
  label: string;
  position?: [x: number, y: number];
  width?: number;
  height?: number;
};
const StyledButton = styled.button`
  background: #727171;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  color: #fff;
`;

const Button: React.FC<Props> = ({
  handleDisplay,
  display,
  label,
  position,
  width,
  height,
  type = ButtonType.Operation,
}) => {
  const [inputValue, setInputValue] = useState(label);

  if (display) {
    display = inputValue;
  }

  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[1] + 1;
  }
  if (width) {
    styles.gridColumnEnd = `span ${width}`;
  }
  if (height) {
    styles.gridRowEnd = `span ${height}`;
  }
  if (type === ButtonType.Number) {
    styles.color = "#000";
    styles.background = "#e48900";
  }

  return (
    <StyledButton onClick={() => handleDisplay(label)} style={styles}>
      {label}
    </StyledButton>
  );
};

export default Button;
