import React from 'react';

const InputField = ({name, type, placeholder, value, onChange}) => {
    return (
        <div>
            <input onChange={onChange} type={type} name={name} value={value} placeholder={placeholder} />
        </div>
    );
};

export default InputField;