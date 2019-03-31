import React from 'react';
import Row from './Row';

const Board = ({rows}) => (
    <div>
        {rows.map((row, index) => (
            <Row boxed={row}/>
        ))}
    </div>
);

export default Board;