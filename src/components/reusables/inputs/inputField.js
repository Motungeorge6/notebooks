import React from 'react';

const InputField = ({ type, id, name, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded mb-2 w-full h-[55px] p-5"
      />
    </div>
  );
};

export default InputField;
