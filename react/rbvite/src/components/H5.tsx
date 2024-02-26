import { forwardRef } from "react";

export const H5 = forwardRef(
  ({ ss }: { ss: string }, ref: React.LegacyRef<HTMLInputElement>) => {
    return (
      <div id="H5">
        <span className="title">H5</span>
        <input ref={ref}></input>
      </div>
    );
  }
);
H5.displayName = "H5";
