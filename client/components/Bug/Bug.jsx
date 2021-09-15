import React from 'react';
import { useDrag } from 'react-dnd';
import './Bug.scss';

const Bug = ({ data }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { data },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log('ITEM IS', item);
      console.log('DROP RESULT IS', dropResult.columnName);
      alert('DRAG AND DROP WORKED.');
      // Make API call with ID of bug, and type of column.
      // Which updates the status of the bug with that ID.
      //
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div className="bug-card" ref={drag}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Bug;

//collectdefines a collector function: this is basically a way to transform state from the drag-and-drop system into usable props for your components.
