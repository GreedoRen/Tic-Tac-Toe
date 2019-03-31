import React from 'react';
import Box from './Box';

const Row = ({boxes}) => (
    <div>
        {boxes.map((row, index) => (
            <Box boxed={row}/>
        ))}
    </div>
);

export default Row;