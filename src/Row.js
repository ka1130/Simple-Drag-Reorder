import styled from 'styled-components';

const StyledRow = styled.div`
  border: 1px solid black;
  margin: 0.5rem auto;
  width: 300px;
  padding: 0.5rem;
`;

const Row = ({ id, text, handleDrag, handleDrop }) => {
  return (
    <StyledRow
      id={id}
      draggable={true}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
    >
      {text}
    </StyledRow>
  );
};

export default Row;
