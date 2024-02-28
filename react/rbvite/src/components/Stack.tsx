import { HTMLAttributes, PropsWithChildren } from "react";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  rotated?: boolean;
}

export const HStack = (props: PropsWithChildren<StackProps>) => {
  const { children, className, rotated, ...attributes } = props;
  return (
    <div
      {...attributes}
      className={`flex flex-${rotated ? "col" : "row"} items-center gap-1 ${className}`}
    >
      {children}
    </div>
  );
};
export const VStack = (props: PropsWithChildren<StackProps>) =>
  HStack({ ...props, rotated: !props.rotated });
