import Heading from '@/components/dashboard/Heading'
import Navbar from '@/components/dashboard/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
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
      <Sidebar />
      <main className="ml-60 min-h-screen w-full bg-slate-50 text-slate-900">
        <Navbar />
        {children}
      </main>
    </div>
  )
}
