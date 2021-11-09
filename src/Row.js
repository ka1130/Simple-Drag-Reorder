import styled from 'styled-components';
import DragSrc from './assets/drag.png';

const StyledRow = styled.div`
  border: 1px solid black;
  margin: 0.5rem auto;
  width: 300px;
  padding: 0.5rem;
  display: flex;
  align-items: center;

  .dragIcon {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    margin-right: 2rem;
    background: url(${DragSrc}) no-repeat;
    background-size: contain;
    cursor: pointer;
  }
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
      <span className="dragIcon" />
      <span>{text}</span>
    </StyledRow>
  );
};

export default Row;
