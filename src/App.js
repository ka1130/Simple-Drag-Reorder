import { useState } from 'react';
import Row from './Row';
import './App.css';

const initRows = [
  { id: '1', text: '1 Hello', order: 1 },
  { id: '2', text: '2 Lorem', order: 2 },
  { id: '3', text: '3 Ipsum', order: 3 },
  { id: '4', text: '4 Darkness', order: 4 },
  { id: '5', text: '5 My Old Friend', order: 5 },
  { id: '6', text: '6 Blah blah', order: 6 },
];

function App() {
  const [dragId, setDragId] = useState();
  const [rows, setRows] = useState(initRows);

  const handleDrag = (e) => {
    setDragId(e.currentTarget.id);
  };

  const handleDrop = (e) => {
    const dragRow = rows.find((row) => row.id === dragId);
    const dropRow = rows.find((row) => row.id === e.currentTarget.id);

    const dragRowOrder = dragRow.order;
    const dropRowOrder = dropRow.order;

    const newRowState = rows.map((row) => {
      if (row.id === dragId) {
        row.order = dropRowOrder;
      }
      if (row.id === e.currentTarget.id) {
        row.order = dragRowOrder;
      }
      return row;
    });

    setRows(newRowState);
  };

  return (
    <div className="App">
      {rows
        .sort((a, b) => a.order - b.order)
        .map((row) => (
          <Row
            key={row.id}
            id={row.id}
            text={row.text}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        ))}
    </div>
  );
}

export default App;
