'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TodosPage() {
  const [userId, setUserId] = useState<number>(0);
  return (
    <div className='w-full flex flex-row justify-center'>
      <input
        className='border border-black mb-2'
        type='number'
        value={userId}
        onChange={(e) => setUserId(+e.currentTarget.value)}
      />
      <Link href={`todos2/todo/${userId}`}>go</Link>
    </div>
  );
}
