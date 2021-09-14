import React from 'react';

const Board = () => {
  return (
    <div className='board'>
      <div className='fields'>
        <h4 className='title'>New</h4>
        <div className='new column'>
          New
        </div>
      </div>
      <div className='fields'>
        <h4 className='title'>In-Progress</h4>
        <div className='inprogress column'>
          In-progress
        </div>
      </div>
      <div className='fields'>
        <h4 className='title'>Review</h4>
        <div className='review column'>
        Review
        </div>
      </div>
      <div className='fields'>
        <h4 className='title'>Done</h4>
        <div className='done column'>
         Done
        </div>
      </div>
    </div>
  )
}

export default Board;