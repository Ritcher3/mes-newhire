import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors: {
    [key: string]: FieldError | undefined;
  };
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, name, register, errors, label }) => {
  return (
    <div className={`field ${errors[name] ? 'error' : ''}`}>
      <label className="label">{label}</label>
      <ul className="checkboxes">
        {options.map((option) => (
          <li className="checkbox" key={option.value}>
            <input
              className="checkbox-input"
              id={`${name}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              {...register(name, { required: false})}
            />
            <label className="checkbox-label" htmlFor={`${name}-${option.value}`}>
              {option.label}
            </label>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default CheckboxGroup;