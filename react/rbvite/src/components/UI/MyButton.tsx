import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:string;
  label?:string;
}

export const MyButton = (props: PropsWithChildren<ButtonProps>) => {
  const { label, color,children, className, ...attributes } = props;
  return (
    <button
      {...attributes}
      className={`${color} text-white bg-gray-400 font-semibold enabled:font-extrabold rounded-md py-1 px-4 transition-all duration-300 ${className}`}
    >
      {label}
    </button>
  );
};
