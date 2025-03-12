/*
 * @Author: qinjinyuan
 * @Date: 2025-03-06 11:10:49
 * @LastEditTime: 2025-03-06 16:41:43
 * @FilePath: \my-app-one\src\app\dashboard\layout.tsx
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'dashboard'
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
