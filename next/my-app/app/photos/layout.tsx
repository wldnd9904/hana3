import { ReactNode } from 'react';

export default function TodosLayout({
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
