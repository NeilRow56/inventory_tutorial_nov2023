import Heading from '@/components/dashboard/Heading'
import Navbar from '@/components/dashboard/Navbar'
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
      <div className="min-h-screen w-56 bg-slate-900 text-slate-50">
        Sidebar
      </div>
      <main className="min-h-screen w-full bg-slate-50 text-slate-900">
        <Navbar />
        {children}
      </main>
    </div>
  )
}
