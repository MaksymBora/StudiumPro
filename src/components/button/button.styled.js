import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 24px;
  background-color: #1a73e8;
  color: white;
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  min-width: 60px;
  text-align: center;

  &:hover {
    background-color: #1557b0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.3);
  }
`;
