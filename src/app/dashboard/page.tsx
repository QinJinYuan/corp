/*
 * @Author: qinjinyuan
 * @Date: 2025-03-06 11:10:49
 * @LastEditTime: 2025-03-06 15:57:34
 * @FilePath: \my-app-one\src\app\page.tsx
 */
"use client"
import { useState } from 'react';

import { usePathname } from 'next/navigation';

export default function Home() {
  const [count, setCount] = useState(0)
  const pathname= usePathname()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {count}
      {pathname}
      <button onClick={() => setCount(count + 3)}>add</button>
    </div>
  )
}
