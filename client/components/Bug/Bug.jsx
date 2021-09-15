import React from 'react';
import { useDrag } from 'react-dnd';
import './Bug.scss';
import { gql, useMutation } from '@apollo/client';

const UPDATE_BUG_STATUS = gql`
  mutation UpdateBug($updateBugStatus: updateBugInput) {
    updateBug(input: $updateBugStatus) {
      id
      status
    }
  }
`;

function Bug({ data, refetch }) {
  const [updateBug, { __, loading, error }] = useMutation(UPDATE_BUG_STATUS);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { data },
    end: async (item, monitor) => {
      const dropResult = monitor.getDropResult();
      try {
        await updateBug({
          variables: {
            updateBugStatus: {
              id: item.data.id,
              status: dropResult.columnName,
            },
          },
        });
        refetch();
      } catch (err) {
        console.error(err);
      }
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
}

export default Bug;
