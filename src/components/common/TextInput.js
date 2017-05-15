import React, { PropTypes } from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
    let wrapperClasses = 'form-group';
    if(error && error.length > 0){
        wrapperClasses += 'has-error';
    }
    return(
        <div className={wrapperClasses} >
            <label htmlFor={name}>{label}</label>
            <div className='field'>
                <input 
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="alert alert-danger">{error}</div> }
            </div>
        </div>
    );
};

export default TextInput;