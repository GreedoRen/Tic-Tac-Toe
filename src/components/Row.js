import React from 'react';
import Box from './Box';


const Row = ({
  boxes}) => (
  <div className='Row'>
    {boxes.map((box, index) => (
      <Box />
    ))}
  </div>
);

export default Row;
