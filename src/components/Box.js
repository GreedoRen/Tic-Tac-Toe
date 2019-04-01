import React from 'react'


const Box = ({
  columnIndex,
  onClick,
  rowIndex,
  value,
}) => {
 
  const indexes = { columnIndex, rowIndex };
  return (
    <div
      className=''Box
      onClick={() => {
        if (!value) {
          onClick(indexes)
        }
      }}
    >
      {value}
    </div>
  )
};

export default Box;
