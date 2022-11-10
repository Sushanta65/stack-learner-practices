import React from 'react';

const Operation = ({operator, handleOperation}) => {
    return (
        <div>
            <button onClick={() => handleOperation(operator)}>{operator}</button>
        </div>
    );
};

export default Operation;