import React from 'react';
import { useDrop } from 'react-dnd';
import Bug from '../Bug/Bug';

const Column = ({ data, columnName, title, refetch }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: () => ({ columnName }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <>
      <h4 className="title">{title}</h4>
      <div className="new column" ref={drop} style={{ backgroundColor: isOver ? 'red' : 'white' }}>
        {data.bugs
          .filter((bug) => bug.status === columnName)
          .map((bug, i) => (
            <Bug data={bug} key={i} refetch={refetch} />
          ))}
      </div>
    </>
  );
};

export default Column;
