import { useState } from "react";
import { StyledButton } from "./button.styled";

export function CounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <StyledButton onClick={handleClick}>{count}</StyledButton>;
}
