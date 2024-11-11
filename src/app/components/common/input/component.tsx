import React from "react";

export type InputProps = {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="custom shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
