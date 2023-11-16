import HomeNavBar from '@/components/nav/HomeNavBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventory Management',
  description: 'Inventory management tutorial',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <main className=" min-h-screen w-full bg-slate-50 text-slate-900">
        <HomeNavBar />
        {children}
      </main>
    </div>
  )
}
