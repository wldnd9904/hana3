import { ReactNode } from 'react';

export default function Photos2Layout({
  photo,
  children,
}: {
  photo: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      {children}
      <div>{photo}</div>
    </div>
  );
}
