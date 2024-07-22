import styled from "styled-components";

const StyledMainButton = styled.button`
  border-radius: 8px;
  color: #fff;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #c141f8;
  padding: 12px 20px;
  width: 100%;

  &:hover {
    background: #8c07c5;
  }
`;

// eslint-disable-next-line react/prop-types
function MainButton({ children, id, onClick }) {
  return (
    <StyledMainButton
      id={id}
      onClick={onClick}
      className="bg-gradient-button font-sans "
    >
      {children}
    </StyledMainButton>
  );
}

export default MainButton;
