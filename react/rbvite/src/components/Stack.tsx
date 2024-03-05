import { HTMLAttributes, PropsWithChildren } from "react";
import { styled } from "styled-components";

// export const VStack = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// export const HStack = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  rotated?: boolean;
  
}

export const VStack = (props: PropsWithChildren<StackProps>) => {
  const { children, className, rotated, ...attributes } = props;
  return (
    <div
      {...attributes}
      className={`flex flex-${rotated ? "row" : "col"} items-center gap-1 ${className}`}
    >
      {children}
    </div>
  );
};
export const HStack = (props: PropsWithChildren<StackProps>) =>
  VStack({ ...props, rotated: !props.rotated });
